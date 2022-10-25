import React, { useEffect, useState } from "react"
import { SafeAreaView, Text, TouchableOpacity} from "react-native"
import { CardDescription, CardNote, CardNoteAction, CardNoteContent, PageTitle, Container, ContainerHeader, ContainerNotes } from "./styles"
import {initializeApp} from "firebase/app"
import { firebaseConfig } from "../../../config/firebaseconfig"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { ScrollView } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CreateNote({navigation}) {
    const [note, setNote] = useState({})
    const [drawer, setDrawer] = useState(true)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    // async function fetchData() {
    //    const app = initializeApp(firebaseConfig)
    //    const db = getFirestore(app)

    //    const querySnapshot = await getDocs(collection(db, "Notes"));
    //    let list = [];
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         list.push(doc.data())
    //     });
    //    setNotes(list)
    // }

    useEffect(() => {
        // fetchData();
    }, [])
    return (
        <Container>
            <SafeAreaView>
                <ContainerHeader>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name="chevron-left" size={24} color="#C4C4CC" />
                    </TouchableOpacity>
                    <PageTitle>Nova nota</PageTitle>
                </ContainerHeader>
                <ContainerNotes>
                    <ScrollView showsVerticalScrollIndicator={false}>
                       
                    </ScrollView>
                </ContainerNotes>
            </SafeAreaView>
        </Container>
    )
}