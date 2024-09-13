import React from 'react';
import { LoginButtonProps } from "../types/LoginButton.types.ts";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { styles } from "../styles/LoginButton.styles.ts";
import AccountPrimaryButton from "../../../../atoms/button/components/AccountPrimaryButton.tsx";

const LoginButton: React.FC<LoginButtonProps> = ({ text, onButtonPress, onTextPress }) => {
    return (
        <SafeAreaView>
            <View>
                <View style={styles.buttonContainer}>
                    <AccountPrimaryButton
                        title={'로그인'}
                        onPress={onButtonPress ? onButtonPress : () => {}}
                    />
                </View>
                <View style={styles.textButtonContainer}>
                    <TouchableOpacity onPress={onTextPress ? onTextPress : () => {}}>
                        <Text style={styles.textButton}>{text}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginButton;