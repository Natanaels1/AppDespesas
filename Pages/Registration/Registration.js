import { useState, useContext } from 'react';
import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'; 
import { styles } from './Styles';
import { Context } from '../../context/context'; 

export default props => {

    const { registrationUser } = useContext(Context);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function registration () {

        let dados = { "email": email, "senha": senha };
        registrationUser(dados);

        setTimeout(() => {
            props.navigation.navigate('Login');
        }, 200);

    }

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.containerForm}>

            <Text style={styles.title}> Crie sua conta...</Text>

                <TextInput placeholder="Seu e-mail" style={styles.input} value={email} onChangeText={setEmail} /> 

                <TextInput placeholder="Crie uma senha" style={styles.input} value={senha} onChangeText={setSenha} /> 
                
                <TouchableOpacity style={styles.button} onPress={registration}>
                    <Text style={styles.titleBtn}> Salvar </Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )

};