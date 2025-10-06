import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // or your icon lib
import { Text, View } from 'react-native';

const StatCard = ({ icon, title, value, delta, unit, deltaUnit, isUp }) => {
  return (
    <View 
        className="bg-white w-[46%] rounded-xl px-2 py-3 mx-2 my-5 flex-row items-center border border-gray-200 relative"
        style={{ shadowColor: '#000000', shadowOffset: { width: 3, height: 8 }, shadowOpacity: 0.1, shadowRadius: 5 }}>
      <View className="bg-blue-100 rounded-full p-2 mr-4">
        {icon}
      </View>

      <View className="">
        <Text className="text-lg text-[#0077B6] font-nunitosans-semibold mb-1">{title}</Text>
        <View className="flex-row items-end mb-2">
          <Text className="text-xl font-nunito-bold text-black">
            {value}
          </Text>
          <Text className="text-xs text-gray-500 ml-1">{unit}</Text>
          <Text className='ml-2 pt-3'>
            <Text className={`mx-2 ${isUp ? 'text-purple-500' : 'text-red-500'}`}>{isUp ? '▲' : '▼'} </Text>
            <Text className='font-nunitosans-semibold text-md text-black mx-2'>{delta} {deltaUnit}</Text>
          </Text>
        </View>

        
      </View>
    </View>
  );
};

export default function WeatherForecastScreen() {
  return (
    <View className="flex-row flex-wrap justify-between py-10 px-5">
      <StatCard
        icon={<FontAwesome5 name="wind" size={18} color="#3B82F6" />}
        title="Air Temperature"
        value="12"
        unit="km/h"
        delta="2"
        deltaUnit="km/h"
        isUp={false}
      />
      <StatCard
        icon={<MaterialIcons name="waves" size={18} color="#3B82F6" />}
        title="Pressure"
        value="720"
        unit="hpa"
        delta="32"
        deltaUnit="hpa"
        isUp={true}
      />
      <StatCard
        icon={<FontAwesome5 name="cloud-rain" size={18} color="#3B82F6" />}
        title="Rain chance"
        value="24%"
        delta="10%"
        isUp={true}
      />
      <StatCard
        icon={<MaterialIcons name="wb-sunny" size={18} color="#3B82F6" />}
        title="UV Index"
        value="2,3"
        delta="0.3"
        isUp={false}
      />
    </View>
  );
}
