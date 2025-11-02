import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
    Platform,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import GradientButton from "../components/GradientButton";
import StaticHeader from "../components/StaticHeader";

export default function NotificationReminderScreen() {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [activityNotification, setActivityNotification] = useState(true);
  const [promoOffers, setPromoOffers] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleTimeChange = (event, selectedTime) => {
    setShowPicker(false);
    if (selectedTime) setTime(selectedTime);
  };

  const formattedTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
  };

  return (
    <View className="flex-1 bg-[#F7FAFE]">
      {/* Header */}
      <StaticHeader title="Notification Reminders" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Reminder */}
        <View className="px-8 mt-6">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-xl font-semibold text-gray-900">
                Daily reminders
              </Text>
              <Text className="text-gray-500 text-lg">
                Daily scheduled reminder
              </Text>
            </View>
            <Switch
              value={dailyReminder}
              onValueChange={setDailyReminder}
              trackColor={{ false: "#fff", true: "#0077B6" }}
            />
          </View>

          {/* Time Picker */}
          {dailyReminder && (
            <View className="mt-6">
              <TouchableOpacity
                onPress={() => setShowPicker(true)}
                className="px-6 py-3 items-center"
              >
                <Text className="text-3xl font-semibold text-[#0077B6]">
                  {formattedTime()}
                </Text>
              </TouchableOpacity>

              {showPicker && (
                <DateTimePicker
                  value={time}
                  mode="time"
                  is24Hour={false}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={handleTimeChange}
                />
              )}
            </View>
          )}
        </View>

        {/* Divider */}
        <View className="h-[1px] bg-gray-200 my-6 mx-8" />

        {/* Activity Notification */}
        <View className="px-8">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-xl font-semibold text-gray-900">
                Activity Notification
              </Text>
              <Text className="text-gray-500 text-lg">
                Get daily Activity content.
              </Text>
            </View>
            <Switch
              value={activityNotification}
              onValueChange={setActivityNotification}
              trackColor={{ false: "#fff", true: "#0077B6" }}
            />
          </View>
        </View>

        {/* Divider */}
        <View className="h-[1px] bg-gray-200 my-6 mx-8" />

        {/* Promo Offers */}
        <View className="px-8">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-xl font-semibold text-gray-900">
                Promo offers
              </Text>
              <Text className="text-gray-500 text-lg">
                Notify me about special offers.
              </Text>
            </View>
            <Switch
              value={promoOffers}
              onValueChange={setPromoOffers}
              trackColor={{ false: "#fff", true: "#0077B6" }}
            />
          </View>
        </View>

        {/* Save Button */}
        <View className="mt-12 sm:mt-10 w-full px-8">
        <GradientButton
            className="w-full"
            fontClassName="font-nunitosans-bold text-xl sm:text-2xl text-white"
            text="Save"
            onPress={() => console.log('Saved')}
            colors={['#12602F', '#6FAC2C']}
            start={[0, 0]}
            end={[0, 1]}
        />
        </View>
      </ScrollView>
    </View>
  );
}
