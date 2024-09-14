import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { styles } from "../styles/TermsButton.styles.ts";

import {TermsButtonProps} from "../types/TermsButton.types.ts";
import TermsPrimaryButton from "../../../../atoms/button/components/TermsPrimaryButton.tsx";

const TermsButton: React.FC<TermsButtonProps> = ({ onClick, isNotNull }) => {
    return (
        <SafeAreaView style={styles.buttonContainer}>
            <TermsPrimaryButton title={'개인정보처리방침'} onPress={onClick} isNotNull={isNotNull}/>
        </SafeAreaView>
    );
};

export default TermsButton;