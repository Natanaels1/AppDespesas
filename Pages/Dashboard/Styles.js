import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    containerHeader: {
        backgroundColor: 'purple',
        height: '20%',
        padding: 20,
        justifyContent: 'center',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: 10
    },
    containerBody: {
        height: '72%',
        padding: 20,
    },
    card: {
        width: '100%',
        height: 'auto',
        borderWidth: 2,
        borderRadius: 30,
        padding: 20,
        marginBottom: 15,
        borderColor: '#ccc',
        flexDirection: 'row', 
        alignItems:  'center',
        justifyContent: 'space-between',
    },
    containerFooter: {
        backgroundColor: '#fff',
        height: '12%',
        bottom: 0,
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        marginTop: 40
    },
    bodyModal: {
        height: '40%', 
        width: '100%', 
        backgroundColor: '#fff',
        padding: 15,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    inputModal: {
        width: '100%',
        height: 50,
        borderBottomWidth: 2,
        padding: 10,
        marginBottom: 20,
        borderRadius: 20,
        borderColor: '#ccc',
        fontSize: 22
    },
    btnModal: {
        borderRadius: 20,
        height: 50,
        backgroundColor: 'purple',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})