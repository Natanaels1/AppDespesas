import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    containerLogo: {
        //height: '45%',
    },
    containerBtn: {
        backgroundColor: '#7037cd',
        //padding: 20,
        height: 60,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 10,
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        marginBottom: 5,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        borderRadius: 40,
        height: 60,
        fontSize: 24
    }
})