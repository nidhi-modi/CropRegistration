import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, Platform, Alert, Linking, View } from 'react-native'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SiteSelection from '../screens/SiteSelection'
import ScreenNavigator from '../screens/ScreenNavigator'

import HarHome from '../screens/HarHome'
import RepHome from '../screens/RepHome'

import Har123 from '../screens/Har123'

import Har1AnnasunRow from '../screens/Har1AnnasunRow'
import RepMerliceRow from '../screens/RepMerliceRow'
import RepAngelleRow from '../screens/RepAngelleRow'
import RepDuelleRow from '../screens/RepDuelleRow'
import RepKmRow from '../screens/RepKmRow'
import RepBambelloRow from '../screens/RepBambelloRow'

import Har1AnnasunPlants from '../screens/Har1AnnasunPlants'
import RepMerlicePlantsRow1 from '../screens/RepMerlicePlantsRow1'
import RepMerlicePlantsRow2 from '../screens/RepMerlicePlantsRow2'
import RepAngellePlantsRow1 from '../screens/RepAngellePlantsRow1'
import RepAngellePlantsRow2 from '../screens/RepAngellePlantsRow2'
import RepDuellePlantsRow1 from '../screens/RepDuellePlantsRow1'
import RepKmPlantsRow1 from '../screens/RepKmPlantsRow1'
import RepBambelloPlantsRow1 from '../screens/RepBambelloPlantsRow1'


import Har1AnnasunPlant1 from '../screens/Har1AnnasunPlant1'
import Har1AnnasunPlant2 from '../screens/Har1AnnasunPlant2'
import Har1AnnasunPlant3 from '../screens/Har1AnnasunPlant3'
import Har1AnnasunPlant4 from '../screens/Har1AnnasunPlant4'
import Har1AnnasunPlant5 from '../screens/Har1AnnasunPlant5'
import Har1AnnasunFragment1 from '../screens/Har1AnnasunFragment1'
import Har1AnnasunFragment2 from '../screens/Har1AnnasunFragment2'
import Har1AnnasunFragment3 from '../screens/Har1AnnasunFragment3'
import Har1AnnasunFragment4 from '../screens/Har1AnnasunFragment4'
import Har1AnnasunFragment5 from '../screens/Har1AnnasunFragment5'


import RepBambelloPlant1 from '../screens/RepBambelloPlant1'
import RepBambelloPlant2 from '../screens/RepBambelloPlant2'
import RepBambelloPlant3 from '../screens/RepBambelloPlant3'
import RepBambelloPlant4 from '../screens/RepBambelloPlant4'
import RepBambelloPlant5 from '../screens/RepBambelloPlant5'
import RepBambelloPlant6 from '../screens/RepBambelloPlant6'
import RepBambelloPlant7 from '../screens/RepBambelloPlant7'
import RepBambelloPlant8 from '../screens/RepBambelloPlant8'
import RepBambelloPlant9 from '../screens/RepBambelloPlant9'
import RepBambelloPlant10 from '../screens/RepBambelloPlant10'

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

                <Stack.Screen name='RepHome' component={RepHome} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har123' component={Har123} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunRow' component={Har1AnnasunRow} options={{ Shown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepMerliceRow' component={RepMerliceRow} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepAngelleRow' component={RepAngelleRow} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepDuelleRow' component={RepDuelleRow} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepKmRow' component={RepKmRow} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloRow' component={RepBambelloRow} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlants' component={Har1AnnasunPlants} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepMerlicePlantsRow1' component={RepMerlicePlantsRow1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepMerlicePlantsRow2' component={RepMerlicePlantsRow2} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepAngellePlantsRow1' component={RepAngellePlantsRow1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepAngellePlantsRow2' component={RepAngellePlantsRow2} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepDuellePlantsRow1' component={RepDuellePlantsRow1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlantsRow1' component={RepBambelloPlantsRow1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepKmPlantsRow1' component={RepKmPlantsRow1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant1' component={Har1AnnasunPlant1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant2' component={Har1AnnasunPlant2} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant3' component={Har1AnnasunPlant3} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant4' component={Har1AnnasunPlant4} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunPlant5' component={Har1AnnasunPlant5} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunFragment1' component={Har1AnnasunFragment1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunFragment2' component={Har1AnnasunFragment2} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunFragment3' component={Har1AnnasunFragment3} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunFragment4' component={Har1AnnasunFragment4} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='Har1AnnasunFragment5' component={Har1AnnasunFragment5} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant1' component={RepBambelloPlant1} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant2' component={RepBambelloPlant2} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant3' component={RepBambelloPlant3} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant4' component={RepBambelloPlant4} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant5' component={RepBambelloPlant5} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant6' component={RepBambelloPlant6} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant7' component={RepBambelloPlant7} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant8' component={RepBambelloPlant8} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant9' component={RepBambelloPlant9} options={{ headerShown: false, title: 'T&G Global' }} />

                <Stack.Screen name='RepBambelloPlant10' component={RepBambelloPlant10} options={{ headerShown: false, title: 'T&G Global' }} />





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