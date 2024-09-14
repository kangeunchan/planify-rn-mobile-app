import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TempTestPage from './src/pages/test/TestPage.tsx'
import LoginPage from "./src/pages/login/LoginPage.tsx";

export type RootStackParamList = {
    Test : undefined;
    Login : undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Test" component={TempTestPage} />
                <Stack.Screen name="Login" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;