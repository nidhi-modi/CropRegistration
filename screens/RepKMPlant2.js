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


export default class RepKMPlant2 extends Component {

  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantRepKMPlant2 = this.onSubmitleavesPerPlantRepKMPlant2.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantRepKMPlant2Ref = this.updateRef.bind(this, 'leavesPerPlantRepKMPlant2');
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
      leavesPerPlantRepKMPlant2: '',
      fullySetTrussRepKMPlant2: '',
      setTrussLengthRepKMPlant2: '',
      weeklyGrowthRepKMPlant2: '',
      floweringTrussHeightRepKMPlant2: '',
      leafLengthRepKMPlant2: '',
      leafWidthRepKMPlant2: '',
      stmDiameterRepKMPlant2: '',
      lastWeekStmDiameterRepKMPlant2: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberRepKMPlant2: '',
      setFruitsRepKMPlant2: '',
      setFlowersRepKMPlant2: '',
      pruningNumberRepKMPlant2: '',
      fruitDiameterRepKMPlant2: '',

      trussNumber1RepKMPlant2: '',
      setFruits1RepKMPlant2: '',
      setFlowers1RepKMPlant2: '',
      pruningNumber1RepKMPlant2: '',
      fruitDiameter1RepKMPlant2: '',

      trussNumber2RepKMPlant2: '',
      setFruits2RepKMPlant2: '',
      setFlowers2RepKMPlant2: '',
      pruningNumber2RepKMPlant2: '',
      fruitDiameter2RepKMPlant2: '',

      trussNumber3RepKMPlant2: '',
      setFruits3RepKMPlant2: '',
      setFlowers3RepKMPlant2: '',
      pruningNumber3RepKMPlant2: '',
      fruitDiameter3RepKMPlant2: '',

      trussNumber4RepKMPlant2: '',
      setFruits4RepKMPlant2: '',
      setFlowers4RepKMPlant2: '',
      pruningNumber4RepKMPlant2: '',
      fruitDiameter4RepKMPlant2: '',

      trussNumber5RepKMPlant2: '',
      setFruits5RepKMPlant2: '',
      setFlowers5RepKMPlant2: '',
      pruningNumber5RepKMPlant2: '',
      fruitDiameter5RepKMPlant2: '',

      trussNumber6RepKMPlant2: '',
      setFruits6RepKMPlant2: '',
      setFlowers6RepKMPlant2: '',
      pruningNumber6RepKMPlant2: '',
      fruitDiameter6RepKMPlant2: '',

      trussNumber7RepKMPlant2: '',
      setFruits7RepKMPlant2: '',
      setFlowers7RepKMPlant2: '',
      pruningNumber7RepKMPlant2: '',
      fruitDiameter7RepKMPlant2: '',

      trussNumber8RepKMPlant2: '',
      setFruits8RepKMPlant2: '',
      setFlowers8RepKMPlant2: '',
      pruningNumber8RepKMPlant2: '',
      fruitDiameter8RepKMPlant2: '',

      trussNumber9RepKMPlant2: '',
      setFruits9RepKMPlant2: '',
      setFlowers9RepKMPlant2: '',
      pruningNumber9RepKMPlant2: '',
      fruitDiameter9RepKMPlant2: '',

      fruitLoadRepKMPlant2: '',
      harvestTrussRepKMPlant2: '',
      pruningHarRepKMPlant2: '',
      settingTrussNumberRepKMPlant2: '',
      prunSettingRepKMPlant2: '',
      pruneFloweringRepKMPlant2: '',

      floweringTrussNumberRepKMPlant2: '',
      settingTrussRepKMPlant2: '',
      settingTruss2RepKMPlant2: '',
      floweringTrussssRepKMPlant2: '',

