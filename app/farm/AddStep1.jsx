import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import GradientButton from "../components/GradientButton";
import InputComponant from "../components/InputComponant";

const AddStep1 = () => {
  const [farmName, setFarmName] = useState("GSV Farms");
  const [farmId] = useState("JV-2025-DCB0");
  const [address, setAddress] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [unit, setUnit] = useState("Hectares");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const getCurrentLocation = async () => {
    try {
      setLoadingLocation(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        setLoadingLocation(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (reverseGeocode.length > 0) {
        const addr = reverseGeocode[0];
        setAddress(
          `${addr.name || ""}, ${addr.street || ""}, ${addr.city || ""}, ${
            addr.region || ""
          }, ${addr.postalCode || ""}`
        );
      } else {
        setAddress(`Lat: ${latitude}, Lng: ${longitude}`);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch location");
    } finally {
      setLoadingLocation(false);
    }
  };

  return (
        <View className="flex-1 bg-white">
            <ImageBackground
                source={require("../../assets/images/FarmManageBg.png")}
                className="flex-1  pt-10"
                resizeMode="cover"
                >
                <TopBar currentStep={1} totalSteps={8} />
            <ScrollView className="flex-1 px-7 py-6">
                <AddScrTitle title="Basic Details" description="Nice to meet you Parag! Tell us a little bit about your Farm" />

                {/* Farm Name */}
                <InputComponant label = "Farm Name" value = {farmName} placeholder = "Enter Farm Name" onChangeText = {setFarmName} editable={true} />

                {/* Farm ID */}
                <InputComponant label = "Farm ID" value = {farmId} placeholder = "Enter Farm ID" onChangeText = '' editable={false} note="(Auto Generated unique identifier)" />

                {/* Farm Address */}
                <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-2">Farm Address (Co-ordinates)</Text>
                <TouchableOpacity
                    onPress={getCurrentLocation}
                    className="flex-row items-center justify-start bg-white border border-[#BDE0E6] rounded-xl px-6 mb-6 text-xl h-14 py-2 font-nunitosans-regular text-[#5B5B5B]"
                    style={{
                        elevation: 3,
                        shadowColor: "#379ADC",
                        shadowOffset: { width: 1, height: 6 },
                        shadowOpacity: 0.3,
                        shadowRadius: 7.84,
                    }}
                >
                    <Ionicons name="location-sharp" size={25} color="#1587BE" />
                    <Text className="text-[#1587BE] ml-4 font-nunitosans-bold text-xl">
                    {loadingLocation ? "Fetching Location..." : "Get Current Location"}
                    </Text>
                </TouchableOpacity>

                {address ? (
                    <View className="border border-[#BDE0E6] rounded-xl px-6 mb-4 h-14 py-2">
                        <Text className=" font-nunitosans-regular text-[#5B5B5B] text-md">{address}</Text>
                    </View>
                ) : null}

                {/* Total Plot Size */}
                <View className="flex-row space-x-2 mb-4">
                    <View className="flex-1">
                        <InputComponant label = "Total Plot Size" value = {plotSize} placeholder = "Enter Total Area" onChangeText = {setPlotSize} keyboardType="numeric" />
                    </View>
                    <View className="w-36 ml-5">
                        <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-2">
                            Unit
                        </Text>
                        <View className="flex-row items-center justify-between">
                            <View 
                                className="bg-white border border-[#BDE0E6] rounded-xl px-4 h-14 py-2 flex-row justify-between items-center  w-full"
                                style={{
                                    elevation: 3,
                                    shadowColor: "#379ADC",
                                    shadowOffset: { width: 1, height: 6 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 7.84,
                                }}
                            >
                                <Text className="text-md font-nunitosans-regular text-[#0077B6]">Hecteres</Text>
                                <Ionicons name="chevron-down" size={25} color="gray" />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* Continue Button */}
            <View className="mb-10 mx-7">
                <GradientButton
                    className='w-full'
                    fontClassName='font-nunitosans-bold text-2xl text-white'
                    text="Continue"
                    onPress={() => router.push("/farm/AddStep2")}
                    colors={['#12602F', '#6FAC2C']}
                    start={[0, 0]}
                    end={[0, 1]}
                />
            </View>
        </ImageBackground>
    </View>
  );
};

export default AddStep1;
