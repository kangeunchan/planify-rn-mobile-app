import React from 'react';
import { TextInputProps, View, TextInput, Text } from 'react-native';
import { styles } from "../styles/AccountPrimaryInput.styles.ts";
import {AccountPrimaryInputProps} from "../types/AccountPrimaryInput.types.ts";

const AccountPrimaryInput: React.FC<AccountPrimaryInputProps> = ({ label, isNotNull, placeholder, secureTextEntry, ...props }) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                {isNotNull && <Text style={styles.required}>*</Text>}
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                {...props}
            />
        </View>
    );
};

export default AccountPrimaryInput;
