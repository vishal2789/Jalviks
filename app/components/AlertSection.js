import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import AlertBox from './AlertBox'
import SectionTitle from './SectionTitle'

const AlertSection = () => {
  return (
    <View className="w-full bg-white py-6">
      <SectionTitle title="Alerts" seeAll onSeeAll={() => { console.log("See All Pressed") }} />
      <View className="mx-7">
        <View className="my-4">
            <AlertBox
            imageSrc={require('../../assets/images/icon-growth.png')}
            title="Please Update growth Stage: Plot 2"
            description="This is dummy text will be replaced with original content."
            icon={<Feather name="arrow-up-right" size={24} color="black" />}
            backgroundColor="bg-[#12602F]/10"
            borderColor='border-[#12602F]/20'
            fontColor='text-[#12602F]'
            />
        </View>
        <View className="my-4">
            <AlertBox
            imageSrc={require('../../assets/images/icon-error.png')}
            title="Pest Spray : Plot1"
            description="This is dummy text will be replaced with original content."
            icon={<Feather name="arrow-up-right" size={24} color="black" />}
            backgroundColor="bg-[#BA413F]/10"
            borderColor='border-[#BA413F]/20'
            fontColor='text-[#BA413F]'
            />
        </View>
        <View className="my-4">
            <AlertBox
            imageSrc={require('../../assets/images/icon-irrigation.png')}
            title="Irrigation : Farm 3"
            description="This is dummy text will be replaced with original content."
            icon={<Feather name="arrow-up-right" size={24} color="black" />}
            backgroundColor="bg-[#0B7FBA]/10"
            borderColor='border-[#0B7FBA]/20'
            fontColor='text-[#0B7FBA]'
            />
        </View>
      </View>
    </View>
  )
}

export default AlertSection