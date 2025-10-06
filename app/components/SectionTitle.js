import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

const SectionTitle = ({ title, seeAll, onSeeAll }) => {
  return (
    <View className="flex-row justify-between items-center px-8 mb-4">
        <Text className="text-2xl font-nunito-bold text-black">{title}</Text>
        <View className="flex-row items-center">
            {seeAll && (
                <TouchableOpacity className='flex-row items-center' onPress={onSeeAll}>
                    <Text className='font-nunitosans-semibold text-xl'>See All</Text>
                    <MaterialIcons name="play-arrow" size={24} color="#12602F" />
                </TouchableOpacity>
            )}
        </View>
    </View>
  )
}

export default SectionTitle