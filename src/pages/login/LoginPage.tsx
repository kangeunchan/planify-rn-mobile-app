import React from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginInput from "../../components/login/input/components/LoginInput.tsx";
import LoginButton from "../../components/login/button/components/LoginButton.tsx";

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
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>로그인</Text>
                    <LoginInput/>
                </View>
                <View style={styles.bottomContainer}>
                    <LoginButton
                        text="아직 계정이 없으신가요?"
                    />
                </View>
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
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    topContainer: {
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 100,
        marginVertical: 30,
        color: '#3A86FF'
    },
    bottomContainer: {
    }
});

export default LoginPage;