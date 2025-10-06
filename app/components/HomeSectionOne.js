import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const HomeSectionOne = () => {
  return (
    <View className="rounded-[3rem] overflow-hidden">
        <LinearGradient
        colors={["#005B28", "#6EAD2B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className=""
        >
        <View className="pt-24 pb-10 relative overflow-hidden">
            {/* Background Illustration */}
            <Image
                source={require("../../assets/images/homeSec1Bg.png")} // 👈 replace with your illustration
                className="absolute bottom-0 right-0 w-full h-80"
                resizeMode="cover"
            />
            {/* Top Row: Greeting + Icons */}
            <View className="flex-row justify-between items-center px-10">
                <View>
                    <Text className="text-white font-nunito-regular text-lg opacity-60">Hello, Good Morning</Text>
                    <Text className="text-white font-nunito-bold text-3xl mt-2">Parag K</Text>
                </View>

                <View className="flex-row items-center">
                    {/* Profile Image */}
                    <View className="w-14 h-14 rounded-full bg-white/20 mr-5 overflow-hidden flex items-center justify-center">
                    <Image
                        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
                        className="w-10 h-10 rounded-full opacity-100"
                    />
                    </View>
                    {/* Notification Bell */}
                    <Ionicons name="notifications" size={24} color="white" />
                </View>
            </View>

            {/* Details */}
            <View className="mt-8 space-y-1 flex px-10">
                <Text className="text-white font-nunito-semibold text-2xl mb-3 align-middle flex-row">
                    <Text className="font-medium font-nunito-regular text-xl">Mobile: </Text>9934234911
                </Text>
                <Text className="text-white font-nunito-semibold text-2xl mb-3 align-middle flex-row">
                    <Text className="font-medium font-nunito-regular text-xl">Farms: </Text>4
                </Text>
                <Text className="text-white font-nunito-semibold text-2xl mb-3 align-middle flex-row">
                    <Text className="font-medium font-nunito-regular text-xl">Joined: </Text>20 July 2025
                </Text>
            </View>
        </View>
        </LinearGradient>
    </View>
  );
}

export default HomeSectionOne

const styles = StyleSheet.create({})