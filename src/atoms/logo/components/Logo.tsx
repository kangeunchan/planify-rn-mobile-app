import React from 'react';
import { Text, View } from 'react-native';
import { LogoProps } from "../types/Logo.types.ts";

import LogSvg from "../../../assets/image/logo/logo.svg";
import {styles} from "../styles/Logo.styles.ts";

const Logo: React.FC<LogoProps> = ({}) => {
    return (
        <View style={styles.container}>
            <LogSvg/>
            <View>
                <Text style={styles.title}>Planify</Text>
            </View>
        </View>
    );
};

export default Logo;
