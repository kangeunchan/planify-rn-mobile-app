import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TempTestPage from './src/pages/test/TestPage.tsx'
import LoginPage from "./src/pages/login/LoginPage.tsx";
import SignUpPage from "./src/pages/signup/SignUpPage.tsx";
import LoadingPage from "./src/pages/loading/LoadingPage.tsx";

export type RootStackParamList = {
    Test : undefined;
    Loading : undefined;
    Login : undefined;
    SignUp : undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Test" component={TempTestPage} />
                <Stack.Screen name={"Loading"} component={LoadingPage}/>
                <Stack.Screen name="SignUp" component={SignUpPage}/>
                <Stack.Screen name="Login" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;