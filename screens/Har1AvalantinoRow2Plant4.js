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
import { CheckBox } from 'react-native-elements'
import Database from './Database'
import { LogBox } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'


const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const db = new Database();

export default class Har1AvalantinoRow2Plant4 extends Component {

  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantHar1AvalantinoRow2Plant4 = this.onSubmitleavesPerPlantHar1AvalantinoRow2Plant4.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantHar1AvalantinoRow2Plant4Ref = this.updateRef.bind(this, 'leavesPerPlantHar1AvalantinoRow2Plant4');
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
      leavesPerPlantHar1AvalantinoRow2Plant4: '',
      fullySetTrussHar1AvalantinoRow2Plant4: '',
      setTrussLengthHar1AvalantinoRow2Plant4: '',
      weeklyGrowthHar1AvalantinoRow2Plant4: '',
      floweringTrussHeightHar1AvalantinoRow2Plant4: '',
      leafLengthHar1AvalantinoRow2Plant4: '',
      leafWidthHar1AvalantinoRow2Plant4: '',
      stmDiameterHar1AvalantinoRow2Plant4: '',
      lastWeekStmDiameterHar1AvalantinoRow2Plant4: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberHar1AvalantinoRow2Plant4: '',
      setFruitsHar1AvalantinoRow2Plant4: '',
      setFlowersHar1AvalantinoRow2Plant4: '',
      pruningNumberHar1AvalantinoRow2Plant4: '',
      fruitDiameterHar1AvalantinoRow2Plant4: '',

      trussNumber1Har1AvalantinoRow2Plant4: '',
      setFruits1Har1AvalantinoRow2Plant4: '',
      setFlowers1Har1AvalantinoRow2Plant4: '',
      pruningNumber1Har1AvalantinoRow2Plant4: '',
      fruitDiameter1Har1AvalantinoRow2Plant4: '',

      trussNumber2Har1AvalantinoRow2Plant4: '',
      setFruits2Har1AvalantinoRow2Plant4: '',
      setFlowers2Har1AvalantinoRow2Plant4: '',
      pruningNumber2Har1AvalantinoRow2Plant4: '',
      fruitDiameter2Har1AvalantinoRow2Plant4: '',

      trussNumber3Har1AvalantinoRow2Plant4: '',
      setFruits3Har1AvalantinoRow2Plant4: '',
      setFlowers3Har1AvalantinoRow2Plant4: '',
      pruningNumber3Har1AvalantinoRow2Plant4: '',
      fruitDiameter3Har1AvalantinoRow2Plant4: '',

      trussNumber4Har1AvalantinoRow2Plant4: '',
      setFruits4Har1AvalantinoRow2Plant4: '',
      setFlowers4Har1AvalantinoRow2Plant4: '',
      pruningNumber4Har1AvalantinoRow2Plant4: '',
      fruitDiameter4Har1AvalantinoRow2Plant4: '',

      trussNumber5Har1AvalantinoRow2Plant4: '',
      setFruits5Har1AvalantinoRow2Plant4: '',
      setFlowers5Har1AvalantinoRow2Plant4: '',
      pruningNumber5Har1AvalantinoRow2Plant4: '',
      fruitDiameter5Har1AvalantinoRow2Plant4: '',

      trussNumber6Har1AvalantinoRow2Plant4: '',
      setFruits6Har1AvalantinoRow2Plant4: '',
      setFlowers6Har1AvalantinoRow2Plant4: '',
      pruningNumber6Har1AvalantinoRow2Plant4: '',
      fruitDiameter6Har1AvalantinoRow2Plant4: '',

      trussNumber7Har1AvalantinoRow2Plant4: '',
      setFruits7Har1AvalantinoRow2Plant4: '',
      setFlowers7Har1AvalantinoRow2Plant4: '',
      pruningNumber7Har1AvalantinoRow2Plant4: '',
      fruitDiameter7Har1AvalantinoRow2Plant4: '',

      trussNumber8Har1AvalantinoRow2Plant4: '',
      setFruits8Har1AvalantinoRow2Plant4: '',
      setFlowers8Har1AvalantinoRow2Plant4: '',
      pruningNumber8Har1AvalantinoRow2Plant4: '',
      fruitDiameter8Har1AvalantinoRow2Plant4: '',

      trussNumber9Har1AvalantinoRow2Plant4: '',
      setFruits9Har1AvalantinoRow2Plant4: '',
      setFlowers9Har1AvalantinoRow2Plant4: '',
      pruningNumber9Har1AvalantinoRow2Plant4: '',
      fruitDiameter9Har1AvalantinoRow2Plant4: '',

      fruitLoadHar1AvalantinoRow2Plant4: '',
      harvestTrussHar1AvalantinoRow2Plant4: '',
      pruningHarHar1AvalantinoRow2Plant4: '',
      settingTrussNumberHar1AvalantinoRow2Plant4: '',
      prunSettingHar1AvalantinoRow2Plant4: '',
      pruneFloweringHar1AvalantinoRow2Plant4: '',

      floweringTrussNumberHar1AvalantinoRow2Plant4: '',
      settingTrussHar1AvalantinoRow2Plant4: '',
      settingTruss2Har1AvalantinoRow2Plant4: '',
      floweringTrussssHar1AvalantinoRow2Plant4: '',

