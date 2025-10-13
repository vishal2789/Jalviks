import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import CheckboxComponent from "../components/CheckboxComponent";
import DatePickerField from "../components/DatePickerField";
import GradientButton from "../components/GradientButton";

const diseases = [
  { id: 1, name: 'Powdery Mildew', selected: false, image: 'https://images.unsplash.com/photo-1597868165956-03a6827955b1?w=100&h=100&fit=crop' },
  { id: 2, name: 'Leaf Spot', selected: true, image: 'https://images.unsplash.com/photo-1628779238951-c522dd1b0edc?w=100&h=100&fit=crop' },
  { id: 3, name: 'Rust', selected: false, image: 'https://images.unsplash.com/photo-1598966739654-5e9cdc5d2c4d?w=100&h=100&fit=crop' },
  { id: 4, name: 'Blight', selected: true, image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=100&h=100&fit=crop' },
  { id: 5, name: 'Root Rot', selected: true, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop' },
  { id: 6, name: 'Anthracnose', selected: false, image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=100&h=100&fit=crop' },
  { id: 7, name: 'Fusarium Wilt', selected: false, image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=100&h=100&fit=crop' },
  { id: 8, name: 'Bacterial Wilt', selected: false, image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=100&h=100&fit=crop' },
  { id: 9, name: 'Viral Infection', selected: false, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=100&h=100&fit=crop' },
  { id: 10, name: 'None', selected: false, image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=100&h=100&fit=crop' }
];

const AddStep6 = () => {
    const [lastPestiDate, setLastPestiDate] = useState(null);
    const [selectedDiseaseIds, setselectedDiseaseIds] = useState([]);
    const handleSelect = (id) => { 
        if (selectedDiseaseIds.includes(id)) {
        setselectedDiseaseIds(selectedDiseaseIds.filter((itemId) => itemId !== id));
        } else {
        setselectedDiseaseIds([...selectedDiseaseIds, id]);
        }
    };
    const renderItem = ({ item }) => (
        <CheckboxComponent
        item={item}
        isSelected={selectedDiseaseIds.includes(item.id)}
        onSelect={handleSelect}
        />
    );

  return (
        <View className="flex-1 bg-white">
            <ImageBackground
                source={require("../../assets/images/FarmManageBg.png")}
                className="flex-1  pt-10"
                resizeMode="cover"
            >
                <TopBar currentStep={6} totalSteps={8} />
                <View className="flex-1 px-7 py-6">
                    <AddScrTitle title="Crop Pesticide & Diseases" description="" />
                    <DatePickerField
                        label="Last Pesticide Application"
                        date={lastPestiDate}
                        setDate={setLastPestiDate}
                    />

                    <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-2">Current Crop Disease</Text>
                    <FlatList
                        data={diseases}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        extraData={selectedDiseaseIds}
                    />
                    
                </View>
                {/* Continue Button */}
                <View className="mb-10 mx-7">
                    <GradientButton
                        className='w-full'
                        fontClassName='font-nunitosans-bold text-2xl text-white'
                        text="Continue"
                        onPress={() => router.push("/farm/AddStep7")}
                        colors={['#12602F', '#6FAC2C']}
                        start={[0, 0]}
                        end={[0, 1]}
                    />
                </View>
        </ImageBackground>
    </View>
  );
};

export default AddStep6;
