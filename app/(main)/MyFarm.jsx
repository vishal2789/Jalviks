import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import IdCard from "../../assets/images/IconIdCard.svg";
import RiceIcon from "../../assets/images/IconRice.svg";
import CommonTitleBox from "../components/CommonTitleBox";

export default function FarmManagement() {
  const farms = [
    { name: "Plot 1", id: "JV-2025-C83E", crop: "Rice" },
    { name: "Plot 2", id: "JV-2025-C45E", crop: "Grapes" },
    { name: "Farm 23", id: "JV-2025-H21E", crop: "Wheat" },
    { name: "Farm 4", id: "JV-2025-H67E", crop: "Ragi" },
  ];

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../../assets/images/FarmManageBg.png")}
        className="flex-1"
        resizeMode="cover"
      >
        {/* Header */}
        <CommonTitleBox title="My Farms" />

        {/* My Farms */}
        <ScrollView className="px-7 mt-10 mb-32">
          <Text className="text-3xl font-nunitosans-bold mb-10 text-black">My Farms</Text>

          {farms.map((farm, index) => (
            <TouchableOpacity key={index} className="mb-4" style={{ elevation: 3, shadowColor: '#379ADC', shadowOffset: { width: 1, height: 6 }, shadowOpacity: 0.3, shadowRadius: 7.84 }}>
              <View className="rounded-2xl overflow-hidden">
                <LinearGradient
                  colors={["#FFFFFF", "#DAF4FF"]} // light blue → white
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="rounded-2xl p-4"
                >
                  <View className="flex-row items-center justify-between px-7 py-5">
                    <View>
                      <Text className="text-2xl font-nunitosans-bold text-black tracking-wider mb-4">{farm.name}</Text>
                      <View className="flex-row items-center space-x-2 mb-4">
                        <IdCard width={20} height={20} />
                        <Text className="text-xl text-[#4E4E4E] ml-3 font-nunitosans-semibold tracking-wider">ID: {farm.id}</Text>
                      </View>
                      <View className="flex-row items-center space-x-2">
                        <RiceIcon width={20} height={20} />
                        <Text className="text-xl text-[#4E4E4E] ml-3 font-nunitosans-semibold tracking-wider">{farm.crop}</Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={32} color="#6b7280" />
                  </View>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
