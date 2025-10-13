import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, ImageBackground, View } from "react-native";
import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import GradientButton from "../components/GradientButton";
import RadioComponant from "../components/RadioComponant";

const crops = [
  { id: 1, name: "Rice", emoji: "🌾" },
  { id: 2, name: "Grapes", emoji: "🍇" },
  { id: 3, name: "Wheat", emoji: "🌾" },
  { id: 4, name: "Banana", emoji: "🍌" },
  { id: 5, name: "Sugar Cane", emoji: "🌾" },
  { id: 6, name: "Ragi", emoji: "🌾" },
  { id: 7, name: "Pomegranate", emoji: "🍎" },
  { id: 8, name: "Mango", emoji: "🥭" },
];

const AddStep3 = () => {
    const [selectedCrop, setSelectedCrop] = useState(2);

  return (
        <View className="flex-1 bg-white">
            <ImageBackground
                source={require("../../assets/images/FarmManageBg.png")}
                className="flex-1  pt-10"
                resizeMode="cover"
            >
                <TopBar currentStep={3} totalSteps={8} />
                <View className="flex-1 px-7 py-6">
                    <AddScrTitle title="Select Crop" description="Which crop you are currently growing on plot “Farm Name”?" />
                    <FlatList
                        className="px-3"
                        data={crops}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                        <RadioComponant
                            item={item}
                            isSelected={selectedCrop === item.id}
                            onSelect={setSelectedCrop}
                        />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                {/* Continue Button */}
                <View className="mb-10 mx-7">
                    <GradientButton
                        className='w-full'
                        fontClassName='font-nunitosans-bold text-2xl text-white'
                        text="Continue"
                        onPress={() => router.push("/farm/AddStep4")}
                        colors={['#12602F', '#6FAC2C']}
                        start={[0, 0]}
                        end={[0, 1]}
                    />
                </View>
        </ImageBackground>
    </View>
  );
};

export default AddStep3;
