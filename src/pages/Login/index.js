import React, { useEffect, useState } from "react"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {initializeApp} from "firebase/app"
import {firebaseConfig} from "../../config/firebaseconfig"

import { 
    SafeAreaView, 
    Text, 
    View ,
} from "react-native"
import { 
    ButtonCreate,
    ButtonLogin, 
    ButtonText, 
    Container, 
    ContainerForm, 
    ContainerHeader, 
    Input, 
    TextPrimary, 
    TextSecondary 
} from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ActivityIndicator } from "react-native-paper"

export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [logged, setLogged] = useState(0)
    const [loading, setLoading] = useState(false)

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const checkLogin = async () => {
        const token = await AsyncStorage.getItem('@token')

        if (token) {
            setLogged(1)
            navigation.replace('Home');
        } else {
            setLogged(2);
        }
    }

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Account created!')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSignIn = async () => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                AsyncStorage.setItem('@token', res._tokenResponse.idToken)
                setLoading(false)
                checkLogin()
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        checkLogin()
    })
    return (
        <Container>
            <SafeAreaView>
                <ContainerHeader>
                    <TextPrimary>My Notes</TextPrimary>
                    <TextSecondary>Faça login e comece utilizar!</TextSecondary>
                </ContainerHeader>
                <ContainerForm>
                    <Input 
                        onChangeText={text => setEmail(text)}
                        placeholder={'Digite seu e-mail'} 
                        placeholderTextColor={'#C4C4CC'} 
                    />
                    <Input 
                        onChangeText={text => setPassword(text)}
                        placeholder={'Senha'} 
                        secureTextEntry={true}
                        placeholderTextColor={'#C4C4CC'} 
                    />
                    
                    <ButtonLogin onPress={() => handleSignIn()} disabled={loading}>
                        {loading &&
                            <ActivityIndicator size={'small'} color={'#FFF'} />
                        }
                        {!loading &&
                            <ButtonText>Entrar</ButtonText>
                        }
                    </ButtonLogin>
{/* 
                    <ButtonCreate onPress={() => handleCreateAccount()}>
                        <ButtonText>Cadastre - se</ButtonText>
                    </ButtonCreate> */}
                </ContainerForm>
            </SafeAreaView>
        </Container>
    )
}