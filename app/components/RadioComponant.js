import { Text, TouchableOpacity, View } from "react-native";

const RadioComponant = ({ item, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(item.id)}
      className={`flex-row justify-between items-center border rounded-2xl px-5 py-5 mb-6 
        ${isSelected ? "bg-[#EDFCFF] border-[#8CC5CF]" : "bg-white border-[#BDE0E6]"} 
        `}
      style={{
            elevation: 3,
            shadowColor: "#379ADC",
            shadowOffset: { width: 1, height: 6 },
            shadowOpacity: 0.3,
            shadowRadius: 7.84,
        }}
    >
      <View className="flex-row items-center">
        {/* Radio Button */}
        <View
          className={`w-6 h-6 rounded-full border-2 mr-5 
            ${isSelected ? "border-[#1587BE] bg-[#1587BE]" : "border-[#DDDDDD] bg-[#EEEEEE]"} 
            items-center justify-center`}
        >
          {isSelected && (
            <View className="w-3 h-3 rounded-full bg-[#ffffff]" />
          )}
        </View>

        {/* Label */}
        <Text 
            className={`text-gray-700 text-lg 
            ${isSelected ? "font-nunitosans-bold" : "font-nunitosans-regular"}`}
        >
          {item.name}
        </Text>
      </View>

      {/* Emoji */}
      <Text className="text-2xl">{item.emoji}</Text>
    </TouchableOpacity>
  );
};

export default RadioComponant;
