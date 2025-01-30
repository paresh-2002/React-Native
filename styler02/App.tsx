import { SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactsList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCard/>
          <ActionCard/>
          <ContactsList/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
