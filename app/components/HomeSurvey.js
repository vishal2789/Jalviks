import { Image, Text, TouchableOpacity, View } from 'react-native'

const HomeSurvey = () => {
  return (
    <View className='w-full bg-[#F3F3F3] p-10 flex-row flex-wrap items-center justify-center'>
        <Text className='text-center text-[#0077B6] font-nunitosans-bold text-2xl'>Upcoming Plot 2 survey</Text>
        <Text className='text-center text-black font-nunitosans-regular text-lg mt-2 tracking-wide my-4'>This is dummy text will be replaced with data </Text>
        <TouchableOpacity className="bg-[#007BC1] px-6 py-5 mt-10 rounded-lg flex-row justify-center items-center w-60">
            {/* Icon */}
            <Image source={require('../../assets/images/icon-pad.png')} className='w-9 h-10' resizeMode='contain' />

            {/* Text */}
            <Text className="text-white text-2xl font-nunitosans-bold ml-2 mt-2 tracking-wide">
                Take Survey
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeSurvey