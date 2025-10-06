import { Image, Text, View } from 'react-native';

const AlertBox = ({
    backgroundColor = 'bg-gray-50',
    borderColor = 'border-gray-200',
    fontColor = 'text-black',
    imageSrc,
    title,
    description,
    icon,
}) => (
    <View className={`flex-row items-center ${backgroundColor} border ${borderColor} rounded-lg px-5 py-6 w-full`}>
        {/* Image Column */}
        <View className="w-12 h-12 items-center justify-center mr-5">
            {imageSrc && (
                <Image
                    source={typeof imageSrc === 'string' ? { uri: imageSrc } : imageSrc}
                    className="w-12 h-12 rounded-lg"
                    resizeMode="cover"
                />
            )}
        </View>
        {/* Title & Description Column */}
        <View className="flex-1">
            <Text className={`font-nunito-bold text-2xl mb-1 ${fontColor}`}>{title}</Text>
            <Text className="font-nunitosans-regular text-black text-lg">{description}</Text>
        </View>
        {/* Icon Column */}
        <View className="w-8 h-8 items-center justify-center ml-4">
            {icon}
        </View>
    </View>
);

export default AlertBox;
