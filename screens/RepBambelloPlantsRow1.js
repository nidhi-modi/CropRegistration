import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';

var plant1FruitLoad, plant1StmDia;
var plant2FruitLoad, plant2StmDia;
var plant3FruitLoad, plant3StmDia;
var plant4FruitLoad, plant4StmDia;
var plant5FruitLoad, plant5StmDia;
var plant6FruitLoad, plant6StmDia;
var plant7FruitLoad, plant7StmDia;
var plant8FruitLoad, plant8StmDia;
var plant9FruitLoad, plant9StmDia;
var plant10FruitLoad, plant10StmDia;




export default class RepBambelloPlantsRow1 extends Component {

  constructor(props) {
    super(props);
    this.state = {

      weekNumber: ''

    }
  }



  componentDidMount() {

    var weekNumber = moment().week() - 2;
    var yearNumber = moment().year();
    var toText = yearNumber.toString(); //convert to string
    var lastChar = toText.slice(-2); //gets last character
    var lastDigit = +(lastChar); //convert last character to number
    var weekNumberText = lastDigit + '00';
    var convertWeekNumber = +(weekNumberText)
    var completeWeekNumber = convertWeekNumber + weekNumber;

    this.setState({ weekNumber: completeWeekNumber })

    

    this.loadData();

    this.focusListener = this.props.navigation.addListener('didFocus', () => {

      this.loadData();

    });


  }

  componentWillUnmount(){

    this.focusListener();

  }


  componentDidUpdate(){

    this.loadData();

    this.focusListener = this.props.navigation.addListener('didFocus', () => {

      this.loadData();

    });

  }


  loadData() {

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant1').then((text1Value) => {

        plant1FruitLoad = JSON.parse(text1Value)

      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant1').then((text2Value) => {

        plant1StmDia = JSON.parse(text2Value)

      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant2').then((text3Value) => {

        plant2FruitLoad = JSON.parse(text3Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant2').then((text4Value) => {

        plant2StmDia = JSON.parse(text4Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant3').then((text5Value) => {

        plant3FruitLoad = JSON.parse(text5Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant3').then((text6Value) => {

        plant3StmDia = JSON.parse(text6Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant4').then((text7Value) => {

        plant4FruitLoad = JSON.parse(text7Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant4').then((text8Value) => {

        plant4StmDia = JSON.parse(text8Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant5').then((text9Value) => {

        plant5FruitLoad = JSON.parse(text9Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant5').then((text10Value) => {

        plant5StmDia = JSON.parse(text10Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant6').then((text11Value) => {

        plant6FruitLoad = JSON.parse(text11Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant6').then((text12Value) => {

        plant6StmDia = JSON.parse(text12Value)


      }).done();
    } catch (error) {
    }



    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant7').then((text13Value) => {

        plant7FruitLoad = JSON.parse(text13Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant7').then((text14Value) => {

        plant7StmDia = JSON.parse(text14Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant8').then((text15Value) => {

        plant8FruitLoad = JSON.parse(text15Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant8').then((text16Value) => {

        plant8StmDia = JSON.parse(text16Value)


      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant9').then((text17Value) => {

        plant9FruitLoad = JSON.parse(text17Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant9').then((text18Value) => {

        plant9StmDia = JSON.parse(text18Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant10').then((text19Value) => {

        plant10FruitLoad = JSON.parse(text19Value)


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant10').then((text20Value) => {

        plant10StmDia = JSON.parse(text20Value)


      }).done();
    } catch (error) {
    }





  }

  renderElement1() {


    if (plant1FruitLoad != null && plant1StmDia != null) {

      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant1')}>
        <Text style={styles.buttonText}>Plant 1 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant1')}>
        <Text style={styles.buttonText}>Plant 1 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  


  renderElement2() {


    if (plant2FruitLoad != null && plant2StmDia != null) {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant2')}>
        <Text style={styles.buttonText}>Plant 2 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant2')}>
        <Text style={styles.buttonText}>Plant 2 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  renderElement3() {


    if (plant3FruitLoad != null && plant3StmDia != null) {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant3')}>
        <Text style={styles.buttonText}>Plant 3 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant3')}>
        <Text style={styles.buttonText}>Plant 3 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  renderElement4() {


    if (plant4FruitLoad != null && plant4StmDia != null) {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant4')}>
        <Text style={styles.buttonText}>Plant 4 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant4')}>
        <Text style={styles.buttonText}>Plant 4 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }


  renderElement5() {


    if (plant5FruitLoad != null && plant5StmDia != null) {



      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant5')}>
        <Text style={styles.buttonText}>Plant 5 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant5')}>
        <Text style={styles.buttonText}>Plant 5 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  renderElement6() {


    if (plant6FruitLoad != null && plant6StmDia != null) {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant6')}>
        <Text style={styles.buttonText}>Plant 6 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant6')}>
        <Text style={styles.buttonText}>Plant 6 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  renderElement7() {


    if (plant7FruitLoad != null && plant7StmDia != null) {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant7')}>
        <Text style={styles.buttonText}>Plant 7 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant7')}>
        <Text style={styles.buttonText}>Plant 7 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  renderElement8() {


    if (plant8FruitLoad != null && plant8StmDia != null) {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant8')}>
        <Text style={styles.buttonText}>Plant 8 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant8')}>
        <Text style={styles.buttonText}>Plant 8 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  renderElement9() {


    if (plant9FruitLoad != null && plant9StmDia != null) {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant9')}>
        <Text style={styles.buttonText}>Plant 9 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant9')}>
        <Text style={styles.buttonText}>Plant 9 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  renderElement10() {


    if (plant10FruitLoad != null && plant10StmDia != null) {



      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant10')}>
        <Text style={styles.buttonText}>Plant 10 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    } else {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepBambelloPlant10')}>
        <Text style={styles.buttonText}>Plant 10 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    }

  }

  render() {
    return (
      <View style={styles.container}>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('RepBambelloRow')} >
              <Image source={require('../assets/back.png')} />
            </TouchableOpacity>

          </View>


          <View style={styles.headerImage2}>

            <Image source={require('../assets/fresh2.png')} />

          </View>

          <View style={{ height: 20, width: 20 }}>
            <Text style={{ alignSelf: 'center' }}></Text>
          </View>

        </View>

        <Text style={styles.text}>REP - Bambello / Row 807</Text>


        <ScrollView keyboardShouldPersistTaps='handled'>

          <View style={styles.marginDimensionTop}></View>

          <View style={styles.containerView}>


            {this.renderElement1()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement2()}

            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement3()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement4()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement5()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement6()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement7()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement8()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement9()}


            <View style={styles.marginSmallDimensionTop}></View>

            {this.renderElement10()}




          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F9FF'
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

  textPlants: {
    margin: 6,
    margin: 20,
    fontSize: 32,
    color: '#ff0000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',

  },


  marginSmallDimensionTop: {

    marginTop: 18,

  },

  containerView: {

    marginLeft: 95,
    marginRight: 95,

  },

  buttonContainer: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonContainerImage: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },

  text: {
    margin: 6,
    margin: 20,
    fontSize: 40,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',


  },

  FloatingButtonStyle2: {

    resizeMode: 'contain',
    marginLeft: 15
  },

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

});  