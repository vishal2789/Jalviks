import * as Clipboard from "expo-clipboard";
import * as Sharing from "expo-sharing";
import React from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import GradientButton from "../components/GradientButton";
import StaticHeader from "../components/StaticHeader";

export default function ReferralScreen() {
  const referralCode = "LOREM2331";

  // Copy code to clipboard
  const handleCopyCode = () => {
    Clipboard.setStringAsync(referralCode);
    Alert.alert("Copied!", "Your referral code has been copied to clipboard.");
  };

  // Share referral code
  const handleShare = async () => {
    const message = `Hey! Use my referral code ${referralCode} and enjoy 10% off on your next training session!`;
    try {
      await Sharing.shareAsync(null, { dialogTitle: "Share Referral Code", message });
    } catch (error) {
      Alert.alert("Error", "Unable to open share dialog.");
    }
  };

  return (
    <View className="flex-1 bg-[#F7FAFE]">
      <StaticHeader title="Referral" />

      <ScrollView
        className="px-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{  paddingBottom: 40 }}
      >
        {/* Image Illustration */}
        <View className="items-center mb-6">
          <Image
            source={require("../../assets/images/refer-illustration.png")}
            className="w-64 h-56"
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="text-xl text-center text-black font-nunitosans-bold mt-4">
          Refer a Friend
        </Text>

        {/* Description */}
        <Text className="text-center text-gray-600 text-lg leading-6 font-nunitosans-regular mt-2 px-4">
          Share with friends and enjoy 10% off on your next training session when
          they use your referral code and signup successfully!
        </Text>

        {/* Referral Code Box */}
        <View className="flex-row mx-10 justify-between items-center border border-dashed border-[#B3BDC7] rounded-xl mt-10 py-3 px-4 bg-[#E2F5FF]">
          <View>
            <Text className="text-gray-500 text-lg font-nunitosans-regular">
              Your referral code
            </Text>
            <Text className="text-[#1587BE] text-2xl font-nunitosans-bold mt-1">
              {referralCode}
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleCopyCode}
            className="border-l border-black px-5 text-center"
          >
            <Text className="text-black font-nunitosans-bold text-xl text-center">
              Copy{"\n"}Code
            </Text>
          </TouchableOpacity>
        </View>

        {/* Share Button */}
        <View className="mt-16">
          <GradientButton
            className="w-full"
            fontClassName="font-nunitosans-bold text-lg text-white"
            text="Share"
            onPress={handleShare}
            colors={["#12602F", "#6FAC2C"]}
            start={[0, 0]}
            end={[0, 1]}
          />
        </View>
      </ScrollView>
    </View>
  );
}
