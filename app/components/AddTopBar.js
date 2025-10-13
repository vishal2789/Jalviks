import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const TopBar = ({ currentStep = 1, totalSteps = 8 }) => {
  const navigation = useNavigation();

  const progress = (currentStep / totalSteps) * 100;

  return (
    <View className="flex-row items-center px-6 pt-12 pb-3">
      {/* Back Button */}
      <Pressable
        onPress={() => navigation.goBack()}
        className="w-12 h-12 rounded-full bg-[#E5E5E5]/30 flex items-center justify-center"
      >
        <Ionicons name="chevron-back" size={22} color="#000" />
      </Pressable>

      {/* Progress Bar */}
      <View className="flex-1 px-4">
        <View
          className="h-3 bg-[#FBFBFB] rounded-full"
          style={{
            elevation: 3,
            shadowColor: "#379ADC",
            shadowOffset: { width: 1, height: 6 },
            shadowOpacity: 0.3,
            shadowRadius: 7.84,
          }}
        >
          <View
            className="h-3 bg-[#0077B6] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </View>
      </View>

      {/* Step Text */}
      <Text className="text-[#8E8E8E] text-lg font-nunitosans-regular">
        <Text className="text-xl font-nunitosans-semibold text-[#1587BE]">{currentStep}</Text> / {totalSteps}
      </Text>
    </View>
  );
};

export default TopBar;
