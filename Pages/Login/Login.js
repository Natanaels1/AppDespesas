import { useEffect, useState, useContext } from 'react';
import {  KeyboardAvoidingView, Text, TextInput, Image, TouchableOpacity, Animated, View, StatusBar, Keyboard } from 'react-native';
import { styles } from './Styles';
import { Context } from '../../context/context'; 

export default props => {

    const { signIn } = useContext(Context);

    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x: 400, y: 400}));

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([

            Animated.spring(offset.y, {
                toValue: 0,
                speed: 20,
                bounciness: 20,
                useNativeDriver: false
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 600,
                useNativeDriver: false
            })

        ]).start();

    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 350,
                duration: 1,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 350,
                duration: 1,
                useNativeDriver: false
            })
        ]).start();
    };

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 400,
                duration: 1,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 400,
                duration: 1,
                useNativeDriver: false
            }),
        ]).start();
    };

    function sign() {

        const dados = { 'email': email ,'password': password };

        email && password ? signIn(dados) : alert('Preencha todos os campos');

    };

    return (

        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />

            <View>
                <Text style={styles.title}> Estamos quase lá... </Text>
            </View>

            <View style={styles.containerLogo}>
                <Animated.Image source={require('../../Assets/image2.png')} style={{width: logo.x, height: logo.y}} />
            </View>
             
            <Animated.View style={[{
                width: '100%', alignItems: 'center', marginTop: 0
            },
            {   
                opacity: opacity,
                transform: [
                    { translateY: offset.y }
                ]
            }
            ]}
            > 

                <TextInput style={styles.input} value={email} placeholder="E-mail" onChangeText={setEmail} />
                <TextInput style={styles.input} value={password} placeholder="Senha" secureTextEntry={true} onChangeText={setPassword} />

                <TouchableOpacity style={styles.containerBtn} onPress={sign}>
                    <Text style={{color: '#fff', fontSize: 28, fontWeight: 'bold'}}> Entrar </Text>
                </TouchableOpacity>
                
            </Animated.View>

            <TouchableOpacity style={{marginTop: 40}}>
                <Text style={{color: '#ccc', fontSize: 18}}>Não possui cadastro? Clique aqui!</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
        
    );

};