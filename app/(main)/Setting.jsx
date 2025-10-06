import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CommonTitleBox from "../components/CommonTitleBox";
import GradientButton from "../components/GradientButton";


const Setting = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <CommonTitleBox title="Settings" />


      <ScrollView className="px-10 pr-16 mt-5 mb-12">
        
        {/* Account Section */}
        <View className="my-6 mb-12">
          <TouchableOpacity className="py-4 flex-row items-center justify-between ">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">My Profile</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between ">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Notifications Reminders</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 border-b border-gray-200 pb-12 flex-row items-center justify-between ">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Language</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View className="mb-6">
          <Text className="text-3xl font-nunitosans-extrabold text-[#0077B6] mb-4 tracking-wider">Support</Text>
          <TouchableOpacity className="py-4 flex-row items-center justify-between">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Help Desk</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">FAQ</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between">
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Contact US</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View className="my-6 mb-20">
          <GradientButton
            className=''
            text="Logout"
            onPress={() => console.log("Logout pressed")}
            colors={['#12602F', '#6FAC2C']}
            start={[0, 0]}
            end={[0, 1]}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Setting