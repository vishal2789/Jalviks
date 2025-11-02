import React from "react";
import { Text, View } from "react-native";
import Logo from '../../assets/images/logo.svg';
import StaticHeader from "../components/StaticHeader";

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <StaticHeader title="About" />

      {/* Content */}
      <View className="flex-1 items-center justify-center px-16">
        {/* Logo */}
        <Logo width={300} height={150} />

        {/* Version Info */}
        <Text className="text-gray-800 text-2xl font-nunitosans-semibold my-10">
          Version: <Text className="font-nunitosans-bold">1.0.5</Text>
        </Text>

        {/* Description */}
        <Text className="text-gray-500 text-center text-xl leading-8 font-nunitosans-regular">
          This is dummy text and will be replaced with original content.
        </Text>
      </View>
    </View>
  );
}
