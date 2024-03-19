import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import FormScreen from './src/screens/FormScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          options={{
            title: 'Bat Signal',
            headerShown: false 
          }}
        >
          {({ navigation }) => <MainScreen navigateToFormScreen={() => navigation.navigate('FormScreen')} />}
        </Stack.Screen>
        <Stack.Screen name="FormScreen" component={FormScreen} options={{ title: 'Formulário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
