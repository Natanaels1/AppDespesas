import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    containerForm: {
        width: '100%',
        height: '60%',
        borderRadius: 40,
        position: 'absolute',
        ///backgroundColor: '#fff',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 120
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        borderBottomWidth: 2,
        height: 60,
        fontSize: 20,
        borderRadius: 30
    },
    button: {
        width: '100%',
        borderRadius: 40,
        height: 60,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple'
    },
    titleBtn: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    }
})