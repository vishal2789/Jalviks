// app/screens/FarmTaskScreen.jsx
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import CommonTitleBox from "../components/CommonTitleBox";

const tasksData = [
  {
    id: "1",
    title: "Please Update growth Stage: Plot 2",
    description: "This is dummy text will be replaced with original content.",
    status: "today",
  },
  {
    id: "2",
    title: "Pest Spray : Plot1",
    description: "This is dummy text will be replaced with original content.",
    status: "today",
  },
  {
    id: "3",
    title: "Irrigation Due: Farm 3",
    description: "This is dummy text will be replaced with original content.",
    status: "pending",
  },
  {
    id: "4",
    title: "Update Field survey for plot 2",
    description: "This is dummy text will be replaced with original content.",
    status: "completed",
  },
];

export default function FarmTaskScreen() {
  const [filter, setFilter] = useState("today");
  const [selectedId, setSelectedId] = useState(null);

  const filteredTasks = tasksData.filter((task) => task.status === filter);

  const renderTask = ({ item }) => {
    const isSelected = selectedId === item.id;

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        className={`flex-row items-start justify-between p-5 rounded-xl my-3 border 
        ${isSelected ? "bg-[#EDFCFF] border-[#8CC5CF]" : "bg-white border-[#BDE0E6]"}`}
      >
        {/* Left section with radio and text */}
        <View className="flex-row items-start flex-1 relative">
          <View
            className={`w-7 h-7 rounded-full mt-1 mr-5 border-1 flex-row items-center justify-center ${
              isSelected ? "border-[#0077B6] bg-[#0077B6]" : "border-[#EEEEEE] bg-[#DDDDDD]"
            }`}
          >
            {isSelected && (
              <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
            )}
          </View>

          {/* Task details */}
          <View className="flex-1">
            <Text className={'text-xl font-nunitosans-bold text-black tracking-wider'} >
              {item.title}
            </Text>
            <Text className="text-lg text-gray-500 mt-1  font-nunitosans-regular">
              {item.description}
            </Text>
          </View>
        </View>

        {/* Arrow icon */}
        
        <Feather className="ml-5" name="arrow-up-right" size={24} color={isSelected ? "#2563eb" : "#9ca3af"} />
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <CommonTitleBox title="Farm Task" />

      {/* Farm Dropdown */}
      <View className="px-6 mt-5 mb-10 flex-row items-center justify-between">
        <Text className="text-xl font-nunitosans-bold text-black">
          Select Farm
        </Text>
        <View className="mt-2 p-4 rounded-xl border border-[#BDE0E6] flex-row justify-between items-center w-72">
          <Text className="text-black font-nunitosans-regular text-lg">All</Text>
          <Ionicons name="chevron-down" size={18} color="gray" />
        </View>
      </View>

      {/* Filter Tabs */}
      <View className="flex-row space-x-3 px-4 mb-4">
        {[
          { key: "today", label: "Today's Tasks" },
          { key: "pending", label: "Pending" },
          { key: "completed", label: "Completed" },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setFilter(tab.key)}
            className={`px-3 py-4 mx-2 rounded-full flex-1 ${
              filter === tab.key ? "bg-[#0077B6]" : "bg-[#E5EAFC]"
            }`}
          >
            <Text
              className={`text-center text-lg ${
                filter === tab.key
                  ? "text-white font-nunitosans-bold"
                  : "text-gray-600 font-nunitosans-regular"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
