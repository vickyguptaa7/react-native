import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{name: string; size: number}>;

export default function Icons({name, size}: IconProps): JSX.Element {
  switch (name) {
    case 'circle':
      return (
        <Icon
          name="circle-thin"
          style={{
            borderColor: '#f0b239',
            borderWidth: 6,
            borderRadius: 50,
            width: size,
            height: size,
          }}
          color="#f0b239"
          size={size}
        />
      );
    case 'cross':
      return <Icon name="times" color="#30C4BE" style={{paddingHorizontal:2}} size={size} />;
    case 'replay':
      return <Icon name="repeat" color="#1d333e" size={size} />;
    default:
      return <View className='px-4 py-4' />;
  }
}

const styles = StyleSheet.create({});
