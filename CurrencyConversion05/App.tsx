import React from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import CurrencyButtons from './src/components/currencyButtons';
import {currencyByRupee} from './src/constants';

export default function App() {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [resultValue, setResultValue] = React.useState<string>('');
  const [targetCurrency, setTargetCurrency] = React.useState<string>('');

  const onButtonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#FFF',
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (isNaN(inputAmount)) {
      return Snackbar.show({
        text: 'Please enter a valid value to convert',
        backgroundColor: '#EA7773',
        textColor: '#FFF',
      });
    }
    const convertedValue = inputAmount * targetValue.value;
    const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
    setResultValue(result);
    setTargetCurrency(targetValue.name);
  };

  return (
    <>
      <StatusBar />
      <View className=' mt-24'>
        <View>
          <View className='flex items-center justify-center flex-row'>
            <Text className='text-black text-lg'>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode="always" //only for ios
              onChangeText={setInputValue}
              className='border-2 border-gray-300 rounded-lg w-64 h-10 p-2 m-2'
              keyboardType="numeric"
              placeholder="Enter amount in INR"
            />
          </View>
          {resultValue ? <Text className='text-center my-6 text-lg text-black'>{resultValue}</Text> : null}
        </View>
        <View className='flex items-center justify-center'>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable className={`${item.name===targetCurrency?'border-2 border-gray-300 rounded-lg':''}`} onPress={() => onButtonPressed(item)}>
                <CurrencyButtons {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
