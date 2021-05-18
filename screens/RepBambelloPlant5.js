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


export default class RepBambelloPlant5 extends Component {

  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantRepBambelloPlant5 = this.onSubmitleavesPerPlantRepBambelloPlant5.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantRepBambelloPlant5Ref = this.updateRef.bind(this, 'leavesPerPlantRepBambelloPlant5');
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
      leavesPerPlantRepBambelloPlant5: '',
      fullySetTrussRepBambelloPlant5: '',
      setTrussLengthRepBambelloPlant5: '',
      weeklyGrowthRepBambelloPlant5: '',
      floweringTrussHeightRepBambelloPlant5: '',
      leafLengthRepBambelloPlant5: '',
      leafWidthRepBambelloPlant5: '',
      stmDiameterRepBambelloPlant5: '',
      lastWeekStmDiameterRepBambelloPlant5: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberRepBambelloPlant5: '',
      setFruitsRepBambelloPlant5: '',
      setFlowersRepBambelloPlant5: '',
      pruningNumberRepBambelloPlant5: '',
      fruitDiameterRepBambelloPlant5: '',

      trussNumber1RepBambelloPlant5: '',
      setFruits1RepBambelloPlant5: '',
      setFlowers1RepBambelloPlant5: '',
      pruningNumber1RepBambelloPlant5: '',
      fruitDiameter1RepBambelloPlant5: '',

      trussNumber2RepBambelloPlant5: '',
      setFruits2RepBambelloPlant5: '',
      setFlowers2RepBambelloPlant5: '',
      pruningNumber2RepBambelloPlant5: '',
      fruitDiameter2RepBambelloPlant5: '',

      trussNumber3RepBambelloPlant5: '',
      setFruits3RepBambelloPlant5: '',
      setFlowers3RepBambelloPlant5: '',
      pruningNumber3RepBambelloPlant5: '',
      fruitDiameter3RepBambelloPlant5: '',

      trussNumber4RepBambelloPlant5: '',
      setFruits4RepBambelloPlant5: '',
      setFlowers4RepBambelloPlant5: '',
      pruningNumber4RepBambelloPlant5: '',
      fruitDiameter4RepBambelloPlant5: '',

      trussNumber5RepBambelloPlant5: '',
      setFruits5RepBambelloPlant5: '',
      setFlowers5RepBambelloPlant5: '',
      pruningNumber5RepBambelloPlant5: '',
      fruitDiameter5RepBambelloPlant5: '',

      trussNumber6RepBambelloPlant5: '',
      setFruits6RepBambelloPlant5: '',
      setFlowers6RepBambelloPlant5: '',
      pruningNumber6RepBambelloPlant5: '',
      fruitDiameter6RepBambelloPlant5: '',

      trussNumber7RepBambelloPlant5: '',
      setFruits7RepBambelloPlant5: '',
      setFlowers7RepBambelloPlant5: '',
      pruningNumber7RepBambelloPlant5: '',
      fruitDiameter7RepBambelloPlant5: '',

      trussNumber8RepBambelloPlant5: '',
      setFruits8RepBambelloPlant5: '',
      setFlowers8RepBambelloPlant5: '',
      pruningNumber8RepBambelloPlant5: '',
      fruitDiameter8RepBambelloPlant5: '',

      trussNumber9RepBambelloPlant5: '',
      setFruits9RepBambelloPlant5: '',
      setFlowers9RepBambelloPlant5: '',
      pruningNumber9RepBambelloPlant5: '',
      fruitDiameter9RepBambelloPlant5: '',

      fruitLoadRepBambelloPlant5: '',
      harvestTrussRepBambelloPlant5: '',
      pruningHarRepBambelloPlant5: '',
      settingTrussNumberRepBambelloPlant5: '',
      prunSettingRepBambelloPlant5: '',
      pruneFloweringRepBambelloPlant5: '',

      floweringTrussNumberRepBambelloPlant5: '',
      settingTrussRepBambelloPlant5: '',
      settingTruss2RepBambelloPlant5: '',
      floweringTrussssRepBambelloPlant5: '',

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

