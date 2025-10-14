import { ScrollView, View } from "react-native";
import CommonTitleBox from "../components/CommonTitleBox";
import TemperatureChart from "../components/TemperatureChart";

const Weather = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <CommonTitleBox title="Settings" />


      <ScrollView className="px-10 pr-16 mt-5 mb-12">
        <TemperatureChart />
      </ScrollView>
    </View>
  )
}

export default Weather