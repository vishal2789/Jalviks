// app/screens/NotificationScreen.jsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import CommonTitleBox from "./components/CommonTitleBox";

const notifications = [
  {
    id: "1",
    title: "Congratulations",
    message: "This is dummy text will be replaced",
    time: "9:45 AM",
    day: "Today",
    status: "success",
  },
  {
    id: "2",
    title: "Attention",
    message: "This is dummy text will be replaced with content",
    time: "9:38 AM",
    day: "Today",
  },
  {
    id: "3",
    title: "Irrigation alert",
    message: "This is dummy text will be replaced",
    time: "8:25 AM",
    day: "Today",
  },
  {
    id: "4",
    title: "Update your activity in survey: plot 2",
    message: "This is dummy text will be replaced with content",
    time: "9:45 AM",
    day: "Yesterday",
  },
  {
    id: "5",
    title: "Attention",
    message: "This is dummy text will be replaced with content",
    time: "9:38 AM",
    day: "Yesterday",
  },
  {
    id: "6",
    title: "Fertilization time",
    message: "This is dummy text will be replaced with content",
    time: "8:38 AM",
    day: "Yesterday",
  },
  {
    id: "7",
    title: "Attention",
    message: "This is dummy text will be replaced with content",
    time: "9:38 AM",
    day: "Yesterday",
  },
  {
    id: "8",
    title: "Fertilization time",
    message: "This is dummy text will be replaced with content",
    time: "8:38 AM",
    day: "Yesterday",
  },
];

const NotificationScreen = () => {
  const renderRightActions = () => (
    <View className="bg-red-500 w-16 h-full justify-center items-center">
      <Ionicons name="trash-outline" size={24} color="white" />
    </View>
  );

  const renderItem = ({ item }) => (
      <View key={item.id} className="flex-row justify-between items-start py-3 border-b border-gray-200">
        <View className="flex-1 pr-2 justify-center">
          <View className="flex-row items-baseline">
            {item.status === "success" && (
              <View className="w-3 h-3 mr-2 rounded-full bg-green-500" />
            )}
            <Text className="font-nunitosans-semibold text-lg tracking-wider text-[#060606] mb-2">{item.title}</Text>
          </View>
          <Text className="text-[#060606]/50 text-lg font-nunitosans-regular  tracking-wide">{item.message}</Text>
        </View>
        <Text className="text-[#060606]/50 text-sm font-nunitosans-regular ">{item.time}</Text>
      </View>
  );

  const groupedData = {
    Today: notifications.filter((n) => n.day === "Today"),
    Yesterday: notifications.filter((n) => n.day === "Yesterday"),
  };

  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <CommonTitleBox title="Notifications" />

      {/* Section Today */}
      <View className="pt-10 px-10">
        <FlatList
          ListHeaderComponent={
            <>
              <Text className="pt-4 pb-2 text-xl font-nunitosans-bold text-[#0077B6]">Today</Text>
              {groupedData.Today.map((item) => renderItem({ item }))}
              <Text className="pt-14 pb-2 text-xl font-nunitosans-bold text-[#0077B6]">Yesterday</Text>
            </>
          }
          data={groupedData.Yesterday}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;
