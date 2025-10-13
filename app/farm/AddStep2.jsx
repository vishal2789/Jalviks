import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import GradientButton from "../components/GradientButton";
import RadioComponant from "../components/RadioComponant";

const deviceAccess = [
  { id: 1, name: "Yes"},
  { id: 2, name: "No"},
];

const AddStep2 = () => {
    const [selectedJalDev, setSelectedJalDev] = useState(null);

  return (
        <View className="flex-1 bg-white">
            <ImageBackground
                source={require("../../assets/images/FarmManageBg.png")}
                className="flex-1 pt-10"
                resizeMode="cover"
            >
                <TopBar currentStep={2} totalSteps={8} />
                <View className="flex-1 px-7 py-6">
                    <AddScrTitle title="" description="Please confirm whether you already bought Jalviks device/Sensors" />

                    <Text className="text-[#161616] font-nunitosans-regular text-lg mb-4 mt-10 px-3">Do you have access of Jalviks Device</Text>
                    <FlatList
                        className="px-3"
                        data={deviceAccess}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                        <RadioComponant
                            item={item}
                            isSelected={selectedJalDev === item.id}
                            onSelect={setSelectedJalDev}
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
                        onPress={() => router.push("/farm/AddStep3")}
                        colors={['#12602F', '#6FAC2C']}
                        start={[0, 0]}
                        end={[0, 1]}
                    />
                </View>
        </ImageBackground>
    </View>
  );
};

export default AddStep2;
