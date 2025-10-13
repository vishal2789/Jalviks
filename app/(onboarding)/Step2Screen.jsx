import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import GradientButton from '../components/GradientButton';

const { height } = Dimensions.get('window');

export default function Step2Screen() {
  const router = useRouter();
  
  // Use height breakpoints for different devices
  const isSmallDevice = height < 700;

  return (
    <View className="flex-1 bg-white">      
      {/* Image Container - Responsive height */}
      <View className="relative h-[56%] min-h-[350px] max-h-[550px]">
        <Image
          source={require('../../assets/images/screen2Img.png')}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Decorative Elements - Percentage based */}
      <Image
        source={require('../../assets/images/stepBgRgt.png')}
        className="absolute bottom-0 right-0 w-[50%] h-[38%] z-0"
        resizeMode="cover"
        pointerEvents="none"
      />
      <Image
        source={require('../../assets/images/stepBgLft.png')}
        className="absolute bottom-[8%] left-0 w-[60%] h-[38%] z-0"
        resizeMode="cover"
        pointerEvents="none"
      />

      {/* Content Container - Responsive spacing */}
      <View className={`flex-1 px-6 ${isSmallDevice ? 'pt-8' : 'pt-16'} items-center relative z-10`}>
        {/* Title - Responsive text size */}
        <View className={isSmallDevice ? "mb-3" : "mb-5"}>
          <Text 
            className={`font-nunito-extrabold ${isSmallDevice ? 'text-2xl' : 'text-3xl'} text-black opacity-85 text-center leading-tight`}
          >
            Smart Forecasts for{'\n'}
            <Text className={`text-[#0077B6] ${isSmallDevice ? 'text-2xl' : 'text-3xl'} font-nunito-extrabold`}>
              Smarter Farming
            </Text>
          </Text>
        </View>
        
        {/* Description - Responsive text and spacing */}
        <Text 
          className={`flex-1 ${isSmallDevice ? 'text-base' : 'text-xl'} text-gray-500 font-nunito-light text-center ${isSmallDevice ? 'mb-8' : 'mb-16'} px-2`}
        >
          This is dummy text will be replaced
        </Text>
        
        {/* Pagination Dots - Scaled proportionally */}
        <View className={`flex-row items-center justify-center ${isSmallDevice ? 'mb-4' : 'mb-5'}`}>
          <View className="w-4 h-2 rounded-full bg-[#90E0EF] mx-1" />
          <View className="w-7 h-2 rounded-full bg-[#0077B6] mx-1" />
          <View className="w-4 h-2 rounded-full bg-[#90E0EF] mx-1" />
        </View>
        
        {/* Continue Button - Full width with responsive margin */}
        <View className="w-full px-2">
          <GradientButton
            className={isSmallDevice ? 'mb-4' : 'mb-5'}
            text="Continue"
            onPress={() => router.push("/Step3Screen")}
            colors={['#12602F', '#6FAC2C']}
            start={[0, 0]}
            end={[0, 1]}
          />
        </View>
      </View>
    </View>
  );
}