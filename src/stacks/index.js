import * as React from 'react'
import {StyleSheet} from 'react-native'
import { ThemeProvider } from "styled-components"

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
            </Stack.Navigator>
        </ThemeProvider>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen
                name="UserProfile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    headerShown: true,
                    tabBarIcon: ({size, color}) => (<Icon name={"account-circle"} color={color} size={26} />),
                    tabBarActiveTintColor: '#1E2534',
                }}
            />
        </Tab.Navigator>
    );
}

const styles  = StyleSheet.create({
    tab: {
        backgroundColor: '#1E2534',
        borderTopWidth: 0,
    },
})
export default MainStack;