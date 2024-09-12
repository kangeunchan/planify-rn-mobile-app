import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    label: {
        color: '#3181ff',
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: '400',
    },

    required: {
        color: 'red',
        fontSize: 15,
        marginTop: -5,
    },

    input : {
        width: 324,
        height: 60,
        zIndex: 1,

        color: '#3181ff',
        fontSize: 13,
        fontFamily: 'Inter',

        backgroundColor: 'rgba(255,255,255,0.3)',

        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#3181FF',

        borderRadius: 7,

        paddingVertical: 15,
        paddingHorizontal: 15,
    },
});
