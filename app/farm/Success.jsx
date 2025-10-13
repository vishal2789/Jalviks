import { Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

const Success = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/FarmManageBg.png")}
      className="flex-1 justify-center items-center px-6"
      resizeMode="cover"
    >
      {/* Close Button */} 
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-24 right-6 bg-[#E5E5E5]/90 rounded-full p-4"
      >
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>

      {/* Success Icon */}
      <View className="">
        <Image
          source={require("../../assets/images/ImgSeccess.png")}
          className="w-28 h-28"
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text className="text-center text-2xl font-nunitosans-semibold text-[#161616] mb-5 mt-6">
        Your Farm has been {"\n"}successfully added
      </Text>

      {/* Subtitle */}
      <Text className="text-center text-[#161616]/60 text-lg font-nunitosans-regular">
        This is dummy text will be replaced with{"\n"} original content.
      </Text>
    </ImageBackground>
  )
}

export default Success