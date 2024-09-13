import React from 'react';
import { ImageBackground, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./SignUpPage.styles.ts";
import SignUpInput from "../../components/signup/input/components/SignUpInput.tsx";
import SignUpButton from "../../components/signup/button/components/SignUpButton.tsx";
import TermsButton from "../../components/signup/button/components/TermsButton.tsx";

const SignUpPage: React.FC = () => {
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
                    <Text style={styles.title}>회원가입</Text>
                    <SignUpInput/>
                    <View style={styles.termsContainer}>
                        <View>
                            <Text style={styles.termsTitle}>이용약관에 동의하십니까?</Text>
                        </View>
                        <TermsButton isNotNull={true}/>
                        <TermsButton isNotNull={true}/>
                        <TermsButton isNotNull={true}/>
                        <TermsButton isNotNull={true}/>
                    </View>
                </View>

                <View>
                    <SignUpButton
                        text="계정이 있으신가요?"
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default SignUpPage;