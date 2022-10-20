import React, { useEffect, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import { CardDescription, CardNote, CardNoteAction, CardNoteContent, CardTitle, Container, ContainerHeader, ContainerNotes } from "./styles"
import {initializeApp} from "firebase/app"
import { firebaseConfig } from "../../config/firebaseconfig"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { ScrollView } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
    const [notes, setNotes] = useState([])

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    async function fetchData() {
       const app = initializeApp(firebaseConfig)
       const db = getFirestore(app)

       const querySnapshot = await getDocs(collection(db, "Notes"));
       let list = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            list.push(doc.data())
        });
       setNotes(list)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Container>
            <SafeAreaView>
                <ContainerHeader>
                    <Icon name="ellipsis-v" size={24} color="#FFF" />
                    <Icon name="comment-medical" size={24} color="#FFF" />
                </ContainerHeader>

                <ContainerNotes>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {numbers.map(item =>
                            <CardNote key={item}>
                                <CardNoteContent>
                                    <CardTitle>Título da nota</CardTitle>
                                    <CardDescription>Esta é a descrição da primeira nota</CardDescription>
                                </CardNoteContent>

                                <CardNoteAction>
                                    <Text>Del</Text>
                                </CardNoteAction>
                            </CardNote>
                        )}
                    </ScrollView>
                </ContainerNotes>
            </SafeAreaView>
        </Container>
    )
}