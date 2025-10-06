import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import GradientButton from "../components/GradientButton";

export default function OtpScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const BG = require("../../assets/images/rice_loginBg.png");
  const router = useRouter();

  // refs for OTP inputs
  const inputsRef = useRef([]);

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // move to next box
    if (text && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // move back if cleared
    if (!text && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-1 w-full h-full bg-[#F7FAFE] px-6 pt-20 relative">
      <Image
          source={BG}
          style={{
            position: "absolute",
            right: 0,
            bottom: "-25%",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
          resizeMode="contain"
      />
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="w-10 h-10 items-center justify-center"
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-3xl font-nunitosans-bold mb-8 mt-20 text-center">
        Verify OTP
      </Text>

      {/* Subtitle */}
      <View className="flex-row items-center justify-center mb-20">
        <Text className="text-gray-500 text-xl font-nunitosans-regular">
          Enter OTP sent to <Text className="text-gray-500 underline text-xl">+91-9789477205</Text>
        </Text>
        <MaterialCommunityIcons className="ml-2" name="lead-pencil" size={20} color="#379ADC" />
      </View>

      {/* OTP Inputs */}
      <View className="flex-row flex-1 justify-center mb-10">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            className="w-12 h-16 mx-2 border-none outline-none bg-white  rounded-lg  text-center font-nunitosans-bold text-[22px] text-black"
            style={{ elevation: 3, shadowColor: '#379ADC', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 7.84 }}
          />
        ))}
      </View>

      {/* Verify Button */}
      <GradientButton
        className=''
        fontClassName='font-nunitosans-bold text-[22px] text-white'
        text="Verify OTP"
        onPress={() => router.push("Home")}
        colors={['#C3C3C3', '#C3C3C3']}
        start={[0, 0]}
        end={[0, 1]}
        style={{ elevation: 3, shadowColor: '#000000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 7.84 }}
      />

      {/* Footer */}
      <Text className="text-center text-[#161616] mt-12 text-xl font-nunitosans-semibold">
        Didn’t receive any OTP?
      </Text>
      <Text className="text-center text-gray-400 mt-1 mb-20 text-lg font-nunitosans-regular">
        Request new code in 00:30s
      </Text>
    </View>
  );
}
