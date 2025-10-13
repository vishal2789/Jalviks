import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import CropCycleSelector from "../components/CropCycleSelector";
import DatePickerField from "../components/DatePickerField";
import GradientButton from "../components/GradientButton";

const AddStep4 = () => {
    const [plantingDate, setPlantingDate] = useState(null);
    const [harvestDate, setHarvestDate] = useState(null);
    const [selectedCycle, setSelectedCycle] = useState("short");

  return (
        <View className="flex-1 bg-white">
            <ImageBackground
                source={require("../../assets/images/FarmManageBg.png")}
                className="flex-1 pt-10"
                resizeMode="cover"
            >
                <TopBar currentStep={4} totalSteps={8} />
                <View className="flex-1 px-7 py-6">
                    <AddScrTitle title="Current Crop Details" description="" />
                    <ScrollView
                    className="flex-1 py-5"
                    contentContainerStyle={{ paddingBottom: 40 }}
                    >

                        <DatePickerField
                            label="Planting Date"
                            date={plantingDate}
                            setDate={setPlantingDate}
                        />

                        <DatePickerField
                            label="Expected Harvest Date"
                            date={harvestDate}
                            setDate={setHarvestDate}
                        />

                        <CropCycleSelector
                            selectedCycle={selectedCycle}
                            setSelectedCycle={setSelectedCycle}
                        />
                    </ScrollView>
                </View>
                {/* Continue Button */}
                <View className="mb-10 mx-7">
                    <GradientButton
                        className='w-full'
                        fontClassName='font-nunitosans-bold text-2xl text-white'
                        text="Continue"
                        onPress={() => router.push("/farm/AddStep5")}
                        colors={['#12602F', '#6FAC2C']}
                        start={[0, 0]}
                        end={[0, 1]}
                    />
                </View>
        </ImageBackground>
    </View>
  );
};

export default AddStep4;
