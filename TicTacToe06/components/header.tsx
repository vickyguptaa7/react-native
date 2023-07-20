import React, {PropsWithChildren} from 'react';
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import ButtonContainer from './ButtonContainer';
import Icons from './Icons';

type HeaderProps = PropsWithChildren<{
  turn: number;
  resetGrid: (event: GestureResponderEvent) => void;
}>;

export default function Header({turn, resetGrid}: HeaderProps): JSX.Element {
  return (
    <View className="flex flex-row items-center justify-between ">
      <View className="flex flex-row items-center">
        <View className="">
          <Icons name="cross" size={42} />
        </View>
        <View className="ml-1">
          <Icons name="circle" size={30} />
        </View>
      </View>
      <View className="">
        <View className="bg-[#1F3540] rounded-md -bottom-0.5 px-2 py-1.5 flex flex-row items-center justify-center">
          {turn == 1 ? (
            <View className="w-4 h-4 rounded-full border-[3px] border-[#f0b239]" />
          ) : (
            <Icons name="cross" size={16} />
          )}
          <Text className="ml-1 font-semibold tracking-widest text-gray-300 text-md">
            TURN
          </Text>
        </View>
        <View className="absolute w-full h-5 bg-[#10212A] rounded-md -bottom-1.5 -z-30 "></View>
      </View>
      <ButtonContainer style="bg-gray-500 -bottom-0.5 ">
        <Pressable
          className="px-3 py-2 bg-gray-300 rounded-md"
          onPress={resetGrid}>
          <Icons name="replay" size={16} />
        </Pressable>
      </ButtonContainer>
    </View>
  );
}
