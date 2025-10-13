import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import DatePickerField from "../components/DatePickerField";
import GradientButton from "../components/GradientButton";
import WeeklyIrrigationSelector from "../components/WeeklyIrrigationSelector";

const AddStep5 = () => {
    const days = [1, 2, 3, 4, 5, 6, 7];
    const [irrigationDate, setIrrigationDate] = useState(null);
    const [fertilizerDate, setFertilizerDate] = useState(null);

    const [selectedDay, setSelectedDay] = useState(1);

  return (
        <View className="flex-1 bg-white">
            <ImageBackground
                source={require("../../assets/images/FarmManageBg.png")}
                className="flex-1 pt-10"
                resizeMode="cover"
            >
                <TopBar currentStep={5} totalSteps={8} />
                <View className="flex-1 px-7 py-6">
                    <AddScrTitle title="Crop Irrigation & Fertilization" description="" />
                    <ScrollView
                    className="flex-1 py-5"
                    contentContainerStyle={{ paddingBottom: 40 }}
                    >

                        <DatePickerField
                            label="Last Irrigation Date"
                            date={irrigationDate}
                            setDate={setIrrigationDate}
                        />

                        <WeeklyIrrigationSelector
                            selectedDay={selectedDay}
                            onSelectDay={setSelectedDay}
                            days= {days}
                        />

                        <DatePickerField
                            label="Last Fertilizer Date"
                            date={fertilizerDate}
                            setDate={setFertilizerDate}
                        />
                    </ScrollView>
                </View>
                {/* Continue Button */}
                <View className="mb-10 mx-7">
                    <GradientButton
                        className='w-full'
                        fontClassName='font-nunitosans-bold text-2xl text-white'
                        text="Continue"
                        onPress={() => router.push("/farm/AddStep6")}
                        colors={['#12602F', '#6FAC2C']}
                        start={[0, 0]}
                        end={[0, 1]}
                    />
                </View>
        </ImageBackground>
    </View>
  );
};

export default AddStep5;
