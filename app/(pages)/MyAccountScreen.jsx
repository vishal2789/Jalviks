import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import GradientButton from "../components/GradientButton";
import InputComponant from "../components/InputComponant";
import ProfileHeader from "../components/ProfileHeader";

export default function MyAccountScreen() {
  const [gender, setGender] = useState("Male");
  const [fullName, setFullName] = useState("Parah K");
  const [email, setEmail] = useState("Parag@gmail.com");
  const [phone, setPhone] = useState("9728477205");

  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <ProfileHeader title="My Account" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Form Section */}
        <View className="px-8 sm:px-6 md:px-8 lg:px-12 mt-10 sm:mt-12 md:mt-14">
          
          {/* Full Name */}
          <InputComponant
            label="Full Name"
            value={fullName}
            placeholder="Enter Full Name"
            onChangeText={setFullName}
            editable={true}
          />

          {/* Email */}
          <InputComponant
            label="Email"
            value={email}
            placeholder="Enter Email"
            onChangeText={setEmail}
            editable={true}
          />

          {/* Phone Number */}
          <InputComponant
            label="Phone Number"
            value={phone}
            placeholder="Enter Phone Number"
            onChangeText={setPhone}
            editable={true}
          />

          {/* Gender */}
          <View className="flex-1 mt-2 sm:mt-4">
            <Text className="text-[#161616]/70 font-nunitosans-regular text-base sm:text-lg mb-2">
              Gender
            </Text>

            <View className="flex-row gap-3 sm:gap-4">
              {/* Male Button */}
              <TouchableOpacity
                onPress={() => setGender('Male')}
                className={`flex-1 flex-row justify-center items-center py-4 sm:py-3 rounded-xl border ${
                  gender === 'Male'
                    ? 'bg-blue-100 border-blue-400'
                    : 'border-gray-200'
                }`}
              >
                <Ionicons
                  name="male"
                  size={18}
                  color={gender === 'Male' ? '#2563EB' : '#6B7280'}
                />
                <Text
                  className={`ml-2 font-medium text-sm sm:text-base ${
                    gender === 'Male' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Male
                </Text>
              </TouchableOpacity>

              {/* Female Button */}
              <TouchableOpacity
                onPress={() => setGender('Female')}
                className={`flex-1 flex-row justify-center items-center py-2.5 sm:py-3 rounded-xl border ${
                  gender === 'Female'
                    ? 'bg-pink-100 border-pink-400'
                    : 'border-gray-200'
                }`}
              >
                <Ionicons
                  name="female"
                  size={18}
                  color={gender === 'Female' ? '#DB2777' : '#6B7280'}
                />
                <Text
                  className={`ml-2 font-medium text-sm sm:text-base ${
                    gender === 'Female' ? 'text-pink-600' : 'text-gray-600'
                  }`}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Save Button */}
          <View className="mt-8 sm:mt-10 w-full">
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
      </ScrollView>
    </View>
  );
}
