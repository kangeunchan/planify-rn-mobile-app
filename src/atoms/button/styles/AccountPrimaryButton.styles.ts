import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        width: 344,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        backgroundColor: '#3181ff',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    disabledButton: {
        backgroundColor: '#a0a0a0',
    },
    icon : {
        marginRight: 5
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 21,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});