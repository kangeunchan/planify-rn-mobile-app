import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { styles } from '../styles/TermsPrimaryButton.styles.ts';
import { TermsButtonProps } from "../types/TermsPrimaryButton.types.ts";

interface ExtendedTermsButtonProps extends TermsButtonProps {
    isNotNull?: boolean;
}

const TermsPrimaryButton: React.FC<ExtendedTermsButtonProps> = ({ title, isNotNull = false }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handlePress = () => {
        setIsChecked(!isChecked);
    };

    const iconColor = isChecked ? '#3181FF' : '#DCDCDC';
    const textColor = isChecked ? '#3181FF' : '#DCDCDC';

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <View style={styles.iconContainer}>
                <Svg width={14} height={11} viewBox="0 0 14 11" fill="none">
                    <Path
                        d="M2 6.28571L4.85714 9.14286L12 2"
                        stroke={iconColor}
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text, { color: textColor }]}>
                    {title}
                </Text>
                {isNotNull && <Text style={styles.required}>*</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default TermsPrimaryButton;