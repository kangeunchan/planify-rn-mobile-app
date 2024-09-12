import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginInput from "../../components/login/input/components/LoginInput.tsx";

const LoginPage: React.FC = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <ImageBackground
            source={require('../../../src/assets/image/account/background.png')}
            style={styles.background}
            blurRadius={20}
        >
            <View>
                <LoginInput/>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default LoginPage;