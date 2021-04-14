import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, Platform, Alert, Linking, View } from 'react-native'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SiteSelection from '../screens/SiteSelection'
import ScreenNavigator from '../screens/ScreenNavigator'
import HarHome from '../screens/HarHome'
import Har123 from '../screens/Har123'
import Har1AnnasunRow from '../screens/Har1AnnasunRow'
import Har1AnnasunPlants from '../screens/Har1AnnasunPlants'
import Har1AnnasunPlant1 from '../screens/Har1AnnasunPlant1'
import Har1AnnasunPlant2 from '../screens/Har1AnnasunPlant2'
import Har1AnnasunPlant3 from '../screens/Har1AnnasunPlant3'
import Har1AnnasunPlant4 from '../screens/Har1AnnasunPlant4'
import Har1AnnasunPlant5 from '../screens/Har1AnnasunPlant5'
import Har1AnnasunFragment from '../screens/Har1AnnasunFragment'


const Stack = createStackNavigator();

function MainStackNavigator() {


    return (


        <NavigationContainer>



            <Stack.Navigator
                initialRouteName='SiteSelection'

                screenOptions={{
                    //gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#2C903D',
                        height: 95
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: 'white',
                    headerBackTitleVisible: false
                }

                }



                headerMode='float'>


                <Stack.Screen name='SiteSelection' component={SiteSelection} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='ScreenNavigator' component={ScreenNavigator} options={{ headerLeft: () => null, headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='HarHome' component={HarHome} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har123' component={Har123} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunRow' component={Har1AnnasunRow} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlants' component={Har1AnnasunPlants} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant1' component={Har1AnnasunPlant1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant2' component={Har1AnnasunPlant2} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant3' component={Har1AnnasunPlant3} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant4' component={Har1AnnasunPlant4} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant5' component={Har1AnnasunPlant5} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunFragment' component={Har1AnnasunFragment} options={{ headerShown: false, title: 'T&G Global' }} />



            </Stack.Navigator>

        </NavigationContainer >



    )
}

const styles = StyleSheet.create({


    headerLeftStyle: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 8,
        
    },

    alignTextView: {

        flexDirection: 'column'
    },

    headerLeftTopStyle: {
        color: '#BBB3B3',
        fontSize: 18,
        marginLeft: 8,
        marginBottom: 8

    },

    headerRightStyle: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 10
    },



})



export default MainStackNavigator