import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform, Dimensions, Keyboard, KeyboardAvoidingView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements'
import Database from './Database'
import { LogBox } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
var screenWidth2 = (Dimensions.get('window').width)/1.6;


const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const db = new Database();


export default class RepKMPlant5 extends Component {

  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantRepKMPlant5 = this.onSubmitleavesPerPlantRepKMPlant5.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantRepKMPlant5Ref = this.updateRef.bind(this, 'leavesPerPlantRepKMPlant5');
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
      leavesPerPlantRepKMPlant5: '',
      fullySetTrussRepKMPlant5: '',
      setTrussLengthRepKMPlant5: '',
      weeklyGrowthRepKMPlant5: '',
      floweringTrussHeightRepKMPlant5: '',
      leafLengthRepKMPlant5: '',
      leafWidthRepKMPlant5: '',
      stmDiameterRepKMPlant5: '',
      lastWeekStmDiameterRepKMPlant5: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberRepKMPlant5: '',
      setFruitsRepKMPlant5: '',
      setFlowersRepKMPlant5: '',
      pruningNumberRepKMPlant5: '',
      fruitDiameterRepKMPlant5: '',

      trussNumber1RepKMPlant5: '',
      setFruits1RepKMPlant5: '',
      setFlowers1RepKMPlant5: '',
      pruningNumber1RepKMPlant5: '',
      fruitDiameter1RepKMPlant5: '',

      trussNumber2RepKMPlant5: '',
      setFruits2RepKMPlant5: '',
      setFlowers2RepKMPlant5: '',
      pruningNumber2RepKMPlant5: '',
      fruitDiameter2RepKMPlant5: '',

      trussNumber3RepKMPlant5: '',
      setFruits3RepKMPlant5: '',
      setFlowers3RepKMPlant5: '',
      pruningNumber3RepKMPlant5: '',
      fruitDiameter3RepKMPlant5: '',

      trussNumber4RepKMPlant5: '',
      setFruits4RepKMPlant5: '',
      setFlowers4RepKMPlant5: '',
      pruningNumber4RepKMPlant5: '',
      fruitDiameter4RepKMPlant5: '',

      trussNumber5RepKMPlant5: '',
      setFruits5RepKMPlant5: '',
      setFlowers5RepKMPlant5: '',
      pruningNumber5RepKMPlant5: '',
      fruitDiameter5RepKMPlant5: '',

      trussNumber6RepKMPlant5: '',
      setFruits6RepKMPlant5: '',
      setFlowers6RepKMPlant5: '',
      pruningNumber6RepKMPlant5: '',
      fruitDiameter6RepKMPlant5: '',

      trussNumber7RepKMPlant5: '',
      setFruits7RepKMPlant5: '',
      setFlowers7RepKMPlant5: '',
      pruningNumber7RepKMPlant5: '',
      fruitDiameter7RepKMPlant5: '',

      trussNumber8RepKMPlant5: '',
      setFruits8RepKMPlant5: '',
      setFlowers8RepKMPlant5: '',
      pruningNumber8RepKMPlant5: '',
      fruitDiameter8RepKMPlant5: '',

      trussNumber9RepKMPlant5: '',
      setFruits9RepKMPlant5: '',
      setFlowers9RepKMPlant5: '',
      pruningNumber9RepKMPlant5: '',
      fruitDiameter9RepKMPlant5: '',

      fruitLoadRepKMPlant5: '',
      harvestTrussRepKMPlant5: '',
      pruningHarRepKMPlant5: '',
      settingTrussNumberRepKMPlant5: '',
      prunSettingRepKMPlant5: '',
      pruneFloweringRepKMPlant5: '',

      floweringTrussNumberRepKMPlant5: '',
      settingTrussRepKMPlant5: '',
      settingTruss2RepKMPlant5: '',
      floweringTrussssRepKMPlant5: '',

      KMPlant5Selected: false,
      checkboxStatus: '',


      allTrussData: [],
      allPlantData: [],

      leavesPerPlantPreviousData: '',
      fullySetTrussPreviousData: '',
      fullySetTrussLengthPreviousData: '',
      weeklyGrowthPreviousData: '',
      flowerTrussHeightPreviousData: '',
      leafLengthPreviousData: '',
      leafWidthPreviousData: '',
      stemDiPreviousData: '',
      lastWeekStemDiaPreviousData: '',

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

    this.renderEntryData();

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

