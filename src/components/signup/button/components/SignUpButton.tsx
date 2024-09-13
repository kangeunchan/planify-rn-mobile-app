import React from 'react';
import { SignUpButtonProps } from "../types/SignUpButton.types.ts";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { styles } from "../styles/SignUpButton.styles.ts";
import AccountPrimaryButton from "../../../../atoms/button/components/AccountPrimaryButton.tsx";

const SignUpButton: React.FC<SignUpButtonProps> = ({ text, onButtonPress, onTextPress }) => {
    return (
        <SafeAreaView>
            <View>
                <View style={styles.buttonContainer}>
                    <AccountPrimaryButton
                        title={'회원가입'}
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

export default SignUpButton;