import * as React from 'react'
import {StyleSheet} from 'react-native'
import { ThemeProvider } from "styled-components"

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home';
import CreateNote from '../pages/Home/CreateNote';
import Login from '../pages/Login';

const Stack = createStackNavigator();

const colors = {
    primary: '#202024',
    secondary: '#C4C4CC',
    background: '#121214',
    button: '#81D8F7'
}

const MainStack = () => {
    return (
        <ThemeProvider theme={colors}>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                    name='Login' 
                    component={Login} 
                    options={{headerShown: false}} 
                />
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options={{headerShown: false}} 
                />
                <Stack.Screen 
                    name='CreateNote' 
                    component={CreateNote} 
                    options={{headerShown: false}} 
                />
            </Stack.Navigator>
        </ThemeProvider>
    );
}

export default MainStack;