import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Step1Screen" />
      <Stack.Screen name="Step2Screen" />
      <Stack.Screen name="Step3Screen" />
      <Stack.Screen name="LanguageScreen" />
    </Stack>
  );
}
