import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import ButtonContainer from './components/ButtonContainer';
import Grid from './components/Grid';
import Icons from './components/Icons';
import Header from './components/header';

const defaultGrid = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },

  {
    id: 3,
    value: 0,
  },
  {
    id: 4,
    value: 0,
  },
  {
    id: 5,
    value: 0,
  },
  {
    id: 6,
    value: 0,
  },
  {
    id: 7,
    value: 0,
  },
  {
    id: 8,
    value: 0,
  },
  {
    id: 9,
    value: 0,
  },
];

export default function App() {
  // 1 = circle , 2 = cross
  const [turn, setTurn] = React.useState(1);

  // 0 = empty , 1 = circle , 2 = cross
  const [grid, setGrid] = React.useState(defaultGrid);

  // 0 = nothing, 1 = winner, 2 = draw
  const [isWinner, setIsWinner] = React.useState(0);

  const [turnNo, setTurnNo] = React.useState(0);

  const checkWinner = (grid: Array<{id: number; value: number}>) => {
    const winner = [
      [1, 2, 3], //row
      [4, 5, 6], //row
      [7, 8, 9], //row
      [1, 4, 7], //col
      [2, 5, 8], //col
      [3, 6, 9], //col
      [1, 5, 9], //diagonal
      [3, 5, 7], //diagonal
    ];

    for (let i = 0; i < winner.length; i++) {
      let a = winner[i][0] - 1,
        b = winner[i][1] - 1,
        c = winner[i][2] - 1;
      if (
        grid[a].value != 0 &&
        grid[a].value == grid[b].value &&
        grid[b].value == grid[c].value
      ) {
        setIsWinner(1);
        return true;
      }
    }
    return false;
  };

  const updateGrid = (id: number) => {
    if (grid[id - 1].value != 0 || isWinner) return;
    const newGrid = grid.map(item => {
      return {
        ...item,
        value: item.id == id ? turn : item.value,
      };
    });
    setGrid(newGrid);
    if (checkWinner(newGrid)) return;
    setTurn(turn == 1 ? 2 : 1);
    setTurnNo(turnNo + 1);
    if (turnNo == 8) setIsWinner(2);
  };

  const resetGrid = () => {
    console.log('reset');
    setGrid(defaultGrid);
    setTurn(1);
    setIsWinner(0);
    setTurnNo(0);
  };

  return (
    <SafeAreaView className="bg-[#192a33] w-full h-full p-4">
      <Header turn={turn} resetGrid={resetGrid} />
      <Grid grid={grid} updateGrid={updateGrid} />
      {isWinner == 1 ? (
        <View className="flex items-center justify-center mt-12">
          <Icons name={turn == 1 ? 'circle' : 'cross'} size={30} />
          <Text className="mt-1 text-xl text-md">Won The Game!</Text>
          <ButtonContainer style="" containerStyle="mt-4">
            <Pressable
              className="px-4 py-2 bg-gray-300 rounded-md"
              onPress={resetGrid}>
              <Text className="font-semibold text-gray-700">Play Again!</Text>
            </Pressable>
          </ButtonContainer>
        </View>
      ) : isWinner == 2 ? (
        <View className="flex items-center justify-center mt-12">
          <Text className="mt-1 text-xl text-md">Game Draw!</Text>
          <ButtonContainer style="" containerStyle="mt-4">
            <Pressable
              className="px-4 py-2 bg-gray-300 rounded-md"
              onPress={resetGrid}>
              <Text className="font-semibold text-gray-700">Play Again!</Text>
            </Pressable>
          </ButtonContainer>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
