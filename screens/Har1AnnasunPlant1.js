import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform, Dimensions, Keyboard
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';


const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default class Har1AnnasunPlant1 extends Component {

  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantHar1AnnasunPlant1 = this.onSubmitleavesPerPlantHar1AnnasunPlant1.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantHar1AnnasunPlant1Ref = this.updateRef.bind(this, 'leavesPerPlantHar1AnnasunPlant1');
    this.fullysetTrussRef = this.updateRef.bind(this, 'FullysetTruss');
    this.trussLengthRef = this.updateRef.bind(this, 'TrussLength');
    this.weeklyGrowthRef = this.updateRef.bind(this, 'WeeklyGrowth');
    this.flowerTrussHeightRef = this.updateRef.bind(this, 'FlowerTrussHeight');
    this.leafLengthRef = this.updateRef.bind(this, 'LeafLength');
    this.leafWidthRef = this.updateRef.bind(this, 'LeafWidth');
    this.stmDiameterRef = this.updateRef.bind(this, 'StmDiameter');
    this.lastWeekStmDiameterRef = this.updateRef.bind(this, 'LastWeekStmDiameter');

    //
    this.state = {

      //Plants
      weekNumber: '',
      size: { width, height },
      plantId: '',
      plantRow: '',
      plantName: '',
      plantWeek: '',
      leavesPerPlantHar1AnnasunPlant1: '',
      fullySetTrussHar1AnnasunPlant1: '',
      setTrussLengthHar1AnnasunPlant1: '',
      weeklyGrowthHar1AnnasunPlant1: '',
      floweringTrussHeightHar1AnnasunPlant1: '',
      leafLengthHar1AnnasunPlant1: '',
      leafWidthHar1AnnasunPlant1: '',
      stmDiameterHar1AnnasunPlant1: '',
      lastWeekStmDiameterHar1AnnasunPlant1: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberHar1AnnasunPlant1: '',
      setFruitsHar1AnnasunPlant1: '',
      setFlowersHar1AnnasunPlant1: '',
      pruningNumberHar1AnnasunPlant1: '',
      fruitDiameterHar1AnnasunPlant1: '',

      trussNumber1Har1AnnasunPlant1: '',
      setFruits1Har1AnnasunPlant1: '',
      setFlowers1Har1AnnasunPlant1: '',
      pruningNumber1Har1AnnasunPlant1: '',
      fruitDiameter1Har1AnnasunPlant1: '',

      trussNumber2Har1AnnasunPlant1: '',
      setFruits2Har1AnnasunPlant1: '',
      setFlowers2Har1AnnasunPlant1: '',
      pruningNumber2Har1AnnasunPlant1: '',
      fruitDiameter2Har1AnnasunPlant1: '',

      trussNumber3Har1AnnasunPlant1: '',
      setFruits3Har1AnnasunPlant1: '',
      setFlowers3Har1AnnasunPlant1: '',
      pruningNumber3Har1AnnasunPlant1: '',
      fruitDiameter3Har1AnnasunPlant1: '',

      trussNumber4Har1AnnasunPlant1: '',
      setFruits4Har1AnnasunPlant1: '',
      setFlowers4Har1AnnasunPlant1: '',
      pruningNumber4Har1AnnasunPlant1: '',
      fruitDiameter4Har1AnnasunPlant1: '',

      trussNumber5Har1AnnasunPlant1: '',
      setFruits5Har1AnnasunPlant1: '',
      setFlowers5Har1AnnasunPlant1: '',
      pruningNumber5Har1AnnasunPlant1: '',
      fruitDiameter5Har1AnnasunPlant1: '',

      trussNumber6Har1AnnasunPlant1: '',
      setFruits6Har1AnnasunPlant1: '',
      setFlowers6Har1AnnasunPlant1: '',
      pruningNumber6Har1AnnasunPlant1: '',
      fruitDiameter6Har1AnnasunPlant1: '',

      trussNumber7Har1AnnasunPlant1: '',
      setFruits7Har1AnnasunPlant1: '',
      setFlowers7Har1AnnasunPlant1: '',
      pruningNumber7Har1AnnasunPlant1: '',
      fruitDiameter7Har1AnnasunPlant1: '',

      trussNumber8Har1AnnasunPlant1: '',
      setFruits8Har1AnnasunPlant1: '',
      setFlowers8Har1AnnasunPlant1: '',
      pruningNumber8Har1AnnasunPlant1: '',
      fruitDiameter8Har1AnnasunPlant1: '',

      trussNumber9Har1AnnasunPlant1: '',
      setFruits9Har1AnnasunPlant1: '',
      setFlowers9Har1AnnasunPlant1: '',
      pruningNumber9Har1AnnasunPlant1: '',
      fruitDiameter9Har1AnnasunPlant1: '',

      fruitLoadHar1AnnasunPlant1: '',
      harvestTrussHar1AnnasunPlant1: '',
      pruningHarHar1AnnasunPlant1: '',
      settingTrussNumberHar1AnnasunPlant1: '',
      prunSettingHar1AnnasunPlant1: '',
      pruneFloweringHar1AnnasunPlant1: '',

      floweringTrussNumberHar1AnnasunPlant1: '',
      settingTrussHar1AnnasunPlant1: '',
      settingTruss2Har1AnnasunPlant1: '',
      floweringTrussssHar1AnnasunPlant1: '',

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



    this.getAsysncValues();


  }

  //ASYNC METHOD

  async setItem(myKey, value) { 
    try {
      this.setState({
        isDataSend: false,

      });


      return await AsyncStorage.setItem(myKey, JSON.stringify(value));
    } catch (error) {
      // console.error('AsyncStorage#setItem error: ' + error.message);
    }
  }

  //

  getAsysncValues() {


    try {
      AsyncStorage.getItem('leavesPerPlantHar1AnnasunPlant1').then((text1Value) => {
        this.setState({ leavesPerPlantHar1AnnasunPlant1: JSON.parse(text1Value) });
        console.log(this.state.leavesPerPlantHar1AnnasunPlant1)




      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussHar1AnnasunPlant1').then((text2Value) => {
        this.setState({ fullySetTrussHar1AnnasunPlant1: JSON.parse(text2Value) });
        console.log(this.state.fullySetTrussHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthHar1AnnasunPlant1').then((text3Value) => {
        this.setState({ setTrussLengthHar1AnnasunPlant1: JSON.parse(text3Value) });
        console.log(this.state.setTrussLengthHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthHar1AnnasunPlant1').then((text4Value) => {
        this.setState({ weeklyGrowthHar1AnnasunPlant1: JSON.parse(text4Value) });
        console.log(this.state.weeklyGrowthHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightHar1AnnasunPlant1').then((text5Value) => {
        this.setState({ floweringTrussHeightHar1AnnasunPlant1: JSON.parse(text5Value) });
        console.log(this.state.floweringTrussHeightHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthHar1AnnasunPlant1').then((text6Value) => {
        this.setState({ leafLengthHar1AnnasunPlant1: JSON.parse(text6Value) });
        console.log(this.state.leafLengthHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthHar1AnnasunPlant1').then((text7Value) => {
        this.setState({ leafWidthHar1AnnasunPlant1: JSON.parse(text7Value) });
        console.log(this.state.leafWidthHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterHar1AnnasunPlant1').then((text8Value) => {
        this.setState({ stmDiameterHar1AnnasunPlant1: JSON.parse(text8Value) });
        console.log(this.state.stmDiameterHar1AnnasunPlant1)


      }).done();
    } catch (error) {
    } 
    try {
      AsyncStorage.getItem('lastWeekStmDiameterHar1AnnasunPlant1').then((text9Value) => {
        this.setState({ lastWeekStmDiameterHar1AnnasunPlant1: JSON.parse(text9Value) });
        console.log(this.state.lastWeekStmDiameterHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    /*try {
      AsyncStorage.getItem('trussNumberHar1AnnasunPlant1').then((text10Value) => {
        this.setState({ trussNumberHar1AnnasunPlant1: JSON.parse(text10Value) });
        console.log(this.state.trussNumberHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsHar1AnnasunPlant1').then((text11Value) => {
        this.setState({ setFruitsHar1AnnasunPlant1: JSON.parse(text11Value) });
        console.log(this.state.setFruitsHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersHar1AnnasunPlant1').then((text12Value) => {
        this.setState({ setFlowersHar1AnnasunPlant1: JSON.parse(text12Value) });
        console.log(this.state.setFlowersHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberHar1AnnasunPlant1').then((text13Value) => {
        this.setState({ pruningNumberHar1AnnasunPlant1: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterHar1AnnasunPlant1').then((text14Value) => {
        this.setState({ fruitDiameterHar1AnnasunPlant1: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterHar1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1Har1AnnasunPlant1').then((text15Value) => {
        this.setState({ setFruits1Har1AnnasunPlant1: JSON.parse(text15Value) });
        console.log(this.state.setFruits1Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1Har1AnnasunPlant1').then((text16Value) => {
        this.setState({ setFlowers1Har1AnnasunPlant1: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1Har1AnnasunPlant1').then((text17Value) => {
        this.setState({ pruningNumber1Har1AnnasunPlant1: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1Har1AnnasunPlant1').then((text18Value) => {
        this.setState({ fruitDiameter1Har1AnnasunPlant1: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2Har1AnnasunPlant1').then((text19Value) => {
        this.setState({ setFruits2Har1AnnasunPlant1: JSON.parse(text19Value) });
        console.log(this.state.setFruits2Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2Har1AnnasunPlant1').then((text20Value) => {
        this.setState({ setFlowers2Har1AnnasunPlant1: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2Har1AnnasunPlant1').then((text21Value) => {
        this.setState({ pruningNumber2Har1AnnasunPlant1: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2Har1AnnasunPlant1').then((text22Value) => {
        this.setState({ fruitDiameter2Har1AnnasunPlant1: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3Har1AnnasunPlant1').then((text23Value) => {
        this.setState({ setFruits3Har1AnnasunPlant1: JSON.parse(text23Value) });
        console.log(this.state.setFruits3Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3Har1AnnasunPlant1').then((text24Value) => {
        this.setState({ setFlowers3Har1AnnasunPlant1: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3Har1AnnasunPlant1').then((text25Value) => {
        this.setState({ pruningNumber3Har1AnnasunPlant1: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3Har1AnnasunPlant1').then((text26Value) => {
        this.setState({ fruitDiameter3Har1AnnasunPlant1: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3Har1AnnasunPlant1)



      }).done();
    } catch (error) {
    }*/


  }


  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  updatePlantsTextInput = (text, field) => {

    this.setItem(field, text)
    const state = this.state
    state[field] = text;
    this.setState(state);

  }

  updateTextInput = (text, field) => {

    this.setItem(field, text)
    const state = this.state
    state[field] = text;
    this.setState(state)

    this.calculateFruitLoad();
    this.calculateHarvestTruss();
    this.calculateSettingTruss2();
    this.calculateFloweringTruss2();


  }

  updateTextInput22 = (text, field) => {

    this.setItem(field, text)
    const state = this.state
    state[field] = text;
    this.setState(state)

    this.setState({ trussNumber1Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 1 })
    this.setState({ trussNumber2Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 2 })
    this.setState({ trussNumber3Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 3 })
    this.setState({ trussNumber4Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 4 })
    this.setState({ trussNumber5Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 5 })
    this.setState({ trussNumber6Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 6 })
    this.setState({ trussNumber7Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 7 })
    this.setState({ trussNumber8Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 8 })
    this.setState({ trussNumber9Har1AnnasunPlant1: parseInt(this.state.trussNumberHar1AnnasunPlant1) + 9 })


    if (this.state.trussNumberHar1AnnasunPlant1 !== "") {

      this.calculateSettingTruss2();
      this.calculateFloweringTruss2();
      this.calculateFruitLoad();
      this.calculateHarvestTruss();
      this.getTrussData();

    }

  }

  //calculation

  calculateFruitLoad = () => {

    var sum = 0;
    sum = ((parseInt(this.state.setFruitsHar1AnnasunPlant1) ? parseInt(this.state.setFruitsHar1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits1Har1AnnasunPlant1) ? parseInt(this.state.setFruits1Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits2Har1AnnasunPlant1) ? parseInt(this.state.setFruits2Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits3Har1AnnasunPlant1) ? parseInt(this.state.setFruits3Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits4Har1AnnasunPlant1) ? parseInt(this.state.setFruits4Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits5Har1AnnasunPlant1) ? parseInt(this.state.setFruits5Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits6Har1AnnasunPlant1) ? parseInt(this.state.setFruits6Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits7Har1AnnasunPlant1) ? parseInt(this.state.setFruits7Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits8Har1AnnasunPlant1) ? parseInt(this.state.setFruits8Har1AnnasunPlant1) : 0) + (parseInt(this.state.setFruits9Har1AnnasunPlant1) ? parseInt(this.state.setFruits9Har1AnnasunPlant1) : 0));
    this.setState({
      fruitLoad: sum,
    });

    console.log("Fruit Load : " + sum);

  }

  calculateHarvestTruss = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersHar1AnnasunPlant1 === "") {

      prunNum = parseInt(this.state.pruningNumberHar1AnnasunPlant1)

      div = (parseInt((this.state.setFruitsHar1AnnasunPlant1) ? (this.state.setFruitsHar1AnnasunPlant1) : 0) / parseFloat((this.state.pruningNumberHar1AnnasunPlant1) ? (this.state.pruningNumberHar1AnnasunPlant1) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberHar1AnnasunPlant1) ? parseInt(this.state.trussNumberHar1AnnasunPlant1) : 0) + sub).toFixed(2))
      this.setState({
        harvestTruss: add,
        pruningHar: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberHar1AnnasunPlant1)
      var num = this.state.trussNumberHar1AnnasunPlant1

      this.setState({
        harvestTruss: num,
        pruningHar: prunNum,
      });
    }

    console.log("Harvest Truss : " + add);


  }

  calculateSettingTruss2 = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log("Setting truss called : " + this.state.setFruits2Har1AnnasunPlant1);

    if (this.state.setFruits9Har1AnnasunPlant1 === "") {

      if (this.state.setFruits8Har1AnnasunPlant1 === "") {

        if (this.state.setFruits7Har1AnnasunPlant1 === "") {

          if (this.state.setFruits6Har1AnnasunPlant1 === "") {

            if (this.state.setFruits5Har1AnnasunPlant1 === "") {

              if (this.state.setFruits4Har1AnnasunPlant1 === "") {

                if (this.state.setFruits3Har1AnnasunPlant1 === "") {

                  if (this.state.setFruits2Har1AnnasunPlant1 === "") {

                    if (this.state.setFruits1Har1AnnasunPlant1 === "") {

                      if (this.state.setFruitsHar1AnnasunPlant1 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberHar1AnnasunPlant1);
                        trussNum = parseInt(this.state.trussNumberHar1AnnasunPlant1);
                        settingFruit = parseInt(this.state.setFruitsHar1AnnasunPlant1);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumber: settingTruss,
                          settingTruss: trussNum,
                          prunSetting: pruningSet,

                        });

                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1Har1AnnasunPlant1);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1Har1AnnasunPlant1);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumber: settingTruss,
                        settingTruss: trussNum,
                        prunSetting: pruningSet,

                      });

                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2Har1AnnasunPlant1);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2Har1AnnasunPlant1);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumber: settingTruss,
                      settingTruss: trussNum,
                      prunSetting: pruningSet,

                    });

                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3Har1AnnasunPlant1);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3Har1AnnasunPlant1);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumber: settingTruss,
                    settingTruss: trussNum,
                    prunSetting: pruningSet,

                  });

                }

              } else {

                var number4 = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 4)

                pruningSet = parseInt(this.state.pruningNumber4Har1AnnasunPlant1);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4Har1AnnasunPlant1);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumber: settingTruss,
                  settingTruss: trussNum,
                  prunSetting: pruningSet,

                });

              }

            } else {

              var number5 = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 5)

              pruningSet = parseInt(this.state.pruningNumber5Har1AnnasunPlant1);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5Har1AnnasunPlant1);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumber: settingTruss,
                settingTruss: trussNum,
                prunSetting: pruningSet,

              });


            }

          } else {

            var number6 = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 6)

            pruningSet = parseInt(this.state.pruningNumber6Har1AnnasunPlant1);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6Har1AnnasunPlant1);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumber: settingTruss,
              settingTruss: trussNum,
              prunSetting: pruningSet,

            });


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 7)

          pruningSet = parseInt(this.state.pruningNumber7Har1AnnasunPlant1);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7Har1AnnasunPlant1);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumber: settingTruss,
            settingTruss: trussNum,
            prunSetting: pruningSet,

          });
        }

      } else {

        var number8 = (parseInt(this.state.trussNumberHar1AnnasunPlant1) + 8)

        pruningSet = parseInt(this.state.pruningNumber8Har1AnnasunPlant1);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8Har1AnnasunPlant1);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumber: settingTruss,
          settingTruss: trussNum,
          prunSetting: pruningSet,

        });

      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberHar1AnnasunPlant1) + 9)

      pruningSet = parseInt(this.state.pruningNumber9Har1AnnasunPlant1);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9Har1AnnasunPlant1);
      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
      console.log("Setting Truss Number 9 : " + settingTruss);
      this.setState({
        settingTrussNumber: settingTruss,
        settingTruss2: trussNum,
        prunSetting: pruningSet,
      });

    }

  }

  calculateFloweringTruss2 = () => {

    var floweringTrussNum = 0;
    var flowerPruningNumner = 0;
    var flowering = 0;
    var flowerSetFruits = 0;
    var summ = 0;
    var floweringTruss = 0;
    var trussNum = 0;

    console.log("Flowering truss called : " + this.state.setFlowers2Har1AnnasunPlant1);


    if (this.state.setFlowers9Har1AnnasunPlant1 === "") {

      if (this.state.setFlowers8Har1AnnasunPlant1 === "") {

        if (this.state.setFlowers7Har1AnnasunPlant1 === "") {

          if (this.state.setFlowers6Har1AnnasunPlant1 === "") {

            if (this.state.setFlowers5Har1AnnasunPlant1 === "") {

              if (this.state.setFlowers4Har1AnnasunPlant1 === "") {

                if (this.state.setFlowers3Har1AnnasunPlant1 === "") {

                  if (this.state.setFlowers2Har1AnnasunPlant1 === "") {

                    if (this.state.setFlowers1Har1AnnasunPlant1 === "") {

                      if (this.state.setFlowersHar1AnnasunPlant1 === "") {


                      } else {

                        var number01 = this.state.trussNumberHar1AnnasunPlant1


                        flowerPruningNumner = parseInt(this.state.pruningNumberHar1AnnasunPlant1);
                        flowering = parseInt(this.state.setFlowersHar1AnnasunPlant1);
                        flowerSetFruits = parseInt(this.state.setFruitsHar1AnnasunPlant1);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussss: floweringTruss,
                          pruneFlowering: flowerPruningNumner,
                        });
                      }


                    } else {

                      var number11 = + (this.state.trussNumberHar1AnnasunPlant1) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1Har1AnnasunPlant1);
                      flowering = parseInt(this.state.setFlowers1Har1AnnasunPlant1);
                      flowerSetFruits = parseInt(this.state.setFruits1Har1AnnasunPlant1);
                      trussNum = number11
                      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                      console.log("Flowering Truss Value : " + floweringTruss);
                      this.setState({
                        floweringTrussss: floweringTruss,
                        pruneFlowering: flowerPruningNumner,

                      });


                    }


                  } else {

                    var number21 = + (this.state.trussNumberHar1AnnasunPlant1) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2Har1AnnasunPlant1);
                    flowering = parseInt(this.state.setFlowers2Har1AnnasunPlant1);
                    flowerSetFruits = parseInt(this.state.setFruits2Har1AnnasunPlant1);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussss: floweringTruss,
                      pruneFlowering: flowerPruningNumner,

                    });

                  }


                } else {

                  var number31 = + (this.state.trussNumberHar1AnnasunPlant1) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3Har1AnnasunPlant1);
                  flowering = parseInt(this.state.setFlowers3Har1AnnasunPlant1);
                  flowerSetFruits = parseInt(this.state.setFruits3Har1AnnasunPlant1);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussss: floweringTruss,
                    pruneFlowering: flowerPruningNumner,

                  });


                }


              } else {

                var number41 = + (this.state.trussNumberHar1AnnasunPlant1) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4Har1AnnasunPlant1);
                flowering = parseInt(this.state.setFlowers4Har1AnnasunPlant1);
                flowerSetFruits = parseInt(this.state.setFruits4Har1AnnasunPlant1);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussss: floweringTruss,
                  pruneFlowering: flowerPruningNumner,

                });


              }


            } else {

              var number51 = + (this.state.trussNumberHar1AnnasunPlant1) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5Har1AnnasunPlant1);
              flowering = parseInt(this.state.setFlowers5Har1AnnasunPlant1);
              flowerSetFruits = parseInt(this.state.setFruits5Har1AnnasunPlant1);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussss: floweringTruss,
                pruneFlowering: flowerPruningNumner,

              });

            }


          } else {

            var number61 = + (this.state.trussNumberHar1AnnasunPlant1) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6Har1AnnasunPlant1);
            flowering = parseInt(this.state.setFlowers6Har1AnnasunPlant1);
            flowerSetFruits = parseInt(this.state.setFruits6Har1AnnasunPlant1);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussss: floweringTruss,
              pruneFlowering: flowerPruningNumner,

            });

          }


        } else {

          var number71 = + (this.state.trussNumberHar1AnnasunPlant1) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7Har1AnnasunPlant1);
          flowering = parseInt(this.state.setFlowers7Har1AnnasunPlant1);
          flowerSetFruits = parseInt(this.state.setFruits7Har1AnnasunPlant1);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussss: floweringTruss,
            pruneFlowering: flowerPruningNumner,

          });

        }


      } else {
        var number81 = + (this.state.trussNumberHar1AnnasunPlant1) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8Har1AnnasunPlant1);
        flowering = parseInt(this.state.setFlowers8Har1AnnasunPlant1);
        flowerSetFruits = parseInt(this.state.setFruits8Har1AnnasunPlant1);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussss: floweringTruss,
          pruneFlowering: flowerPruningNumner,

        });

      }


    } else {

      var number91 = + (this.state.trussNumberHar1AnnasunPlant1) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9Har1AnnasunPlant1);
      flowering = parseInt(this.state.setFlowers9Har1AnnasunPlant1);
      flowerSetFruits = parseInt(this.state.setFruits9Har1AnnasunPlant1);
      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
      console.log("Flowering Truss Value : " + floweringTruss);
      this.setState({
        floweringTrussss: floweringTruss,
        pruneFlowering: flowerPruningNumner,

      });

    }

  }
  //

  //Get data for truss

  getTrussData = () => {


    /*if (this.state.trussNumber != null) {

       db.trussById(this.state.trussNumber, numberWeek - 1, 'GER 1 - Merlice', number, '81/86').then((data) => {
           console.log(data);
           console.log("Calling database")
           truss = data;
           this.setState({
               truss,
               setFruits: data.setFruits,
               setFlowers: data.setFlowers,
               pruningNumber: data.pruningNumber,
           });
           console.log("Truss Details", this.state.truss);

           this.calculateFruitLoad();
           this.calculateHarvestTruss();
           this.calculateSettingTruss2();
           this.calculateFloweringTruss2();


       }).catch((err) => {
           console.log(err);

       })
   } else {


   }
   
   setTimeout(() => {

           if ((parseInt(this.state.trussNumber) + 1) != null) {

               db.trussByIdRow((parseInt(this.state.trussNumber) + 1), numberWeek - 1, 'GER 1 - Merlice', number, '81/86').then((data1) => {
                   console.log(data1);
                   console.log("Calling database")
                   truss1 = data1;
                   this.setState({
                       truss1,
                       setFruits1: data1.setFruits,
                       setFlowers1: data1.setFlowers,
                       pruningNumber1: data1.pruningNumber,
                   });
                   console.log("Truss Details", this.state.truss1);

                   this.calculateFruitLoad();
                   this.calculateHarvestTruss();
                   this.calculateSettingTruss2();
                   this.calculateFloweringTruss2();


               }).catch((err) => {
                   console.log(err);

               })
           } else {


           }


       }, 1000); and so on....*/

  }
  //

  //DEFINE FOCUS

  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
  }


  onSubmitFullysetTruss() {
    this.FullysetTruss.focus();
  }

  onSubmitTrussLength() {
    this.TrussLength.focus();
  }

  onSubmitWeeklyGrowth() {
    this.WeeklyGrowth.focus();
  }

  onSubmitFlowerTrussHeight() {
    this.FlowerTrussHeight.focus();
  }

  onSubmitLeafLength() {
    this.LeafLength.focus();
  }

  onSubmitLeafWidth() {
    this.LeafWidth.focus();
  }

  onSubmitStmDiameter() {
    this.StmDiameter.focus();
  }

  onSubmitLastWeekStmDiameter() {
    this.LastWeekStmDiameter.focus();
  }

  onSubmitleavesPerPlantHar1AnnasunPlant1() {
    this.leavesPerPlantHar1AnnasunPlant1.focus();
  }
  //

  //INITIALIZE ONFOCUS

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }
  //

  //OnSubmit

  onSubmit() {
    let errors = {};

    ['leavesPerPlantHar1AnnasunPlant1', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
      .forEach((name) => {
        let value = this[name].value();

        if (!value) {
          errors[name] = 'Should not be empty';
        } else {
          if (Platform.OS === 'android') {
            //Add method
            ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

          } else {
            //Add Method
            AlertIOS.alert('Completed!!');

          }
        }
      });

    this.setState({ errors });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  //




  render() {
    return (

      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Har1AnnasunPlants')} >
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

        <Text style={styles.text}>HAR 1 - Annasun</Text>

        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 1</Text>/ Row No. 105/ Week No. {this.state.weekNumber}</Text>


        <ScrollView
          keyboardShouldPersistTaps='handled'
          scrollEventThrottle={16}
        >

          <View style={styles.formContainer}>

            <View style={styles.marginSmallDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Leaves per plant</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onFocus={this.onFocus}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantHar1AnnasunPlant1')}
                    value={this.state.leavesPerPlantHar1AnnasunPlant1}
                    onSubmitEditing={() => { this.fullySetTrussTextInput.focus(); }}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>



            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Fully set truss</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussHar1AnnasunPlant1')}
                    value={this.state.fullySetTrussHar1AnnasunPlant1}
                    ref={(input) => { this.fullySetTrussTextInput = input; }}
                    onSubmitEditing={() => { this.fullySetTrussLengthTextInput.focus(); }}
                    onFocus={this.onFocus}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>

            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Fully set truss length</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthHar1AnnasunPlant1')}
                    value={this.state.setTrussLengthHar1AnnasunPlant1}
                    ref={(input) => { this.fullySetTrussLengthTextInput = input; }}
                    onSubmitEditing={() => { this.weeklyGrowthTextInput.focus(); }}
                    onFocus={this.onFocus}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>

            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Weekly growth</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthHar1AnnasunPlant1')}
                    value={this.state.weeklyGrowthHar1AnnasunPlant1}
                    ref={(input) => { this.weeklyGrowthTextInput = input; }}
                    onSubmitEditing={() => { this.FlowerTrussHeightTextInput.focus(); }}
                    onFocus={this.onFocus}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>


            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Flower truss height</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightHar1AnnasunPlant1')}
                    value={this.state.floweringTrussHeightHar1AnnasunPlant1}
                    ref={(input) => { this.FlowerTrussHeightTextInput = input; }}
                    onSubmitEditing={() => { this.leafLengthTextInput.focus(); }}
                    onFocus={this.onFocus}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>

            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Leaf Length</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthHar1AnnasunPlant1')}
                    value={this.state.leafLengthHar1AnnasunPlant1}
                    ref={(input) => { this.leafLengthTextInput = input; }}
                    onSubmitEditing={() => { this.leafWidthTextInput.focus(); }}
                    onFocus={this.onFocus}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>

            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Leaf Width</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthHar1AnnasunPlant1')}
                    value={this.state.leafWidthHar1AnnasunPlant1}
                    ref={(input) => { this.leafWidthTextInput = input; }}
                    onSubmitEditing={() => { this.stmDiameterTextInput.focus(); }}
                    onFocus={this.onFocus}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>

            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Stem diameter</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"next"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterHar1AnnasunPlant1')}
                    value={this.state.stmDiameterHar1AnnasunPlant1}
                    ref={(input) => { this.stmDiameterTextInput = input; }}
                    onSubmitEditing={() => { this.lastWeekSmDiameterTextInput.focus(); }}
                    onFocus={this.onFocus}

                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>

            <View style={styles.marginDimensionTop}></View>

            <View style={styles.backgroundColour}>

              <View style={styles.row}>

                <Text style={styles.textTitle}>Last week stem diameter</Text>
                <Text style={styles.textTitle}></Text>
                <Text style={styles.textTitle}>Last week</Text>
              </View>

              <View style={styles.row}>
                <View style={styles.borderEdit}>
                  <TextInput style={styles.textInputStyle}
                    placeholderTextColor="transparent"
                    autoCapitalize="none"
                    multiline={false}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={this.onChangeText}
                    returnKeyType={"done"}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterHar1AnnasunPlant1')}
                    value={this.state.lastWeekStmDiameterHar1AnnasunPlant1}
                    ref={(input) => { this.lastWeekSmDiameterTextInput = input; }}
                    onFocus={this.onFocus}
                  />
                </View>
                <Text style={styles.textLastWeek}>19</Text>


              </View>

              <View style={styles.marginXSmallDimensionTop}></View>


            </View>

            <View style={styles.marginDimensionTop}></View>

            <Text style={styles.text2}>Truss Details</Text>



            <View style={styles.marginDimensionTop}></View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,
              }}
            />

            {Platform.isPad ? (<View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <Text style={styles.text222}>TrussNo</Text>
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <Text style={styles.text222}>Set Fruit</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <Text style={styles.text222}>Flowers</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <Text style={styles.text222}>Pruning</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <Text style={styles.text222}>Fruit Dia</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>) : (<View style={styles.rowContainer21}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <Text style={styles.text222}>TrussNo</Text>
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <Text style={styles.text222}>Set Fruit</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <Text style={styles.text222}>Flowers</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <Text style={styles.text222}>Pruning</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <Text style={styles.text222}>Fruit Dia</Text>

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>)}




            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />


            <View

              style={{
                margin: 8

              }}
            />

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,


              }}
            />
            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,

                }}
              />




              <TextInput
                style={styles.textinputheight2}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                placeholderTextColor="#000000"
                multiline={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumberHar1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumberHar1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,

                }}
              />




              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruitsHar1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruitsHar1AnnasunPlant1.toString()}
              />



              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowersHar1AnnasunPlant1')}
                value={this.state.setFlowersHar1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumberHar1AnnasunPlant1')}
                value={this.state.pruningNumberHar1AnnasunPlant1.toString()}
              />


              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterHar1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


            </View>



            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber1Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits1Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits1Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers1Har1AnnasunPlant1')}
                value={this.state.setFlowers1Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1Har1AnnasunPlant1')}
                value={this.state.pruningNumber1Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                // underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={this.onChangeText}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber2Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits2Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits2Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers2Har1AnnasunPlant1')}
                value={this.state.setFlowers2Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2Har1AnnasunPlant1')}
                value={this.state.pruningNumber2Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                editable={false}
                selectTextOnFocus={false}
                multiline={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber3Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits3Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits3Har1AnnasunPlant1.toString()} />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers3Har1AnnasunPlant1')}
                value={this.state.setFlowers3Har1AnnasunPlant1.toString()} />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3Har1AnnasunPlant1')}
                value={this.state.pruningNumber3Har1AnnasunPlant1.toString()} />


              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber4Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits4Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits4Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers4Har1AnnasunPlant1')}
                value={this.state.setFlowers4Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4Har1AnnasunPlant1')}
                value={this.state.pruningNumber4Har1AnnasunPlant1.toString()}
              />


              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber5Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits5Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits5Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers5Har1AnnasunPlant1')}
                value={this.state.setFlowers5Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5Har1AnnasunPlant1')}
                value={this.state.pruningNumber5Har1AnnasunPlant1.toString()}
              />


              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber6Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits6Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits6Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers6Har1AnnasunPlant1')}
                value={this.state.setFlowers6Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6Har1AnnasunPlant1')}
                value={this.state.pruningNumber6Har1AnnasunPlant1.toString()}
              />


              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber7Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits7Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits7Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers7Har1AnnasunPlant1')}
                value={this.state.setFlowers7Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7Har1AnnasunPlant1')}
                value={this.state.pruningNumber7Har1AnnasunPlant1.toString()}

              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                keyboardType={'numeric'}
                multiline={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber8Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits8Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits8Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers8Har1AnnasunPlant1')}
                value={this.state.setFlowers8Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8Har1AnnasunPlant1')}
                value={this.state.pruningNumber8Har1AnnasunPlant1.toString()}
              />


              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



            </View>

            <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 1,

              }}
            />

            <View style={styles.rowContainer222}>

              <View
                style={{
                  borderLeftColor: 'black',
                  borderLeftWidth: 1,
                }}
              />


              <TextInput
                style={styles.textinputheight}
                //underlineColorAndroid="black"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                multiline={false}
                editable={false}
                selectTextOnFocus={false}
                returnKeyType={"next"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'trussNumber9Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.trussNumber9Har1AnnasunPlant1.toString()}
              />
              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />



              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                returnKeyType={"next"}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.updateTextInput(text, 'setFruits9Har1AnnasunPlant1')}
                blurOnSubmit={false}
                value={this.state.setFruits9Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                returnKeyType={"next"}
                enablesReturnKeyAutomatically={true}
                blurOnSubmit={false}
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers9Har1AnnasunPlant1')}
                value={this.state.setFlowers9Har1AnnasunPlant1.toString()}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />


              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9Har1AnnasunPlant1')}
                value={this.state.pruningNumber9Har1AnnasunPlant1.toString()}
              />


              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

              <TextInput
                style={styles.bottonColor}
                underlineColorAndroid="black"
                placeholderTextColor="#000000"
                autoCapitalize="none"
                multiline={false}
                keyboardType={'numeric'}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType={"done"}
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9Har1AnnasunPlant1')}
              />

              <View
                style={{
                  borderRightColor: 'black',
                  borderRightWidth: 1,
                }}
              />

            </View>

            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />



            <View
              style={{
                marginBottom: 20
              }}
            />

            <View style={styles.marginDimensionTop}></View>

            <View style={styles.borderEditTruss}>

              <View style={[(this.state.fruitLoadHar1AnnasunPlant1 <= 22 || this.state.fruitLoadHar1AnnasunPlant1 >= 40) ? styles.borderErrorColor : null]}>

                <View
                  style={{
                    marginTop: 1
                  }}
                />

                <View style={styles.row}>
                  <Text style={styles.text4}>Fruit Load</Text>
                  <Text style={styles.text5}>{this.state.fruitLoadHar1AnnasunPlant1}</Text>
                </View>

                <View
                  style={{
                    marginBottom: 5
                  }}
                />

              </View>

              <View style={[(this.state.floweringTrussssHar1AnnasunPlant1 <= 0 || this.state.floweringTrussssHar1AnnasunPlant1 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Flowering Truss</Text>
                  <Text style={styles.text5}>{this.state.floweringTrussssHar1AnnasunPlant1}</Text>
                </View>


                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>

              <View style={[(this.state.settingTrussNumberHar1AnnasunPlant1 <= 1 || this.state.settingTrussNumberHar1AnnasunPlant1 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Setting Truss</Text>
                  <Text style={styles.text5}>{this.state.settingTrussNumberHar1AnnasunPlant1}</Text>
                </View>
                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>

              <View style={[(this.state.floweringTrussssHar1AnnasunPlant1 <= 0 || this.state.floweringTrussssHar1AnnasunPlant1 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Harvest Truss</Text>
                  <Text style={styles.text5}>{this.state.harvestTrussHar1AnnasunPlant1}</Text>
                </View>
                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>
            </View>


          </View>

        </ScrollView>


      </View >
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F9FF'
  },

  borderEditTruss: {
    marginTop: 8,
    marginLeft: 6,
    marginRight: 6,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'rgba(192,192,192,0.55)',
  },

  text4: {
    //color: '#110A6A',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,

  },

  borderErrorColor: {

    backgroundColor: 'rgba(255,0,0,0.3)',

  },

  text5: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,

  },


  textTitle: {

    //color: '#110A6A',
    color: '#2C3E50',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,
  },

  textLastWeek: {

    //color: '#110A6A',
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 40,
  },

  rowContainer222: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  rowContainer21: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  text222: {
    color: '#2C903D',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 60,
    margin: 12

  },

  row: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },



  borderEdit: {

    marginTop: 20,
    backgroundColor: '#EFEFEF',
    borderRadius: 13,
    borderRadius: 10,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    width: 470,

  },

  backgroundColour: {

    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    borderColor: '#EFEFEF',
    borderWidth: 1,




  },

  formContainer: {

    borderRadius: 5,
    padding: 10,
    margin: 20,
    marginRight: 20,
    height: '100%',
    width: '95%'

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

  textInputStyle: {
    fontSize: 22,
    color: 'black',
    height: 60,
    backgroundColor: '#ffffff',
  },

  lastWeekNumber: {

    fontSize: 18,
    color: 'black',

  },

  marginDimensionTop: {

    marginTop: 25,

  },

  marginSmallDimensionTop: {

    marginTop: 18,

  },

  marginXSmallDimensionTop: {

    marginTop: 10,

  },

  textinputheight2: {

    height: 60,
    width: 40,
    borderBottomWidth: 3.5,
    borderBottomColor: '#ff0000',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000'


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
  textinputheight: {

    height: 60,
    width: 40,
    //borderBottomWidth: 1.2,
    //borderBottomColor: 'black',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000'


  },

  textinputheight2: {

    height: 60,
    width: 40,
    borderBottomWidth: 3.5,
    borderBottomColor: '#ff0000',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000'


  },

  yellowBackground: {

    backgroundColor: '#ffff00'

  },

  bottonColor: {
    borderBottomWidth: 1.2,
    borderBottomColor: 'black',
    marginBottom: 5,
    height: 60,
    width: 40,
    textAlign: 'center',
    color: '#000000'
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

  text2: {
    margin: 6,
    margin: 20,
    fontSize: 28,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',

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

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

  screenScrolling: {

    flex: 1,
    width: screenWidth,
    backgroundColor: '#F3F9FF'


  },

});  