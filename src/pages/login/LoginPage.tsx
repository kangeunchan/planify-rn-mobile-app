import React from 'react';
import { ImageBackground, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginInput from "../../components/login/input/components/LoginInput.tsx";
import LoginButton from "../../components/login/button/components/LoginButton.tsx";
import styles from "./LoginPage.styles.ts";

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

export default LoginPage;