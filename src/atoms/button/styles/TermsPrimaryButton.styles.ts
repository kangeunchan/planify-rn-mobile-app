import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button : {
        justifyContent: "flex-start",
        alignItems: "center",
        width: 344,
        height: "auto",
        flexDirection: 'row',
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 15,
        color: '#3181FF',
    },
    iconContainer: {
        marginRight: 8,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    required: {
        color: 'red',
        fontSize: 15,
        marginTop: -5,
    },

});
