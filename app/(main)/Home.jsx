import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import AddFarmButton from '../components/AddFarmButton'
import AlertSection from '../components/AlertSection'
import HomeSectionOne from '../components/HomeSectionOne'
import HomeSurvey from '../components/HomeSurvey'
import SectionTitle from '../components/SectionTitle'
import WeatherCard from '../components/WeatherCard'
import WeatherForecastScreen from '../components/WeatherForecastScreen'
import WeatherForecastTwo from '../components/WeatherForecastTwo'

const Home = () => {
  return (
    <View className='flex-1 bg-white'>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className='bg-white'>
          <HomeSectionOne />
          <View className="w-full py-10 relative overflow-hidden">
            <Image
              source={require('../../assets/images/weather_one_bg.png')}
              resizeMode="contain"
              className="absolute right-0 top-[-40px] z-0"
            />
            <SectionTitle title="Today's Weather" seeAll onSeeAll={() => { console.log("See All Pressed") }} />
            <WeatherCard
              date="Today, 5th Aug 2025"
              temp={19}
              description="Rainy"
              high={33}
              low={23}
              location="abc area, Satara, Maharashtra"
            />
          </View>

          <WeatherForecastScreen />
          <WeatherForecastTwo />
          <HomeSurvey />
          <AlertSection />
        </View>
      </ScrollView>

      {/* Floating Button */}
      <View className="absolute bottom-36 right-8">
        <AddFarmButton />
      </View>
    </View>
  )
}

export default Home
