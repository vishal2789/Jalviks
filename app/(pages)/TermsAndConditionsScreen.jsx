import React from "react";
import { ScrollView, Text, View } from "react-native";
import StaticHeader from "../components/StaticHeader";

export default function TermsAndConditionsScreen() {
  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <StaticHeader title="Terms and Conditions" />

      {/* Content */}
      <ScrollView
        className="flex-1 px-10 mt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* 1. Acceptance of Terms */}
        <Text className="text-xl font-nunitosans-semibold text-gray-900 mb-2">
          1. Acceptance of Terms
        </Text>
        <Text className="text-gray-700 leading-6 mb-8 text-md font-nunitosans-regular">
          By downloading, installing, accessing, or using [Your Mobile App Name],
          you agree to comply with and be bound by these terms and conditions,
          along with our Privacy Policy. If you do not agree with any part of
          these terms, you may not use our app.
        </Text>

        {/* 2. License */}
        <Text className="text-xl font-nunitosans-semibold text-gray-900 mb-2">2. License</Text>
        <Text className="text-gray-700 leading-6 mb-8 text-md font-nunitosans-regular">
          We grant you a non-exclusive, non-transferable, limited license to use
          [Your Mobile App Name] solely for your personal, non-commercial
          purposes, subject to these terms and the applicable app store's terms
          of service.
        </Text>

        {/* 3. User Account */}
        <Text className="text-xl font-nunitosans-semibold text-gray-900 mb-2">
          3. User Account
        </Text>
        <Text className="text-gray-700 leading-6 mb-8 text-md font-nunitosans-regular">
          Some features of [Your Mobile App Name] may require you to create an
          account. You are responsible for maintaining the confidentiality of
          your account information and for all activities that occur under your
          account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information to keep it accurate, current, and complete.
        </Text>

        {/* 4. Use of the App */}
        <Text className="text-xl font-nunitosans-semibold text-gray-900 mb-2">
          4. Use of the App
        </Text>
        <Text className="text-gray-700 leading-6 mb-8 text-md font-nunitosans-regular">
          You agree to use [Your Mobile App Name] only for lawful purposes and
          in a manner consistent with all applicable local, national, and
          international laws and regulations.
        </Text>

        {/* You can continue adding more sections similarly */}
      </ScrollView>
    </View>
  );
}
