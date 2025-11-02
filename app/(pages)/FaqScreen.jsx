import { EvilIcons, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import StaticHeader from "../components/StaticHeader";

const faqs = [
  {
    id: "1",
    question: "Lorem Ipsum is simply dummy text?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "2",
    question: "Lorem Ipsum is simply dummy text?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "3",
    question: "Lorem Ipsum is dummy text?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "4",
    question: "Lorem Ipsum is simply dummy text?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function FaqScreen({ navigation }) {
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <StaticHeader title="FAQs" />

      {/* Search Box */}
      <View className="mb-4 px-8 py-2 relative">
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          className="text-md font-nunitosans-light tracking-wider text-gray-800 bg-gray-100 rounded-xl pl-14 pt-5 pb-5"
        />
        <EvilIcons name="search" size={30} color="#666" className="absolute left-10 top-6" />
      </View>

      {/* FAQ List */}
      <FlatList
        className="px-8"
        data={filteredFaqs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            className={`mb-4 rounded-xl border ${
              expanded === item.id
                ? "border-[#0077B6]/40 bg-white"
                : "border-gray-100 bg-[#F7FAFE]"
            }`}
          >
            <TouchableOpacity
              onPress={() => toggleExpand(item.id)}
              className="flex-row justify-between items-center p-6"
            >
              <Text className="font-nunitosans-semibold tracking-wider text-lg text-gray-900 flex-1 pr-2">
                {item.question}
              </Text>
              <Feather
                name={expanded === item.id ? "chevron-up" : "chevron-down"}
                size={20}
                color="#666"
              />
            </TouchableOpacity>

            {expanded === item.id && (
              <View className="px-6 pb-6">
                <Text className="font-nunitosans-regular text-[#4A5568] text-lg">
                  {item.answer}
                </Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}
