import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';

export default function GradientButton({
  text = 'Button',
  className = 'w-full',
  fontClassName = 'font-nunitosans-bold text-2xl text-white',
  onPress = () => {},
  colors = ['#12602F', '#6FAC2C'],
  start = [0, 0],
  end = [1, 0],
  style = {},       // extra styles if needed
}) {
  return (
    <TouchableOpacity className={className}
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        ...style,
      }}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text className={`${fontClassName} tracking-wide p-5 relative zindex-10`}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
