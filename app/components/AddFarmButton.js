import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

const AddFarmButton = () => {
  return (
    <View className="w-14 h-14 rounded-full overflow-hidden">
      <LinearGradient
        colors={["#005B28", "#6EAD2B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} // ✅ ensures full size and centered content
      >
        <TouchableOpacity
            onPress={() => router.push('/farm/AddStep1')}
        >
            <Text className="font-nunito-medium text-3xl text-white">+</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default AddFarmButton
