import { View, Text, TouchableOpacity, FlatList, Modal, TextInput, KeyboardAvoidingView } from 'react-native'; 
import { styles } from './Styles';
import { AntDesign, Feather, Ionicons, Entypo } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { db } from '../../services/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from '../../context/context';
import { StatusBar } from 'expo-status-bar';

export default props => {

    const [ saldo, setSaldo ] = useState("0");
    const [ nmUser, setNmUser ] = useState("");
    const [ saldoVisible, setSaldoVisible ] = useState(true);
    const [ visibleModal, setVisibleModal ] = useState(false);

    const [ descriptionNewDespesa, setDescriptionNewDespesa ] = useState("");
    const [ valueNewDespesa, setValueNewDespesa ] = useState("");

    const { logout } = useContext(Context);

    const [ dados, setDados ] = useState([]);

    const despesasCollectionRef = collection(db, 'despesas');

    async function addDespesa() {

        /* const despesa = await addDoc(despesasCollectionRef, {
            "nmUser": nmUser,
            "saldo": saldo,
            "despesas": [
                {
                    "description": descriptionNewDespesa,
                    "value": valueNewDespesa
                }
            ]
        }); */

        

        despesasCollectionRef.doc(id).set({
            
            "description": descriptionNewDespesa,
            "value": valueNewDespesa
            
        })

        setVisibleModal(false)
        getDados();

    };

    function removed() {
        logout()
    };

    useEffect( () => {
        getDados();
    }, []);

    const getDados = async () => {
        const data = await getDocs(despesasCollectionRef);
        let despesas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDados(despesas[0]);
        setSaldo(despesas[0].saldo)
        setNmUser(despesas[0].nmUser)
    };

    return (

        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.containerHeader}>

                <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>

                    <Text>{nmUser}   </Text>

                    <TouchableOpacity onPress={removed}>
                        <Entypo name="log-out" size={24} color="black" />
                    </TouchableOpacity>

                </View>

                <Text style={styles.title}>Saldo:</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4}}>

                    <Text style={[styles.title, {fontSize: 28}]}>R$ { saldoVisible === true ? saldo : "******" } </Text>

                    <TouchableOpacity onPress={() => setSaldoVisible(!saldoVisible)}>
                        {saldoVisible === true ? <AntDesign name="eyeo" size={35} color="white" /> : <Feather name="eye-off" size={28} color="white" />}
                    </TouchableOpacity>       

                </View>

            </View>

            <View style={styles.containerBody}>

                {
                   <FlatList 
                        data={dados.despesas}
                        keyExtractor={item => item.description}
                        renderItem={({item}) => {

                            return (
                                <TouchableOpacity style={styles.card}>
                                    <Text>{item.description}</Text>
                                    <Text>{item.value}</Text>
                                </TouchableOpacity>
                            )

                        }}
                   />

                }

            </View>

            <View style={styles.containerFooter}>

                <TouchableOpacity style={{bottom: 30}} onPress={() => setVisibleModal(true)}>
                    <Ionicons name="add-circle" size={80} color="purple" />
                </TouchableOpacity>

            </View>

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={ () => setVisibleModal(false)}
            >
                <StatusBar style='light' />
                <TouchableOpacity style={{height: '60%', width: '100%', backgroundColor: 'rgba( 255, 255, 255, 0.1 )'}} onPress={() => setVisibleModal(false)}>

                </TouchableOpacity>

                <View style={styles.bodyModal}>

                    <View style={{padding: 10, justifyContent: 'space-between', marginTop: 20}}>

                        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10, marginLeft: 10}}>Nova despesa</Text>

                        <TextInput value={descriptionNewDespesa} onChangeText={setDescriptionNewDespesa} style={styles.inputModal} placeholder="Descreva" />
                        <TextInput value={valueNewDespesa} onChangeText={setValueNewDespesa} style={styles.inputModal} placeholder="Valor" />

                        <TouchableOpacity style={styles.btnModal} onPress={addDespesa} > 
                            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}> Salvar </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>
           
        </KeyboardAvoidingView>

    )

};