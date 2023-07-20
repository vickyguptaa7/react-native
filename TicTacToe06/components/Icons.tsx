import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{name: string}>;

export default function Icons({name}: IconProps): JSX.Element {
  switch (name) {
    case 'circle':
      return (
        <Icon
          name="circle-thin"
          style={{
            borderColor: '#f0b239',
            borderWidth: 6,
            borderRadius: 50,
            width: 30,
            height: 30,
          }}
          color="#f0b239"
          size={29}
        />
      );
    case 'cross':
      return <Icon name="times" color="#30c4be" size={42} />;
    case 'replay':
      return <Icon name="repeat" color="#1d333e" size={16} />;
    default:
      return <></>;
  }
}

const styles = StyleSheet.create({});
