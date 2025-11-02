import { Text, TextInput, View } from 'react-native'

const InputComponant = ({label = "", value = "", placeholder = "", onChangeText = "", editable = true, note = "", keyboardType = "", className="", multiline=false, numberOfLines=1}) => {
  return (
    <View>
        <Text className="text-[#161616]/70 font-nunitosans-regular text-lg mb-2">{label}
        {note ? (
            <Text className="text-lg font-nunitosans-regular text-[#5A8B4C]"> {note}</Text>
        ) : null}
        </Text>
        <TextInput
            className={`border border-[#BDE0E6] rounded-xl px-6 mb-6 text-xl py-4 font-nunitosans-regular text-[#5B5B5B] ${className} ${
                editable ? 'bg-white' : 'bg-[#FFFFFF]/20'
            }`}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            editable = {editable}
            keyboardType = {keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            style={{
                elevation: 3,
                shadowColor: "#379ADC",
                shadowOffset: { width: 1, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 7.84,
            }}
        />
    </View>
  )
}

export default InputComponant