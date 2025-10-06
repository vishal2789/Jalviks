import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-Black': require('../assets/fonts/Nunito-Black.ttf'),
    'NunitoSans-ExtraLight': require('../assets/fonts/NunitoSans-ExtraLight.ttf'),
    'NunitoSans-Light': require('../assets/fonts/NunitoSans-Light.ttf'),
    'NunitoSans-Regular': require('../assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-SemiBold': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
    'NunitoSans-Bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-ExtraBold': require('../assets/fonts/NunitoSans-ExtraBold.ttf'),
    'NunitoSans-Black': require('../assets/fonts/NunitoSans-Black.ttf'),
  });

  if (!fontsLoaded) return null;
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Splash */}
      <Stack.Screen name="index" options={{ title: "Splash" }} />
      <Stack.Screen name="NotificationScreen" options={{ title: "Notofication Screen" }} />

      {/* Route groups */}
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
