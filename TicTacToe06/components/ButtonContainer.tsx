import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {twMerge} from 'tailwind-merge';
type ButtonProps = PropsWithChildren<{
  children: JSX.Element;
  style: string;
  containerStyle?: string;
}>;

export default function ButtonContainer({
  children,
  style,
  containerStyle,
}: ButtonProps): JSX.Element {
  return (
    <View
      className={twMerge('flex items-center justify-center', containerStyle)}>
      {children}
      <View
        className={twMerge(
          'absolute w-full h-5 rounded-md -z-30 ',
          style,
        )}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
