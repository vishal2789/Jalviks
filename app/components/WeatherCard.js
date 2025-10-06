import { Entypo } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";


export default function WeatherCard() {
  return (
    <View className="rounded-3xl mx-8 overflow-hidden">
        <BlurView
        intensity={40}      // adjust blur strength (0–100)
        tint="dark"        // "light" | "dark" | "default"
        className="rounded-2xl overflow-hidden"
        >
            <LinearGradient
            colors={["#09BFF2", "rgba(255, 255, 255, 0.20)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className=" flex-row items-center opacity-50"
            >
            <View className="flex-row items-center p-5 pr-16">
                {/* Left Column - Weather Icon */}
                <View className="w-[30%] justify-center items-center mr-4">
                    <Image source={require('../../assets/images/cludyIcon.png')} className="w-40" resizeMode="contain" />
                </View>

                {/* Right Column */}
                <View className="">
                    {/* Row 1: Calendar + Date */}
                    <View className="flex-row items-center mb-6">
                        <Image source={require('../../assets/images/icon_date.png')} className="" resizeMode="contain" />
                        <Text className="ml-2 text-lg text-[#4B4B4B] font-nunito-regular">Today, 5th Aug 2025</Text>
                    </View>

                    {/* Row 2: Temperature + H/L */}
                    <View className="flex-row justify-between mb-6">
                        {/* Temp + Condition */}
                        <View className="items-start mt-1">
                            <View className="flex-row items-start">
                                <Text className="text-6xl font-nunito-extrabold text-[#12602F] pt-5">19</Text>
                                <Text className="text-md font-nunito-light text-[#12602F] pl-2">°C</Text>
                            </View>
                            <Text className="text-xl text-[#303345] font-nunito-regular">Rainy</Text>
                        </View>

                        {/* High / Low */}
                        <View className="mt-5 text-left w-[35%]">
                            <Text className="text-lg font-nunito-semibold text-[#303345] mb-2">H : 33°</Text>
                            <Text className="text-lg font-nunito-semibold text-[#303345]">L : 23°</Text>
                        </View>
                    </View>

                    {/* Row 3: Location */}
                    <View className="flex-row items-center">
                        <Entypo name="location-pin" size={24} color="#12602F" />
                        <Text className="ml-1 text-lg text-[#777777] font-nunito-regular">
                            abc area, Satara, Maharashtra
                        </Text>
                    </View>
                </View>
                </View>
            </LinearGradient>
        </BlurView>
    </View>
  );
}
