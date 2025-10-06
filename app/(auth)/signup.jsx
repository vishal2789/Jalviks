import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from '../../assets/images/logo.svg';
import GradientButton from "../components/GradientButton";


export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const BG = require("../../assets/images/rice_loginBg.png");
  const router = useRouter();

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

      {/* Logo Section */}
      <View className="items-center mt-20">
        <Logo width={350} height={160} />
        <Text className="text-3xl font-nunitosans-bold mt-14">Hey there,Welcome!</Text>
        <Text className="text-gray-500 font-nunitosans-regular text-xl mt-1">Join us and grow your fram</Text>
      </View>

      {/* Phone Input */}
      <View className="flex-1">
        <View  style={styles.blueShadow} className="mt-16 flex-row items-center bg-white rounded-xl px-4 py-2">
          <Text className="text-middle mr-2 font-nunitosans-semibold text-[18px] text-black">+91</Text>
          <TextInput
            className="flex-1 text-middle border-none outline-none bg-white px-4 py-4 pl-14 font-nunitosans-semibold text-[20px] text-black"
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            textAlignVertical="center"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      {/* Send OTP Button */}
      <View className="mb-20 w-full flex items-center"> 
        <GradientButton
          className='w-full'
          fontClassName='font-nunitosans-bold text-[20px] text-white'
          text="Send OTP"
          onPress={() => router.push("OtpScreen")}
          colors={['#12602F', '#6FAC2C']}
          start={[0, 0]}
          end={[0, 1]}
        />
        {/* Footer Text */}
        <Text className="text-sm font-nunitosans-regular text-gray-500 text-center mt-6">
          By proceeding, you consent to share your information with Jalviks and
          agree to Jalviks{" "}
          <Text className="text-[#12602F] text-sm font-nunitosans-bold">Privacy Policy</Text> and{" "}
          <Text className="text-[#12602F] text-sm font-nunitosans-bold">Terms of Service</Text>.
        </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  blueShadow: {
    shadowColor: '#379ADC', // blue
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 7.84,
    elevation: 3, // for Android
  },
});