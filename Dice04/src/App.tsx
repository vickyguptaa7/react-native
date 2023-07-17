import React, {PropsWithChildren, useState} from 'react';
import {Image, ImageSourcePropType, Pressable, Text, Vibration, View} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceFive from '../assets/Five.png';
import DiceFour from '../assets/Four.png';
import DiceOne from '../assets/One.png';
import DiceSix from '../assets/Six.png';
import DiceThree from '../assets/Three.png';
import DiceTwo from '../assets/Two.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image className="w-64 h-64" source={imageUrl} />
    </View>
  );
};

export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDiceOnTap = () => {
    let random = Math.floor(Math.random() * 6) + 1;

    switch (random) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
    }
    // Vibration.vibrate(100);
    ReactNativeHapticFeedback.trigger('impactMedium', options);
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Dice imageUrl={diceImage} />
      <Pressable
        className="mt-4 px-8 py-2.5 border-2 border-[#7285d2] rounded-lg"
        onPress={rollDiceOnTap}>
        <Text className="text-lg text-[#7285d2]">ROLL THE DICE</Text>
      </Pressable>
    </View>
  );
}
