import React from 'react';
import AccountPrimaryInput from "../../../../atoms/input/components/AccountPrimaryInput.tsx";
import { LoginInputProps } from "../types/SignUpInput.types.ts";
import { SafeAreaView, View } from "react-native";
import { styles } from "../styles/SignUpInput.styles.ts";

const SignUpInput: React.FC<LoginInputProps> = ({  }) => {
    return (
        <SafeAreaView>
            <View>
                <View style={styles.inputContainer}>
                    <AccountPrimaryInput
                        label={'이메일'}
                        placeholder={'이메일을 입력하세요.'}
                        key={'email'}
                        isNotNull={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AccountPrimaryInput
                        label={'생년월일'}
                        placeholder={'YY - MM - DD.'}
                        key={'password'}
                        isNotNull={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AccountPrimaryInput
                        label={'비밀번호'}
                        placeholder={'비밀번호를 입력하세요.'}
                        key={'password'}
                        isNotNull={true}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AccountPrimaryInput
                        label={'비밀번호 확인'}
                        placeholder={'비밀번호를 입력하세요.'}
                        key={'check-password'}
                        isNotNull={true}
                        secureTextEntry={true}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUpInput;