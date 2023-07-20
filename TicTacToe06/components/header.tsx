import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Button from './Button';
import Icons from './Icons';

export default function Header() {
  return (
    <View className="flex flex-row items-center mx-4">
      <View className="flex flex-row items-center">
        <View>
          <Icons name="circle" />
        </View>
        <View className="ml-2">
          <Icons name="cross" />
        </View>
      </View>
      <Button className="h-4 bg-black -bottom-1">
        <Pressable className="px-2 py-1.5 bg-gray-300 rounded-md">
          <Icons name="replay" />
        </Pressable>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
