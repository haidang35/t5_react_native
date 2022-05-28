import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Hello from './src/screens/Hello';
import {Button, Text, StyleSheet, View, Image} from 'react-native';
import Flex from './src/screens/Flex';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen
            name="HelloScreen"
            component={Hello}
            options={{
              headerTitle: props => (
                <Text style={styles.helloScreenTitle}>Hello</Text>
              ),
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="red"
                />
              ),
              headerStyle: styles.headerStyle,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="FlexScreen" component={Flex} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  helloScreenTitle: {
    color: 'red',
    fontSize: 25,
  },
  headerBackground: {
    backgroundColor: 'red',
  },
  headerStyle: {
   backgroundColor: 'yellow'
  },
});

export default App;
