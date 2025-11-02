import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


const StaticHeader = ({ title }) => {
  return (
        <View className="pt-24 pb-10 relative overflow-hidden">
            {/* Top Row: Greeting + Icons */}
            <View className="flex-row justify-between items-center px-8">
                <View className="flex-row items-center space-x-4">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-12 h-12 pl-3 mr-5 items-center justify-center bg-black/5 rounded-full text-center"
                    >
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                    </TouchableOpacity>
                    <Text className="text-black text-xl tracking-wider font-nunitosans-bold">{title}</Text>
                </View>
            </View>
        </View>
  )
}

export default StaticHeader