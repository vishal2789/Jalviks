import { Text, TouchableOpacity, View } from "react-native";

const WeeklyIrrigationSelector = ({ selectedDay, onSelectDay, days }) => {
  

  return (
    <View className="items-start my-8 mb-10">
      <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-4">
        Weekly Irrigation Date (Days per week)
      </Text>

      <View className="flex-row justify-center mb-3">
        {days.map((day) => {
          const isSelected = selectedDay === day;
          return (
            <TouchableOpacity
              key={day}
              onPress={() => onSelectDay(day)}
              className={`p-3 rounded-full mx-1 items-center justify-center flex-1 ${
                isSelected
                  ? "bg-[#EDFCFF] border-2 border-[#0077B6]/40"
                  : "bg-white border border-white"
              }`}
              style={{
                elevation: 3,
                shadowColor: "#379ADC",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
            >
              <Text
                className={`text-xl font-semibold text-black`}
              >
                {day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {selectedDay && (
        <Text className="mt-2 mb-2 text-[#161616]/70 font-nunitosans-regular text-lg">
          {selectedDay} Day(s) per week
        </Text>
      )}
    </View>
  );
};

export default WeeklyIrrigationSelector;
