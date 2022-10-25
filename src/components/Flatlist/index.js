import React, { useEffect, useRef, useState } from "react"
import { Animated, SafeAreaView, StyleSheet, View, Image, Text, StatusBar } from "react-native"
import AnimatedLottieView from "lottie-react-native";
import Animation from "../../../assets/47061-shapes-background.json";
import { 
    Container, 
} from "./styles"

export default function Flatlist({navigation, items}) {

    const SPACING = 20;
    const AVATAR_SIZE = 70;
    const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <Container>
            <SafeAreaView style={{flex: 1}}>
            <AnimatedLottieView 
                source={Animation}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
                autoPlay={true}
            />
            <Animated.FlatList 
                onScroll={Animated.event(
                    [{ nativeEvent: {contentOffset: {y: scrollY}} }],
                    {useNativeDriver: true}
                )}
                data={items}
                keyExtractor={item => item.key}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 42
                }}
                renderItem={({item, index}) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]

                    const opacityInputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + .5)
                    ]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    return <Animated.View style={{
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        padding: SPACING, 
                        marginBottom: SPACING,
                        backgroundColor: 'rgba(255, 255, 255, .8)', 
                        borderRadius: 12, 
                        shadowColor: '#000', 
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: .3,
                        shadowRadius: 20,
                        transform: [{scale}],
                        opacity
                    }}>
                        <Image 
                            source={{uri: item.image}}
                            style={{
                                width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                marginRight: SPACING / 2
                            }}
                        />
                        <View>
                            <Text style={{fontWeight: '700', fontSize: 22}}>{item.name}</Text>
                            <Text style={{opacity: .7, fontSize: 16}}>{item.email}</Text>
                            <Text style={{opacity: .8, fontSize: 14, color: '#0099cc'}}>{item.password}</Text>
                        </View>
                    </Animated.View>
                }}
            />
            </SafeAreaView>
        </Container>
    )
}
