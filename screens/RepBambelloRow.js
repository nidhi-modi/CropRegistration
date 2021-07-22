import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';
import { EventRegister } from 'react-native-event-listeners'

var screenWidth = (Dimensions.get('window').width)/1.6;

export default class RepBambelloRow extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity  onPress={() => this.props.navigation.navigate('RepHome')} >
            <Image source={require('../assets/back.png')}/>
            </TouchableOpacity>

          </View>


          <View style={styles.headerImage2}>

            <Image source={require('../assets/fresh3.png')} />

          </View>

          <View style={{ height: 20, width: 20 }}>
            <Text style={{ alignSelf: 'center' }}></Text>
          </View>

        </View>

        <Text style={styles.text}>REP - Bambello</Text>


        <ScrollView  keyboardShouldPersistTaps='handled'>

          <View style={styles.marginDimensionTop}></View>

          <View style={styles.containerView}>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepBambelloPlantsRow1')}>
              <Text style={styles.buttonText}>Row 807</Text>
            </TouchableOpacity>

           
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F9FF',
    
  },

  headerImage1: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },

  headerImage2: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 18,

  },



  marginDimensionTop: {

    marginTop: 44,

  },

  marginSmallDimensionTop: {

    marginTop: 18,

  },

  containerView: {

    marginLeft: 100,
    marginRight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

  },

  buttonContainer: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 50,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center'

  },


  text: {
    margin: 6,
    margin: 20,
    fontSize: 28,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',


  },

  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },
});  