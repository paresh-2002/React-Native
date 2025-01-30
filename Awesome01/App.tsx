import React from 'react';
import {View, Button, SafeAreaView, Text, Alert} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('This is Simple Button Alert')}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