  renderEntryData = () => {

    //AWS data
    try {
      AsyncStorage.getItem('@MySuperStore:plantKey').then((plantValues) => {

        const allPlant = JSON.parse(plantValues)

        const filteredPlantWeek = (this.state.weekNumber) - 1;

        //Change week number
        const weekRowPlant = d => d.plantName === 'REP - KM5512' && d.plantNumber === 5 && d.plantRow === '807' && d.plantWeek === filteredPlantWeek;

        const filteredweekRowPlant = allPlant.plant_details.filter(weekRowPlant);

        this.setState({ allPlantData: filteredweekRowPlant })

        this.setData();


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('@MySuperStore:trussKey').then((trussValues) => {

        const allTruss = JSON.parse(trussValues)

        const filteredTrussWeek = (this.state.weekNumber) - 1;

        //Change week number
        const weekRowTruss = d => d.plantName === 'REP - KM5512' && d.plantNumber === 5 && d.plantRow === '807' && d.plantWeek === filteredTrussWeek;

        const filteredweekRowTruss = allTruss.truss_details.filter(weekRowTruss);

        this.setState({ allTrussData: filteredweekRowTruss })


      }).done();
    } catch (error) {
    }

    //AWS DATA ENDS




  }

  setData = () => {

   if (this.state.allPlantData.length !== 0) {

   

      if (JSON.stringify(this.state.allPlantData[0].leavesPerPlant) === 'null') {


        this.setState({


          leavesPerPlantPreviousData: "--"

        })

      } else {

        this.setState({

          leavesPerPlantPreviousData: JSON.stringify(this.state.allPlantData[0].leavesPerPlant)

        })


      }

      if (JSON.stringify(this.state.allPlantData[0].fullySetTruss) === 'null') {

        this.setState({

          fullySetTrussPreviousData: "--"

        })

      } else {

        this.setState({

          fullySetTrussPreviousData: JSON.stringify(this.state.allPlantData[0].fullySetTruss)


        })


      }

      if (JSON.stringify(this.state.allPlantData[0].setTrussLength) === 'null') {

        this.setState({

          fullySetTrussLengthPreviousData: "--"

        })

      } else {

        this.setState({

          fullySetTrussLengthPreviousData: JSON.stringify(this.state.allPlantData[0].setTrussLength)

        })


      }

      if (JSON.stringify(this.state.allPlantData[0].weeklyGrowth) === 'null') {

        this.setState({

          weeklyGrowthPreviousData: "--"

        })

      } else {

        this.setState({

          weeklyGrowthPreviousData: JSON.stringify(this.state.allPlantData[0].weeklyGrowth)


        })


      }

      if (JSON.stringify(this.state.allPlantData[0].floweringTrussHeight) === 'null') {

        this.setState({

          flowerTrussHeightPreviousData: "--"

        })

      } else {

        this.setState({

          flowerTrussHeightPreviousData: JSON.stringify(this.state.allPlantData[0].floweringTrussHeight)


        })


      }

      if (JSON.stringify(this.state.allPlantData[0].leafLength) === 'null') {

        this.setState({

          leafLengthPreviousData: "--"

        })

      } else {

        this.setState({

          leafLengthPreviousData: JSON.stringify(this.state.allPlantData[0].leafLength)


        })


      }

      if (JSON.stringify(this.state.allPlantData[0].leafWidth) === 'null') {

        this.setState({

          leafWidthPreviousData: "--"

        })

      } else {

        this.setState({

          leafWidthPreviousData: JSON.stringify(this.state.allPlantData[0].leafWidth)

        })


      }

      if (JSON.stringify(this.state.allPlantData[0].stmDiameter) === 'null') {

        this.setState({

          stemDiPreviousData: "--"

        })

      } else {

        this.setState({

          stemDiPreviousData: JSON.stringify(this.state.allPlantData[0].stmDiameter)

        })


      }

      if (JSON.stringify(this.state.allPlantData[0].lastWeekStmDiameter) === 'null') {

        this.setState({

          lastWeekStemDiaPreviousData: "--"

        })

      } else {

        this.setState({

          lastWeekStemDiaPreviousData: JSON.stringify(this.state.allPlantData[0].lastWeekStmDiameter)

        })


      }

    } else {

      console.log("No data in the database")
    }


  }


  getAsysncValues = async () => {


    try {
      AsyncStorage.getItem('leavesPerPlantRepKMPlant5').then((text1Value) => {
        this.setState({ leavesPerPlantRepKMPlant5: JSON.parse(text1Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussRepKMPlant5').then((text2Value) => {
        this.setState({ fullySetTrussRepKMPlant5: JSON.parse(text2Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthRepKMPlant5').then((text3Value) => {
        this.setState({ setTrussLengthRepKMPlant5: JSON.parse(text3Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthRepKMPlant5').then((text4Value) => {
        this.setState({ weeklyGrowthRepKMPlant5: JSON.parse(text4Value) });



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightRepKMPlant5').then((text5Value) => {
        this.setState({ floweringTrussHeightRepKMPlant5: JSON.parse(text5Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthRepKMPlant5').then((text6Value) => {
        this.setState({ leafLengthRepKMPlant5: JSON.parse(text6Value) });


      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthRepKMPlant5').then((text7Value) => {
        this.setState({ leafWidthRepKMPlant5: JSON.parse(text7Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterRepKMPlant5').then((text8Value) => {
        this.setState({ stmDiameterRepKMPlant5: JSON.parse(text8Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepKMPlant5').then((text9Value) => {
        this.setState({ lastWeekStmDiameterRepKMPlant5: JSON.parse(text9Value) });


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('KMPlant5Selected').then((text99Value) => {
        this.setState({ KMPlant5Selected: JSON.parse(text99Value) });

        console.log(this.state.KMPlant5Selected)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('trussNumberRepKMPlant5').then((text10Value) => {

        if (text10Value !== null) {
          this.setState({ trussNumberRepKMPlant5: JSON.parse(text10Value) });

          this.setState({ trussNumber1RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 1 })
          this.setState({ trussNumber2RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 2 })
          this.setState({ trussNumber3RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 3 })
          this.setState({ trussNumber4RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 4 })
          this.setState({ trussNumber5RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 5 })
          this.setState({ trussNumber6RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 6 })
          this.setState({ trussNumber7RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 7 })
          this.setState({ trussNumber8RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 8 })
          this.setState({ trussNumber9RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 9 })

        }

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFruitsRepKMPlant5').then((text11Value) => {
        if (text11Value !== null) {

          this.setState({ setFruitsRepKMPlant5: JSON.parse(text11Value) });

        }


      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('setFlowersRepKMPlant5').then((text12Value) => {

        if (text12Value !== null) {

          this.setState({ setFlowersRepKMPlant5: JSON.parse(text12Value) });

        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumberRepKMPlant5').then((text13Value) => {
        if (text13Value !== null) {
          this.setState({ pruningNumberRepKMPlant5: JSON.parse(text13Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameterRepKMPlant5').then((text14Value) => {

        if (text14Value !== null) {
          this.setState({ fruitDiameterRepKMPlant5: JSON.parse(text14Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 1---------------------------------//

    try {
      AsyncStorage.getItem('setFruits1RepKMPlant5').then((text16Value) => {

        if (text16Value !== null) {
          this.setState({ setFruits1RepKMPlant5: JSON.parse(text16Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers1RepKMPlant5').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFlowers1RepKMPlant5: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber1RepKMPlant5').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ pruningNumber1RepKMPlant5: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter1RepKMPlant5').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ fruitDiameter1RepKMPlant5: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 2---------------------------------//

    try {
      AsyncStorage.getItem('setFruits2RepKMPlant5').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFruits2RepKMPlant5: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers2RepKMPlant5').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ setFlowers2RepKMPlant5: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber2RepKMPlant5').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ pruningNumber2RepKMPlant5: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter2RepKMPlant5').then((text20Value) => {

        if (text20Value !== null) {
          this.setState({ fruitDiameter2RepKMPlant5: JSON.parse(text20Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 3---------------------------------//

    try {
      AsyncStorage.getItem('setFruits3RepKMPlant5').then((text21Value) => {

        if (text21Value !== null) {
          this.setState({ setFruits3RepKMPlant5: JSON.parse(text21Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers3RepKMPlant5').then((text22Value) => {

        if (text22Value !== null) {
          this.setState({ setFlowers3RepKMPlant5: JSON.parse(text22Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber3RepKMPlant5').then((text23Value) => {

        if (text23Value !== null) {
          this.setState({ pruningNumber3RepKMPlant5: JSON.parse(text23Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter3RepKMPlant5').then((text24Value) => {

        if (text24Value !== null) {
          this.setState({ fruitDiameter3RepKMPlant5: JSON.parse(text24Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 4---------------------------------//

    try {
      AsyncStorage.getItem('setFruits4RepKMPlant5').then((text25Value) => {

        if (text25Value !== null) {
          this.setState({ setFruits4RepKMPlant5: JSON.parse(text25Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers4RepKMPlant5').then((text26Value) => {

        if (text26Value !== null) {
          this.setState({ setFlowers4RepKMPlant5: JSON.parse(text26Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber4RepKMPlant5').then((text27Value) => {

        if (text27Value !== null) {
          this.setState({ pruningNumber4RepKMPlant5: JSON.parse(text27Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter4RepKMPlant5').then((text28Value) => {

        if (text28Value !== null) {
          this.setState({ fruitDiameter4RepKMPlant5: JSON.parse(text28Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 5---------------------------------//

    try {
      AsyncStorage.getItem('setFruits5RepKMPlant5').then((text29Value) => {

        if (text29Value !== null) {
          this.setState({ setFruits5RepKMPlant5: JSON.parse(text29Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers5RepKMPlant5').then((text30Value) => {

        if (text30Value !== null) {
          this.setState({ setFlowers5RepKMPlant5: JSON.parse(text30Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber5RepKMPlant5').then((text31Value) => {

        if (text31Value !== null) {
          this.setState({ pruningNumber5RepKMPlant5: JSON.parse(text31Value) });
        }


      }).done();
    } catch (error) {
    }
    try {

      AsyncStorage.getItem('fruitDiameter5RepKMPlant5').then((text32Value) => {
        if (text32Value !== null) {
          this.setState({ fruitDiameter5RepKMPlant5: JSON.parse(text32Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 6---------------------------------//

    try {
      AsyncStorage.getItem('setFruits6RepKMPlant5').then((text33Value) => {

        if (text33Value !== null) {
          this.setState({ setFruits6RepKMPlant5: JSON.parse(text33Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers6RepKMPlant5').then((text34Value) => {

        if (text34Value !== null) {
          this.setState({ setFlowers6RepKMPlant5: JSON.parse(text34Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber6RepKMPlant5').then((text35Value) => {

        if (text35Value !== null) {
          this.setState({ pruningNumber6RepKMPlant5: JSON.parse(text35Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter6RepKMPlant5').then((text36Value) => {

        if (text36Value !== null) {
          this.setState({ fruitDiameter6RepKMPlant5: JSON.parse(text36Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 7---------------------------------//

    try {
      AsyncStorage.getItem('setFruits7RepKMPlant5').then((text37Value) => {

        if (text37Value !== null) {
          this.setState({ setFruits7RepKMPlant5: JSON.parse(text37Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers7RepKMPlant5').then((text38Value) => {

        if (text38Value !== null) {

          this.setState({ setFlowers7RepKMPlant5: JSON.parse(text38Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber7RepKMPlant5').then((text39Value) => {

        if (text39Value !== null) {
          this.setState({ pruningNumber7RepKMPlant5: JSON.parse(text39Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter7RepKMPlant5').then((text40Value) => {

        if (text40Value !== null) {
          this.setState({ fruitDiameter7RepKMPlant5: JSON.parse(text40Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Truss 8---------------------------------//

    try {
      AsyncStorage.getItem('setFruits8RepKMPlant5').then((text41Value) => {

        if (text41Value !== null) {
          this.setState({ setFruits8RepKMPlant5: JSON.parse(text41Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers8RepKMPlant5').then((text42Value) => {

        if (text42Value !== null) {
          this.setState({ setFlowers8RepKMPlant5: JSON.parse(text42Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber8RepKMPlant5').then((text43Value) => {

        if (text43Value !== null) {
          this.setState({ pruningNumber8RepKMPlant5: JSON.parse(text43Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter8RepKMPlant5').then((text44Value) => {

        if (text44Value !== null) {
          this.setState({ fruitDiameter8RepKMPlant5: JSON.parse(text44Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 9---------------------------------//

    try {
      AsyncStorage.getItem('setFruits9RepKMPlant5').then((text45Value) => {

        if (text45Value !== null) {
          this.setState({ setFruits9RepKMPlant5: JSON.parse(text45Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers9RepKMPlant5').then((text46Value) => {

        if (text46Value !== null) {
          this.setState({ setFlowers9RepKMPlant5: JSON.parse(text46Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber9RepKMPlant5').then((text47Value) => {

        if (text47Value !== null) {
          this.setState({ pruningNumber9RepKMPlant5: JSON.parse(text47Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter9RepKMPlant5').then((text48Value) => {

        if (text48Value !== null) {
          this.setState({ fruitDiameter9RepKMPlant5: JSON.parse(text48Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Calculations---------------------------------//

    try {
      AsyncStorage.getItem('fruitLoadRepKMPlant5').then((text49Value) => {
        if (text49Value !== null) {
          this.setState({ fruitLoadRepKMPlant5: JSON.parse(text49Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('floweringTrussssRepKMPlant5').then((text50Value) => {

        if (text50Value !== null) {
          this.setState({ floweringTrussssRepKMPlant5: JSON.parse(text50Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('settingTrussNumberRepKMPlant5').then((text51Value) => {

        if (text51Value !== null) {
          this.setState({ settingTrussNumberRepKMPlant5: JSON.parse(text51Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('harvestTrussRepKMPlant5').then((text52Value) => {

        if (text52Value !== null) {
          this.setState({ harvestTrussRepKMPlant5: JSON.parse(text52Value) });
        }


      }).done();
    } catch (error) {
    }






    /*try {
      AsyncStorage.getItem('trussNumberRepKMPlant5').then((text10Value) => {
        this.setState({ trussNumberRepKMPlant5: JSON.parse(text10Value) });
        console.log(this.state.trussNumberRepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsRepKMPlant5').then((text11Value) => {
        this.setState({ setFruitsRepKMPlant5: JSON.parse(text11Value) });
        console.log(this.state.setFruitsRepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersRepKMPlant5').then((text12Value) => {
        this.setState({ setFlowersRepKMPlant5: JSON.parse(text12Value) });
        console.log(this.state.setFlowersRepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberRepKMPlant5').then((text13Value) => {
        this.setState({ pruningNumberRepKMPlant5: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberRepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterRepKMPlant5').then((text14Value) => {
        this.setState({ fruitDiameterRepKMPlant5: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterRepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1RepKMPlant5').then((text15Value) => {
        this.setState({ setFruits1RepKMPlant5: JSON.parse(text15Value) });
        console.log(this.state.setFruits1RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1RepKMPlant5').then((text16Value) => {
        this.setState({ setFlowers1RepKMPlant5: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1RepKMPlant5').then((text17Value) => {
        this.setState({ pruningNumber1RepKMPlant5: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1RepKMPlant5').then((text18Value) => {
        this.setState({ fruitDiameter1RepKMPlant5: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2RepKMPlant5').then((text19Value) => {
        this.setState({ setFruits2RepKMPlant5: JSON.parse(text19Value) });
        console.log(this.state.setFruits2RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2RepKMPlant5').then((text20Value) => {
        this.setState({ setFlowers2RepKMPlant5: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2RepKMPlant5').then((text21Value) => {
        this.setState({ pruningNumber2RepKMPlant5: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2RepKMPlant5').then((text22Value) => {
        this.setState({ fruitDiameter2RepKMPlant5: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3RepKMPlant5').then((text23Value) => {
        this.setState({ setFruits3RepKMPlant5: JSON.parse(text23Value) });
        console.log(this.state.setFruits3RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3RepKMPlant5').then((text24Value) => {
        this.setState({ setFlowers3RepKMPlant5: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3RepKMPlant5').then((text25Value) => {
        this.setState({ pruningNumber3RepKMPlant5: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3RepKMPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3RepKMPlant5').then((text26Value) => {
        this.setState({ fruitDiameter3RepKMPlant5: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3RepKMPlant5)



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

    const cleanNumber = /[^0-9.]/

    if(!cleanNumber.test(text)){

      this.setItem(field, text)
      const state = this.state
      state[field] = text;
      this.setState(state)

    }else{

      Alert.alert('Enter valid number')

    }

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

    this.setState({ trussNumber1RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 1 })
    this.setState({ trussNumber2RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 2 })
    this.setState({ trussNumber3RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 3 })
    this.setState({ trussNumber4RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 4 })
    this.setState({ trussNumber5RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 5 })
    this.setState({ trussNumber6RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 6 })
    this.setState({ trussNumber7RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 7 })
    this.setState({ trussNumber8RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 8 })
    this.setState({ trussNumber9RepKMPlant5: parseInt(this.state.trussNumberRepKMPlant5) + 9 })


    if (this.state.trussNumberRepKMPlant5 !== "") {

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

    sum = ((parseInt(this.state.setFruitsRepKMPlant5) ? parseInt(this.state.setFruitsRepKMPlant5) : 0) + (parseInt(this.state.setFruits1RepKMPlant5) ? parseInt(this.state.setFruits1RepKMPlant5) : 0) + (parseInt(this.state.setFruits2RepKMPlant5) ? parseInt(this.state.setFruits2RepKMPlant5) : 0) + (parseInt(this.state.setFruits3RepKMPlant5) ? parseInt(this.state.setFruits3RepKMPlant5) : 0) + (parseInt(this.state.setFruits4RepKMPlant5) ? parseInt(this.state.setFruits4RepKMPlant5) : 0) + (parseInt(this.state.setFruits5RepKMPlant5) ? parseInt(this.state.setFruits5RepKMPlant5) : 0) + (parseInt(this.state.setFruits6RepKMPlant5) ? parseInt(this.state.setFruits6RepKMPlant5) : 0) + (parseInt(this.state.setFruits7RepKMPlant5) ? parseInt(this.state.setFruits7RepKMPlant5) : 0) + (parseInt(this.state.setFruits8RepKMPlant5) ? parseInt(this.state.setFruits8RepKMPlant5) : 0) + (parseInt(this.state.setFruits9RepKMPlant5) ? parseInt(this.state.setFruits9RepKMPlant5) : 0));
    this.setState({
      fruitLoadRepKMPlant5: sum,
    });

    this.setItem("fruitLoadRepKMPlant5", this.state.fruitLoadRepKMPlant5)

    console.log("Fruit Load : " + sum);



  }

  calculateHarvestTruss = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersRepKMPlant5 === "") {

      prunNum = parseInt(this.state.pruningNumberRepKMPlant5)

      div = (parseInt((this.state.setFruitsRepKMPlant5) ? (this.state.setFruitsRepKMPlant5) : 0) / parseFloat((this.state.pruningNumberRepKMPlant5) ? (this.state.pruningNumberRepKMPlant5) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberRepKMPlant5) ? parseInt(this.state.trussNumberRepKMPlant5) : 0) + sub).toFixed(2))
      this.setState({
        harvestTrussRepKMPlant5: add,
        pruningHarRepKMPlant5: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberRepKMPlant5)
      var num = this.state.trussNumberRepKMPlant5

      this.setState({
        harvestTrussRepKMPlant5: num,
        pruningHarRepKMPlant5: prunNum,
      });
    }

    console.log("Harvest Truss : " + add);

    this.setItem("harvestTrussRepKMPlant5", this.state.harvestTrussRepKMPlant5)



  }

  calculateSettingTruss2 = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log("Setting truss called : " + this.state.setFruits2RepKMPlant5);

    if (this.state.setFruits9RepKMPlant5 === "") {

      if (this.state.setFruits8RepKMPlant5 === "") {

        if (this.state.setFruits7RepKMPlant5 === "") {

          if (this.state.setFruits6RepKMPlant5 === "") {

            if (this.state.setFruits5RepKMPlant5 === "") {

              if (this.state.setFruits4RepKMPlant5 === "") {

                if (this.state.setFruits3RepKMPlant5 === "") {

                  if (this.state.setFruits2RepKMPlant5 === "") {

                    if (this.state.setFruits1RepKMPlant5 === "") {

                      if (this.state.setFruitsRepKMPlant5 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberRepKMPlant5);
                        trussNum = parseInt(this.state.trussNumberRepKMPlant5);
                        settingFruit = parseInt(this.state.setFruitsRepKMPlant5);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumberRepKMPlant5: settingTruss,
                          settingTruss: trussNum,
                          prunSettingRepKMPlant5: pruningSet,

                        });

                        this.setItem("settingTrussNumberRepKMPlant5", settingTruss)

                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberRepKMPlant5) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1RepKMPlant5);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1RepKMPlant5);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumberRepKMPlant5: settingTruss,
                        settingTruss: trussNum,
                        prunSettingRepKMPlant5: pruningSet,

                      });

                      this.setItem("settingTrussNumberRepKMPlant5", settingTruss)


                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberRepKMPlant5) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2RepKMPlant5);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2RepKMPlant5);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumberRepKMPlant5: settingTruss,
                      settingTruss: trussNum,
                      prunSettingRepKMPlant5: pruningSet,

                    });
                    this.setItem("settingTrussNumberRepKMPlant5", settingTruss)


                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberRepKMPlant5) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3RepKMPlant5);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3RepKMPlant5);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumberRepKMPlant5: settingTruss,
                    settingTruss: trussNum,
                    prunSettingRepKMPlant5: pruningSet,

                  });

                  this.setItem("settingTrussNumberRepKMPlant5", settingTruss)


                }

              } else {

                var number4 = (parseInt(this.state.trussNumberRepKMPlant5) + 4)

                pruningSet = parseInt(this.state.pruningNumber4RepKMPlant5);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4RepKMPlant5);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumberRepKMPlant5: settingTruss,
                  settingTruss: trussNum,
                  prunSettingRepKMPlant5: pruningSet,

                });

                this.setItem("settingTrussNumberRepKMPlant5", settingTruss)


              }

            } else {

              var number5 = (parseInt(this.state.trussNumberRepKMPlant5) + 5)

              pruningSet = parseInt(this.state.pruningNumber5RepKMPlant5);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5RepKMPlant5);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumberRepKMPlant5: settingTruss,
                settingTruss: trussNum,
                prunSettingRepKMPlant5: pruningSet,

              });

              this.setItem("settingTrussNumberRepKMPlant5", settingTruss)



            }

          } else {

            var number6 = (parseInt(this.state.trussNumberRepKMPlant5) + 6)

            pruningSet = parseInt(this.state.pruningNumber6RepKMPlant5);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6RepKMPlant5);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumberRepKMPlant5: settingTruss,
              settingTruss: trussNum,
              prunSettingRepKMPlant5: pruningSet,

            });

            this.setItem("settingTrussNumberRepKMPlant5", settingTruss)


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberRepKMPlant5) + 7)

          pruningSet = parseInt(this.state.pruningNumber7RepKMPlant5);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7RepKMPlant5);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumberRepKMPlant5: settingTruss,
            settingTruss: trussNum,
            prunSettingRepKMPlant5: pruningSet,

          });

          this.setItem("settingTrussNumberRepKMPlant5", settingTruss)

        }

      } else {

        var number8 = (parseInt(this.state.trussNumberRepKMPlant5) + 8)

        pruningSet = parseInt(this.state.pruningNumber8RepKMPlant5);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8RepKMPlant5);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumberRepKMPlant5: settingTruss,
          settingTruss: trussNum,
          prunSettingRepKMPlant5: pruningSet,

        });

        this.setItem("settingTrussNumberRepKMPlant5", settingTruss)


      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberRepKMPlant5) + 9)

      pruningSet = parseInt(this.state.pruningNumber9RepKMPlant5);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9RepKMPlant5);
      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
      console.log("Setting Truss Number 9 : " + settingTruss);
      this.setState({
        settingTrussNumberRepKMPlant5: settingTruss,
        settingTruss2: trussNum,
        prunSettingRepKMPlant5: pruningSet,
      });

      this.setItem("settingTrussNumberRepKMPlant5", settingTruss)


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

    console.log("Flowering truss called : " + this.state.setFlowers2RepKMPlant5);


    if (this.state.setFlowers9RepKMPlant5 === "") {

      if (this.state.setFlowers8RepKMPlant5 === "") {

        if (this.state.setFlowers7RepKMPlant5 === "") {

          if (this.state.setFlowers6RepKMPlant5 === "") {

            if (this.state.setFlowers5RepKMPlant5 === "") {

              if (this.state.setFlowers4RepKMPlant5 === "") {

                if (this.state.setFlowers3RepKMPlant5 === "") {

                  if (this.state.setFlowers2RepKMPlant5 === "") {

                    if (this.state.setFlowers1RepKMPlant5 === "") {

                      if (this.state.setFlowersRepKMPlant5 === "") {


                      } else {

                        var number01 = this.state.trussNumberRepKMPlant5


                        flowerPruningNumner = parseInt(this.state.pruningNumberRepKMPlant5);
                        flowering = parseInt(this.state.setFlowersRepKMPlant5);
                        flowerSetFruits = parseInt(this.state.setFruitsRepKMPlant5);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussssRepKMPlant5: floweringTruss,
                          pruneFloweringRepKMPlant5: flowerPruningNumner,
                        });
                        this.setItem("floweringTrussssRepKMPlant5", floweringTruss)

                      }


                    } else {

                      var number11 = + (this.state.trussNumberRepKMPlant5) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1RepKMPlant5);
                      flowering = parseInt(this.state.setFlowers1RepKMPlant5);
                      flowerSetFruits = parseInt(this.state.setFruits1RepKMPlant5);
                      trussNum = number11
                      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                      console.log("Flowering Truss Value : " + floweringTruss);
                      this.setState({
                        floweringTrussssRepKMPlant5: floweringTruss,
                        pruneFloweringRepKMPlant5: flowerPruningNumner,

                      });
                      this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


                    }


                  } else {

                    var number21 = + (this.state.trussNumberRepKMPlant5) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2RepKMPlant5);
                    flowering = parseInt(this.state.setFlowers2RepKMPlant5);
                    flowerSetFruits = parseInt(this.state.setFruits2RepKMPlant5);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussssRepKMPlant5: floweringTruss,
                      pruneFloweringRepKMPlant5: flowerPruningNumner,

                    });
                    this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


                  }


                } else {

                  var number31 = + (this.state.trussNumberRepKMPlant5) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3RepKMPlant5);
                  flowering = parseInt(this.state.setFlowers3RepKMPlant5);
                  flowerSetFruits = parseInt(this.state.setFruits3RepKMPlant5);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussssRepKMPlant5: floweringTruss,
                    pruneFloweringRepKMPlant5: flowerPruningNumner,

                  });

                  this.setItem("floweringTrussssRepKMPlant5", floweringTruss)

                }


              } else {

                var number41 = + (this.state.trussNumberRepKMPlant5) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4RepKMPlant5);
                flowering = parseInt(this.state.setFlowers4RepKMPlant5);
                flowerSetFruits = parseInt(this.state.setFruits4RepKMPlant5);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussssRepKMPlant5: floweringTruss,
                  pruneFloweringRepKMPlant5: flowerPruningNumner,

                });

                this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


              }


            } else {

              var number51 = + (this.state.trussNumberRepKMPlant5) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5RepKMPlant5);
              flowering = parseInt(this.state.setFlowers5RepKMPlant5);
              flowerSetFruits = parseInt(this.state.setFruits5RepKMPlant5);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussssRepKMPlant5: floweringTruss,
                pruneFloweringRepKMPlant5: flowerPruningNumner,

              });

              this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


            }


          } else {

            var number61 = + (this.state.trussNumberRepKMPlant5) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6RepKMPlant5);
            flowering = parseInt(this.state.setFlowers6RepKMPlant5);
            flowerSetFruits = parseInt(this.state.setFruits6RepKMPlant5);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussssRepKMPlant5: floweringTruss,
              pruneFloweringRepKMPlant5: flowerPruningNumner,

            });

            this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


          }


        } else {

          var number71 = + (this.state.trussNumberRepKMPlant5) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7RepKMPlant5);
          flowering = parseInt(this.state.setFlowers7RepKMPlant5);
          flowerSetFruits = parseInt(this.state.setFruits7RepKMPlant5);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussssRepKMPlant5: floweringTruss,
            pruneFloweringRepKMPlant5: flowerPruningNumner,

          });

          this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


        }


      } else {
        var number81 = + (this.state.trussNumberRepKMPlant5) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8RepKMPlant5);
        flowering = parseInt(this.state.setFlowers8RepKMPlant5);
        flowerSetFruits = parseInt(this.state.setFruits8RepKMPlant5);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussssRepKMPlant5: floweringTruss,
          pruneFloweringRepKMPlant5: flowerPruningNumner,

        });

        this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


      }


    } else {

      var number91 = + (this.state.trussNumberRepKMPlant5) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9RepKMPlant5);
      flowering = parseInt(this.state.setFlowers9RepKMPlant5);
      flowerSetFruits = parseInt(this.state.setFruits9RepKMPlant5);
      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
      console.log("Flowering Truss Value : " + floweringTruss);
      this.setState({
        floweringTrussssRepKMPlant5: floweringTruss,
        pruneFloweringRepKMPlant5: flowerPruningNumner,

      });

      this.setItem("floweringTrussssRepKMPlant5", floweringTruss)


    }





  }
  //

  //Get data for truss

  getTrussData = () => {

    if (this.state.allTrussData.length != 0) {

      //1st Truss
      if (this.state.trussNumberRepKMPlant5 != null) {

        //Change week number
        const weekRowTruss1 = d => d.trussNumber === parseInt(this.state.trussNumberRepKMPlant5);

        const filteredweekRowTruss1 = this.state.allTrussData.filter(weekRowTruss1);

        console.log("Truss 1 : " + JSON.stringify(filteredweekRowTruss1));

        if (filteredweekRowTruss1.length != 0) {

          if (JSON.stringify(filteredweekRowTruss1[0].setFlowers) === 'null') {

            this.setState({

              setFlowersRepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowersRepKMPlant5: JSON.stringify(filteredweekRowTruss1[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss1[0].setFruits) === 'null') {


            this.setState({


              setFruitsRepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruitsRepKMPlant5: JSON.stringify(filteredweekRowTruss1[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss1[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumberRepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumberRepKMPlant5: JSON.stringify(filteredweekRowTruss1[0].pruningNumber)

            })

          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }

      } else {


      }
      //End


      //2nd Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 1) != null) {

        //Change week number
        const weekRowTruss2 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 1);

        const filteredweekRowTruss2 = this.state.allTrussData.filter(weekRowTruss2);

        console.log("Truss 2 : " + JSON.stringify(filteredweekRowTruss2));

        if (filteredweekRowTruss2.length != 0) {

          if (JSON.stringify(filteredweekRowTruss2[0].setFlowers) === 'null') {

            this.setState({

              setFlowers1RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers1RepKMPlant5: JSON.stringify(filteredweekRowTruss2[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss2[0].setFruits) === 'null') {


            this.setState({


              setFruits1RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits1RepKMPlant5: JSON.stringify(filteredweekRowTruss2[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss2[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber1RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber1RepKMPlant5: JSON.stringify(filteredweekRowTruss2[0].pruningNumber)

            })

          }



          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }



      } else {


      }

      //End

      //3rd Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 2) != null) {

        //Change week number
        const weekRowTruss3 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 2);

        const filteredweekRowTruss3 = this.state.allTrussData.filter(weekRowTruss3);

        console.log("Truss 3 : " + JSON.stringify(filteredweekRowTruss3));

        if (filteredweekRowTruss3.length != 0) {


          if (JSON.stringify(filteredweekRowTruss3[0].setFlowers) === 'null') {

            this.setState({

              setFlowers2RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers2RepKMPlant5: JSON.stringify(filteredweekRowTruss3[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss3[0].setFruits) === 'null') {


            this.setState({


              setFruits2RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits2RepKMPlant5: JSON.stringify(filteredweekRowTruss3[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss3[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber2RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber2RepKMPlant5: JSON.stringify(filteredweekRowTruss3[0].pruningNumber)

            })



          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }

      } else {


      }

      //End

      //4th Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 3) != null) {

        //Change week number
        const weekRowTruss4 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 3);

        const filteredweekRowTruss4 = this.state.allTrussData.filter(weekRowTruss4);

        console.log("Truss 4 : " + JSON.stringify(filteredweekRowTruss4));

        if (filteredweekRowTruss4.length != 0) {

          if (JSON.stringify(filteredweekRowTruss4[0].setFlowers) === 'null') {

            this.setState({

              setFlowers3RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers3RepKMPlant5: JSON.stringify(filteredweekRowTruss4[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss4[0].setFruits) === 'null') {


            this.setState({


              setFruits3RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits3RepKMPlant5: JSON.stringify(filteredweekRowTruss4[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss4[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber3RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber3RepKMPlant5: JSON.stringify(filteredweekRowTruss4[0].pruningNumber)

            })

          }



          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }

      } else {


      }

      //End

      //5th Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 4) != null) {

        //Change week number
        const weekRowTruss5 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 4);

        const filteredweekRowTruss5 = this.state.allTrussData.filter(weekRowTruss5);

        console.log("Truss 5 : " + JSON.stringify(filteredweekRowTruss5));

        if (filteredweekRowTruss5.length != 0) {

          if (JSON.stringify(filteredweekRowTruss5[0].setFlowers) === 'null') {

            this.setState({

              setFlowers4RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers4RepKMPlant5: JSON.stringify(filteredweekRowTruss5[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss5[0].setFruits) === 'null') {


            this.setState({


              setFruits4RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits4RepKMPlant5: JSON.stringify(filteredweekRowTruss5[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss5[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber4RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber4RepKMPlant5: JSON.stringify(filteredweekRowTruss5[0].pruningNumber)

            })

          }


          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }

      } else {


      }

      //End

      //6th Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 5) != null) {

        //Change week number
        const weekRowTruss6 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 5);

        const filteredweekRowTruss6 = this.state.allTrussData.filter(weekRowTruss6);

        console.log("Truss 6 : " + JSON.stringify(filteredweekRowTruss6));

        if (filteredweekRowTruss6.length != 0) {

          if (JSON.stringify(filteredweekRowTruss6[0].setFlowers) === 'null') {

            this.setState({

              setFlowers5RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers5RepKMPlant5: JSON.stringify(filteredweekRowTruss6[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss6[0].setFruits) === 'null') {


            this.setState({


              setFruits5RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits5RepKMPlant5: JSON.stringify(filteredweekRowTruss6[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss6[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber5RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber5RepKMPlant5: JSON.stringify(filteredweekRowTruss6[0].pruningNumber)

            })

          }


          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }


      } else {


      }

      //End

      //7th Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 6) != null) {

        //Change week number
        const weekRowTruss7 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 6);

        const filteredweekRowTruss7 = this.state.allTrussData.filter(weekRowTruss7);

        console.log("Truss 7 : " + JSON.stringify(filteredweekRowTruss7));

        if (filteredweekRowTruss7.length != 0) {

          if (JSON.stringify(filteredweekRowTruss7[0].setFlowers) === 'null') {

            this.setState({

              setFlowers6RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers6RepKMPlant5: JSON.stringify(filteredweekRowTruss7[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss7[0].setFruits) === 'null') {


            this.setState({


              setFruits6RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits6RepKMPlant5: JSON.stringify(filteredweekRowTruss7[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss7[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber6RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber6RepKMPlant5: JSON.stringify(filteredweekRowTruss7[0].pruningNumber)

            })

          }
          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }


      } else {


      }

      //End

      //8th Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 7) != null) {

        //Change week number
        const weekRowTruss8 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 7);

        const filteredweekRowTruss8 = this.state.allTrussData.filter(weekRowTruss8);

        console.log("Truss 8 : " + JSON.stringify(filteredweekRowTruss8));

        if (filteredweekRowTruss8.length != 0) {

          if (JSON.stringify(filteredweekRowTruss8[0].setFlowers) === 'null') {

            this.setState({

              setFlowers7RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers7RepKMPlant5: JSON.stringify(filteredweekRowTruss8[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss8[0].setFruits) === 'null') {


            this.setState({


              setFruits7RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits7RepKMPlant5: JSON.stringify(filteredweekRowTruss8[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss8[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber7RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber7RepKMPlant5: JSON.stringify(filteredweekRowTruss8[0].pruningNumber)

            })

          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }


      } else {


      }

      //End

      //9th Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 8) != null) {

        //Change week number
        const weekRowTruss9 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 8);

        const filteredweekRowTruss9 = this.state.allTrussData.filter(weekRowTruss9);

        console.log("Truss 9 : " + JSON.stringify(filteredweekRowTruss9));

        if (filteredweekRowTruss9.length != 0) {

          if (JSON.stringify(filteredweekRowTruss9[0].setFlowers) === 'null') {

            this.setState({

              setFlowers8RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers8RepKMPlant5: JSON.stringify(filteredweekRowTruss9[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss9[0].setFruits) === 'null') {


            this.setState({


              setFruits8RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits8RepKMPlant5: JSON.stringify(filteredweekRowTruss9[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss9[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber8RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber8RepKMPlant5: JSON.stringify(filteredweekRowTruss9[0].pruningNumber)

            })

          }
          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }

      } else {


      }

      //End

      //10th Truss
      if ((parseInt(this.state.trussNumberRepKMPlant5) + 9) != null) {

        //Change week number
        const weekRowTruss10 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant5) + 9);

        const filteredweekRowTruss10 = this.state.allTrussData.filter(weekRowTruss10);

        console.log("Truss 9 : " + JSON.stringify(filteredweekRowTruss10));

        if (filteredweekRowTruss10.length != 0) {

          if (JSON.stringify(filteredweekRowTruss10[0].setFlowers) === 'null') {

            this.setState({

              setFlowers9RepKMPlant5: "",

            })

          } else {

            this.setState({

              setFlowers9RepKMPlant5: JSON.stringify(filteredweekRowTruss10[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss10[0].setFruits) === 'null') {


            this.setState({


              setFruits9RepKMPlant5: "",

            })


          } else {


            this.setState({


              setFruits9RepKMPlant5: JSON.stringify(filteredweekRowTruss10[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss10[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber9RepKMPlant5: "",

            })


          } else {


            this.setState({


              pruningNumber9RepKMPlant5: JSON.stringify(filteredweekRowTruss10[0].pruningNumber)

            })

          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();

        }

      } else {


      }

      //End

    } else {

      console.log("No data in the database")

    }
  }
  //

  //DEFINE FOCUS

  changeCheckbox = () => {

    this.setState({ KMPlant5Selected: !this.state.KMPlant5Selected })

    const vart = this.state.KMPlant5Selected

    const vart2 = false;

    if (vart == null) {

      this.setItem('KMPlant5Selected', vart2)

      EventRegister.emit('kmEventPlant5', vart2)

    } else {

      this.setItem('KMPlant5Selected', vart)

      EventRegister.emit('kmEventPlant5', vart)

    }

    this.checkStatus();

  }

  checkStatus = () => {

    const vart = this.state.KMPlant5Selected

    if (vart == null || vart == false) {

      this.setState({ checkboxStatus: 'CHECKED' })


      let data = {
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        leavesPerPlant: this.state.leavesPerPlantRepKMPlant5,
        fullySetTruss: this.state.fullySetTrussRepKMPlant5,
        setTrussLength: this.state.setTrussLengthRepKMPlant5,
        weeklyGrowth: this.state.weeklyGrowthRepKMPlant5,
        floweringTrussHeight: this.state.floweringTrussHeightRepKMPlant5,
        leafLength: this.state.leafLengthRepKMPlant5,
        leafWidth: this.state.leafWidthRepKMPlant5,
        stmDiameter: this.state.stmDiameterRepKMPlant5,
        lastWeekStmDiameter: this.state.lastWeekStmDiameterRepKMPlant5

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

    if (this.state.trussNumberRepKMPlant5 !== null && this.state.pruningNumberRepKMPlant5 !== null) {

      let data = {
        trussNumber: this.state.trussNumberRepKMPlant5,
        fruitDiameter: this.state.fruitDiameterRepKMPlant5,
        setFruits: this.state.setFruitsRepKMPlant5,
        setFlowers: this.state.setFlowersRepKMPlant5,
        pruningNumber: this.state.pruningNumberRepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5


      }


      db.addTrussDetails(data).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant5) + 1) !== null && this.state.pruningNumber1RepKMPlant5 !== '') {

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


    if ((parseInt(this.state.trussNumberRepKMPlant5) + 1) != null && this.state.pruningNumber1RepKMPlant5 !== null) {


      let data1 = {

        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 1),
        fruitDiameter: this.state.fruitDiameter1RepKMPlant5,
        setFruits: this.state.setFruits1RepKMPlant5,
        setFlowers: this.state.setFlowers1RepKMPlant5,
        pruningNumber: this.state.pruningNumber1RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5



      }




      db.addTrussDetails(data1).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant5) + 2) !== null && this.state.pruningNumber2RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 2) != null && this.state.pruningNumber2RepKMPlant5 !== null) {


      let data2 = {

        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 2),
        fruitDiameter: this.state.fruitDiameter2RepKMPlant5,
        setFruits: this.state.setFruits2RepKMPlant5,
        setFlowers: this.state.setFlowers2RepKMPlant5,
        pruningNumber: this.state.pruningNumber2RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5

      }




      db.addTrussDetails(data2).then((result) => {
        console.log(result);

        if ((parseInt(this.state.trussNumberRepKMPlant5) + 3) !== null && this.state.pruningNumber3RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 3) !== null && this.state.pruningNumber3RepKMPlant5 !== null) {


      let data3 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 3),
        fruitDiameter: this.state.fruitDiameter3RepKMPlant5,
        setFruits: this.state.setFruits3RepKMPlant5,
        setFlowers: this.state.setFlowers3RepKMPlant5,
        pruningNumber: this.state.pruningNumber3RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5



      }


      db.addTrussDetails(data3).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant5) + 4) !== null && this.state.pruningNumber4RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 4) != null && this.state.pruningNumber4RepKMPlant5 !== null) {


      let data4 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 4),
        fruitDiameter: this.state.fruitDiameter4RepKMPlant5,
        setFruits: this.state.setFruits4RepKMPlant5,
        setFlowers: this.state.setFlowers4RepKMPlant5,
        pruningNumber: this.state.pruningNumber4RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5



      }



      db.addTrussDetails(data4).then((result) => {

        if ((parseInt(this.state.trussNumberRepKMPlant5) + 5) !== null && this.state.pruningNumber5RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 5) != null && this.state.pruningNumber5RepKMPlant5 !== null) {


      let data5 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 5),
        fruitDiameter: this.state.fruitDiameter5RepKMPlant5,
        setFruits: this.state.setFruits5RepKMPlant5,
        setFlowers: this.state.setFlowers5RepKMPlant5,
        pruningNumber: this.state.pruningNumber5RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5


      }



      db.addTrussDetails(data5).then((result) => {
        console.log(result);
        this.setState({
          isLoading: false,
          isDataSend: true,

        });

        if ((parseInt(this.state.trussNumberRepKMPlant5) + 6) !== null && this.state.pruningNumber6RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 6) != null && this.state.pruningNumber6RepKMPlant5 !== null) {


      let data6 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 6),
        fruitDiameter: this.state.fruitDiameter6RepKMPlant5,
        setFruits: this.state.setFruits6RepKMPlant5,
        setFlowers: this.state.setFlowers6RepKMPlant5,
        pruningNumber: this.state.pruningNumber6RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5

      }



      db.addTrussDetails(data6).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant5) + 7) !== null && this.state.pruningNumber7RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 7) != null && this.state.pruningNumber7RepKMPlant5 !== null) {


      let data7 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 7),
        fruitDiameter: this.state.fruitDiameter7RepKMPlant5,
        setFruits: this.state.setFruits7RepKMPlant5,
        setFlowers: this.state.setFlowers7RepKMPlant5,
        pruningNumber: this.state.pruningNumber7RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5


      }



      db.addTrussDetails(data7).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant5) + 8) !== null && this.state.pruningNumber8RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 8) != null && this.state.pruningNumber8RepKMPlant5 !== null) {


      let data8 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 8),
        fruitDiameter: this.state.fruitDiameter8RepKMPlant5,
        setFruits: this.state.setFruits8RepKMPlant5,
        setFlowers: this.state.setFlowers8RepKMPlant5,
        pruningNumber: this.state.pruningNumber8RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5


      }



      db.addTrussDetails(data8).then((result) => {

        console.log(result);

        if ((parseInt(this.state.trussNumberRepKMPlant5) + 9) !== null && this.state.pruningNumber9RepKMPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant5) + 9) != null && this.state.pruningNumber9RepKMPlant5 !== null) {



      let data9 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant5) + 9),
        fruitDiameter: this.state.fruitDiameter9RepKMPlant5,
        setFruits: this.state.setFruits9RepKMPlant5,
        setFlowers: this.state.setFlowers9RepKMPlant5,
        pruningNumber: this.state.pruningNumber9RepKMPlant5,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepKMPlant5,
        pruningFlower: this.state.pruneFloweringRepKMPlant5,
        floweringTruss: this.state.floweringTrussssRepKMPlant5,
        pruningSet: this.state.prunSettingRepKMPlant5,
        settingTruss: this.state.settingTrussNumberRepKMPlant5,
        pruningHarvest: this.state.pruningHarRepKMPlant5,
        harvestTruss: this.state.harvestTrussRepKMPlant5



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

  onSubmitleavesPerPlantRepKMPlant5() {
    this.leavesPerPlantRepKMPlant5.focus();
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

    ['leavesPerPlantRepKMPlant5', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
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

{Platform.OS === 'ios'? 
        
        <View style={{ marginTop: 15 }}></View>

        : null }

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity onPress={() => this.props.navigation.push('RepKmPlantsRow1')} >
              <Image source={require('../assets/back.png')} />
            </TouchableOpacity>

          </View>


          <View style={styles.headerImage2}>

          <Text style={styles.text}>REP - KM5512</Text>

          </View>

          <View style={{ height: 20, width: 20 }}>
            <Text style={{ alignSelf: 'center' }}></Text>
          </View>

        </View>


        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 5</Text>/ Row No. 807/ Week No. {this.state.weekNumber}</Text>

        <View style={styles.marginMicroSmallDimensionTop}></View>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>

        <ScrollView
          keyboardShouldPersistTaps='handled'
          scrollEventThrottle={16}
        >

          <View pointerEvents={this.state.KMPlant5Selected ? 'none' : 'auto'}>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantRepKMPlant5')}
                      value={this.state.leavesPerPlantRepKMPlant5}
                      onSubmitEditing={() => { this.fullySetTrussTextInput.focus(); }}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.leavesPerPlantPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussRepKMPlant5')}
                      value={this.state.fullySetTrussRepKMPlant5}
                      ref={(input) => { this.fullySetTrussTextInput = input; }}
                      onSubmitEditing={() => { this.fullySetTrussLengthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.fullySetTrussPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthRepKMPlant5')}
                      value={this.state.setTrussLengthRepKMPlant5}
                      ref={(input) => { this.fullySetTrussLengthTextInput = input; }}
                      onSubmitEditing={() => { this.weeklyGrowthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.fullySetTrussLengthPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthRepKMPlant5')}
                      value={this.state.weeklyGrowthRepKMPlant5}
                      ref={(input) => { this.weeklyGrowthTextInput = input; }}
                      onSubmitEditing={() => { this.FlowerTrussHeightTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.weeklyGrowthPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightRepKMPlant5')}
                      value={this.state.floweringTrussHeightRepKMPlant5}
                      ref={(input) => { this.FlowerTrussHeightTextInput = input; }}
                      onSubmitEditing={() => { this.leafLengthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.flowerTrussHeightPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthRepKMPlant5')}
                      value={this.state.leafLengthRepKMPlant5}
                      ref={(input) => { this.leafLengthTextInput = input; }}
                      onSubmitEditing={() => { this.leafWidthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.leafLengthPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthRepKMPlant5')}
                      value={this.state.leafWidthRepKMPlant5}
                      ref={(input) => { this.leafWidthTextInput = input; }}
                      onSubmitEditing={() => { this.stmDiameterTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.leafWidthPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterRepKMPlant5')}
                      value={this.state.stmDiameterRepKMPlant5}
                      ref={(input) => { this.stmDiameterTextInput = input; }}
                      onSubmitEditing={() => { this.lastWeekSmDiameterTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.stemDiPreviousData}</Text>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterRepKMPlant5')}
                      value={this.state.lastWeekStmDiameterRepKMPlant5}
                      ref={(input) => { this.lastWeekSmDiameterTextInput = input; }}
                      onSubmitEditing={Keyboard.dismiss}
                      onFocus={this.onFocus}
                    />
                  </View>
                  <Text style={styles.textLastWeek}>{this.state.lastWeekStemDiaPreviousData}</Text>


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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumberRepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumberRepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,

                  }}
                />




                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruitsRepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruitsRepKMPlant5}
                />



                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowersRepKMPlant5')}
                  value={this.state.setFlowersRepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumberRepKMPlant5')}
                  value={this.state.pruningNumberRepKMPlant5}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterRepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber1RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits1RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits1RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers1RepKMPlant5')}
                  value={this.state.setFlowers1RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1RepKMPlant5')}
                  value={this.state.pruningNumber1RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1RepKMPlant5')}
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
                  //
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber2RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits2RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits2RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers2RepKMPlant5')}
                  value={this.state.setFlowers2RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2RepKMPlant5')}
                  value={this.state.pruningNumber2RepKMPlant5}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2RepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber3RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits3RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits3RepKMPlant5} />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers3RepKMPlant5')}
                  value={this.state.setFlowers3RepKMPlant5} />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3RepKMPlant5')}
                  value={this.state.pruningNumber3RepKMPlant5} />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3RepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber4RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits4RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits4RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers4RepKMPlant5')}
                  value={this.state.setFlowers4RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4RepKMPlant5')}
                  value={this.state.pruningNumber4RepKMPlant5}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4RepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber5RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits5RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits5RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers5RepKMPlant5')}
                  value={this.state.setFlowers5RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5RepKMPlant5')}
                  value={this.state.pruningNumber5RepKMPlant5}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5RepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber6RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits6RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits6RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers6RepKMPlant5')}
                  value={this.state.setFlowers6RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6RepKMPlant5')}
                  value={this.state.pruningNumber6RepKMPlant5}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6RepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber7RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits7RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits7RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers7RepKMPlant5')}
                  value={this.state.setFlowers7RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7RepKMPlant5')}
                  value={this.state.pruningNumber7RepKMPlant5}

                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7RepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber8RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits8RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits8RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers8RepKMPlant5')}
                  value={this.state.setFlowers8RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8RepKMPlant5')}
                  value={this.state.pruningNumber8RepKMPlant5}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8RepKMPlant5')}
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
                  onChangeText={(text) => this.updateTextInput(text, 'trussNumber9RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber9RepKMPlant5.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits9RepKMPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits9RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers9RepKMPlant5')}
                  value={this.state.setFlowers9RepKMPlant5}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9RepKMPlant5')}
                  value={this.state.pruningNumber9RepKMPlant5}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                 
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9RepKMPlant5')}
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

                <View style={[(this.state.fruitLoadRepKMPlant5 <= 22 || this.state.fruitLoadRepKMPlant5 >= 40) ? styles.borderErrorColor : null]}>

                  <View
                    style={{
                      marginTop: 1
                    }}
                  />

                  <View style={styles.row}>
                    <Text style={styles.text4}>Fruit Load</Text>
                    <Text style={styles.text5}>{this.state.fruitLoadRepKMPlant5}</Text>
                  </View>

                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />

                </View>

                <View style={[(this.state.floweringTrussssRepKMPlant5 <= 0 || this.state.floweringTrussssRepKMPlant5 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Flowering Truss</Text>
                    <Text style={styles.text5}>{this.state.floweringTrussssRepKMPlant5}</Text>
                  </View>


                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.settingTrussNumberRepKMPlant5 <= 1 || this.state.settingTrussNumberRepKMPlant5 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Setting Truss</Text>
                    <Text style={styles.text5}>{this.state.settingTrussNumberRepKMPlant5}</Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.floweringTrussssRepKMPlant5 <= 0 || this.state.floweringTrussssRepKMPlant5 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Harvest Truss</Text>
                    <Text style={styles.text5}>{this.state.harvestTrussRepKMPlant5}</Text>
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
                title="KM Plant 5 completed"
                checked={this.state.KMPlant5Selected}
                textStyle={{ fontSize: 19 }}
                containerStyle={{ backgroundColor: 'transparent' }}
                onPress={() => this.changeCheckbox()} />

            </View>

          </View>

        </ScrollView>

        </KeyboardAvoidingView>

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
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,
  },

  textLastWeek: {

    //color: '#110A6A',
    color: '#000000',
    fontSize: 18,
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
    width: screenWidth2,

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
    height: '100%',
    width: '100%'

  },

  headerImage1: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 5,

  },

  headerImage2: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 5,

  },

 textInputStyle: {
    fontSize: 20,
    color: 'black',
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

  marginMicroSmallDimensionTop: {

    marginTop: 10,

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
    fontSize: 28,
    color: '#58B332',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline'


  },

  text2: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 19,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline',

  },

  textPlants: {
    margin: 6,
    margin: 20,
    fontSize: 24,
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