import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import GradientButton from "../components/GradientButton";
import StaticHeader from "../components/StaticHeader";

export default function AppSettingsScreen() {
  const navigation = useNavigation();
  const [unit, setUnit] = useState("Hectares");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <StaticHeader title="App Settings" />
      
      {/* App Management */}
      <View className="px-10">
        <Text className="text-xl font-nunitosans-semibold mb-8">App Management</Text>

        {/* Units Toggle */}
        <View className="mb-6 flex-row items-center justify-between">
            <Text className="text-md font-nunitosans-regular text-[#4B5563]">Units</Text>
            <View className="flex-row bg-gray-100 rounded-xl p-1 w-52 mb-5">
            <TouchableOpacity
                className={`flex-1 py-2 rounded-lg ${
                unit === "Hectares" ? "bg-white" : ""
                }`}
                onPress={() => setUnit("Hectares")}
            >
                <Text
                className={`text-center text-sm font-nunitosans-semibold ${
                    unit === "Hectares" ? "text-[#0077B6] font-nunitosans-bold" : "text-gray-500 font-nunitosans-semibold"
                }`}
                >
                Hectares
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className={`flex-1 py-2 rounded-lg ${
                unit === "Acres" ? "bg-white" : ""
                }`}
                onPress={() => setUnit("Acres")}
            >
                <Text
                className={`text-center text-sm  ${
                    unit === "Acres" ? "text-[#0077B6] font-nunitosans-bold" : "text-gray-500 font-nunitosans-semibold"
                }`}
                >
                Acres
                </Text>
            </TouchableOpacity>
            </View>
        </View>

        {/* Dark Mode */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-md font-nunitosans-regular text-[#4B5563]">Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#fff", true: "#0077B6" }}
          />
        </View>

        {/* Country Selector */}
        <TouchableOpacity className="flex-row items-center justify-between py-3">
          <Text className="text-md font-nunitosans-regular text-[#4B5563]">Country</Text>
          <View className="flex-row items-center">
            <Text className="text-md font-nunitosans-semibold text-[#4B5563] mr-1">India</Text>
            <Feather name="chevron-right" size={16} color="#888" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Save Button */}
        <View className="mt-auto mb-20 w-full px-8">
        <GradientButton
            className="w-full"
            fontClassName="font-nunitosans-bold text-xl sm:text-2xl text-white"
            text="Save"
            onPress={() => console.log('Saved')}
            colors={['#12602F', '#6FAC2C']}
            start={[0, 0]}
            end={[0, 1]}
        />
        </View>
    </View>
  );
}
