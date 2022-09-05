import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../services/firebase';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = createContext();

function AuthProvider({ children }) {

    const [ authenticated, setAuthenticated ] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        isAuthenticated();
    }, [])

    const isAuthenticated = async () => {
        const token = await AsyncStorage.getItem("@AppDespesasToken");

        if(token) {
            setAuthenticated(true);
        }

    };

    const signIn = async (dados) => {

        signInWithEmailAndPassword(auth, dados.email, dados.password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            async function savedAsynstorage() {
                try {
                    await AsyncStorage.setItem("@AppDespesasToken", JSON.stringify(user.idToken));
                    await AsyncStorage.setItem("@AppDespesasNome", JSON.stringify(user.displayName));
                    await AsyncStorage.setItem("@AppDespesasEmail", JSON.stringify(user.email));
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
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    }

    return (
        <Context.Provider value={{ authenticated: authenticated, signIn, registrationUser }}>
            {children}
        </Context.Provider>
    );

};

export { Context, AuthProvider };