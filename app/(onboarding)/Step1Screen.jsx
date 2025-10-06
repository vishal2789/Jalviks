import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import GradientButton from '../components/GradientButton';


const { width, height } = Dimensions.get('window');
const router = useRouter();

export default function Step1Screen() {
  return (
    <View className="flex-1 bg-white">      
      {/* Image Container */}
      <View className="relative" style={{ height: height * 0.56 }}>
        <Image
          source={require('../../assets/images/screen1Img.png')}
          className=" w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Decorative Elements */}
        <Image
          source={require('../../assets/images/stepBgRgt.png')}
          className="absolute bottom-0 right-0 w-1/2 h-[43%] zindex-0"
          resizeMode="cover" pointerEvents="none"
        />
        <Image
          source={require('../../assets/images/stepBgLft.png')}
          className="absolute bottom-20 left-0 w-[60%] h-[42%] zindex-0"
          resizeMode="cover" pointerEvents="none"
        />

      {/* Content Container */}
      <View className="flex-1 px-8 pt-24 items-center relative zindex-10 w-full">
        {/* Title */}
        <View className="mb-5">
          <Text className="font-nunito-extrabold text-3xl text-black opacity-85 text-center">
            Farm Level Microclimate{'\n'}
            <Text className="text-[#0077B6] text-3xl font-nunito-extrabold">
              Weather Data
            </Text>
          </Text>
        </View>
        
        {/* Description */}
        <Text className="text-xl text-gray-500 font-nunito-light text-center mb-24">
          This is dummy text will be replaced
        </Text>
        
        {/* Pagination Dots */}
        <View className="flex-row items-center justify-center mb-5">
          <View className="w-7 h-2 rounded-full bg-[#0077B6] mx-1" />
          <View className="w-4 h-2 rounded-full bg-[#90E0EF] mx-1" />
          <View className="w-4 h-2 rounded-full bg-[#90E0EF] mx-1" />
        </View>
        
        {/* Continue Button */}
        <GradientButton
          className='mb-5 w-full'
          text="Continue"
          onPress={() => router.push("/Step2Screen")}
          colors={['#12602F', '#6FAC2C']}
          start={[0, 0]}
          end={[0, 1]}
        />
        
        
      </View>
      
    </View>
  );
}