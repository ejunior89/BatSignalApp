import { StyleSheet } from 'react-native';

const formScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, 
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10, 
    },
    button: {
        backgroundColor: 'yellow',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 10, 
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center', 
        fontWeight: 'bold',
    },
});

export default formScreenStyles;
