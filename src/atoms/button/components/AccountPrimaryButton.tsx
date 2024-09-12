import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from '../styles/AccountPrimaryButton.styles.ts';
import { ButtonProps } from '../types/AccountPrimaryButton.types.ts';

import AccountIcon from '../../../assets/image/account/account.svg';

const AccountPrimaryButton: React.FC<ButtonProps> = ({ title, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton]}
            onPress={onPress}
            disabled={disabled}
        >
            <AccountIcon style={styles.icon} width={16} height={16}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AccountPrimaryButton;
