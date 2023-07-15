import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import * as Yup from 'yup';

const PaswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(8, 'Should be min of 8 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberCharacters = '0123456789';
    const symbolCharacters = '!@#$%^&*()_+';
    if (lowerCase) {
      characterList += lowerCaseCharacters;
    }
    if (upperCase) {
      characterList += upperCaseCharacters;
    }
    if (number) {
      characterList += numberCharacters;
    }
    if (symbol) {
      characterList += symbolCharacters;
    }
    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    console.log(passwordResult, characterList);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(characterIndex);
    }
    return password;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumber(false);
    setSymbol(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" className="m-4">
      <SafeAreaView>
        <View>
          <Text className="mt-4 mb-8 text-3xl font-bold">
            Password Generator
          </Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PaswordSchema}
            onSubmit={values => generatePasswordString(+values.passwordLength)}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View className="flex flex-row items-center justify-between m-1 mb-8">
                  <View className="">
                    <Text className="text-lg">Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text className="absolute text-red-500 -bottom-8">
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    className="px-2.5 py-1.5 border-2 border-cyan-400"
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Enter password length"
                    keyboardType="numeric"
                  />
                </View>
                <View className="flex flex-row items-center justify-between mx-1 mt-4">
                  <Text className="text-lg">Include Lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#26C6DA"
                  />
                </View>
                <View className="flex flex-row items-center justify-between mx-1 mt-4">
                  <Text className="text-lg">Include Uppercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#26C6DA"
                  />
                </View>
                <View className="flex flex-row items-center justify-between mx-1 mt-4">
                  <Text className="text-lg">Include Number</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor="#26C6DA"
                  />
                </View>
                <View className="flex flex-row items-center justify-between mx-1 mt-4">
                  <Text className="text-lg">Include Symbol</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbol}
                    onPress={() => setSymbol(!symbol)}
                    fillColor="#26C6DA"
                  />
                </View>

                <View className="flex flex-row gap-4 mt-2 justify-evenly">
                  <TouchableOpacity
                    className="px-4 py-2 bg-cyan-400"
                    disabled={!isValid}
                    onPress={() => handleSubmit()}>
                    <Text className="text-lg font-bold text-white">
                      Generate Password
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="px-4 py-2 bg-cyan-400"
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text className="text-lg font-bold text-white">
                      Reset Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View className="flex flex-row items-center justify-center w-full h-16 mt-8 ">
            <Text className="text-lg">Passowrd : </Text>
            <Text className="text-lg" selectable={true}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
