import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import AlertSection from '../components/AlertSection'
import HomeSectionOne from '../components/HomeSectionOne'
import HomeSurvey from '../components/HomeSurvey'
import SectionTitle from '../components/SectionTitle'
import WeatherCard from '../components/WeatherCard'
import WeatherForecastScreen from '../components/WeatherForecastScreen'
import WeatherForecastTwo from '../components/WeatherForecastTwo'

//Vishal Sir committ 

const Home = () => {
  return (
    <ScrollView className='bg-white flex-1 h-full w-full'>
        <View className='bg-white mb-24'>
            <HomeSectionOne />
            <View className="w-full py-10 relative overflow-hidden">
                <Image
                    source={require('../../assets/images/weather_one_bg.png')} // 👈 replace with your illustration
                    resizeMode="contain"
                    className=" absolute right-0 top-[-40px] z-0"
                >

                </Image>
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
  )
}

export default Home