      KMPlant2Selected: false,
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
        const weekRowPlant = d => d.plantName === 'REP - KM5512' && d.plantNumber === 2 && d.plantRow === '807' && d.plantWeek === filteredPlantWeek;

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
        const weekRowTruss = d => d.plantName === 'REP - KM5512' && d.plantNumber === 2 && d.plantRow === '807' && d.plantWeek === filteredTrussWeek;

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
      AsyncStorage.getItem('leavesPerPlantRepKMPlant2').then((text1Value) => {
        this.setState({ leavesPerPlantRepKMPlant2: JSON.parse(text1Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussRepKMPlant2').then((text2Value) => {
        this.setState({ fullySetTrussRepKMPlant2: JSON.parse(text2Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthRepKMPlant2').then((text3Value) => {
        this.setState({ setTrussLengthRepKMPlant2: JSON.parse(text3Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthRepKMPlant2').then((text4Value) => {
        this.setState({ weeklyGrowthRepKMPlant2: JSON.parse(text4Value) });



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightRepKMPlant2').then((text5Value) => {
        this.setState({ floweringTrussHeightRepKMPlant2: JSON.parse(text5Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthRepKMPlant2').then((text6Value) => {
        this.setState({ leafLengthRepKMPlant2: JSON.parse(text6Value) });


      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthRepKMPlant2').then((text7Value) => {
        this.setState({ leafWidthRepKMPlant2: JSON.parse(text7Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterRepKMPlant2').then((text8Value) => {
        this.setState({ stmDiameterRepKMPlant2: JSON.parse(text8Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepKMPlant2').then((text9Value) => {
        this.setState({ lastWeekStmDiameterRepKMPlant2: JSON.parse(text9Value) });


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('KMPlant2Selected').then((text99Value) => {
        this.setState({ KMPlant2Selected: JSON.parse(text99Value) });

        console.log(this.state.KMPlant2Selected)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('trussNumberRepKMPlant2').then((text10Value) => {

        if (text10Value !== null) {
          this.setState({ trussNumberRepKMPlant2: JSON.parse(text10Value) });

          this.setState({ trussNumber1RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 1 })
          this.setState({ trussNumber2RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 2 })
          this.setState({ trussNumber3RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 3 })
          this.setState({ trussNumber4RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 4 })
          this.setState({ trussNumber5RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 5 })
          this.setState({ trussNumber6RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 6 })
          this.setState({ trussNumber7RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 7 })
          this.setState({ trussNumber8RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 8 })
          this.setState({ trussNumber9RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 9 })

        }

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFruitsRepKMPlant2').then((text11Value) => {
        if (text11Value !== null) {

          this.setState({ setFruitsRepKMPlant2: JSON.parse(text11Value) });

        }


      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('setFlowersRepKMPlant2').then((text12Value) => {

        if (text12Value !== null) {

          this.setState({ setFlowersRepKMPlant2: JSON.parse(text12Value) });

        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumberRepKMPlant2').then((text13Value) => {
        if (text13Value !== null) {
          this.setState({ pruningNumberRepKMPlant2: JSON.parse(text13Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameterRepKMPlant2').then((text14Value) => {

        if (text14Value !== null) {
          this.setState({ fruitDiameterRepKMPlant2: JSON.parse(text14Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 1---------------------------------//

    try {
      AsyncStorage.getItem('setFruits1RepKMPlant2').then((text16Value) => {

        if (text16Value !== null) {
          this.setState({ setFruits1RepKMPlant2: JSON.parse(text16Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers1RepKMPlant2').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFlowers1RepKMPlant2: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber1RepKMPlant2').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ pruningNumber1RepKMPlant2: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter1RepKMPlant2').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ fruitDiameter1RepKMPlant2: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 2---------------------------------//

    try {
      AsyncStorage.getItem('setFruits2RepKMPlant2').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFruits2RepKMPlant2: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers2RepKMPlant2').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ setFlowers2RepKMPlant2: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber2RepKMPlant2').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ pruningNumber2RepKMPlant2: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter2RepKMPlant2').then((text20Value) => {

        if (text20Value !== null) {
          this.setState({ fruitDiameter2RepKMPlant2: JSON.parse(text20Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 3---------------------------------//

    try {
      AsyncStorage.getItem('setFruits3RepKMPlant2').then((text21Value) => {

        if (text21Value !== null) {
          this.setState({ setFruits3RepKMPlant2: JSON.parse(text21Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers3RepKMPlant2').then((text22Value) => {

        if (text22Value !== null) {
          this.setState({ setFlowers3RepKMPlant2: JSON.parse(text22Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber3RepKMPlant2').then((text23Value) => {

        if (text23Value !== null) {
          this.setState({ pruningNumber3RepKMPlant2: JSON.parse(text23Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter3RepKMPlant2').then((text24Value) => {

        if (text24Value !== null) {
          this.setState({ fruitDiameter3RepKMPlant2: JSON.parse(text24Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 4---------------------------------//

    try {
      AsyncStorage.getItem('setFruits4RepKMPlant2').then((text25Value) => {

        if (text25Value !== null) {
          this.setState({ setFruits4RepKMPlant2: JSON.parse(text25Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers4RepKMPlant2').then((text26Value) => {

        if (text26Value !== null) {
          this.setState({ setFlowers4RepKMPlant2: JSON.parse(text26Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber4RepKMPlant2').then((text27Value) => {

        if (text27Value !== null) {
          this.setState({ pruningNumber4RepKMPlant2: JSON.parse(text27Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter4RepKMPlant2').then((text28Value) => {

        if (text28Value !== null) {
          this.setState({ fruitDiameter4RepKMPlant2: JSON.parse(text28Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 5---------------------------------//

    try {
      AsyncStorage.getItem('setFruits5RepKMPlant2').then((text29Value) => {

        if (text29Value !== null) {
          this.setState({ setFruits5RepKMPlant2: JSON.parse(text29Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers5RepKMPlant2').then((text30Value) => {

        if (text30Value !== null) {
          this.setState({ setFlowers5RepKMPlant2: JSON.parse(text30Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber5RepKMPlant2').then((text31Value) => {

        if (text31Value !== null) {
          this.setState({ pruningNumber5RepKMPlant2: JSON.parse(text31Value) });
        }


      }).done();
    } catch (error) {
    }
    try {

      AsyncStorage.getItem('fruitDiameter5RepKMPlant2').then((text32Value) => {
        if (text32Value !== null) {
          this.setState({ fruitDiameter5RepKMPlant2: JSON.parse(text32Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 6---------------------------------//

    try {
      AsyncStorage.getItem('setFruits6RepKMPlant2').then((text33Value) => {

        if (text33Value !== null) {
          this.setState({ setFruits6RepKMPlant2: JSON.parse(text33Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers6RepKMPlant2').then((text34Value) => {

        if (text34Value !== null) {
          this.setState({ setFlowers6RepKMPlant2: JSON.parse(text34Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber6RepKMPlant2').then((text35Value) => {

        if (text35Value !== null) {
          this.setState({ pruningNumber6RepKMPlant2: JSON.parse(text35Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter6RepKMPlant2').then((text36Value) => {

        if (text36Value !== null) {
          this.setState({ fruitDiameter6RepKMPlant2: JSON.parse(text36Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 7---------------------------------//

    try {
      AsyncStorage.getItem('setFruits7RepKMPlant2').then((text37Value) => {

        if (text37Value !== null) {
          this.setState({ setFruits7RepKMPlant2: JSON.parse(text37Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers7RepKMPlant2').then((text38Value) => {

        if (text38Value !== null) {

          this.setState({ setFlowers7RepKMPlant2: JSON.parse(text38Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber7RepKMPlant2').then((text39Value) => {

        if (text39Value !== null) {
          this.setState({ pruningNumber7RepKMPlant2: JSON.parse(text39Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter7RepKMPlant2').then((text40Value) => {

        if (text40Value !== null) {
          this.setState({ fruitDiameter7RepKMPlant2: JSON.parse(text40Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Truss 8---------------------------------//

    try {
      AsyncStorage.getItem('setFruits8RepKMPlant2').then((text41Value) => {

        if (text41Value !== null) {
          this.setState({ setFruits8RepKMPlant2: JSON.parse(text41Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers8RepKMPlant2').then((text42Value) => {

        if (text42Value !== null) {
          this.setState({ setFlowers8RepKMPlant2: JSON.parse(text42Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber8RepKMPlant2').then((text43Value) => {

        if (text43Value !== null) {
          this.setState({ pruningNumber8RepKMPlant2: JSON.parse(text43Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter8RepKMPlant2').then((text44Value) => {

        if (text44Value !== null) {
          this.setState({ fruitDiameter8RepKMPlant2: JSON.parse(text44Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 9---------------------------------//

    try {
      AsyncStorage.getItem('setFruits9RepKMPlant2').then((text45Value) => {

        if (text45Value !== null) {
          this.setState({ setFruits9RepKMPlant2: JSON.parse(text45Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers9RepKMPlant2').then((text46Value) => {

        if (text46Value !== null) {
          this.setState({ setFlowers9RepKMPlant2: JSON.parse(text46Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber9RepKMPlant2').then((text47Value) => {

        if (text47Value !== null) {
          this.setState({ pruningNumber9RepKMPlant2: JSON.parse(text47Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter9RepKMPlant2').then((text48Value) => {

        if (text48Value !== null) {
          this.setState({ fruitDiameter9RepKMPlant2: JSON.parse(text48Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Calculations---------------------------------//

    try {
      AsyncStorage.getItem('fruitLoadRepKMPlant2').then((text49Value) => {
        if (text49Value !== null) {
          this.setState({ fruitLoadRepKMPlant2: JSON.parse(text49Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('floweringTrussssRepKMPlant2').then((text50Value) => {

        if (text50Value !== null) {
          this.setState({ floweringTrussssRepKMPlant2: JSON.parse(text50Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('settingTrussNumberRepKMPlant2').then((text51Value) => {

        if (text51Value !== null) {
          this.setState({ settingTrussNumberRepKMPlant2: JSON.parse(text51Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('harvestTrussRepKMPlant2').then((text52Value) => {

        if (text52Value !== null) {
          this.setState({ harvestTrussRepKMPlant2: JSON.parse(text52Value) });
        }


      }).done();
    } catch (error) {
    }






    /*try {
      AsyncStorage.getItem('trussNumberRepKMPlant2').then((text10Value) => {
        this.setState({ trussNumberRepKMPlant2: JSON.parse(text10Value) });
        console.log(this.state.trussNumberRepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsRepKMPlant2').then((text11Value) => {
        this.setState({ setFruitsRepKMPlant2: JSON.parse(text11Value) });
        console.log(this.state.setFruitsRepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersRepKMPlant2').then((text12Value) => {
        this.setState({ setFlowersRepKMPlant2: JSON.parse(text12Value) });
        console.log(this.state.setFlowersRepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberRepKMPlant2').then((text13Value) => {
        this.setState({ pruningNumberRepKMPlant2: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberRepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterRepKMPlant2').then((text14Value) => {
        this.setState({ fruitDiameterRepKMPlant2: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterRepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1RepKMPlant2').then((text15Value) => {
        this.setState({ setFruits1RepKMPlant2: JSON.parse(text15Value) });
        console.log(this.state.setFruits1RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1RepKMPlant2').then((text16Value) => {
        this.setState({ setFlowers1RepKMPlant2: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1RepKMPlant2').then((text17Value) => {
        this.setState({ pruningNumber1RepKMPlant2: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1RepKMPlant2').then((text18Value) => {
        this.setState({ fruitDiameter1RepKMPlant2: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2RepKMPlant2').then((text19Value) => {
        this.setState({ setFruits2RepKMPlant2: JSON.parse(text19Value) });
        console.log(this.state.setFruits2RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2RepKMPlant2').then((text20Value) => {
        this.setState({ setFlowers2RepKMPlant2: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2RepKMPlant2').then((text21Value) => {
        this.setState({ pruningNumber2RepKMPlant2: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2RepKMPlant2').then((text22Value) => {
        this.setState({ fruitDiameter2RepKMPlant2: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3RepKMPlant2').then((text23Value) => {
        this.setState({ setFruits3RepKMPlant2: JSON.parse(text23Value) });
        console.log(this.state.setFruits3RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3RepKMPlant2').then((text24Value) => {
        this.setState({ setFlowers3RepKMPlant2: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3RepKMPlant2').then((text25Value) => {
        this.setState({ pruningNumber3RepKMPlant2: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3RepKMPlant2)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3RepKMPlant2').then((text26Value) => {
        this.setState({ fruitDiameter3RepKMPlant2: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3RepKMPlant2)



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

    this.setState({ trussNumber1RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 1 })
    this.setState({ trussNumber2RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 2 })
    this.setState({ trussNumber3RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 3 })
    this.setState({ trussNumber4RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 4 })
    this.setState({ trussNumber5RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 5 })
    this.setState({ trussNumber6RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 6 })
    this.setState({ trussNumber7RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 7 })
    this.setState({ trussNumber8RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 8 })
    this.setState({ trussNumber9RepKMPlant2: parseInt(this.state.trussNumberRepKMPlant2) + 9 })


    if (this.state.trussNumberRepKMPlant2 !== "") {

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

    sum = ((parseInt(this.state.setFruitsRepKMPlant2) ? parseInt(this.state.setFruitsRepKMPlant2) : 0) + (parseInt(this.state.setFruits1RepKMPlant2) ? parseInt(this.state.setFruits1RepKMPlant2) : 0) + (parseInt(this.state.setFruits2RepKMPlant2) ? parseInt(this.state.setFruits2RepKMPlant2) : 0) + (parseInt(this.state.setFruits3RepKMPlant2) ? parseInt(this.state.setFruits3RepKMPlant2) : 0) + (parseInt(this.state.setFruits4RepKMPlant2) ? parseInt(this.state.setFruits4RepKMPlant2) : 0) + (parseInt(this.state.setFruits5RepKMPlant2) ? parseInt(this.state.setFruits5RepKMPlant2) : 0) + (parseInt(this.state.setFruits6RepKMPlant2) ? parseInt(this.state.setFruits6RepKMPlant2) : 0) + (parseInt(this.state.setFruits7RepKMPlant2) ? parseInt(this.state.setFruits7RepKMPlant2) : 0) + (parseInt(this.state.setFruits8RepKMPlant2) ? parseInt(this.state.setFruits8RepKMPlant2) : 0) + (parseInt(this.state.setFruits9RepKMPlant2) ? parseInt(this.state.setFruits9RepKMPlant2) : 0));
    this.setState({
      fruitLoadRepKMPlant2: sum,
    });

    this.setItem("fruitLoadRepKMPlant2", this.state.fruitLoadRepKMPlant2)

    console.log("Fruit Load : " + sum);



  }

  calculateHarvestTruss = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersRepKMPlant2 === "") {

      prunNum = parseInt(this.state.pruningNumberRepKMPlant2)

      div = (parseInt((this.state.setFruitsRepKMPlant2) ? (this.state.setFruitsRepKMPlant2) : 0) / parseFloat((this.state.pruningNumberRepKMPlant2) ? (this.state.pruningNumberRepKMPlant2) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberRepKMPlant2) ? parseInt(this.state.trussNumberRepKMPlant2) : 0) + sub).toFixed(2))
      this.setState({
        harvestTrussRepKMPlant2: add,
        pruningHarRepKMPlant2: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberRepKMPlant2)
      var num = this.state.trussNumberRepKMPlant2

      this.setState({
        harvestTrussRepKMPlant2: num,
        pruningHarRepKMPlant2: prunNum,
      });
    }

    console.log("Harvest Truss : " + add);

    this.setItem("harvestTrussRepKMPlant2", this.state.harvestTrussRepKMPlant2)



  }

  calculateSettingTruss2 = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log("Setting truss called : " + this.state.setFruits2RepKMPlant2);

    if (this.state.setFruits9RepKMPlant2 === "") {

      if (this.state.setFruits8RepKMPlant2 === "") {

        if (this.state.setFruits7RepKMPlant2 === "") {

          if (this.state.setFruits6RepKMPlant2 === "") {

            if (this.state.setFruits5RepKMPlant2 === "") {

              if (this.state.setFruits4RepKMPlant2 === "") {

                if (this.state.setFruits3RepKMPlant2 === "") {

                  if (this.state.setFruits2RepKMPlant2 === "") {

                    if (this.state.setFruits1RepKMPlant2 === "") {

                      if (this.state.setFruitsRepKMPlant2 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberRepKMPlant2);
                        trussNum = parseInt(this.state.trussNumberRepKMPlant2);
                        settingFruit = parseInt(this.state.setFruitsRepKMPlant2);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumberRepKMPlant2: settingTruss,
                          settingTruss: trussNum,
                          prunSettingRepKMPlant2: pruningSet,

                        });

                        this.setItem("settingTrussNumberRepKMPlant2", settingTruss)

                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberRepKMPlant2) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1RepKMPlant2);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1RepKMPlant2);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumberRepKMPlant2: settingTruss,
                        settingTruss: trussNum,
                        prunSettingRepKMPlant2: pruningSet,

                      });

                      this.setItem("settingTrussNumberRepKMPlant2", settingTruss)


                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberRepKMPlant2) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2RepKMPlant2);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2RepKMPlant2);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumberRepKMPlant2: settingTruss,
                      settingTruss: trussNum,
                      prunSettingRepKMPlant2: pruningSet,

                    });
                    this.setItem("settingTrussNumberRepKMPlant2", settingTruss)


                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberRepKMPlant2) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3RepKMPlant2);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3RepKMPlant2);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumberRepKMPlant2: settingTruss,
                    settingTruss: trussNum,
                    prunSettingRepKMPlant2: pruningSet,

                  });

                  this.setItem("settingTrussNumberRepKMPlant2", settingTruss)


                }

              } else {

                var number4 = (parseInt(this.state.trussNumberRepKMPlant2) + 4)

                pruningSet = parseInt(this.state.pruningNumber4RepKMPlant2);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4RepKMPlant2);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumberRepKMPlant2: settingTruss,
                  settingTruss: trussNum,
                  prunSettingRepKMPlant2: pruningSet,

                });

                this.setItem("settingTrussNumberRepKMPlant2", settingTruss)


              }

            } else {

              var number5 = (parseInt(this.state.trussNumberRepKMPlant2) + 5)

              pruningSet = parseInt(this.state.pruningNumber5RepKMPlant2);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5RepKMPlant2);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumberRepKMPlant2: settingTruss,
                settingTruss: trussNum,
                prunSettingRepKMPlant2: pruningSet,

              });

              this.setItem("settingTrussNumberRepKMPlant2", settingTruss)



            }

          } else {

            var number6 = (parseInt(this.state.trussNumberRepKMPlant2) + 6)

            pruningSet = parseInt(this.state.pruningNumber6RepKMPlant2);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6RepKMPlant2);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumberRepKMPlant2: settingTruss,
              settingTruss: trussNum,
              prunSettingRepKMPlant2: pruningSet,

            });

            this.setItem("settingTrussNumberRepKMPlant2", settingTruss)


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberRepKMPlant2) + 7)

          pruningSet = parseInt(this.state.pruningNumber7RepKMPlant2);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7RepKMPlant2);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumberRepKMPlant2: settingTruss,
            settingTruss: trussNum,
            prunSettingRepKMPlant2: pruningSet,

          });

          this.setItem("settingTrussNumberRepKMPlant2", settingTruss)

        }

      } else {

        var number8 = (parseInt(this.state.trussNumberRepKMPlant2) + 8)

        pruningSet = parseInt(this.state.pruningNumber8RepKMPlant2);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8RepKMPlant2);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumberRepKMPlant2: settingTruss,
          settingTruss: trussNum,
          prunSettingRepKMPlant2: pruningSet,

        });

        this.setItem("settingTrussNumberRepKMPlant2", settingTruss)


      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberRepKMPlant2) + 9)

      pruningSet = parseInt(this.state.pruningNumber9RepKMPlant2);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9RepKMPlant2);
      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
      console.log("Setting Truss Number 9 : " + settingTruss);
      this.setState({
        settingTrussNumberRepKMPlant2: settingTruss,
        settingTruss2: trussNum,
        prunSettingRepKMPlant2: pruningSet,
      });

      this.setItem("settingTrussNumberRepKMPlant2", settingTruss)


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

    console.log("Flowering truss called : " + this.state.setFlowers2RepKMPlant2);


    if (this.state.setFlowers9RepKMPlant2 === "") {

      if (this.state.setFlowers8RepKMPlant2 === "") {

        if (this.state.setFlowers7RepKMPlant2 === "") {

          if (this.state.setFlowers6RepKMPlant2 === "") {

            if (this.state.setFlowers5RepKMPlant2 === "") {

              if (this.state.setFlowers4RepKMPlant2 === "") {

                if (this.state.setFlowers3RepKMPlant2 === "") {

                  if (this.state.setFlowers2RepKMPlant2 === "") {

                    if (this.state.setFlowers1RepKMPlant2 === "") {

                      if (this.state.setFlowersRepKMPlant2 === "") {


                      } else {

                        var number01 = this.state.trussNumberRepKMPlant2


                        flowerPruningNumner = parseInt(this.state.pruningNumberRepKMPlant2);
                        flowering = parseInt(this.state.setFlowersRepKMPlant2);
                        flowerSetFruits = parseInt(this.state.setFruitsRepKMPlant2);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussssRepKMPlant2: floweringTruss,
                          pruneFloweringRepKMPlant2: flowerPruningNumner,
                        });
                        this.setItem("floweringTrussssRepKMPlant2", floweringTruss)

                      }


                    } else {

                      var number11 = + (this.state.trussNumberRepKMPlant2) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1RepKMPlant2);
                      flowering = parseInt(this.state.setFlowers1RepKMPlant2);
                      flowerSetFruits = parseInt(this.state.setFruits1RepKMPlant2);
                      trussNum = number11
                      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                      console.log("Flowering Truss Value : " + floweringTruss);
                      this.setState({
                        floweringTrussssRepKMPlant2: floweringTruss,
                        pruneFloweringRepKMPlant2: flowerPruningNumner,

                      });
                      this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


                    }


                  } else {

                    var number21 = + (this.state.trussNumberRepKMPlant2) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2RepKMPlant2);
                    flowering = parseInt(this.state.setFlowers2RepKMPlant2);
                    flowerSetFruits = parseInt(this.state.setFruits2RepKMPlant2);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussssRepKMPlant2: floweringTruss,
                      pruneFloweringRepKMPlant2: flowerPruningNumner,

                    });
                    this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


                  }


                } else {

                  var number31 = + (this.state.trussNumberRepKMPlant2) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3RepKMPlant2);
                  flowering = parseInt(this.state.setFlowers3RepKMPlant2);
                  flowerSetFruits = parseInt(this.state.setFruits3RepKMPlant2);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussssRepKMPlant2: floweringTruss,
                    pruneFloweringRepKMPlant2: flowerPruningNumner,

                  });

                  this.setItem("floweringTrussssRepKMPlant2", floweringTruss)

                }


              } else {

                var number41 = + (this.state.trussNumberRepKMPlant2) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4RepKMPlant2);
                flowering = parseInt(this.state.setFlowers4RepKMPlant2);
                flowerSetFruits = parseInt(this.state.setFruits4RepKMPlant2);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussssRepKMPlant2: floweringTruss,
                  pruneFloweringRepKMPlant2: flowerPruningNumner,

                });

                this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


              }


            } else {

              var number51 = + (this.state.trussNumberRepKMPlant2) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5RepKMPlant2);
              flowering = parseInt(this.state.setFlowers5RepKMPlant2);
              flowerSetFruits = parseInt(this.state.setFruits5RepKMPlant2);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussssRepKMPlant2: floweringTruss,
                pruneFloweringRepKMPlant2: flowerPruningNumner,

              });

              this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


            }


          } else {

            var number61 = + (this.state.trussNumberRepKMPlant2) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6RepKMPlant2);
            flowering = parseInt(this.state.setFlowers6RepKMPlant2);
            flowerSetFruits = parseInt(this.state.setFruits6RepKMPlant2);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussssRepKMPlant2: floweringTruss,
              pruneFloweringRepKMPlant2: flowerPruningNumner,

            });

            this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


          }


        } else {

          var number71 = + (this.state.trussNumberRepKMPlant2) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7RepKMPlant2);
          flowering = parseInt(this.state.setFlowers7RepKMPlant2);
          flowerSetFruits = parseInt(this.state.setFruits7RepKMPlant2);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussssRepKMPlant2: floweringTruss,
            pruneFloweringRepKMPlant2: flowerPruningNumner,

          });

          this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


        }


      } else {
        var number81 = + (this.state.trussNumberRepKMPlant2) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8RepKMPlant2);
        flowering = parseInt(this.state.setFlowers8RepKMPlant2);
        flowerSetFruits = parseInt(this.state.setFruits8RepKMPlant2);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussssRepKMPlant2: floweringTruss,
          pruneFloweringRepKMPlant2: flowerPruningNumner,

        });

        this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


      }


    } else {

      var number91 = + (this.state.trussNumberRepKMPlant2) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9RepKMPlant2);
      flowering = parseInt(this.state.setFlowers9RepKMPlant2);
      flowerSetFruits = parseInt(this.state.setFruits9RepKMPlant2);
      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
      console.log("Flowering Truss Value : " + floweringTruss);
      this.setState({
        floweringTrussssRepKMPlant2: floweringTruss,
        pruneFloweringRepKMPlant2: flowerPruningNumner,

      });

      this.setItem("floweringTrussssRepKMPlant2", floweringTruss)


    }





  }
  //

  //Get data for truss

  getTrussData = () => {

    if (this.state.allTrussData.length != 0) {

      //1st Truss
      if (this.state.trussNumberRepKMPlant2 != null) {

        //Change week number
        const weekRowTruss1 = d => d.trussNumber === parseInt(this.state.trussNumberRepKMPlant2);

        const filteredweekRowTruss1 = this.state.allTrussData.filter(weekRowTruss1);

        console.log("Truss 1 : " + JSON.stringify(filteredweekRowTruss1));

        if (filteredweekRowTruss1.length != 0) {

          if (JSON.stringify(filteredweekRowTruss1[0].setFlowers) === 'null') {

            this.setState({

              setFlowersRepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowersRepKMPlant2: JSON.stringify(filteredweekRowTruss1[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss1[0].setFruits) === 'null') {


            this.setState({


              setFruitsRepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruitsRepKMPlant2: JSON.stringify(filteredweekRowTruss1[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss1[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumberRepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumberRepKMPlant2: JSON.stringify(filteredweekRowTruss1[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 1) != null) {

        //Change week number
        const weekRowTruss2 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 1);

        const filteredweekRowTruss2 = this.state.allTrussData.filter(weekRowTruss2);

        console.log("Truss 2 : " + JSON.stringify(filteredweekRowTruss2));

        if (filteredweekRowTruss2.length != 0) {

          if (JSON.stringify(filteredweekRowTruss2[0].setFlowers) === 'null') {

            this.setState({

              setFlowers1RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers1RepKMPlant2: JSON.stringify(filteredweekRowTruss2[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss2[0].setFruits) === 'null') {


            this.setState({


              setFruits1RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits1RepKMPlant2: JSON.stringify(filteredweekRowTruss2[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss2[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber1RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber1RepKMPlant2: JSON.stringify(filteredweekRowTruss2[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 2) != null) {

        //Change week number
        const weekRowTruss3 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 2);

        const filteredweekRowTruss3 = this.state.allTrussData.filter(weekRowTruss3);

        console.log("Truss 3 : " + JSON.stringify(filteredweekRowTruss3));

        if (filteredweekRowTruss3.length != 0) {


          if (JSON.stringify(filteredweekRowTruss3[0].setFlowers) === 'null') {

            this.setState({

              setFlowers2RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers2RepKMPlant2: JSON.stringify(filteredweekRowTruss3[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss3[0].setFruits) === 'null') {


            this.setState({


              setFruits2RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits2RepKMPlant2: JSON.stringify(filteredweekRowTruss3[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss3[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber2RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber2RepKMPlant2: JSON.stringify(filteredweekRowTruss3[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 3) != null) {

        //Change week number
        const weekRowTruss4 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 3);

        const filteredweekRowTruss4 = this.state.allTrussData.filter(weekRowTruss4);

        console.log("Truss 4 : " + JSON.stringify(filteredweekRowTruss4));

        if (filteredweekRowTruss4.length != 0) {

          if (JSON.stringify(filteredweekRowTruss4[0].setFlowers) === 'null') {

            this.setState({

              setFlowers3RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers3RepKMPlant2: JSON.stringify(filteredweekRowTruss4[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss4[0].setFruits) === 'null') {


            this.setState({


              setFruits3RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits3RepKMPlant2: JSON.stringify(filteredweekRowTruss4[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss4[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber3RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber3RepKMPlant2: JSON.stringify(filteredweekRowTruss4[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 4) != null) {

        //Change week number
        const weekRowTruss5 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 4);

        const filteredweekRowTruss5 = this.state.allTrussData.filter(weekRowTruss5);

        console.log("Truss 5 : " + JSON.stringify(filteredweekRowTruss5));

        if (filteredweekRowTruss5.length != 0) {

          if (JSON.stringify(filteredweekRowTruss5[0].setFlowers) === 'null') {

            this.setState({

              setFlowers4RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers4RepKMPlant2: JSON.stringify(filteredweekRowTruss5[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss5[0].setFruits) === 'null') {


            this.setState({


              setFruits4RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits4RepKMPlant2: JSON.stringify(filteredweekRowTruss5[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss5[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber4RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber4RepKMPlant2: JSON.stringify(filteredweekRowTruss5[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 5) != null) {

        //Change week number
        const weekRowTruss6 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 5);

        const filteredweekRowTruss6 = this.state.allTrussData.filter(weekRowTruss6);

        console.log("Truss 6 : " + JSON.stringify(filteredweekRowTruss6));

        if (filteredweekRowTruss6.length != 0) {

          if (JSON.stringify(filteredweekRowTruss6[0].setFlowers) === 'null') {

            this.setState({

              setFlowers5RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers5RepKMPlant2: JSON.stringify(filteredweekRowTruss6[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss6[0].setFruits) === 'null') {


            this.setState({


              setFruits5RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits5RepKMPlant2: JSON.stringify(filteredweekRowTruss6[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss6[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber5RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber5RepKMPlant2: JSON.stringify(filteredweekRowTruss6[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 6) != null) {

        //Change week number
        const weekRowTruss7 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 6);

        const filteredweekRowTruss7 = this.state.allTrussData.filter(weekRowTruss7);

        console.log("Truss 7 : " + JSON.stringify(filteredweekRowTruss7));

        if (filteredweekRowTruss7.length != 0) {

          if (JSON.stringify(filteredweekRowTruss7[0].setFlowers) === 'null') {

            this.setState({

              setFlowers6RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers6RepKMPlant2: JSON.stringify(filteredweekRowTruss7[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss7[0].setFruits) === 'null') {


            this.setState({


              setFruits6RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits6RepKMPlant2: JSON.stringify(filteredweekRowTruss7[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss7[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber6RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber6RepKMPlant2: JSON.stringify(filteredweekRowTruss7[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 7) != null) {

        //Change week number
        const weekRowTruss8 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 7);

        const filteredweekRowTruss8 = this.state.allTrussData.filter(weekRowTruss8);

        console.log("Truss 8 : " + JSON.stringify(filteredweekRowTruss8));

        if (filteredweekRowTruss8.length != 0) {

          if (JSON.stringify(filteredweekRowTruss8[0].setFlowers) === 'null') {

            this.setState({

              setFlowers7RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers7RepKMPlant2: JSON.stringify(filteredweekRowTruss8[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss8[0].setFruits) === 'null') {


            this.setState({


              setFruits7RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits7RepKMPlant2: JSON.stringify(filteredweekRowTruss8[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss8[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber7RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber7RepKMPlant2: JSON.stringify(filteredweekRowTruss8[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 8) != null) {

        //Change week number
        const weekRowTruss9 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 8);

        const filteredweekRowTruss9 = this.state.allTrussData.filter(weekRowTruss9);

        console.log("Truss 9 : " + JSON.stringify(filteredweekRowTruss9));

        if (filteredweekRowTruss9.length != 0) {

          if (JSON.stringify(filteredweekRowTruss9[0].setFlowers) === 'null') {

            this.setState({

              setFlowers8RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers8RepKMPlant2: JSON.stringify(filteredweekRowTruss9[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss9[0].setFruits) === 'null') {


            this.setState({


              setFruits8RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits8RepKMPlant2: JSON.stringify(filteredweekRowTruss9[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss9[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber8RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber8RepKMPlant2: JSON.stringify(filteredweekRowTruss9[0].pruningNumber)

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
      if ((parseInt(this.state.trussNumberRepKMPlant2) + 9) != null) {

        //Change week number
        const weekRowTruss10 = d => d.trussNumber === (parseInt(this.state.trussNumberRepKMPlant2) + 9);

        const filteredweekRowTruss10 = this.state.allTrussData.filter(weekRowTruss10);

        console.log("Truss 9 : " + JSON.stringify(filteredweekRowTruss10));

        if (filteredweekRowTruss10.length != 0) {

          if (JSON.stringify(filteredweekRowTruss10[0].setFlowers) === 'null') {

            this.setState({

              setFlowers9RepKMPlant2: "",

            })

          } else {

            this.setState({

              setFlowers9RepKMPlant2: JSON.stringify(filteredweekRowTruss10[0].setFlowers),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss10[0].setFruits) === 'null') {


            this.setState({


              setFruits9RepKMPlant2: "",

            })


          } else {


            this.setState({


              setFruits9RepKMPlant2: JSON.stringify(filteredweekRowTruss10[0].setFruits),

            })

          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss10[0].pruningNumber) === 'null') {


            this.setState({


              pruningNumber9RepKMPlant2: "",

            })


          } else {


            this.setState({


              pruningNumber9RepKMPlant2: JSON.stringify(filteredweekRowTruss10[0].pruningNumber)

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

    this.setState({ KMPlant2Selected: !this.state.KMPlant2Selected })

    const vart = this.state.KMPlant2Selected

    const vart2 = false;

    if (vart == null) {

      this.setItem('KMPlant2Selected', vart2)

      EventRegister.emit('kmEventPlant2', vart2)

    } else {

      this.setItem('KMPlant2Selected', vart)

      EventRegister.emit('kmEventPlant2', vart)

    }

    this.checkStatus();

  }

  checkStatus = () => {

    const vart = this.state.KMPlant2Selected

    if (vart == null || vart == false) {

      this.setState({ checkboxStatus: 'CHECKED' })


      let data = {
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        leavesPerPlant: this.state.leavesPerPlantRepKMPlant2,
        fullySetTruss: this.state.fullySetTrussRepKMPlant2,
        setTrussLength: this.state.setTrussLengthRepKMPlant2,
        weeklyGrowth: this.state.weeklyGrowthRepKMPlant2,
        floweringTrussHeight: this.state.floweringTrussHeightRepKMPlant2,
        leafLength: this.state.leafLengthRepKMPlant2,
        leafWidth: this.state.leafWidthRepKMPlant2,
        stmDiameter: this.state.stmDiameterRepKMPlant2,
        lastWeekStmDiameter: this.state.lastWeekStmDiameterRepKMPlant2

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

    if (this.state.trussNumberRepKMPlant2 !== null && this.state.pruningNumberRepKMPlant2 !== null) {

      let data = {
        trussNumber: this.state.trussNumberRepKMPlant2,
        fruitDiameter: this.state.fruitDiameterRepKMPlant2,
        setFruits: this.state.setFruitsRepKMPlant2,
        setFlowers: this.state.setFlowersRepKMPlant2,
        pruningNumber: this.state.pruningNumberRepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2


      }


      db.addTrussDetails(data).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant2) + 1) !== null && this.state.pruningNumber1RepKMPlant2 !== '') {

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


    if ((parseInt(this.state.trussNumberRepKMPlant2) + 1) != null && this.state.pruningNumber1RepKMPlant2 !== null) {


      let data1 = {

        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 1),
        fruitDiameter: this.state.fruitDiameter1RepKMPlant2,
        setFruits: this.state.setFruits1RepKMPlant2,
        setFlowers: this.state.setFlowers1RepKMPlant2,
        pruningNumber: this.state.pruningNumber1RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2



      }




      db.addTrussDetails(data1).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant2) + 2) !== null && this.state.pruningNumber2RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 2) != null && this.state.pruningNumber2RepKMPlant2 !== null) {


      let data2 = {

        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 2),
        fruitDiameter: this.state.fruitDiameter2RepKMPlant2,
        setFruits: this.state.setFruits2RepKMPlant2,
        setFlowers: this.state.setFlowers2RepKMPlant2,
        pruningNumber: this.state.pruningNumber2RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2

      }




      db.addTrussDetails(data2).then((result) => {
        console.log(result);

        if ((parseInt(this.state.trussNumberRepKMPlant2) + 3) !== null && this.state.pruningNumber3RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 3) !== null && this.state.pruningNumber3RepKMPlant2 !== null) {


      let data3 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 3),
        fruitDiameter: this.state.fruitDiameter3RepKMPlant2,
        setFruits: this.state.setFruits3RepKMPlant2,
        setFlowers: this.state.setFlowers3RepKMPlant2,
        pruningNumber: this.state.pruningNumber3RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2



      }


      db.addTrussDetails(data3).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant2) + 4) !== null && this.state.pruningNumber4RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 4) != null && this.state.pruningNumber4RepKMPlant2 !== null) {


      let data4 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 4),
        fruitDiameter: this.state.fruitDiameter4RepKMPlant2,
        setFruits: this.state.setFruits4RepKMPlant2,
        setFlowers: this.state.setFlowers4RepKMPlant2,
        pruningNumber: this.state.pruningNumber4RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2



      }



      db.addTrussDetails(data4).then((result) => {

        if ((parseInt(this.state.trussNumberRepKMPlant2) + 5) !== null && this.state.pruningNumber5RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 5) != null && this.state.pruningNumber5RepKMPlant2 !== null) {


      let data5 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 5),
        fruitDiameter: this.state.fruitDiameter5RepKMPlant2,
        setFruits: this.state.setFruits5RepKMPlant2,
        setFlowers: this.state.setFlowers5RepKMPlant2,
        pruningNumber: this.state.pruningNumber5RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2


      }



      db.addTrussDetails(data5).then((result) => {
        console.log(result);
        this.setState({
          isLoading: false,
          isDataSend: true,

        });

        if ((parseInt(this.state.trussNumberRepKMPlant2) + 6) !== null && this.state.pruningNumber6RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 6) != null && this.state.pruningNumber6RepKMPlant2 !== null) {


      let data6 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 6),
        fruitDiameter: this.state.fruitDiameter6RepKMPlant2,
        setFruits: this.state.setFruits6RepKMPlant2,
        setFlowers: this.state.setFlowers6RepKMPlant2,
        pruningNumber: this.state.pruningNumber6RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2

      }



      db.addTrussDetails(data6).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant2) + 7) !== null && this.state.pruningNumber7RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 7) != null && this.state.pruningNumber7RepKMPlant2 !== null) {


      let data7 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 7),
        fruitDiameter: this.state.fruitDiameter7RepKMPlant2,
        setFruits: this.state.setFruits7RepKMPlant2,
        setFlowers: this.state.setFlowers7RepKMPlant2,
        pruningNumber: this.state.pruningNumber7RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2


      }



      db.addTrussDetails(data7).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepKMPlant2) + 8) !== null && this.state.pruningNumber8RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 8) != null && this.state.pruningNumber8RepKMPlant2 !== null) {


      let data8 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 8),
        fruitDiameter: this.state.fruitDiameter8RepKMPlant2,
        setFruits: this.state.setFruits8RepKMPlant2,
        setFlowers: this.state.setFlowers8RepKMPlant2,
        pruningNumber: this.state.pruningNumber8RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2


      }



      db.addTrussDetails(data8).then((result) => {

        console.log(result);

        if ((parseInt(this.state.trussNumberRepKMPlant2) + 9) !== null && this.state.pruningNumber9RepKMPlant2 !== '') {

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

    if ((parseInt(this.state.trussNumberRepKMPlant2) + 9) != null && this.state.pruningNumber9RepKMPlant2 !== null) {



      let data9 = {
        trussNumber: (parseInt(this.state.trussNumberRepKMPlant2) + 9),
        fruitDiameter: this.state.fruitDiameter9RepKMPlant2,
        setFruits: this.state.setFruits9RepKMPlant2,
        setFlowers: this.state.setFlowers9RepKMPlant2,
        pruningNumber: this.state.pruningNumber9RepKMPlant2,
        plantRow: '807',
        plantName: 'REP - KM5512',
        plantWeek: this.state.weekNumber,
        plantNumber: 2,
        fruitLoad: this.state.fruitLoadRepKMPlant2,
        pruningFlower: this.state.pruneFloweringRepKMPlant2,
        floweringTruss: this.state.floweringTrussssRepKMPlant2,
        pruningSet: this.state.prunSettingRepKMPlant2,
        settingTruss: this.state.settingTrussNumberRepKMPlant2,
        pruningHarvest: this.state.pruningHarRepKMPlant2,
        harvestTruss: this.state.harvestTrussRepKMPlant2



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

  onSubmitleavesPerPlantRepKMPlant2() {
    this.leavesPerPlantRepKMPlant2.focus();
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

    ['leavesPerPlantRepKMPlant2', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
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


        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 2</Text>/ Row No. 807/ Week No. {this.state.weekNumber}</Text>

        <View style={styles.marginMicroSmallDimensionTop}></View>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>

        <ScrollView
          keyboardShouldPersistTaps='handled'
          scrollEventThrottle={16}
        >

          <View pointerEvents={this.state.KMPlant2Selected ? 'none' : 'auto'}>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantRepKMPlant2')}
                      value={this.state.leavesPerPlantRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussRepKMPlant2')}
                      value={this.state.fullySetTrussRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthRepKMPlant2')}
                      value={this.state.setTrussLengthRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthRepKMPlant2')}
                      value={this.state.weeklyGrowthRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightRepKMPlant2')}
                      value={this.state.floweringTrussHeightRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthRepKMPlant2')}
                      value={this.state.leafLengthRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthRepKMPlant2')}
                      value={this.state.leafWidthRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterRepKMPlant2')}
                      value={this.state.stmDiameterRepKMPlant2}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterRepKMPlant2')}
                      value={this.state.lastWeekStmDiameterRepKMPlant2}
                      ref={(input) => { this.lastWeekSmDiameterTextInput = input; }}
                      onFocus={this.onFocus}
                      onSubmitEditing={Keyboard.dismiss}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumberRepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumberRepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruitsRepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruitsRepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowersRepKMPlant2')}
                  value={this.state.setFlowersRepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumberRepKMPlant2')}
                  value={this.state.pruningNumberRepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterRepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber1RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits1RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits1RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers1RepKMPlant2')}
                  value={this.state.setFlowers1RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1RepKMPlant2')}
                  value={this.state.pruningNumber1RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber2RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits2RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits2RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers2RepKMPlant2')}
                  value={this.state.setFlowers2RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2RepKMPlant2')}
                  value={this.state.pruningNumber2RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber3RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits3RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits3RepKMPlant2} />

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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers3RepKMPlant2')}
                  value={this.state.setFlowers3RepKMPlant2} />

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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3RepKMPlant2')}
                  value={this.state.pruningNumber3RepKMPlant2} />


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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber4RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits4RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits4RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers4RepKMPlant2')}
                  value={this.state.setFlowers4RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4RepKMPlant2')}
                  value={this.state.pruningNumber4RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber5RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits5RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits5RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers5RepKMPlant2')}
                  value={this.state.setFlowers5RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5RepKMPlant2')}
                  value={this.state.pruningNumber5RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber6RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits6RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits6RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers6RepKMPlant2')}
                  value={this.state.setFlowers6RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6RepKMPlant2')}
                  value={this.state.pruningNumber6RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber7RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits7RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits7RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers7RepKMPlant2')}
                  value={this.state.setFlowers7RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7RepKMPlant2')}
                  value={this.state.pruningNumber7RepKMPlant2}

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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber8RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits8RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits8RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers8RepKMPlant2')}
                  value={this.state.setFlowers8RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8RepKMPlant2')}
                  value={this.state.pruningNumber8RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8RepKMPlant2')}
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
                  onChangeText={(text) => this.updateTextInput(text, 'trussNumber9RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber9RepKMPlant2.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits9RepKMPlant2')}
                  blurOnSubmit={false}
                  value={this.state.setFruits9RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers9RepKMPlant2')}
                  value={this.state.setFlowers9RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9RepKMPlant2')}
                  value={this.state.pruningNumber9RepKMPlant2}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9RepKMPlant2')}
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

                <View style={[(this.state.fruitLoadRepKMPlant2 <= 22 || this.state.fruitLoadRepKMPlant2 >= 40) ? styles.borderErrorColor : null]}>

                  <View
                    style={{
                      marginTop: 1
                    }}
                  />

                  <View style={styles.row}>
                    <Text style={styles.text4}>Fruit Load</Text>
                    <Text style={styles.text5}>{this.state.fruitLoadRepKMPlant2}</Text>
                  </View>

                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />

                </View>

                <View style={[(this.state.floweringTrussssRepKMPlant2 <= 0 || this.state.floweringTrussssRepKMPlant2 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Flowering Truss</Text>
                    <Text style={styles.text5}>{this.state.floweringTrussssRepKMPlant2}</Text>
                  </View>


                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.settingTrussNumberRepKMPlant2 <= 1 || this.state.settingTrussNumberRepKMPlant2 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Setting Truss</Text>
                    <Text style={styles.text5}>{this.state.settingTrussNumberRepKMPlant2}</Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.floweringTrussssRepKMPlant2 <= 0 || this.state.floweringTrussssRepKMPlant2 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Harvest Truss</Text>
                    <Text style={styles.text5}>{this.state.harvestTrussRepKMPlant2}</Text>
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
                title="KM Plant 2 completed"
                checked={this.state.KMPlant2Selected}
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