import React from 'react';
import AccountPrimaryInput from "../../../../atoms/input/components/AccountPrimaryInput.tsx";
import { LoginInputProps } from "../types/LoginInput.types.ts";
import { SafeAreaView, View } from "react-native";
import { styles } from "../styles/LoginInput.styles.ts";

const LoginInput: React.FC<LoginInputProps> = ({  }) => {
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
                <View>
                    <AccountPrimaryInput
                        label={'비밀번호'}
                        placeholder={'비밀번호를 입력하세요.'}
                        key={'password'}
                        isNotNull={true}
                        secureTextEntry={true}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginInput;