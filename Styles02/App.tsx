import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ActionCards from './components/ActionCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FlatCards from './components/FlatCards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ContactList />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
