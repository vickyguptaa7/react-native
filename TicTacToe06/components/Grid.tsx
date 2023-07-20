import {PropsWithChildren} from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import ButtonContainer from './ButtonContainer';
import Icons from './Icons';

type GridProps = PropsWithChildren<{
  grid: Array<{id: number; value: number}>;
  updateGrid: (id: number) => void;
}>;

export default function Grid({grid, updateGrid}: GridProps): JSX.Element {
  return (
    <View className="mx-auto mt-16">
      <FlatList
        numColumns={3}
        data={grid}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ButtonContainer
            style="bg-[#10212A] -bottom-0.5"
            containerStyle="m-3 p-1">
            <Pressable
              className="px-4 py-3 bg-[#1f353f] rounded-md "
              onPress={() => updateGrid(item.id)}>
              <Icons
                name={
                  item.value == 1
                    ? 'circle'
                    : item.value == 2
                    ? 'cross'
                    : 'null'
                }
                size={item.value == 1 ? 32 : item.value == 2 ? 34 : 32}
              />
            </Pressable>
          </ButtonContainer>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
