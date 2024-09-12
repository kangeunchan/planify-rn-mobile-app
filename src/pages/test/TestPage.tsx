import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import AccountPrimaryButton from '../../atoms/button/components/AccountPrimaryButton.tsx';

const TempTestPage: React.FC = () => {
    const handleLoginPress = () => {
        console.log('Login button pressed');
    };

    const handleSignupPress = () => {
        console.log('Signup button pressed');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>임시 테스트 페이지</Text>
                <AccountPrimaryButton title="로그인하기" onPress={handleLoginPress} />
                <View style={styles.spacer} />
                <AccountPrimaryButton title="회원가입" onPress={handleSignupPress} />
            </View>
        </SafeAreaView>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    spacer: {
        height: 20
    },
});

export default TempTestPage;
