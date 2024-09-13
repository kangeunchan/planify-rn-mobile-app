import React from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';
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
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>로그인</Text>
                </View>
                <View>
                    <LoginInput/>
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
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 100,
        marginVertical: 30,
        color: '#3A86FF'
    }
});

export default LoginPage;