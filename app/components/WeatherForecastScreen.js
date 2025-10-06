import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageBackground, ScrollView, Text, View } from 'react-native';


const forecastData = [
  { date: 'Today', iconType: 'FontAwesome5', icon: 'cloud-sun', temp: 19 },
  { date: '6 Aug', iconType: 'FontAwesome5', icon: 'sun', temp: 22 },
  { date: '7 Aug', iconType: 'MaterialCommunityIcons', icon: 'weather-rainy', temp: 23 },
  { date: '8 Aug', iconType: 'MaterialCommunityIcons', icon: 'weather-partly-cloudy', temp: 22 },
  { date: '9 Aug', iconType: 'MaterialCommunityIcons', icon: 'white-balance-sunny', temp: 20 },
  { date: '7 Aug', iconType: 'MaterialCommunityIcons', icon: 'weather-rainy', temp: 23 },
  { date: '8 Aug', iconType: 'MaterialCommunityIcons', icon: 'weather-partly-cloudy', temp: 22 },
  { date: '9 Aug', iconType: 'MaterialCommunityIcons', icon: 'white-balance-sunny', temp: 20 },
];

// Helper to render correct icon
const getIconComponent = (type, name, isToday) => {
  const size = 28;
  const color = isToday ? '#FFFFFF' : '#0077B6';
  if (type === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }
  return <FontAwesome5 name={name} size={size} color={color} />;
};

export default function WeatherForecastScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/weather_two_bg.png')}
      resizeMode="cover"
      className="w-full"
    >
        <View className="items-center justify-center w-full py-4">

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pr-4 py-5">
            {forecastData.map((item, index) => {
            const isToday = item.date === 'Today';
            return (
                <View 
                    key={index} 
                    className={`w-24 h-44 mx-2 py-3 rounded-xl items-center justify-center ${isToday ? 'bg-[#0077B6]' : 'bg-white/20'}`}
                    style={{ shadowColor: '#000000', shadowOffset: { width: 3, height: 8 }, shadowOpacity: 0.45, shadowRadius: 5 }}
                >
                    <Text className={`text-lg font-nunito-semibold ${isToday ? 'text-white' : 'text-[#828282]'}`} style={{ shadowOpacity: 0 }}>
                        {item.date}
                    </Text>

                    <View className="my-6" style={{ shadowOpacity: 0 }}>
                        {getIconComponent(item.iconType, item.icon, isToday)}
                    </View>

                    <Text style={{ shadowOpacity: 0 }} className={`text-2xl font-nunito-bold ${isToday ? 'text-white' : 'text-gray-800'}`}>
                        {item.temp}°
                    </Text>
                </View>
            );
            })}
        </ScrollView>
        </View>
    </ImageBackground>
  );
}
