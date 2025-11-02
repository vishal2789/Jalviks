import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import StaticHeader from "../components/StaticHeader";

// ✅ Import your SVG icons
import EmailIcon from "../../assets/images/icon-email.svg";
import PhoneIcon from "../../assets/images/icon-phone.svg";

export default function ContactUsScreen({ navigation }) {
  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <StaticHeader title="Contact Us" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Contact Cards */}
        <View className="px-6">
          {/* Email */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-2xl border border-gray-100 p-4 mb-8 flex-row items-center"
            style={{
                elevation: 3,
                shadowColor: "#DDE5E9",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
          >
            <View className="w-12 h-12 items-center justify-center mr-4">
              <EmailIcon width={30} height={30} />
            </View>
            <View>
              <Text className="text-[#0077B6] font-nunitosans-semibold text-lg">
                Email
              </Text>
              <Text className="text-gray-700 text-md mt-1 font-nunitosans-regular">
                gm.jalviks@gmail.com
              </Text>
            </View>
          </TouchableOpacity>

          {/* Phone Number */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-2xl border border-gray-100 p-4 mb-8 flex-row items-center"
            style={{
                elevation: 3,
                shadowColor: "#DDE5E9",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
          >
            <View className="w-12 h-12 items-center justify-center mr-4">
              <PhoneIcon width={30} height={30} />
            </View>
            <View>
              <Text className="text-[#0077B6] font-nunitosans-semibold text-lg">
                Phone Number
              </Text>
              <Text className="text-gray-700 text-md mt-1 font-nunitosans-regular">9818790607</Text>
            </View>
          </TouchableOpacity>

          {/* WhatsApp */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-2xl border border-gray-100 p-4 mb-8 flex-row items-center"
            style={{
                elevation: 3,
                shadowColor: "#DDE5E9",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
          >
            <View className="w-12 h-12 items-center justify-center mr-4">
              <PhoneIcon width={30} height={30} />
            </View>
            <View>
              <Text className="text-[#0077B6] font-nunitosans-semibold text-lg">
                WhatsApp
              </Text>
              <Text className="text-gray-700 text-md mt-1 font-nunitosans-regular">9818790607</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Language Section */}
        <View className="px-8 mt-10">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-nunitosans-semibold text-gray-900">
              Language
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-gray-600 text-base font-nunitosans-regular mr-1">English</Text>
              <Feather name="chevron-right" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
