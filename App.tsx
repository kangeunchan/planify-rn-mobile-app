import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TempTestPage from './src/pages/test/TestPage.tsx'

export type RootStackParamList = {
    Test : undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Test" component={TempTestPage} />
                {/* 다른 스크린들을 여기에 추가할 수 있습니다 */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;