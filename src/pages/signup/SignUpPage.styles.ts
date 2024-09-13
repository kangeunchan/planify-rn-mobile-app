import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    topContainer: {
        alignItems: 'center',
        width: '100%',
    },
    termsTitleContainer: {
        width: 325,
    },
    termsContainer: {
        marginLeft: 20,
        marginTop: 10
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 100,
        marginVertical: 30,
        color: '#3A86FF'
    },
    termsTitle : {
        marginBottom: 13,
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3A86FF'
    },
});

export default styles