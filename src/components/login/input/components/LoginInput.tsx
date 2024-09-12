import React from 'react';


import AccountPrimaryInput from "../../../../atoms/input/components/AccountPrimaryInput.tsx";
import {LoginInputProps} from "../types/LoginInput.types.ts";
import {View} from "react-native";
import {styles} from "../styles/LoginInput.styles.ts";

const LoginInput: React.FC<LoginInputProps> = ({}) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <AccountPrimaryInput label={'이메일'} placeholder={'이메일을 입력하세요.'} key={'email'} isNotNull={true} />
            </View>
            <View>
                <AccountPrimaryInput label={'비밀번호'} placeholder={'비밀번호를 입력하세요.'} isNotNull={true} />
            </View>
        </View>
    );
};

export default LoginInput;
