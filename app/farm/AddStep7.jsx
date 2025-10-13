import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, Modal, Pressable, Switch, Text, TouchableOpacity, View } from "react-native";
import AddScrTitle from "../components/AddScrTitle";
import TopBar from "../components/AddTopBar";
import GradientButton from "../components/GradientButton";

const AddStep7 = () => {
  const [images, setImages] = useState([]);
  const [soilTesting, setSoilTesting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    allowsMultipleSelection: true,
    quality: 1,
    });

    if (!result.canceled) {
      const newImages = result.assets.map((asset) => asset.uri);
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (uri) => {
    setImages(images.filter((img) => img !== uri));
  };

  const handleToggle = (value) => {
    setSoilTesting(value);
    if (value) setShowModal(true);
  };

  return (
    <View className="flex-1 bg-white">
    <ImageBackground
        source={require("../../assets/images/FarmManageBg.png")}
        className="flex-1  pt-10"
        resizeMode="cover"
    >
      <TopBar currentStep={7} totalSteps={8} />
      
      <View className="flex-1 px-7 py-6">
        <AddScrTitle title="Soil Report" description="" />

        {/* Uploaded Images */}
        <View className="flex-row space-x-2 mb-4">
            {images.map((uri, index) => (
            <View key={index} className="relative mx-2">
                <Image
                source={{ uri }}
                className="w-28 h-20 rounded-lg border border-gray-300"
                resizeMode="cover"
                />
                <TouchableOpacity
                onPress={() => removeImage(uri)}
                className="absolute top-1 right-1 bg-black/60 rounded-full p-1"
                >
                <Ionicons name="close" size={16} color="white" />
                </TouchableOpacity>
            </View>
            ))}
        </View>

        {/* Upload Button */}
        <TouchableOpacity
            onPress={pickImage}
            className="bg-[#0077B6] rounded-xl py-4 flex-row justify-center items-center mb-14"
        >
            <Ionicons name="camera" size={28} color="white" />
            <Text className="text-white ml-4 font-nunitosans-bold text-lg">
                Take Photo of Soil Report
            </Text>
        </TouchableOpacity>

        {/* Toggle Switch */}
        <View className="flex-row justify-between items-center mb-10">
            <Text className="text-lg font-nunitosans-regular text-[#161616]/70">Do you need Soil testing</Text>
            <Switch
            value={soilTesting}
            onValueChange={handleToggle}
            thumbColor={soilTesting ? "#fff" : "#f4f3f4"}
            trackColor={{ false: "#ccc", true: "#0077B6" }}
            />
        </View>
      </View>
      {/* Continue Button */}
      <View className="mb-10 mx-7">
            <GradientButton
                className='w-full'
                fontClassName='font-nunitosans-bold text-2xl text-white'
                text="Continue"
                onPress={() => router.push("/farm/AddStep8")}
                colors={['#12602F', '#6FAC2C']}
                start={[0, 0]}
                end={[0, 1]}
            />
        </View>

      {/* Modal Popup */}
      <Modal
        transparent
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white w-96 rounded-2xl p-8 items-center">
            <Pressable
              onPress={() => setShowModal(false)}
              className="px-6 py-2 flex-row items-end justify-end w-full mb-2"
            >
              <Text className="text-black text-right font-nunitosans-regular text-2xl">X</Text>
            </Pressable>
            <Text className="text-lg font-nunito-semibold tracking-wider mb-3 text-center">
              Call us on <Text className="text-[#0077B6]">9999999999</Text> and our specialist will guide with further process
            </Text>
            <Text className="text-gray-600 font-nunito-regular text-center mb-4">
              This is dummy content will be replaced with original content.
            </Text>
          </View>
        </View>
      </Modal>
    </ImageBackground>
    </View>
  );
};

export default AddStep7;
