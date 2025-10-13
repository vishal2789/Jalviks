import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";

const DatePickerField = ({ label, date, setDate }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const openPicker = () => setShowPicker(true);
  const closePicker = () => setShowPicker(false);

  return (
    <View className="mb-5">
      <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-2">{label}</Text>

      {/* Box that opens the picker */}
      <TouchableOpacity
        onPress={openPicker}
        activeOpacity={0.8}
        className="flex-row justify-between items-center bg-white border border-[#BDE0E6] rounded-xl px-6 mb-1 text-xl h-14 py-3 font-nunitosans-regular text-[#5B5B5B]"
        style={{
            elevation: 3,
            shadowColor: "#379ADC",
            shadowOffset: { width: 1, height: 6 },
            shadowOpacity: 0.3,
            shadowRadius: 7.84,
        }}
      >
        <Text className={`text-base font-nunitosans-bold ${date ? "text-gray-800" : "text-gray-400"}`}>
          {date ? date.toDateString() : "Select Date"}
        </Text>
        <Ionicons name="calendar" size={20} color="#A3E5FF" />
      </TouchableOpacity>

      {/* Modal for iOS, dialog for Android */}
      {showPicker && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={showPicker}
          onRequestClose={closePicker}
        >
          <View className="flex-1 justify-center items-center bg-black/40">
            <View className="bg-white p-5 rounded-2xl w-11/12">
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="spinner"
                onChange={handleChange}
                textColor="black"
              />
              <TouchableOpacity
                onPress={closePicker}
                className="mt-3 bg-[#1587BE] py-2 rounded-xl"
              >
                <Text className="text-white text-center font-semibold">Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default DatePickerField;
