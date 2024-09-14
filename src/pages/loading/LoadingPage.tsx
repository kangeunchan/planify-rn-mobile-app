import React from 'react';
import {Dimensions, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from "../../atoms/logo/components/Logo.tsx";
import ProgressBar from "../../atoms/progressbar/components/ProgressBar.tsx";
import styles from "./LoadingPage.styles.ts";

const LoadingPage: React.FC = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View>
                <Logo/>
                <View>
                    <ProgressBar progress={80} width={193} height={15} />
                </View>
            </View>
        </View>
    );
};

export default LoadingPage;