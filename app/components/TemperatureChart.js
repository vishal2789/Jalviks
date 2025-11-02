import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const TemperatureChart = () => {
  const data = [
    { value: 2, label: "Mon", showDataPoint: true },
    { value: 4, label: "Tue" },
    { value: 3, label: "Wed" },
    { value: 6, label: "Thu" },
    { value: 5, label: "Fri", showDataPoint: true },
    { value: 5, label: "Sat" },
    { value: 2, label: "Sun" },
  ];

  return (
    <View className="bg-white rounded-2xl border border-black p-4">
      {/* Header */}
      <View className="flex-row items-center mb-4">
        <Feather name="thermometer" size={20} color="#3B82F6" />
        <Text className="text-gray-800 text-base font-semibold ml-2">
          Temperature
        </Text>
      </View>

      {/* Y-axis labels */}
      <View className="flex-row justify-between mb-2 px-1">
        <Text className="text-gray-500 text-xs">10°</Text>
        <Text className="text-gray-800 text-sm font-semibold">3°</Text>
      </View>

      {/* Chart */}
      <View className="-mx-5">
        <LineChart
          data={data}
          curved
          areaChart
          startFillColor="rgba(216, 64, 64, 0.32)"
          endFillColor="rgba(64, 203, 216, 0.30)"
          startOpacity={0.3}
          endOpacity={0.2}
          color="#A78BFA"
          thickness={3}
          hideDataPoints
          dataPointsColor="#EC4899"
          dataPointsRadius={5}
          textColor1="gray"
          textFontSize={12}
          yAxisColor="transparent"
          xAxisColor="transparent"
          hideRules={false}
          rulesType="solid"             // "solid" | "dashed" | "dotted"
          rulesColor="#E5E7EB"          // Tailwind's gray-200
          rulesThickness={1}
          noOfSections={3}
          maxValue={10}
          stepValue={5}
          // ✅ tweak spacing for perfect edge alignment
          initialSpacing={0}   // small padding to prevent cut-off
          endSpacing={0}      // pull chart end closer (remove right gutter)
          spacing={51}
          textShiftY={-2}
          textShiftX={-5}
          pointerConfig={{
            pointerStripColor: "#EC4899",
            pointerStripWidth: 3,
            pointerStripHeight: 120,
            strokeDashArray: [2, 4],
            pointerColor: "#EC4899",
            radius: 5,
            pointerLabelWidth: 50,
            pointerLabelHeight: 50,
            activatePointersOnLongPress: false,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => (
              <View className="bg-white rounded-lg p-2 border border-gray-200">
                <Text className="text-gray-800 text-sm font-semibold">
                  {items[0].value}°
                </Text>
              </View>
            ),
          }}
        />
      </View>

      {/* Bottom labels (aligned on one row) */}
      <View className="flex-row justify-between mt-2 px-1">
        <Text className="text-gray-500 text-xs">0°</Text>
        <Text className="text-gray-500 text-xs">-10°</Text>
      </View>
    </View>
  );
};

export default TemperatureChart;