  getAsysncValues = async () => {


    try {
      AsyncStorage.getItem('leavesPerPlantRepBambelloPlant5').then((text1Value) => {
        this.setState({ leavesPerPlantRepBambelloPlant5: JSON.parse(text1Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussRepBambelloPlant5').then((text2Value) => {
        this.setState({ fullySetTrussRepBambelloPlant5: JSON.parse(text2Value) });
      
      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthRepBambelloPlant5').then((text3Value) => {
        this.setState({ setTrussLengthRepBambelloPlant5: JSON.parse(text3Value) });
     
      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthRepBambelloPlant5').then((text4Value) => {
        this.setState({ weeklyGrowthRepBambelloPlant5: JSON.parse(text4Value) });
     


      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightRepBambelloPlant5').then((text5Value) => {
        this.setState({ floweringTrussHeightRepBambelloPlant5: JSON.parse(text5Value) });
     

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthRepBambelloPlant5').then((text6Value) => {
        this.setState({ leafLengthRepBambelloPlant5: JSON.parse(text6Value) });
     

      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthRepBambelloPlant5').then((text7Value) => {
        this.setState({ leafWidthRepBambelloPlant5: JSON.parse(text7Value) });
       

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterRepBambelloPlant5').then((text8Value) => {
        this.setState({ stmDiameterRepBambelloPlant5: JSON.parse(text8Value) });


      }).done();
    } catch (error) {
    } 
    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant5').then((text9Value) => {
        this.setState({ lastWeekStmDiameterRepBambelloPlant5: JSON.parse(text9Value) });


      }).done();
    } catch (error) {
    }

    /*try {
      AsyncStorage.getItem('trussNumberRepBambelloPlant5').then((text10Value) => {
        this.setState({ trussNumberRepBambelloPlant5: JSON.parse(text10Value) });
        console.log(this.state.trussNumberRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsRepBambelloPlant5').then((text11Value) => {
        this.setState({ setFruitsRepBambelloPlant5: JSON.parse(text11Value) });
        console.log(this.state.setFruitsRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersRepBambelloPlant5').then((text12Value) => {
        this.setState({ setFlowersRepBambelloPlant5: JSON.parse(text12Value) });
        console.log(this.state.setFlowersRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberRepBambelloPlant5').then((text13Value) => {
        this.setState({ pruningNumberRepBambelloPlant5: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterRepBambelloPlant5').then((text14Value) => {
        this.setState({ fruitDiameterRepBambelloPlant5: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1RepBambelloPlant5').then((text15Value) => {
        this.setState({ setFruits1RepBambelloPlant5: JSON.parse(text15Value) });
        console.log(this.state.setFruits1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1RepBambelloPlant5').then((text16Value) => {
        this.setState({ setFlowers1RepBambelloPlant5: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1RepBambelloPlant5').then((text17Value) => {
        this.setState({ pruningNumber1RepBambelloPlant5: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1RepBambelloPlant5').then((text18Value) => {
        this.setState({ fruitDiameter1RepBambelloPlant5: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2RepBambelloPlant5').then((text19Value) => {
        this.setState({ setFruits2RepBambelloPlant5: JSON.parse(text19Value) });
        console.log(this.state.setFruits2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2RepBambelloPlant5').then((text20Value) => {
        this.setState({ setFlowers2RepBambelloPlant5: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2RepBambelloPlant5').then((text21Value) => {
        this.setState({ pruningNumber2RepBambelloPlant5: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2RepBambelloPlant5').then((text22Value) => {
        this.setState({ fruitDiameter2RepBambelloPlant5: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3RepBambelloPlant5').then((text23Value) => {
        this.setState({ setFruits3RepBambelloPlant5: JSON.parse(text23Value) });
        console.log(this.state.setFruits3RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3RepBambelloPlant5').then((text24Value) => {
        this.setState({ setFlowers3RepBambelloPlant5: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3RepBambelloPlant5').then((text25Value) => {
        this.setState({ pruningNumber3RepBambelloPlant5: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3RepBambelloPlant5').then((text26Value) => {
        this.setState({ fruitDiameter3RepBambelloPlant5: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3RepBambelloPlant5)



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

    this.setState({ trussNumber1RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 1 })
    this.setState({ trussNumber2RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 2 })
    this.setState({ trussNumber3RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 3 })
    this.setState({ trussNumber4RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 4 })
    this.setState({ trussNumber5RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 5 })
    this.setState({ trussNumber6RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 6 })
    this.setState({ trussNumber7RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 7 })
    this.setState({ trussNumber8RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 8 })
    this.setState({ trussNumber9RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 9 })


    if (this.state.trussNumberRepBambelloPlant5 !== "") {

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
    sum = ((parseInt(this.state.setFruitsRepBambelloPlant5) ? parseInt(this.state.setFruitsRepBambelloPlant5) : 0) + (parseInt(this.state.setFruits1RepBambelloPlant5) ? parseInt(this.state.setFruits1RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits2RepBambelloPlant5) ? parseInt(this.state.setFruits2RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits3RepBambelloPlant5) ? parseInt(this.state.setFruits3RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits4RepBambelloPlant5) ? parseInt(this.state.setFruits4RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits5RepBambelloPlant5) ? parseInt(this.state.setFruits5RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits6RepBambelloPlant5) ? parseInt(this.state.setFruits6RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits7RepBambelloPlant5) ? parseInt(this.state.setFruits7RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits8RepBambelloPlant5) ? parseInt(this.state.setFruits8RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits9RepBambelloPlant5) ? parseInt(this.state.setFruits9RepBambelloPlant5) : 0));
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

    if (this.state.setFlowersRepBambelloPlant5 === "") {

      prunNum = parseInt(this.state.pruningNumberRepBambelloPlant5)

      div = (parseInt((this.state.setFruitsRepBambelloPlant5) ? (this.state.setFruitsRepBambelloPlant5) : 0) / parseFloat((this.state.pruningNumberRepBambelloPlant5) ? (this.state.pruningNumberRepBambelloPlant5) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberRepBambelloPlant5) ? parseInt(this.state.trussNumberRepBambelloPlant5) : 0) + sub).toFixed(2))
      this.setState({
        harvestTruss: add,
        pruningHar: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberRepBambelloPlant5)
      var num = this.state.trussNumberRepBambelloPlant5

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

    console.log("Setting truss called : " + this.state.setFruits2RepBambelloPlant5);

    if (this.state.setFruits9RepBambelloPlant5 === "") {

      if (this.state.setFruits8RepBambelloPlant5 === "") {

        if (this.state.setFruits7RepBambelloPlant5 === "") {

          if (this.state.setFruits6RepBambelloPlant5 === "") {

            if (this.state.setFruits5RepBambelloPlant5 === "") {

              if (this.state.setFruits4RepBambelloPlant5 === "") {

                if (this.state.setFruits3RepBambelloPlant5 === "") {

                  if (this.state.setFruits2RepBambelloPlant5 === "") {

                    if (this.state.setFruits1RepBambelloPlant5 === "") {

                      if (this.state.setFruitsRepBambelloPlant5 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberRepBambelloPlant5);
                        trussNum = parseInt(this.state.trussNumberRepBambelloPlant5);
                        settingFruit = parseInt(this.state.setFruitsRepBambelloPlant5);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumber: settingTruss,
                          settingTruss: trussNum,
                          prunSetting: pruningSet,

                        });

                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberRepBambelloPlant5) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1RepBambelloPlant5);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1RepBambelloPlant5);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumber: settingTruss,
                        settingTruss: trussNum,
                        prunSetting: pruningSet,

                      });

                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2RepBambelloPlant5);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2RepBambelloPlant5);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumber: settingTruss,
                      settingTruss: trussNum,
                      prunSetting: pruningSet,

                    });

                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3RepBambelloPlant5);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3RepBambelloPlant5);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumber: settingTruss,
                    settingTruss: trussNum,
                    prunSetting: pruningSet,

                  });

                }

              } else {

                var number4 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 4)

                pruningSet = parseInt(this.state.pruningNumber4RepBambelloPlant5);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4RepBambelloPlant5);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumber: settingTruss,
                  settingTruss: trussNum,
                  prunSetting: pruningSet,

                });

              }

            } else {

              var number5 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 5)

              pruningSet = parseInt(this.state.pruningNumber5RepBambelloPlant5);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5RepBambelloPlant5);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumber: settingTruss,
                settingTruss: trussNum,
                prunSetting: pruningSet,

              });


            }

          } else {

            var number6 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 6)

            pruningSet = parseInt(this.state.pruningNumber6RepBambelloPlant5);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6RepBambelloPlant5);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumber: settingTruss,
              settingTruss: trussNum,
              prunSetting: pruningSet,

            });


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 7)

          pruningSet = parseInt(this.state.pruningNumber7RepBambelloPlant5);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7RepBambelloPlant5);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumber: settingTruss,
            settingTruss: trussNum,
            prunSetting: pruningSet,

          });
        }

      } else {

        var number8 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 8)

        pruningSet = parseInt(this.state.pruningNumber8RepBambelloPlant5);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8RepBambelloPlant5);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumber: settingTruss,
          settingTruss: trussNum,
          prunSetting: pruningSet,

        });

      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberRepBambelloPlant5) + 9)

      pruningSet = parseInt(this.state.pruningNumber9RepBambelloPlant5);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9RepBambelloPlant5);
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

    console.log("Flowering truss called : " + this.state.setFlowers2RepBambelloPlant5);


    if (this.state.setFlowers9RepBambelloPlant5 === "") {

      if (this.state.setFlowers8RepBambelloPlant5 === "") {

        if (this.state.setFlowers7RepBambelloPlant5 === "") {

          if (this.state.setFlowers6RepBambelloPlant5 === "") {

            if (this.state.setFlowers5RepBambelloPlant5 === "") {

              if (this.state.setFlowers4RepBambelloPlant5 === "") {

                if (this.state.setFlowers3RepBambelloPlant5 === "") {

                  if (this.state.setFlowers2RepBambelloPlant5 === "") {

                    if (this.state.setFlowers1RepBambelloPlant5 === "") {

                      if (this.state.setFlowersRepBambelloPlant5 === "") {


                      } else {

                        var number01 = this.state.trussNumberRepBambelloPlant5


                        flowerPruningNumner = parseInt(this.state.pruningNumberRepBambelloPlant5);
                        flowering = parseInt(this.state.setFlowersRepBambelloPlant5);
                        flowerSetFruits = parseInt(this.state.setFruitsRepBambelloPlant5);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussss: floweringTruss,
                          pruneFlowering: flowerPruningNumner,
                        });
                      }


                    } else {

                      var number11 = + (this.state.trussNumberRepBambelloPlant5) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1RepBambelloPlant5);
                      flowering = parseInt(this.state.setFlowers1RepBambelloPlant5);
                      flowerSetFruits = parseInt(this.state.setFruits1RepBambelloPlant5);
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

                    var number21 = + (this.state.trussNumberRepBambelloPlant5) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2RepBambelloPlant5);
                    flowering = parseInt(this.state.setFlowers2RepBambelloPlant5);
                    flowerSetFruits = parseInt(this.state.setFruits2RepBambelloPlant5);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussss: floweringTruss,
                      pruneFlowering: flowerPruningNumner,

                    });

                  }


                } else {

                  var number31 = + (this.state.trussNumberRepBambelloPlant5) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3RepBambelloPlant5);
                  flowering = parseInt(this.state.setFlowers3RepBambelloPlant5);
                  flowerSetFruits = parseInt(this.state.setFruits3RepBambelloPlant5);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussss: floweringTruss,
                    pruneFlowering: flowerPruningNumner,

                  });


                }


              } else {

                var number41 = + (this.state.trussNumberRepBambelloPlant5) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4RepBambelloPlant5);
                flowering = parseInt(this.state.setFlowers4RepBambelloPlant5);
                flowerSetFruits = parseInt(this.state.setFruits4RepBambelloPlant5);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussss: floweringTruss,
                  pruneFlowering: flowerPruningNumner,

                });


              }


            } else {

              var number51 = + (this.state.trussNumberRepBambelloPlant5) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5RepBambelloPlant5);
              flowering = parseInt(this.state.setFlowers5RepBambelloPlant5);
              flowerSetFruits = parseInt(this.state.setFruits5RepBambelloPlant5);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussss: floweringTruss,
                pruneFlowering: flowerPruningNumner,

              });

            }


          } else {

            var number61 = + (this.state.trussNumberRepBambelloPlant5) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6RepBambelloPlant5);
            flowering = parseInt(this.state.setFlowers6RepBambelloPlant5);
            flowerSetFruits = parseInt(this.state.setFruits6RepBambelloPlant5);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussss: floweringTruss,
              pruneFlowering: flowerPruningNumner,

            });

          }


        } else {

          var number71 = + (this.state.trussNumberRepBambelloPlant5) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7RepBambelloPlant5);
          flowering = parseInt(this.state.setFlowers7RepBambelloPlant5);
          flowerSetFruits = parseInt(this.state.setFruits7RepBambelloPlant5);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussss: floweringTruss,
            pruneFlowering: flowerPruningNumner,

          });

        }


      } else {
        var number81 = + (this.state.trussNumberRepBambelloPlant5) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8RepBambelloPlant5);
        flowering = parseInt(this.state.setFlowers8RepBambelloPlant5);
        flowerSetFruits = parseInt(this.state.setFruits8RepBambelloPlant5);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussss: floweringTruss,
          pruneFlowering: flowerPruningNumner,

        });

      }


    } else {

      var number91 = + (this.state.trussNumberRepBambelloPlant5) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9RepBambelloPlant5);
      flowering = parseInt(this.state.setFlowers9RepBambelloPlant5);
      flowerSetFruits = parseInt(this.state.setFruits9RepBambelloPlant5);
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

  onSubmitleavesPerPlantRepBambelloPlant5() {
    this.leavesPerPlantRepBambelloPlant5.focus();
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

    ['leavesPerPlantRepBambelloPlant5', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
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

            <TouchableOpacity onPress={() => this.props.navigation.navigate('RepBambelloPlantsRow1')} >
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

        <Text style={styles.text}>REP - Bambello</Text>

        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 5</Text>/ Row No. 807/ Week No. {this.state.weekNumber}</Text>


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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantRepBambelloPlant5')}
                    value={this.state.leavesPerPlantRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussRepBambelloPlant5')}
                    value={this.state.fullySetTrussRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthRepBambelloPlant5')}
                    value={this.state.setTrussLengthRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthRepBambelloPlant5')}
                    value={this.state.weeklyGrowthRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightRepBambelloPlant5')}
                    value={this.state.floweringTrussHeightRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthRepBambelloPlant5')}
                    value={this.state.leafLengthRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthRepBambelloPlant5')}
                    value={this.state.leafWidthRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterRepBambelloPlant5')}
                    value={this.state.stmDiameterRepBambelloPlant5}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterRepBambelloPlant5')}
                    value={this.state.lastWeekStmDiameterRepBambelloPlant5}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumberRepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumberRepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruitsRepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruitsRepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowersRepBambelloPlant5')}
                value={this.state.setFlowersRepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumberRepBambelloPlant5')}
                value={this.state.pruningNumberRepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterRepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber1RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits1RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits1RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers1RepBambelloPlant5')}
                value={this.state.setFlowers1RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1RepBambelloPlant5')}
                value={this.state.pruningNumber1RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber2RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits2RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits2RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers2RepBambelloPlant5')}
                value={this.state.setFlowers2RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2RepBambelloPlant5')}
                value={this.state.pruningNumber2RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber3RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits3RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits3RepBambelloPlant5.toString()} />

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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers3RepBambelloPlant5')}
                value={this.state.setFlowers3RepBambelloPlant5.toString()} />

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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3RepBambelloPlant5')}
                value={this.state.pruningNumber3RepBambelloPlant5.toString()} />


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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber4RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits4RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits4RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers4RepBambelloPlant5')}
                value={this.state.setFlowers4RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4RepBambelloPlant5')}
                value={this.state.pruningNumber4RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber5RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits5RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits5RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers5RepBambelloPlant5')}
                value={this.state.setFlowers5RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5RepBambelloPlant5')}
                value={this.state.pruningNumber5RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber6RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits6RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits6RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers6RepBambelloPlant5')}
                value={this.state.setFlowers6RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6RepBambelloPlant5')}
                value={this.state.pruningNumber6RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber7RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits7RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits7RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers7RepBambelloPlant5')}
                value={this.state.setFlowers7RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7RepBambelloPlant5')}
                value={this.state.pruningNumber7RepBambelloPlant5.toString()}

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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber8RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits8RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits8RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers8RepBambelloPlant5')}
                value={this.state.setFlowers8RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8RepBambelloPlant5')}
                value={this.state.pruningNumber8RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8RepBambelloPlant5')}
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
                onChangeText={(text) => this.updateTextInput(text, 'trussNumber9RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.trussNumber9RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits9RepBambelloPlant5')}
                blurOnSubmit={false}
                value={this.state.setFruits9RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers9RepBambelloPlant5')}
                value={this.state.setFlowers9RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9RepBambelloPlant5')}
                value={this.state.pruningNumber9RepBambelloPlant5.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9RepBambelloPlant5')}
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

              <View style={[(this.state.fruitLoadRepBambelloPlant5 <= 22 || this.state.fruitLoadRepBambelloPlant5 >= 40) ? styles.borderErrorColor : null]}>

                <View
                  style={{
                    marginTop: 1
                  }}
                />

                <View style={styles.row}>
                  <Text style={styles.text4}>Fruit Load</Text>
                  <Text style={styles.text5}>{this.state.fruitLoadRepBambelloPlant5}</Text>
                </View>

                <View
                  style={{
                    marginBottom: 5
                  }}
                />

              </View>

              <View style={[(this.state.floweringTrussssRepBambelloPlant5 <= 0 || this.state.floweringTrussssRepBambelloPlant5 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Flowering Truss</Text>
                  <Text style={styles.text5}>{this.state.floweringTrussssRepBambelloPlant5}</Text>
                </View>


                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>

              <View style={[(this.state.settingTrussNumberRepBambelloPlant5 <= 1 || this.state.settingTrussNumberRepBambelloPlant5 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Setting Truss</Text>
                  <Text style={styles.text5}>{this.state.settingTrussNumberRepBambelloPlant5}</Text>
                </View>
                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>

              <View style={[(this.state.floweringTrussssRepBambelloPlant5 <= 0 || this.state.floweringTrussssRepBambelloPlant5 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Harvest Truss</Text>
                  <Text style={styles.text5}>{this.state.harvestTrussRepBambelloPlant5}</Text>
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