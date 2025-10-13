import { Text, View } from "react-native";

const AddScrTitle = ({ title = "Test", description }) => {
  return (
    <View className="mb-5">
      {title ? (
        <Text className="text-2xl font-nunitosans-bold text-black mb-2">
          {title}
        </Text>
      ) : null}

      {description ? (
        <Text className="text-xl font-nunitosans-regular text-[#5C5C5C] mb-3 tracking-wider">{description}</Text>
      ) : null}
    </View>
  );
};

export default AddScrTitle;