      Har1AvalantinoRow2Plant4Selected: false,
      checkboxStatus: '',

    }
  }

  goBack() {
    const { navigation } = this.props
    navigation.goBack()
    navigation.state.params.onBack();  // Call onBack function of ScreenA
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

    LogBox.ignoreAllLogs(true)

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
      AsyncStorage.getItem('leavesPerPlantHar1AvalantinoRow2Plant4').then((text1Value) => {
        this.setState({ leavesPerPlantHar1AvalantinoRow2Plant4: JSON.parse(text1Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussHar1AvalantinoRow2Plant4').then((text2Value) => {
        this.setState({ fullySetTrussHar1AvalantinoRow2Plant4: JSON.parse(text2Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthHar1AvalantinoRow2Plant4').then((text3Value) => {
        this.setState({ setTrussLengthHar1AvalantinoRow2Plant4: JSON.parse(text3Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthHar1AvalantinoRow2Plant4').then((text4Value) => {
        this.setState({ weeklyGrowthHar1AvalantinoRow2Plant4: JSON.parse(text4Value) });



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightHar1AvalantinoRow2Plant4').then((text5Value) => {
        this.setState({ floweringTrussHeightHar1AvalantinoRow2Plant4: JSON.parse(text5Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthHar1AvalantinoRow2Plant4').then((text6Value) => {
        this.setState({ leafLengthHar1AvalantinoRow2Plant4: JSON.parse(text6Value) });


      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthHar1AvalantinoRow2Plant4').then((text7Value) => {
        this.setState({ leafWidthHar1AvalantinoRow2Plant4: JSON.parse(text7Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterHar1AvalantinoRow2Plant4').then((text8Value) => {
        this.setState({ stmDiameterHar1AvalantinoRow2Plant4: JSON.parse(text8Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('lastWeekStmDiameterHar1AvalantinoRow2Plant4').then((text9Value) => {
        this.setState({ lastWeekStmDiameterHar1AvalantinoRow2Plant4: JSON.parse(text9Value) });


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('Har1AvalantinoRow2Plant4Selected').then((text99Value) => {
        this.setState({ Har1AvalantinoRow2Plant4Selected: JSON.parse(text99Value) });

        console.log(this.state.Har1AvalantinoRow2Plant4Selected)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('trussNumberHar1AvalantinoRow2Plant4').then((text10Value) => {

        if (text10Value !== null) {
          this.setState({ trussNumberHar1AvalantinoRow2Plant4: JSON.parse(text10Value) });

          this.setState({ trussNumber1Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 1 })
          this.setState({ trussNumber2Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 2 })
          this.setState({ trussNumber3Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 3 })
          this.setState({ trussNumber4Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 4 })
          this.setState({ trussNumber5Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 5 })
          this.setState({ trussNumber6Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 6 })
          this.setState({ trussNumber7Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 7 })
          this.setState({ trussNumber8Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 8 })
          this.setState({ trussNumber9Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 9 })

        }

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFruitsHar1AvalantinoRow2Plant4').then((text11Value) => {
        if (text11Value !== null) {

          this.setState({ setFruitsHar1AvalantinoRow2Plant4: JSON.parse(text11Value) });

        }


      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('setFlowersHar1AvalantinoRow2Plant4').then((text12Value) => {

        if (text12Value !== null) {

          this.setState({ setFlowersHar1AvalantinoRow2Plant4: JSON.parse(text12Value) });

        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumberHar1AvalantinoRow2Plant4').then((text13Value) => {
        if (text13Value !== null) {
          this.setState({ pruningNumberHar1AvalantinoRow2Plant4: JSON.parse(text13Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameterHar1AvalantinoRow2Plant4').then((text14Value) => {

        if (text14Value !== null) {
          this.setState({ fruitDiameterHar1AvalantinoRow2Plant4: JSON.parse(text14Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 1---------------------------------//

    try {
      AsyncStorage.getItem('setFruits1Har1AvalantinoRow2Plant4').then((text16Value) => {

        if (text16Value !== null) {
          this.setState({ setFruits1Har1AvalantinoRow2Plant4: JSON.parse(text16Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers1Har1AvalantinoRow2Plant4').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFlowers1Har1AvalantinoRow2Plant4: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber1Har1AvalantinoRow2Plant4').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ pruningNumber1Har1AvalantinoRow2Plant4: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter1Har1AvalantinoRow2Plant4').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ fruitDiameter1Har1AvalantinoRow2Plant4: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 2---------------------------------//

    try {
      AsyncStorage.getItem('setFruits2Har1AvalantinoRow2Plant4').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFruits2Har1AvalantinoRow2Plant4: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers2Har1AvalantinoRow2Plant4').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ setFlowers2Har1AvalantinoRow2Plant4: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber2Har1AvalantinoRow2Plant4').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ pruningNumber2Har1AvalantinoRow2Plant4: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter2Har1AvalantinoRow2Plant4').then((text20Value) => {

        if (text20Value !== null) {
          this.setState({ fruitDiameter2Har1AvalantinoRow2Plant4: JSON.parse(text20Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 3---------------------------------//

    try {
      AsyncStorage.getItem('setFruits3Har1AvalantinoRow2Plant4').then((text21Value) => {

        if (text21Value !== null) {
          this.setState({ setFruits3Har1AvalantinoRow2Plant4: JSON.parse(text21Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers3Har1AvalantinoRow2Plant4').then((text22Value) => {

        if (text22Value !== null) {
          this.setState({ setFlowers3Har1AvalantinoRow2Plant4: JSON.parse(text22Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber3Har1AvalantinoRow2Plant4').then((text23Value) => {

        if (text23Value !== null) {
          this.setState({ pruningNumber3Har1AvalantinoRow2Plant4: JSON.parse(text23Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter3Har1AvalantinoRow2Plant4').then((text24Value) => {

        if (text24Value !== null) {
          this.setState({ fruitDiameter3Har1AvalantinoRow2Plant4: JSON.parse(text24Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 4---------------------------------//

    try {
      AsyncStorage.getItem('setFruits4Har1AvalantinoRow2Plant4').then((text25Value) => {

        if (text25Value !== null) {
          this.setState({ setFruits4Har1AvalantinoRow2Plant4: JSON.parse(text25Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers4Har1AvalantinoRow2Plant4').then((text26Value) => {

        if (text26Value !== null) {
          this.setState({ setFlowers4Har1AvalantinoRow2Plant4: JSON.parse(text26Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber4Har1AvalantinoRow2Plant4').then((text27Value) => {

        if (text27Value !== null) {
          this.setState({ pruningNumber4Har1AvalantinoRow2Plant4: JSON.parse(text27Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter4Har1AvalantinoRow2Plant4').then((text28Value) => {

        if (text28Value !== null) {
          this.setState({ fruitDiameter4Har1AvalantinoRow2Plant4: JSON.parse(text28Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 5---------------------------------//

    try {
      AsyncStorage.getItem('setFruits5Har1AvalantinoRow2Plant4').then((text29Value) => {

        if (text29Value !== null) {
          this.setState({ setFruits5Har1AvalantinoRow2Plant4: JSON.parse(text29Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers5Har1AvalantinoRow2Plant4').then((text30Value) => {

        if (text30Value !== null) {
          this.setState({ setFlowers5Har1AvalantinoRow2Plant4: JSON.parse(text30Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber5Har1AvalantinoRow2Plant4').then((text31Value) => {

        if (text31Value !== null) {
          this.setState({ pruningNumber5Har1AvalantinoRow2Plant4: JSON.parse(text31Value) });
        }


      }).done();
    } catch (error) {
    }
    try {

      AsyncStorage.getItem('fruitDiameter5Har1AvalantinoRow2Plant4').then((text32Value) => {
        if (text32Value !== null) {
          this.setState({ fruitDiameter5Har1AvalantinoRow2Plant4: JSON.parse(text32Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 6---------------------------------//

    try {
      AsyncStorage.getItem('setFruits6Har1AvalantinoRow2Plant4').then((text33Value) => {

        if (text33Value !== null) {
          this.setState({ setFruits6Har1AvalantinoRow2Plant4: JSON.parse(text33Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers6Har1AvalantinoRow2Plant4').then((text34Value) => {

        if (text34Value !== null) {
          this.setState({ setFlowers6Har1AvalantinoRow2Plant4: JSON.parse(text34Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber6Har1AvalantinoRow2Plant4').then((text35Value) => {

        if (text35Value !== null) {
          this.setState({ pruningNumber6Har1AvalantinoRow2Plant4: JSON.parse(text35Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter6Har1AvalantinoRow2Plant4').then((text36Value) => {

        if (text36Value !== null) {
          this.setState({ fruitDiameter6Har1AvalantinoRow2Plant4: JSON.parse(text36Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 7---------------------------------//

    try {
      AsyncStorage.getItem('setFruits7Har1AvalantinoRow2Plant4').then((text37Value) => {

        if (text37Value !== null) {
          this.setState({ setFruits7Har1AvalantinoRow2Plant4: JSON.parse(text37Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers7Har1AvalantinoRow2Plant4').then((text38Value) => {

        if (text38Value !== null) {

          this.setState({ setFlowers7Har1AvalantinoRow2Plant4: JSON.parse(text38Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber7Har1AvalantinoRow2Plant4').then((text39Value) => {

        if (text39Value !== null) {
          this.setState({ pruningNumber7Har1AvalantinoRow2Plant4: JSON.parse(text39Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter7Har1AvalantinoRow2Plant4').then((text40Value) => {

        if (text40Value !== null) {
          this.setState({ fruitDiameter7Har1AvalantinoRow2Plant4: JSON.parse(text40Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Truss 8---------------------------------//

    try {
      AsyncStorage.getItem('setFruits8Har1AvalantinoRow2Plant4').then((text41Value) => {

        if (text41Value !== null) {
          this.setState({ setFruits8Har1AvalantinoRow2Plant4: JSON.parse(text41Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers8Har1AvalantinoRow2Plant4').then((text42Value) => {

        if (text42Value !== null) {
          this.setState({ setFlowers8Har1AvalantinoRow2Plant4: JSON.parse(text42Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber8Har1AvalantinoRow2Plant4').then((text43Value) => {

        if (text43Value !== null) {
          this.setState({ pruningNumber8Har1AvalantinoRow2Plant4: JSON.parse(text43Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter8Har1AvalantinoRow2Plant4').then((text44Value) => {

        if (text44Value !== null) {
          this.setState({ fruitDiameter8Har1AvalantinoRow2Plant4: JSON.parse(text44Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 9---------------------------------//

    try {
      AsyncStorage.getItem('setFruits9Har1AvalantinoRow2Plant4').then((text45Value) => {

        if (text45Value !== null) {
          this.setState({ setFruits9Har1AvalantinoRow2Plant4: JSON.parse(text45Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers9Har1AvalantinoRow2Plant4').then((text46Value) => {

        if (text46Value !== null) {
          this.setState({ setFlowers9Har1AvalantinoRow2Plant4: JSON.parse(text46Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber9Har1AvalantinoRow2Plant4').then((text47Value) => {

        if (text47Value !== null) {
          this.setState({ pruningNumber9Har1AvalantinoRow2Plant4: JSON.parse(text47Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter9Har1AvalantinoRow2Plant4').then((text48Value) => {

        if (text48Value !== null) {
          this.setState({ fruitDiameter9Har1AvalantinoRow2Plant4: JSON.parse(text48Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Calculations---------------------------------//

    try {
      AsyncStorage.getItem('fruitLoadHar1AvalantinoRow2Plant4').then((text49Value) => {
        if (text49Value !== null) {
          this.setState({ fruitLoadHar1AvalantinoRow2Plant4: JSON.parse(text49Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('floweringTrussssHar1AvalantinoRow2Plant4').then((text50Value) => {

        if (text50Value !== null) {
          this.setState({ floweringTrussssHar1AvalantinoRow2Plant4: JSON.parse(text50Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('settingTrussNumberHar1AvalantinoRow2Plant4').then((text51Value) => {

        if (text51Value !== null) {
          this.setState({ settingTrussNumberHar1AvalantinoRow2Plant4: JSON.parse(text51Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('harvestTrussHar1AvalantinoRow2Plant4').then((text52Value) => {

        if (text52Value !== null) {
          this.setState({ harvestTrussHar1AvalantinoRow2Plant4: JSON.parse(text52Value) });
        }


      }).done();
    } catch (error) {
    }






    /*try {
      AsyncStorage.getItem('trussNumberHar1AvalantinoRow2Plant4').then((text10Value) => {
        this.setState({ trussNumberHar1AvalantinoRow2Plant4: JSON.parse(text10Value) });
        console.log(this.state.trussNumberHar1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsHar1AvalantinoRow2Plant4').then((text11Value) => {
        this.setState({ setFruitsHar1AvalantinoRow2Plant4: JSON.parse(text11Value) });
        console.log(this.state.setFruitsHar1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersHar1AvalantinoRow2Plant4').then((text12Value) => {
        this.setState({ setFlowersHar1AvalantinoRow2Plant4: JSON.parse(text12Value) });
        console.log(this.state.setFlowersHar1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberHar1AvalantinoRow2Plant4').then((text13Value) => {
        this.setState({ pruningNumberHar1AvalantinoRow2Plant4: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberHar1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterHar1AvalantinoRow2Plant4').then((text14Value) => {
        this.setState({ fruitDiameterHar1AvalantinoRow2Plant4: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterHar1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1Har1AvalantinoRow2Plant4').then((text15Value) => {
        this.setState({ setFruits1Har1AvalantinoRow2Plant4: JSON.parse(text15Value) });
        console.log(this.state.setFruits1Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1Har1AvalantinoRow2Plant4').then((text16Value) => {
        this.setState({ setFlowers1Har1AvalantinoRow2Plant4: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1Har1AvalantinoRow2Plant4').then((text17Value) => {
        this.setState({ pruningNumber1Har1AvalantinoRow2Plant4: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1Har1AvalantinoRow2Plant4').then((text18Value) => {
        this.setState({ fruitDiameter1Har1AvalantinoRow2Plant4: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2Har1AvalantinoRow2Plant4').then((text19Value) => {
        this.setState({ setFruits2Har1AvalantinoRow2Plant4: JSON.parse(text19Value) });
        console.log(this.state.setFruits2Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2Har1AvalantinoRow2Plant4').then((text20Value) => {
        this.setState({ setFlowers2Har1AvalantinoRow2Plant4: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2Har1AvalantinoRow2Plant4').then((text21Value) => {
        this.setState({ pruningNumber2Har1AvalantinoRow2Plant4: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2Har1AvalantinoRow2Plant4').then((text22Value) => {
        this.setState({ fruitDiameter2Har1AvalantinoRow2Plant4: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3Har1AvalantinoRow2Plant4').then((text23Value) => {
        this.setState({ setFruits3Har1AvalantinoRow2Plant4: JSON.parse(text23Value) });
        console.log(this.state.setFruits3Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3Har1AvalantinoRow2Plant4').then((text24Value) => {
        this.setState({ setFlowers3Har1AvalantinoRow2Plant4: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3Har1AvalantinoRow2Plant4').then((text25Value) => {
        this.setState({ pruningNumber3Har1AvalantinoRow2Plant4: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3Har1AvalantinoRow2Plant4)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3Har1AvalantinoRow2Plant4').then((text26Value) => {
        this.setState({ fruitDiameter3Har1AvalantinoRow2Plant4: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3Har1AvalantinoRow2Plant4)



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

    this.setState({ trussNumber1Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 1 })
    this.setState({ trussNumber2Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 2 })
    this.setState({ trussNumber3Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 3 })
    this.setState({ trussNumber4Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 4 })
    this.setState({ trussNumber5Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 5 })
    this.setState({ trussNumber6Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 6 })
    this.setState({ trussNumber7Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 7 })
    this.setState({ trussNumber8Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 8 })
    this.setState({ trussNumber9Har1AvalantinoRow2Plant4: parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 9 })


    if (this.state.trussNumberHar1AvalantinoRow2Plant4 !== "") {

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
    sum = ((parseInt(this.state.setFruitsHar1AvalantinoRow2Plant4) ? parseInt(this.state.setFruitsHar1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits1Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits1Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits2Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits2Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits3Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits3Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits4Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits4Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits5Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits5Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits6Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits6Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits7Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits7Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits8Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits8Har1AvalantinoRow2Plant4) : 0) + (parseInt(this.state.setFruits9Har1AvalantinoRow2Plant4) ? parseInt(this.state.setFruits9Har1AvalantinoRow2Plant4) : 0));
    this.setState({
      fruitLoadHar1AvalantinoRow2Plant4: sum,
    });

    this.setItem("fruitLoadHar1AvalantinoRow2Plant4", this.state.fruitLoadHar1AvalantinoRow2Plant4)

    console.log("Fruit Load : " + sum);



  }

  calculateHarvestTruss = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersHar1AvalantinoRow2Plant4 === "") {

      prunNum = parseInt(this.state.pruningNumberHar1AvalantinoRow2Plant4)

      div = (parseInt((this.state.setFruitsHar1AvalantinoRow2Plant4) ? (this.state.setFruitsHar1AvalantinoRow2Plant4) : 0) / parseFloat((this.state.pruningNumberHar1AvalantinoRow2Plant4) ? (this.state.pruningNumberHar1AvalantinoRow2Plant4) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) ? parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) : 0) + sub).toFixed(2))
      this.setState({
        harvestTrussHar1AvalantinoRow2Plant4: add,
        pruningHarHar1AvalantinoRow2Plant4: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberHar1AvalantinoRow2Plant4)
      var num = this.state.trussNumberHar1AvalantinoRow2Plant4

      this.setState({
        harvestTrussHar1AvalantinoRow2Plant4: num,
        pruningHarHar1AvalantinoRow2Plant4: prunNum,
      });
    }

    console.log("Harvest Truss : " + add);

    this.setItem("harvestTrussHar1AvalantinoRow2Plant4", this.state.harvestTrussHar1AvalantinoRow2Plant4)



  }

  calculateSettingTruss2 = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log("Setting truss called : " + this.state.setFruits2Har1AvalantinoRow2Plant4);

    if (this.state.setFruits9Har1AvalantinoRow2Plant4 === "") {

      if (this.state.setFruits8Har1AvalantinoRow2Plant4 === "") {

        if (this.state.setFruits7Har1AvalantinoRow2Plant4 === "") {

          if (this.state.setFruits6Har1AvalantinoRow2Plant4 === "") {

            if (this.state.setFruits5Har1AvalantinoRow2Plant4 === "") {

              if (this.state.setFruits4Har1AvalantinoRow2Plant4 === "") {

                if (this.state.setFruits3Har1AvalantinoRow2Plant4 === "") {

                  if (this.state.setFruits2Har1AvalantinoRow2Plant4 === "") {

                    if (this.state.setFruits1Har1AvalantinoRow2Plant4 === "") {

                      if (this.state.setFruitsHar1AvalantinoRow2Plant4 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberHar1AvalantinoRow2Plant4);
                        trussNum = parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4);
                        settingFruit = parseInt(this.state.setFruitsHar1AvalantinoRow2Plant4);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
                          settingTruss: trussNum,
                          prunSettingHar1AvalantinoRow2Plant4: pruningSet,

                        });

                        this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)

                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1Har1AvalantinoRow2Plant4);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1Har1AvalantinoRow2Plant4);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
                        settingTruss: trussNum,
                        prunSettingHar1AvalantinoRow2Plant4: pruningSet,

                      });

                      this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)


                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2Har1AvalantinoRow2Plant4);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2Har1AvalantinoRow2Plant4);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
                      settingTruss: trussNum,
                      prunSettingHar1AvalantinoRow2Plant4: pruningSet,

                    });
                    this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)


                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3Har1AvalantinoRow2Plant4);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3Har1AvalantinoRow2Plant4);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
                    settingTruss: trussNum,
                    prunSettingHar1AvalantinoRow2Plant4: pruningSet,

                  });

                  this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)


                }

              } else {

                var number4 = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 4)

                pruningSet = parseInt(this.state.pruningNumber4Har1AvalantinoRow2Plant4);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4Har1AvalantinoRow2Plant4);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
                  settingTruss: trussNum,
                  prunSettingHar1AvalantinoRow2Plant4: pruningSet,

                });

                this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)


              }

            } else {

              var number5 = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 5)

              pruningSet = parseInt(this.state.pruningNumber5Har1AvalantinoRow2Plant4);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5Har1AvalantinoRow2Plant4);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
                settingTruss: trussNum,
                prunSettingHar1AvalantinoRow2Plant4: pruningSet,

              });

              this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)



            }

          } else {

            var number6 = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 6)

            pruningSet = parseInt(this.state.pruningNumber6Har1AvalantinoRow2Plant4);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6Har1AvalantinoRow2Plant4);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
              settingTruss: trussNum,
              prunSettingHar1AvalantinoRow2Plant4: pruningSet,

            });

            this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 7)

          pruningSet = parseInt(this.state.pruningNumber7Har1AvalantinoRow2Plant4);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7Har1AvalantinoRow2Plant4);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
            settingTruss: trussNum,
            prunSettingHar1AvalantinoRow2Plant4: pruningSet,

          });

          this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)

        }

      } else {

        var number8 = (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 8)

        pruningSet = parseInt(this.state.pruningNumber8Har1AvalantinoRow2Plant4);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8Har1AvalantinoRow2Plant4);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
          settingTruss: trussNum,
          prunSettingHar1AvalantinoRow2Plant4: pruningSet,

        });

        this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)


      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 9)

      pruningSet = parseInt(this.state.pruningNumber9Har1AvalantinoRow2Plant4);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9Har1AvalantinoRow2Plant4);
      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
      console.log("Setting Truss Number 9 : " + settingTruss);
      this.setState({
        settingTrussNumberHar1AvalantinoRow2Plant4: settingTruss,
        settingTruss2: trussNum,
        prunSettingHar1AvalantinoRow2Plant4: pruningSet,
      });

      this.setItem("settingTrussNumberHar1AvalantinoRow2Plant4", settingTruss)


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

    console.log("Flowering truss called : " + this.state.setFlowers2Har1AvalantinoRow2Plant4);


    if (this.state.setFlowers9Har1AvalantinoRow2Plant4 === "") {

      if (this.state.setFlowers8Har1AvalantinoRow2Plant4 === "") {

        if (this.state.setFlowers7Har1AvalantinoRow2Plant4 === "") {

          if (this.state.setFlowers6Har1AvalantinoRow2Plant4 === "") {

            if (this.state.setFlowers5Har1AvalantinoRow2Plant4 === "") {

              if (this.state.setFlowers4Har1AvalantinoRow2Plant4 === "") {

                if (this.state.setFlowers3Har1AvalantinoRow2Plant4 === "") {

                  if (this.state.setFlowers2Har1AvalantinoRow2Plant4 === "") {

                    if (this.state.setFlowers1Har1AvalantinoRow2Plant4 === "") {

                      if (this.state.setFlowersHar1AvalantinoRow2Plant4 === "") {


                      } else {

                        var number01 = this.state.trussNumberHar1AvalantinoRow2Plant4


                        flowerPruningNumner = parseInt(this.state.pruningNumberHar1AvalantinoRow2Plant4);
                        flowering = parseInt(this.state.setFlowersHar1AvalantinoRow2Plant4);
                        flowerSetFruits = parseInt(this.state.setFruitsHar1AvalantinoRow2Plant4);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
                          pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,
                        });
                        this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)

                      }


                    } else {

                      var number11 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1Har1AvalantinoRow2Plant4);
                      flowering = parseInt(this.state.setFlowers1Har1AvalantinoRow2Plant4);
                      flowerSetFruits = parseInt(this.state.setFruits1Har1AvalantinoRow2Plant4);
                      trussNum = number11
                      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                      console.log("Flowering Truss Value : " + floweringTruss);
                      this.setState({
                        floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
                        pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

                      });
                      this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


                    }


                  } else {

                    var number21 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2Har1AvalantinoRow2Plant4);
                    flowering = parseInt(this.state.setFlowers2Har1AvalantinoRow2Plant4);
                    flowerSetFruits = parseInt(this.state.setFruits2Har1AvalantinoRow2Plant4);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
                      pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

                    });
                    this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


                  }


                } else {

                  var number31 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3Har1AvalantinoRow2Plant4);
                  flowering = parseInt(this.state.setFlowers3Har1AvalantinoRow2Plant4);
                  flowerSetFruits = parseInt(this.state.setFruits3Har1AvalantinoRow2Plant4);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
                    pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

                  });

                  this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)

                }


              } else {

                var number41 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4Har1AvalantinoRow2Plant4);
                flowering = parseInt(this.state.setFlowers4Har1AvalantinoRow2Plant4);
                flowerSetFruits = parseInt(this.state.setFruits4Har1AvalantinoRow2Plant4);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
                  pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

                });

                this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


              }


            } else {

              var number51 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5Har1AvalantinoRow2Plant4);
              flowering = parseInt(this.state.setFlowers5Har1AvalantinoRow2Plant4);
              flowerSetFruits = parseInt(this.state.setFruits5Har1AvalantinoRow2Plant4);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
                pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

              });

              this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


            }


          } else {

            var number61 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6Har1AvalantinoRow2Plant4);
            flowering = parseInt(this.state.setFlowers6Har1AvalantinoRow2Plant4);
            flowerSetFruits = parseInt(this.state.setFruits6Har1AvalantinoRow2Plant4);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
              pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

            });

            this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


          }


        } else {

          var number71 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7Har1AvalantinoRow2Plant4);
          flowering = parseInt(this.state.setFlowers7Har1AvalantinoRow2Plant4);
          flowerSetFruits = parseInt(this.state.setFruits7Har1AvalantinoRow2Plant4);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
            pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

          });

          this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


        }


      } else {
        var number81 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8Har1AvalantinoRow2Plant4);
        flowering = parseInt(this.state.setFlowers8Har1AvalantinoRow2Plant4);
        flowerSetFruits = parseInt(this.state.setFruits8Har1AvalantinoRow2Plant4);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
          pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

        });

        this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


      }


    } else {

      var number91 = + (this.state.trussNumberHar1AvalantinoRow2Plant4) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9Har1AvalantinoRow2Plant4);
      flowering = parseInt(this.state.setFlowers9Har1AvalantinoRow2Plant4);
      flowerSetFruits = parseInt(this.state.setFruits9Har1AvalantinoRow2Plant4);
      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
      console.log("Flowering Truss Value : " + floweringTruss);
      this.setState({
        floweringTrussssHar1AvalantinoRow2Plant4: floweringTruss,
        pruneFloweringHar1AvalantinoRow2Plant4: flowerPruningNumner,

      });

      this.setItem("floweringTrussssHar1AvalantinoRow2Plant4", floweringTruss)


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
           this.calculateharvestTrussHar1AvalantinoRow2Plant4();
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

  changeCheckbox = () => {

    this.setState({ Har1AvalantinoRow2Plant4Selected: !this.state.Har1AvalantinoRow2Plant4Selected })

    const vart = this.state.Har1AvalantinoRow2Plant4Selected

    const vart2 = false;

    if (vart == null) {

      this.setItem('Har1AvalantinoRow2Plant4Selected', vart2)

      EventRegister.emit('Har1AvalantinoEventRow2Plant4', vart2)

    } else {

      this.setItem('Har1AvalantinoRow2Plant4Selected', vart)

      EventRegister.emit('Har1AvalantinoEventRow2Plant4', vart)

    }

    this.checkStatus();

  }

  checkStatus = () => {

    const vart = this.state.Har1AvalantinoRow2Plant4Selected

    if (vart == null || vart == false) {

      this.setState({ checkboxStatus: 'CHECKED' })


      let data = {
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        leavesPerPlant: this.state.leavesPerPlantHar1AvalantinoRow2Plant4,
        fullySetTruss: this.state.fullySetTrussHar1AvalantinoRow2Plant4,
        setTrussLength: this.state.setTrussLengthHar1AvalantinoRow2Plant4,
        weeklyGrowth: this.state.weeklyGrowthHar1AvalantinoRow2Plant4,
        floweringTrussHeight: this.state.floweringTrussHeightHar1AvalantinoRow2Plant4,
        leafLength: this.state.leafLengthHar1AvalantinoRow2Plant4,
        leafWidth: this.state.leafWidthHar1AvalantinoRow2Plant4,
        stmDiameter: this.state.stmDiameterHar1AvalantinoRow2Plant4,
        lastWeekStmDiameter: this.state.lastWeekStmDiameterHar1AvalantinoRow2Plant4

      }

      db.addPlants(data).then((result) => {
        console.log(result);

      }).catch((err) => {
        console.log(err);

      })

      this.saveTrussToDb();

    } else {

      this.setState({ checkboxStatus: 'UNCHECKED' })


    }
  }


  saveTrussToDb = () => {

    if (this.state.trussNumberHar1AvalantinoRow2Plant4 !== null && this.state.pruningNumberHar1AvalantinoRow2Plant4 !== null) {

      let data = {
        trussNumber: this.state.trussNumberHar1AvalantinoRow2Plant4,
        fruitDiameter: this.state.fruitDiameterHar1AvalantinoRow2Plant4,
        setFruits: this.state.setFruitsHar1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowersHar1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumberHar1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4


      }


      db.addTrussDetails(data).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 1) !== null && this.state.pruningNumber1Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB1();


        } else {


        }


      }).catch((err) => {

        console.log(err);

      })

    } else {



    }



  }

  saveTrussToDB1 = () => {


    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 1) != null && this.state.pruningNumber1Har1AvalantinoRow2Plant4 !== null) {


      let data1 = {

        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 1),
        fruitDiameter: this.state.fruitDiameter1Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits1Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers1Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber1Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4



      }




      db.addTrussDetails(data1).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 2) !== null && this.state.pruningNumber2Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB2();

        } else {



        }

      }).catch((err) => {

        console.log(err);

      })


    } else {


    }



  }

  saveTrussToDB2 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 2) != null && this.state.pruningNumber2Har1AvalantinoRow2Plant4 !== null) {


      let data2 = {

        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 2),
        fruitDiameter: this.state.fruitDiameter2Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits2Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers2Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber2Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4

      }




      db.addTrussDetails(data2).then((result) => {
        console.log(result);

        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 3) !== null && this.state.pruningNumber3Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB3();


        } else {



        }


      }).catch((err) => {
        console.log(err);

      })



    } else {




    }

  }

  saveTrussToDB3 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 3) !== null && this.state.pruningNumber3Har1AvalantinoRow2Plant4 !== null) {


      let data3 = {
        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 3),
        fruitDiameter: this.state.fruitDiameter3Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits3Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers3Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber3Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4



      }


      db.addTrussDetails(data3).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 4) !== null && this.state.pruningNumber4Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB4();


        } else {


        }


      }).catch((err) => {
        console.log(err);

      })

    } else {



    }



  }

  saveTrussToDB4 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 4) != null && this.state.pruningNumber4Har1AvalantinoRow2Plant4 !== null) {


      let data4 = {
        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 4),
        fruitDiameter: this.state.fruitDiameter4Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits4Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers4Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber4Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4



      }



      db.addTrussDetails(data4).then((result) => {

        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 5) !== null && this.state.pruningNumber5Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB5();



        } else {



        }

      }).catch((err) => {
        console.log(err);

      })



    } else {



    }



  }

  saveTrussToDB5 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 5) != null && this.state.pruningNumber5Har1AvalantinoRow2Plant4 !== null) {


      let data5 = {
        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 5),
        fruitDiameter: this.state.fruitDiameter5Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits5Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers5Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber5Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4


      }



      db.addTrussDetails(data5).then((result) => {
        console.log(result);
        this.setState({
          isLoading: false,
          isDataSend: true,

        });

        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 6) !== null && this.state.pruningNumber6Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB6();


        } else {



        }


      }).catch((err) => {

        console.log(err);

      })



    } else {



    }



  }

  saveTrussToDB6 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 6) != null && this.state.pruningNumber6Har1AvalantinoRow2Plant4 !== null) {


      let data6 = {
        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 6),
        fruitDiameter: this.state.fruitDiameter6Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits6Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers6Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber6Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4

      }



      db.addTrussDetails(data6).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 7) !== null && this.state.pruningNumber7Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB7();


        } else {


        }


      }).catch((err) => {

        console.log(err);

      })




    } else {



    }



  }

  saveTrussToDB7 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 7) != null && this.state.pruningNumber7Har1AvalantinoRow2Plant4 !== null) {


      let data7 = {
        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 7),
        fruitDiameter: this.state.fruitDiameter7Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits7Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers7Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber7Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4


      }



      db.addTrussDetails(data7).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 8) !== null && this.state.pruningNumber8Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB8();


        } else {



        }

      }).catch((err) => {
        console.log(err);

      })


    } else {



    }



  }

  saveTrussToDB8 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 8) != null && this.state.pruningNumber8Har1AvalantinoRow2Plant4 !== null) {


      let data8 = {
        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 8),
        fruitDiameter: this.state.fruitDiameter8Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits8Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers8Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber8Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4


      }



      db.addTrussDetails(data8).then((result) => {

        console.log(result);

        if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 9) !== null && this.state.pruningNumber9Har1AvalantinoRow2Plant4 !== '') {

          this.saveTrussToDB9();


        } else {



        }


      }).catch((err) => {

        console.log(err);

      })


    } else {


    }

  }

  saveTrussToDB9 = () => {

    if ((parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 9) != null && this.state.pruningNumber9Har1AvalantinoRow2Plant4 !== null) {



      let data9 = {
        trussNumber: (parseInt(this.state.trussNumberHar1AvalantinoRow2Plant4) + 9),
        fruitDiameter: this.state.fruitDiameter9Har1AvalantinoRow2Plant4,
        setFruits: this.state.setFruits9Har1AvalantinoRow2Plant4,
        setFlowers: this.state.setFlowers9Har1AvalantinoRow2Plant4,
        pruningNumber: this.state.pruningNumber9Har1AvalantinoRow2Plant4,
        plantRow: '155',
        plantName: 'HAR 1 - Avalantino',
        plantWeek: this.state.weekNumber,
        plantNumber: 4,
        fruitLoad: this.state.fruitLoadHar1AvalantinoRow2Plant4,
        pruningFlower: this.state.pruneFloweringHar1AvalantinoRow2Plant4,
        floweringTruss: this.state.floweringTrussssHar1AvalantinoRow2Plant4,
        pruningSet: this.state.prunSettingHar1AvalantinoRow2Plant4,
        settingTruss: this.state.settingTrussNumberHar1AvalantinoRow2Plant4,
        pruningHarvest: this.state.pruningHarHar1AvalantinoRow2Plant4,
        harvestTruss: this.state.harvestTrussHar1AvalantinoRow2Plant4



      }


      db.addTrussDetails(data9).then((result) => {

        console.log(result);

      }).catch((err) => {

        console.log(err);

      })

    } else {


    }



  }



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

  onSubmitleavesPerPlantHar1AvalantinoRow2Plant4() {
    this.leavesPerPlantHar1AvalantinoRow2Plant4.focus();
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

    ['leavesPerPlantHar1AvalantinoRow2Plant4', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
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

            <TouchableOpacity onPress={() => this.props.navigation.push('Har1AvalantinoPlantsRow2')} >
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

        <Text style={styles.text}>HAR 1 - Avalantino</Text>

        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 4</Text>/ Row No. 155/ Week No. {this.state.weekNumber}</Text>


        <ScrollView
          keyboardShouldPersistTaps='handled'
          scrollEventThrottle={16}
        >

          <View pointerEvents={this.state.Har1AvalantinoRow2Plant4Selected ? 'none' : 'auto'}>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantHar1AvalantinoRow2Plant4')}
                      value={this.state.leavesPerPlantHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussHar1AvalantinoRow2Plant4')}
                      value={this.state.fullySetTrussHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthHar1AvalantinoRow2Plant4')}
                      value={this.state.setTrussLengthHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthHar1AvalantinoRow2Plant4')}
                      value={this.state.weeklyGrowthHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightHar1AvalantinoRow2Plant4')}
                      value={this.state.floweringTrussHeightHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthHar1AvalantinoRow2Plant4')}
                      value={this.state.leafLengthHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthHar1AvalantinoRow2Plant4')}
                      value={this.state.leafWidthHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterHar1AvalantinoRow2Plant4')}
                      value={this.state.stmDiameterHar1AvalantinoRow2Plant4}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterHar1AvalantinoRow2Plant4')}
                      value={this.state.lastWeekStmDiameterHar1AvalantinoRow2Plant4}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumberHar1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumberHar1AvalantinoRow2Plant4}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruitsHar1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruitsHar1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowersHar1AvalantinoRow2Plant4')}
                  value={this.state.setFlowersHar1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumberHar1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumberHar1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterHar1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber1Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits1Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits1Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers1Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers1Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber1Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber2Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits2Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits2Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers2Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers2Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber2Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber3Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits3Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits3Har1AvalantinoRow2Plant4.toString()} />

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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers3Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers3Har1AvalantinoRow2Plant4.toString()} />

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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber3Har1AvalantinoRow2Plant4.toString()} />


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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber4Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits4Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits4Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers4Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers4Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber4Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber5Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits5Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits5Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers5Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers5Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber5Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber6Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits6Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits6Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers6Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers6Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber6Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber7Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits7Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits7Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers7Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers7Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber7Har1AvalantinoRow2Plant4.toString()}

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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber8Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits8Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits8Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers8Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers8Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber8Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8Har1AvalantinoRow2Plant4')}
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
                  onChangeText={(text) => this.updateTextInput(text, 'trussNumber9Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber9Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits9Har1AvalantinoRow2Plant4')}
                  blurOnSubmit={false}
                  value={this.state.setFruits9Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers9Har1AvalantinoRow2Plant4')}
                  value={this.state.setFlowers9Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9Har1AvalantinoRow2Plant4')}
                  value={this.state.pruningNumber9Har1AvalantinoRow2Plant4.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9Har1AvalantinoRow2Plant4')}
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

                <View style={[(this.state.fruitLoadHar1AvalantinoRow2Plant4 <= 22 || this.state.fruitLoadHar1AvalantinoRow2Plant4 >= 40) ? styles.borderErrorColor : null]}>

                  <View
                    style={{
                      marginTop: 1
                    }}
                  />

                  <View style={styles.row}>
                    <Text style={styles.text4}>Fruit Load</Text>
                    <Text style={styles.text5}>{this.state.fruitLoadHar1AvalantinoRow2Plant4}</Text>
                  </View>

                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />

                </View>

                <View style={[(this.state.floweringTrussssHar1AvalantinoRow2Plant4 <= 0 || this.state.floweringTrussssHar1AvalantinoRow2Plant4 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Flowering Truss</Text>
                    <Text style={styles.text5}>{this.state.floweringTrussssHar1AvalantinoRow2Plant4}</Text>
                  </View>


                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.settingTrussNumberHar1AvalantinoRow2Plant4 <= 1 || this.state.settingTrussNumberHar1AvalantinoRow2Plant4 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Setting Truss</Text>
                    <Text style={styles.text5}>{this.state.settingTrussNumberHar1AvalantinoRow2Plant4}</Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.floweringTrussssHar1AvalantinoRow2Plant4 <= 0 || this.state.floweringTrussssHar1AvalantinoRow2Plant4 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Harvest Truss</Text>
                    <Text style={styles.text5}>{this.state.harvestTrussHar1AvalantinoRow2Plant4}</Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>
              </View>

              <View style={styles.marginDimensionTop}></View>


              <CheckBox style={styles.styleCheckbox}
                size={40}
                uncheckedColor='red'
                checkedColor="green"
                title="HAR 1 Avalantino Plant 4 completed"
                checked={this.state.Har1AvalantinoRow2Plant4Selected}
                textStyle={{ fontSize: 22 }}
                containerStyle={{ backgroundColor: 'transparent' }}
                onPress={() => this.changeCheckbox()} />

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

  styleCheckBox: {

    borderRadius: 3

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