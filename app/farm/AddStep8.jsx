import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import DatePickerField from "../components/DatePickerField";
import GradientButton from "../components/GradientButton";
import InputComponant from "../components/InputComponant";

const AddStep8 = () => {
  const router = useRouter();

  const [previousCrop, setPreviousCrop] = useState("");
  const [harvestDate, setHarvestDate] = useState(null);
  const [cropYield, setCropYield] = useState("");
  const [selectedDiseases, setSelectedDiseases] = useState(["Powdery Mildew","Rust","Anthracnose"]);

  const diseases = [
    "Powdery Mildew",
    "Leaf Spot",
    "Rust",
    "Blight",
    "Root Rot",
    "Anthracnose",
    "Fusarium Wilt",
  ];

  const toggleDisease = (disease) => {
    if (selectedDiseases.includes(disease)) {
      setSelectedDiseases(selectedDiseases.filter((item) => item !== disease));
    } else {
      setSelectedDiseases([...selectedDiseases, disease]);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/FarmManageBg.png")}
      className="flex-1 pt-10"
      resizeMode="cover"
    >
      {/* Progress Bar */}
    <View className="mt-3">
    <TopBar currentStep={8} totalSteps={8} />
    </View>
      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Title and Description */}
          <View className="px-6 mt-5">
            <AddScrTitle
              title="Previous Crop Details"
              description="Tell us about your last crop (this helps us validate your current crop dates)"
            />
          </View>

          {/* Select Previous Crop */}
          <View className="mx-6 mt-6 bg-white border border-gray-200 rounded-2xl p-4 flex-row items-center justify-between"
          style={{
                elevation: 3,
                shadowColor: "#379ADC",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
          >
            <View className="flex-row items-center">
              <Ionicons name="leaf-outline" size={22} color="#0077B6" />
              <Text className="ml-3 text-[#161616]/70 font-nunitosans-regular text-lg">
                {previousCrop || "Select previous Crop"}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={20} color="#999" />
          </View>

          {/* Harvesting Date */}
          <View className="mx-6 mt-6">
            <DatePickerField
              label="Harvesting Date"
              date={harvestDate}
              setDate={setHarvestDate}
            />
          </View>

          {/* Total Crop Yield */}
          <View className="mx-6 relative flex-row items-end justify-between">
            <InputComponant
              label="Total Crop Yield"
              value={cropYield}
              placeholder="Enter in Tons"
              onChangeText={setCropYield}
              editable={true}
              className="flex-1 w-72"
            />
            <Text className="text-[#0077B6] font-nunitosans-semibold pb-10 pl-4 flex-1">
              Tons/HA
            </Text>
          </View>

          {/* Previous Crop Disease */}
          <View className="mx-6 mt-6 mb-4">
            <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-3">
              Previous Crop Disease 
            </Text>
            <View className="flex-row flex-wrap justify-between bg-white rounded-2xl border border-gray-200 p-4"
            style={{
                elevation: 3,
                shadowColor: "#379ADC",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
            > 
              {diseases.map((disease, index) => {
                const selected = selectedDiseases.includes(disease);
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => toggleDisease(disease)}
                    className={`px-4 py-2 rounded-xl mb-3 ${
                      selected ? "bg-[#0077B6]" : "bg-[#F5F5F5]"
                    }`}
                  >
                    <Text
                      className={`text-center text-xl font-nunitosans-regular ${
                        selected ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {disease}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>

        {/* Add Farm Button */}
        <View className="absolute bottom-0 left-0 right-0 mb-10 mx-7">
          <GradientButton
            className="w-full"
            fontClassName="font-nunitosans-bold text-2xl text-white"
            text="Add Farm"
            onPress={() => router.push("/farm/Success")}
            colors={["#12602F", "#6FAC2C"]}
            start={[0, 0]}
            end={[0, 1]}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default AddStep8;
