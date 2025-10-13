import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

const cycles = [
  { id: "short", title: "Short", duration: "60–90 Days", icon: "leaf" },
  { id: "medium", title: "Medium", duration: "90–120 Days", icon: "leaf-outline" },
  { id: "long", title: "Long", duration: "120+ Days", icon: "leaf-outline" },
];

const CropCycleSelector = ({ selectedCycle, setSelectedCycle }) => {
  return (
    <View className="mt-2">
      <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-4">Crop Cycle</Text>
      <View className="flex-row justify-between">
        {cycles.map((item) => {
          const isSelected = selectedCycle === item.id;

          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              onPress={() => setSelectedCycle(item.id)}
              className={`flex-1 mx-1 rounded-2xl ${
                isSelected ? "border-2 border-[#1587BE]/50" : "border border-transparent"
              }`}
              style={{
                elevation: 3,
                shadowColor: "#00000030",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
            >
            <View className="flex-1 rounded-2xl overflow-hidden">
              <LinearGradient
                colors={
                    isSelected
                    ? ["#0077B620", "#90E0EF20"] // selected gradient (blue tone)
                    : ["#FFFFFF", "#FFFFFF"] // default gradient (light tone)
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className=""
              >
                <View className="p-4">
                    <Text
                      className="font-nunitosans-bold text-black text-lg tracking-wider mb-1"
                    >
                      {item.title}
                    </Text>
                    <Text className="font-nunitosans-regular text-[#414141] text-md mb-3">
                      {item.duration}
                    </Text>
                    <View className="flex-row items-end justify-end">
                        <Ionicons
                          name={item.icon}
                          size={18}
                          color={isSelected ? "#1587BE" : "#A3A3A3"}
                        />
                    </View>
                </View>
              </LinearGradient>
            </View>
            </TouchableOpacity>
            
          );
        })}
      </View>
    </View>
  );
};

export default CropCycleSelector;
