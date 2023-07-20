import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/header'

export default function App() {
  return (
    <SafeAreaView className='bg-[#192a33] w-full h-full p-4'>
      <Header/>
      <Text>App</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})