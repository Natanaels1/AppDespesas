import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection } from 'firebase/firestore';
import { db } from '../services/firebase';

const Context = createContext();

function AuthProvider({ children }) {

    const [ authenticated, setAuthenticated ] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        isAuthenticated();
    }, [])

    const isAuthenticated = async () => {
        const token = await AsyncStorage.getItem("@AppDespesasToken");

        console.warn(token)

        if(token) {
            setAuthenticated(true);
        }

    };

    const signIn = async (dados) => {

        signInWithEmailAndPassword(auth, dados.email, dados.password)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log(user.uid)
            
            async function savedAsynstorage() {
                try {
                    await AsyncStorage.setItem("@AppDespesasToken", JSON.stringify(user.idToken));
                    await AsyncStorage.setItem("@AppDespesasEmail", JSON.stringify(user.email));
                    await AsyncStorage.setItem("@AppDespesasIdUser", JSON.stringify(user.uid));
                } catch {
                    console.log('err')
                }
            };
            savedAsynstorage();

            setAuthenticated(true);  
        })
        .catch((error) => {
            const errorCode = error.code;
            const messageErro = error.message;
        }); 

    };

    const registrationUser = async (dados) => {

        createUserWithEmailAndPassword(auth, dados.email, dados.senha)
        .then((userCredential) => {
            const user = userCredential.user;

            const users = collection(db, 'despesas')

            users.doc(user.uid).set({
                "teste": "testeeeee"
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    }

    const logout = async () => {
        AsyncStorage.removeItem("@AppDespesasToken");
        setAuthenticated(false);
    }

    return (
        <Context.Provider value={{ authenticated: authenticated, signIn, registrationUser, logout }}>
            {children}
        </Context.Provider>
    );

};

export { Context, AuthProvider };