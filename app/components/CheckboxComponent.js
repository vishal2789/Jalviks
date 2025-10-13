import { Image, Text, TouchableOpacity, View } from "react-native";

const CheckboxComponent = ({ item, isSelected, onSelect }) => {
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
        {/* Checkbox */}
        <View
          className={`w-6 h-6 rounded-full border-2 mr-5 
            ${isSelected ? "border-[#1587BE] bg-[#1587BE]" : "border-[#DDDDDD] bg-[#EEEEEE]"} 
            items-center justify-center`}
        >
          {isSelected && (
            <Text className="text-white text-sm font-bold">✓</Text>
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

      {/* Image (replaces emoji) */}
      <Image
        source={{ uri: item.image }}
        className="w-[25px] h-[25px] rounded-full"
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default CheckboxComponent;
