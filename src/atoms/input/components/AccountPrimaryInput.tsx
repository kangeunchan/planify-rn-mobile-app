import React from 'react';
import { TextInputProps, View, TextInput, Text } from 'react-native';
import { styles } from "../styles/AccountPrimaryInput.styles.ts";

interface AccountPrimaryInputProps extends TextInputProps {
    label?: string;
    isNotNull?: boolean;
}

const AccountPrimaryInput: React.FC<AccountPrimaryInputProps> = ({ label, isNotNull, placeholder, ...props }) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                {isNotNull && <Text style={styles.required}>*</Text>}
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                {...props}
            />
        </View>
    );
};

export default AccountPrimaryInput;
