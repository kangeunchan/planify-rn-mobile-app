import React from 'react';
import { View } from 'react-native';
import {ProgressBarProps} from "../types/ProgressBar.types.ts";
import styles from "../styles/ProgressBar.styles.ts";

const ProgressBar: React.FC<ProgressBarProps> = ({
                                                     progress,
                                                     width = 300,
                                                     height = 10,
                                                     backgroundColor = '#7FB0FF',
                                                     fillColor = '#3A86FF',
                                                 }) => {
    const fillWidth = (progress / 100) * width;

    return (
        <View style={[styles.container, { width, height, backgroundColor }]}>
            <View style={[styles.fill, { width: fillWidth, backgroundColor: fillColor }]} />
        </View>
    );
};

export default ProgressBar;