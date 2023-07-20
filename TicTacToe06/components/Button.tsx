import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {twMerge} from 'tailwind-merge';
type ButtonProps = PropsWithChildren<{
  children: JSX.Element;
  className: string;
}>;

export default function Buttons({
  children,
  className,
}: ButtonProps): JSX.Element {
  return (
    <View className="flex items-center justify-center ">
      {children}
      <View
        className={twMerge(
          'absolute w-full h-full rounded-md -z-30 ',
          className,
        )}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
