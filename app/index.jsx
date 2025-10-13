import { useRouter } from 'expo-router'; // useRouter for navigation
import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import Logo from '../assets/images/logo.svg';

export default function App() {
  const router = useRouter(); // useRouter hook for navigation
    useEffect(() => {
      const timer = setTimeout(() => {
        router.push("/Step1Screen"); // go to Step1 after 5s
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <ImageBackground
        source={require('../assets/images/splash.png')} // 👈 full background image
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center">
          <Logo width={300} height={150} />
        </View>
      </ImageBackground>
    );
}