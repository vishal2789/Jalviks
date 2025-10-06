import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";


const CommonTitleBox = ({ title }) => {
  return (
    <View className="rounded-[3rem] overflow-hidden">
        <LinearGradient
        colors={["#005B28", "#6EAD2B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className=""
        >
        <View className="pt-24 pb-10 relative overflow-hidden">
            {/* Top Row: Greeting + Icons */}
            <View className="flex-row justify-between items-center px-10">
                <View className="flex-row items-center space-x-4">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-14 h-14 pl-3 mr-5 items-center justify-center bg-black/30 rounded-full text-center"
                    >
                        <MaterialIcons name="arrow-back-ios" size={20} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-2xl tracking-wider font-nunitosans-bold">{title}</Text>
                </View>

                <View className="flex-row items-center">
                    {/* Profile Image */}
                    <View className="w-14 h-14 rounded-full bg-white/20 mr-5 overflow-hidden flex items-center justify-center">
                    <Image
                        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
                        className="w-10 h-10 rounded-full opacity-100"
                    />
                    </View>
                    {/* Notification Bell */}
                    <TouchableOpacity
                        onPress={() => router.push("/NotificationScreen")}
                        className=""
                    >
                        <Ionicons name="notifications" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </LinearGradient>
    </View>
  )
}

export default CommonTitleBox