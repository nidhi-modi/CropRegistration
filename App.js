/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import MainStackNavigator from './navigation/MainStackNavigator'
import Database from '../CropRegistration/screens/Database'

const db = new Database();

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      plants: [],
      truss: [],

      listPlants: {},
      listTrusss: {},

      sample: [],





    };


  }
  async componentDidMount() {

    SplashScreen.hide();

    this.getPlants();
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      // alert('Moved to next Screen here');

    }

    this.getTruss();

  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    ).catch(error => {
      console.log("echoTest failed - plugin not functional");
  });
  }

  getPlants = () => {

    let plants = {};
    db.listPlants().then((data) => {
      console.log("Calling database")
      listPlants = data;
      plants = data;

      this.setState({
        listPlants,
      });

    }).catch((err) => {
      console.log(err);

    })


  }


  getTruss = () => {

    let truss = {};
    db.listTruss().then((data) => {
      console.log("Calling database")
      listTrusss = data;

      truss = data;

      this.setState({ truss: data })

      this.setState({
        listTrusss,
      });

    }).catch((err) => {
      console.log(err);

    })


  }


  render() {
    return (

      <MainStackNavigator />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});