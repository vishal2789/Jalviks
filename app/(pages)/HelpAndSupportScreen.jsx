import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import GradientButton from "../components/GradientButton";
import InputComponant from "../components/InputComponant";
import StaticHeader from "../components/StaticHeader";

export default function HelpAndSupportScreen() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    // You can replace this with your submit API call or logic
    console.log("Title:", title);
    console.log("Details:", details);
  };

  return (
    <View className="flex-1 bg-[#F7FAFE]">
      <StaticHeader title="Help and Support" />

      <ScrollView
        className="flex-1 px-10 mt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {/* Intro Text */}
        <Text className="text-[#5C5C5C] text-xl leading-6 font-nunitosans-regular mb-10">
          If you’re experiencing any issues, please let us know. We will try to
          resolve them as soon as possible.
        </Text>

        {/* Title Input */}
        <InputComponant
          label="Title"
          value={title}
          placeholder="Enter Title"
          onChangeText={setTitle}
        />

        {/* Details Input */}
        <InputComponant
          label="Explain in Detail"
          value={details}
          placeholder="Write your issue in detail"
          onChangeText={setDetails}
          multiline={true}
          numberOfLines={5}
          style={{ textAlignVertical: "top" }}
        />

        {/* Submit Button */}
        <View className="mt-6">
          <GradientButton
            className="w-full"
            fontClassName="font-nunitosans-bold text-xl text-white"
            text="Submit"
            onPress={handleSubmit}
            colors={["#12602F", "#6FAC2C"]}
            start={[0, 0]}
            end={[0, 1]}
          />
        </View>

        {/* Contact Info */}
        <View className="mt-8 items-center">
          <Text className="text-[#5C5C5C] text-lg font-nunitosans-regular text-left">
            You can call us for further assistance on this number{" "}
            <Text className="font-nunitosans-semibold text-gray-900">
              9818790607
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
