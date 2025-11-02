import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CommonTitleBox from "../components/CommonTitleBox";
import GradientButton from "../components/GradientButton";


const Setting = () => {
  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <CommonTitleBox title="Settings" />


      <ScrollView className="px-10 pr-16 mt-5 mb-12">
        
        {/* Account Section */}
        <View className="my-6 mb-12">
          <TouchableOpacity className="py-4 flex-row items-center justify-between"
          onPress={() => router.push("/MyAccountScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">My Account</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between "
          onPress={() => router.push("/NotificationReminderScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Notifications Reminders</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 pb-12 flex-row items-center justify-between "
          onPress={() => router.push("/AppSettingsScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">App Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View className="mb-6">
          <Text className="text-2xl font-nunitosans-extrabold text-[#0077B6] mb-4 pb-3 tracking-wider border-b border-[#0077B6]/20">Help and Policies</Text>
          <TouchableOpacity className="py-4 flex-row items-center justify-between"
          onPress={() => router.push("/FaqScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">FAQs</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between"
          onPress={() => router.push("/ContactUsScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Contact us</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between"
          onPress={() => router.push("/TermsAndConditionsScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between"
          onPress={() => router.push("/HelpAndSupportScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Help and Support</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="py-4 flex-row items-center justify-between"
          onPress={() => router.push("/ReferralScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">Refferral</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          
          <TouchableOpacity className="py-4 flex-row items-center justify-between"
          onPress={() => router.push("/AboutScreen")}
          >
            <Text className="text-xl text-black font-nunitosans-semibold tracking-wider">About</Text>
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