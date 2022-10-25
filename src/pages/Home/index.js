import React, { useEffect, useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import { CardDescription, CardNote, CardNoteAction, CardNoteContent, CardTitle, Container, ContainerHeader, ContainerNotes } from "./styles"
import {initializeApp} from "firebase/app"
import { firebaseConfig } from "../../config/firebaseconfig"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { ScrollView } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { faker } from '@faker-js/faker';

import Flatlist from "../../components/Flatlist"

export default function Home({navigation}) {
    const [notes, setNotes] = useState([])

    const data = [...Array(30).keys()].map((item, index) => {
        return {
            key: faker.datatype.uuid(),
            image: 'https://source.unsplash.com/1024x768/?user',
            name: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
    });

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
            <SafeAreaView style={{flex: 1}}>
                <ContainerHeader>
                    <Icon name="ellipsis-v" size={24} color="#FFF" />
                    <Icon name="comment-medical" size={24} color="#FFF" onPress={() => navigation.navigate('CreateNote')}/>
                </ContainerHeader>

                <Flatlist items={data} />
            </SafeAreaView>
        </Container>
    )
}