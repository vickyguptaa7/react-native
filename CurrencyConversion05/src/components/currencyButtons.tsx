import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type currencyButtonsProps = PropsWithChildren<Currency>;

export default function CurrencyButtons(
  props: currencyButtonsProps,
): JSX.Element {
  return (
    <View className="flex p-1 w-28 m-2 items-center justify-center bg-white shadow shadow-black rounded-lg">
      <Text className="text-3xl">{props.flag}</Text>
      <Text className="text-md font-semibold">{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
