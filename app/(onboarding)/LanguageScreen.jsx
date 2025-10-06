import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradientButton from '../components/GradientButton';

// Define available languages
const languages = [
  {
    code: 'en',
    name: 'English',
    greeting: 'Hi.',
    txt: 'Aa',
  },
  {
    code: 'mr',
    name: 'मराठी',
    greeting: 'नमस्कार',
    txt: 'कख',
  },
];

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const BG = require("../../assets/images/rice-bg.png");

  const router = useRouter();

  // Load saved language on component mount
  useEffect(() => {
    loadSavedLanguage();
  }, []);

  // Function to load saved language from AsyncStorage
  const loadSavedLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        setSelectedLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading saved language:', error);
    }
  };

  // Handle language selection
  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
  };

  // Handle continue button press
  const handleContinue = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem('selectedLanguage', selectedLanguage);

      // Show success message
      Alert.alert(
        'Success',
        `Language saved successfully: ${
          languages.find(lang => lang.code === selectedLanguage)?.name
        }`,
        [{ text: 'OK', onPress: () => router.push('/signup') }]
      );
    } catch (error) {
      console.error('Error saving language:', error);
      Alert.alert('Error', 'Failed to save language selection');
    } finally {
      setIsLoading(false);
    }
  };

  // Render each language card
  const renderLanguageCard = (language) => {
    const isSelected = selectedLanguage === language.code;

    return (
      <View key={language.code} className="relative">
      <TouchableOpacity
        key={language.code}
        style={[
          styles.languageCard,
          isSelected && styles.selectedCard
        ]}
        onPress={() => handleLanguageSelect(language.code)}
        className={`
           relative overflow-hidden rounded-xl p-6 border mb-14 relative flex justify-center opacity-75
          ${isSelected ? 'bg-sky-50 border-sky-200' : 'bg-white border-gray-200'}
        `}
      >
        <View className="flex-row justify-between items-center flex">
          <View className="w-full flex-row space-between items-center ">
            <Text className={`text-xl w-[60%] font-nunito-bold mb-1 ${isSelected ? 'text-[#0077B6]' : 'text-[#0077B6]'}`}>
              {language.name}
            </Text>
            <Text className="text-gray-500 text-base flex-1 text-left">
              {language.greeting}
            </Text>
          </View>
        </View>


        <Text className='absolute right-[-10] top-[50%] text-[#0077B6] opacity-10 text-6xl font-nunito-extrabold'>{language.txt}</Text>
      </TouchableOpacity>
        {isSelected && (
          <View className="absolute w-7 h-7 top-[-8] right-[-5] bg-blue-500 rounded-full p-1 flex items-center justify-center">
            <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <Image
          source={BG}
          style={{
            position: "absolute",
            right: -50,
            bottom: -10,
            width: "70%",
            height: "60%",
            maxHeight: 500,
            zIndex: 0,
          }}
          resizeMode="contain"
      />
      {/* Main Content */}
      <View className="flex-1 px-6 pt-30 relative zindex-10 justify-center">
        {/* Title */}
        <Text className="text-2xl font-nunito-bold text-[#606060] text-center mb-20">
          Choose your language
        </Text>

        {/* Language Options */}
        <View className="mb-8">
          {languages.map(renderLanguageCard)}
        </View>
      </View>

      {/* Continue Button */}
      <View className="px-6 pb-8 pt-4">

        <GradientButton
            style={[
              styles.continueButton,
              isLoading && styles.disabledButton
            ]}
            className="mb-5"
            text="Continue"
            onPress={handleContinue}
            disabled={isLoading}
            colors={["#12602F", "#6FAC2C"]}
            start={[0, 0]}
            end={[0, 1]}
          />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  languageCard: {
    minHeight: 120,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedCard: {
    elevation: 4,
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  continueButton: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  disabledButton: {
    opacity: 0.7,
  },
});
