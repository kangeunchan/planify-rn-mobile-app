import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import AccountPrimaryButton from '../../atoms/button/components/AccountPrimaryButton.tsx';
import AccountPrimaryInput from "../../atoms/input/components/AccountPrimaryInput.tsx";
import TermsPrimaryButton from "../../atoms/button/components/TermsPrimaryButton.tsx";

const TempTestPage: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleLoginPress = () => {
        console.log('Login button pressed');
        console.log('Input Value:', inputValue);
    };

    const handleSignupPress = () => {
        console.log('Signup button pressed');
    };

    const handleInputChange = (text: string) => {
        setInputValue(text);
        console.log('Input changed:', text);
    };

    return (
        <ImageBackground
            source={require('../../../src/assets/image/account/background.png')} // 로컬 이미지
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>임시 테스트 페이지</Text>

                    {/* 입력 필드 */}
                    <AccountPrimaryInput
                        label="아이디"
                        isNotNull={true}
                        placeholder="아이디를 입력하세요"
                    />

                    {/* 버튼들 */}
                    <AccountPrimaryButton title="로그인하기" onPress={handleLoginPress} />
                    <View style={styles.spacer} />
                    <AccountPrimaryButton title="회원가입" onPress={handleSignupPress} />

                    <TermsPrimaryButton title="개인정보처리방침" isNotNull={true} onPress={handleSignupPress}/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
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
        height: 20,
    },
    componentSpacing: {
        marginVertical: 10, // 각 컴포넌트 사이에 일정한 여백 추가
    },
});


export default TempTestPage;
