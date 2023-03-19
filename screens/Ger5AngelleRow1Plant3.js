import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Platform,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import {CheckBox} from 'react-native-elements';
import Database from './Database';
import {LogBox} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
var screenWidth2 = Dimensions.get('window').width / 1.6;

const {width, height} = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const db = new Database();

export default class Ger5AngelleRow1Plant3 extends Component {
  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantGer5AngelleRow1Plant3 = this.onSubmitleavesPerPlantGer5AngelleRow1Plant3.bind(
      this,
    );
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(
      this,
    );
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.leavesPerPlantGer5AngelleRow1Plant3Ref = this.updateRef.bind(
      this,
      'leavesPerPlantGer5AngelleRow1Plant3',
    );
    this.fullysetTrussRef = this.updateRef.bind(this, 'FullysetTruss');
    this.trussLengthRef = this.updateRef.bind(this, 'TrussLength');
    this.weeklyGrowthRef = this.updateRef.bind(this, 'WeeklyGrowth');
    this.flowerTrussHeightRef = this.updateRef.bind(this, 'FlowerTrussHeight');
    this.leafLengthRef = this.updateRef.bind(this, 'LeafLength');
    this.leafWidthRef = this.updateRef.bind(this, 'LeafWidth');
    this.stmDiameterRef = this.updateRef.bind(this, 'StmDiameter');
    this.lastWeekStmDiameterRef = this.updateRef.bind(
      this,
      'LastWeekStmDiameter',
    );

    //
    this.state = {
      //Plants
      weekNumber: '',
      size: {width, height},
      plantId: '',
      plantRow: '',
      plantName: '',
      plantWeek: '',
      leavesPerPlantGer5AngelleRow1Plant3: '',
      fullySetTrussGer5AngelleRow1Plant3: '',
      setTrussLengthGer5AngelleRow1Plant3: '',
      weeklyGrowthGer5AngelleRow1Plant3: '',
      floweringTrussHeightGer5AngelleRow1Plant3: '',
      leafLengthGer5AngelleRow1Plant3: '',
      leafWidthGer5AngelleRow1Plant3: '',
      stmDiameterGer5AngelleRow1Plant3: '',
      lastWeekStmDiameterGer5AngelleRow1Plant3: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberGer5AngelleRow1Plant3: '',
      setFruitsGer5AngelleRow1Plant3: '',
      setFlowersGer5AngelleRow1Plant3: '',
      pruningNumberGer5AngelleRow1Plant3: '',
      fruitDiameterGer5AngelleRow1Plant3: '',

      trussNumber1Ger5AngelleRow1Plant3: '',
      setFruits1Ger5AngelleRow1Plant3: '',
      setFlowers1Ger5AngelleRow1Plant3: '',
      pruningNumber1Ger5AngelleRow1Plant3: '',
      fruitDiameter1Ger5AngelleRow1Plant3: '',

      trussNumber2Ger5AngelleRow1Plant3: '',
      setFruits2Ger5AngelleRow1Plant3: '',
      setFlowers2Ger5AngelleRow1Plant3: '',
      pruningNumber2Ger5AngelleRow1Plant3: '',
      fruitDiameter2Ger5AngelleRow1Plant3: '',

      trussNumber3Ger5AngelleRow1Plant3: '',
      setFruits3Ger5AngelleRow1Plant3: '',
      setFlowers3Ger5AngelleRow1Plant3: '',
      pruningNumber3Ger5AngelleRow1Plant3: '',
      fruitDiameter3Ger5AngelleRow1Plant3: '',

      trussNumber4Ger5AngelleRow1Plant3: '',
      setFruits4Ger5AngelleRow1Plant3: '',
      setFlowers4Ger5AngelleRow1Plant3: '',
      pruningNumber4Ger5AngelleRow1Plant3: '',
      fruitDiameter4Ger5AngelleRow1Plant3: '',

      trussNumber5Ger5AngelleRow1Plant3: '',
      setFruits5Ger5AngelleRow1Plant3: '',
      setFlowers5Ger5AngelleRow1Plant3: '',
      pruningNumber5Ger5AngelleRow1Plant3: '',
      fruitDiameter5Ger5AngelleRow1Plant3: '',

      trussNumber6Ger5AngelleRow1Plant3: '',
      setFruits6Ger5AngelleRow1Plant3: '',
      setFlowers6Ger5AngelleRow1Plant3: '',
      pruningNumber6Ger5AngelleRow1Plant3: '',
      fruitDiameter6Ger5AngelleRow1Plant3: '',

      trussNumber7Ger5AngelleRow1Plant3: '',
      setFruits7Ger5AngelleRow1Plant3: '',
      setFlowers7Ger5AngelleRow1Plant3: '',
      pruningNumber7Ger5AngelleRow1Plant3: '',
      fruitDiameter7Ger5AngelleRow1Plant3: '',

      trussNumber8Ger5AngelleRow1Plant3: '',
      setFruits8Ger5AngelleRow1Plant3: '',
      setFlowers8Ger5AngelleRow1Plant3: '',
      pruningNumber8Ger5AngelleRow1Plant3: '',
      fruitDiameter8Ger5AngelleRow1Plant3: '',

      trussNumber9Ger5AngelleRow1Plant3: '',
      setFruits9Ger5AngelleRow1Plant3: '',
      setFlowers9Ger5AngelleRow1Plant3: '',
      pruningNumber9Ger5AngelleRow1Plant3: '',
      fruitDiameter9Ger5AngelleRow1Plant3: '',

      fruitLoadGer5AngelleRow1Plant3: '',
      harvestTrussGer5AngelleRow1Plant3: '',
      pruningHarGer5AngelleRow1Plant3: '',
      settingTrussNumberGer5AngelleRow1Plant3: '',
      prunSettingGer5AngelleRow1Plant3: '',
      pruneFloweringGer5AngelleRow1Plant3: '',

      floweringTrussNumberGer5AngelleRow1Plant3: '',
      settingTrussGer5AngelleRow1Plant3: '',
      settingTruss2Ger5AngelleRow1Plant3: '',
      floweringTrussssGer5AngelleRow1Plant3: '',

      Ger5AngelleRow1Plant3Selected: false,
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

      fruitLoadPreviousData: '',
      floweringTrussPreviousData: '',
      settingTrussPreviousData: '',
      harvestTrussPreviousData: '',
    };
  }

  goBack() {
    const {navigation} = this.props;
    navigation.goBack();
    navigation.state.params.onBack(); // Call onBack function of ScreenA
  }

  componentDidMount() {
    var weekNumber = moment().week() - 1;
    var yearNumber = moment().year();
    var toText = yearNumber.toString(); //convert to string
    var lastChar = toText.slice(-2); //gets last character
    var lastDigit = +lastChar; //convert last character to number
    var weekNumberText = lastDigit + '00';
    var convertWeekNumber = +weekNumberText;
    var completeWeekNumber = convertWeekNumber + weekNumber;

    this.setState({weekNumber: completeWeekNumber});

    LogBox.ignoreAllLogs(true);

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
      AsyncStorage.getItem('@MySuperStore:plantKey')
        .then(plantValues => {
          const allPlant = JSON.parse(plantValues);

          const filteredPlantWeek = this.state.weekNumber - 1;

          //Change week number
          const weekRowPlant = d =>
            d.plantName === 'GER 5 - Angelle' &&
            d.plantNumber === 3 &&
            d.plantRow === '108' &&
            d.plantWeek === filteredPlantWeek;

          const filteredweekRowPlant = allPlant.plant_details.filter(
            weekRowPlant,
          );

          this.setState({allPlantData: filteredweekRowPlant});

          this.setData();
        })
        .done();
    } catch (error) {}

    try {
      AsyncStorage.getItem('@MySuperStore:trussKey')
        .then(trussValues => {
          const allTruss = JSON.parse(trussValues);

          const filteredTrussWeek = this.state.weekNumber - 1;

          //Change week number
          const weekRowTruss = d =>
            d.plantName === 'GER 5 - Angelle' &&
            d.plantNumber === 3 &&
            d.plantRow === '108' &&
            d.plantWeek === filteredTrussWeek;

          const filteredweekRowTruss = allTruss.truss_details.filter(
            weekRowTruss,
          );

          this.setState({allTrussData: filteredweekRowTruss});
          this.renderLastWeekTrussDetails();
        })
        .done();
    } catch (error) {}

    //AWS DATA ENDS
  };

  renderLastWeekTrussDetails = () => {
    if (this.state.allTrussData.length !== 0) {
      if (JSON.stringify(this.state.allTrussData[0].fruitLoad) === 'null') {
        this.setState({
          fruitLoadPreviousData: '--',
        });
      } else {
        this.setState({
          fruitLoadPreviousData: JSON.stringify(
            this.state.allTrussData[0].fruitLoad,
          ),
        });
      }

      if (
        JSON.stringify(this.state.allTrussData[0].floweringTruss) === 'null'
      ) {
        this.setState({
          floweringTrussPreviousData: '--',
        });
      } else {
        this.setState({
          floweringTrussPreviousData: JSON.stringify(
            this.state.allTrussData[0].floweringTruss,
          ),
        });
      }

      if (JSON.stringify(this.state.allTrussData[0].settingTruss) === 'null') {
        this.setState({
          settingTrussPreviousData: '--',
        });
      } else {
        this.setState({
          settingTrussPreviousData: JSON.stringify(
            this.state.allTrussData[0].settingTruss,
          ),
        });
      }

      if (JSON.stringify(this.state.allTrussData[0].harvestTruss) === 'null') {
        this.setState({
          harvestTrussPreviousData: '--',
        });
      } else {
        this.setState({
          harvestTrussPreviousData: JSON.stringify(
            this.state.allTrussData[0].harvestTruss,
          ),
        });
      }
    } else {
      console.log('No data in the database');
    }
  };

  setData = () => {
    if (this.state.allPlantData.length !== 0) {
      if (
        JSON.stringify(this.state.allPlantData[0].leavesPerPlant) === 'null'
      ) {
        this.setState({
          leavesPerPlantPreviousData: '--',
        });
      } else {
        this.setState({
          leavesPerPlantPreviousData: JSON.stringify(
            this.state.allPlantData[0].leavesPerPlant,
          ),
        });
      }

      if (JSON.stringify(this.state.allPlantData[0].fullySetTruss) === 'null') {
        this.setState({
          fullySetTrussPreviousData: '--',
        });
      } else {
        this.setState({
          fullySetTrussPreviousData: JSON.stringify(
            this.state.allPlantData[0].fullySetTruss,
          ),
        });
      }

      if (
        JSON.stringify(this.state.allPlantData[0].setTrussLength) === 'null'
      ) {
        this.setState({
          fullySetTrussLengthPreviousData: '--',
        });
      } else {
        this.setState({
          fullySetTrussLengthPreviousData: JSON.stringify(
            this.state.allPlantData[0].setTrussLength,
          ),
        });
      }

      if (JSON.stringify(this.state.allPlantData[0].weeklyGrowth) === 'null') {
        this.setState({
          weeklyGrowthPreviousData: '--',
        });
      } else {
        this.setState({
          weeklyGrowthPreviousData: JSON.stringify(
            this.state.allPlantData[0].weeklyGrowth,
          ),
        });
      }

      if (
        JSON.stringify(this.state.allPlantData[0].floweringTrussHeight) ===
        'null'
      ) {
        this.setState({
          flowerTrussHeightPreviousData: '--',
        });
      } else {
        this.setState({
          flowerTrussHeightPreviousData: JSON.stringify(
            this.state.allPlantData[0].floweringTrussHeight,
          ),
        });
      }

      if (JSON.stringify(this.state.allPlantData[0].leafLength) === 'null') {
        this.setState({
          leafLengthPreviousData: '--',
        });
      } else {
        this.setState({
          leafLengthPreviousData: JSON.stringify(
            this.state.allPlantData[0].leafLength,
          ),
        });
      }

      if (JSON.stringify(this.state.allPlantData[0].leafWidth) === 'null') {
        this.setState({
          leafWidthPreviousData: '--',
        });
      } else {
        this.setState({
          leafWidthPreviousData: JSON.stringify(
            this.state.allPlantData[0].leafWidth,
          ),
        });
      }

      if (JSON.stringify(this.state.allPlantData[0].stmDiameter) === 'null') {
        this.setState({
          stemDiPreviousData: '--',
        });
      } else {
        this.setState({
          stemDiPreviousData: JSON.stringify(
            this.state.allPlantData[0].stmDiameter,
          ),
        });
      }

      if (
        JSON.stringify(this.state.allPlantData[0].lastWeekStmDiameter) ===
        'null'
      ) {
        this.setState({
          lastWeekStemDiaPreviousData: '--',
        });
      } else {
        this.setState({
          lastWeekStemDiaPreviousData: JSON.stringify(
            this.state.allPlantData[0].lastWeekStmDiameter,
          ),
        });
      }
    } else {
      console.log('No data in the database');
    }
  };

  getAsysncValues = async () => {
    try {
      AsyncStorage.getItem('leavesPerPlantGer5AngelleRow1Plant3')
        .then(text1Value => {
          this.setState({
            leavesPerPlantGer5AngelleRow1Plant3: JSON.parse(text1Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fullySetTrussGer5AngelleRow1Plant3')
        .then(text2Value => {
          this.setState({
            fullySetTrussGer5AngelleRow1Plant3: JSON.parse(text2Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setTrussLengthGer5AngelleRow1Plant3')
        .then(text3Value => {
          this.setState({
            setTrussLengthGer5AngelleRow1Plant3: JSON.parse(text3Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('weeklyGrowthGer5AngelleRow1Plant3')
        .then(text4Value => {
          this.setState({
            weeklyGrowthGer5AngelleRow1Plant3: JSON.parse(text4Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('floweringTrussHeightGer5AngelleRow1Plant3')
        .then(text5Value => {
          this.setState({
            floweringTrussHeightGer5AngelleRow1Plant3: JSON.parse(text5Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('leafLengthGer5AngelleRow1Plant3')
        .then(text6Value => {
          this.setState({
            leafLengthGer5AngelleRow1Plant3: JSON.parse(text6Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('leafWidthGer5AngelleRow1Plant3')
        .then(text7Value => {
          this.setState({
            leafWidthGer5AngelleRow1Plant3: JSON.parse(text7Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('stmDiameterGer5AngelleRow1Plant3')
        .then(text8Value => {
          this.setState({
            stmDiameterGer5AngelleRow1Plant3: JSON.parse(text8Value),
          });
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('lastWeekStmDiameterGer5AngelleRow1Plant3')
        .then(text9Value => {
          this.setState({
            lastWeekStmDiameterGer5AngelleRow1Plant3: JSON.parse(text9Value),
          });
        })
        .done();
    } catch (error) {}

    try {
      AsyncStorage.getItem('Ger5AngelleRow1Plant3Selected')
        .then(text99Value => {
          this.setState({
            Ger5AngelleRow1Plant3Selected: JSON.parse(text99Value),
          });

          console.log(this.state.Ger5AngelleRow1Plant3Selected);
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('trussNumberGer5AngelleRow1Plant3')
        .then(text10Value => {
          if (text10Value !== null) {
            this.setState({
              trussNumberGer5AngelleRow1Plant3: JSON.parse(text10Value),
            });

            this.setState({
              trussNumber1Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                1,
            });
            this.setState({
              trussNumber2Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                2,
            });
            this.setState({
              trussNumber3Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                3,
            });
            this.setState({
              trussNumber4Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                4,
            });
            this.setState({
              trussNumber5Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                5,
            });
            this.setState({
              trussNumber6Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                6,
            });
            this.setState({
              trussNumber7Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                7,
            });
            this.setState({
              trussNumber8Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                8,
            });
            this.setState({
              trussNumber9Ger5AngelleRow1Plant3:
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                9,
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFruitsGer5AngelleRow1Plant3')
        .then(text11Value => {
          if (text11Value !== null) {
            this.setState({
              setFruitsGer5AngelleRow1Plant3: JSON.parse(text11Value),
            });
          }
        })
        .done();
    } catch (error) {}

    try {
      AsyncStorage.getItem('setFlowersGer5AngelleRow1Plant3')
        .then(text12Value => {
          if (text12Value !== null) {
            this.setState({
              setFlowersGer5AngelleRow1Plant3: JSON.parse(text12Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumberGer5AngelleRow1Plant3')
        .then(text13Value => {
          if (text13Value !== null) {
            this.setState({
              pruningNumberGer5AngelleRow1Plant3: JSON.parse(text13Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameterGer5AngelleRow1Plant3')
        .then(text14Value => {
          if (text14Value !== null) {
            this.setState({
              fruitDiameterGer5AngelleRow1Plant3: JSON.parse(text14Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 1---------------------------------//

    try {
      AsyncStorage.getItem('setFruits1Ger5AngelleRow1Plant3')
        .then(text16Value => {
          if (text16Value !== null) {
            this.setState({
              setFruits1Ger5AngelleRow1Plant3: JSON.parse(text16Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers1Ger5AngelleRow1Plant3')
        .then(text17Value => {
          if (text17Value !== null) {
            this.setState({
              setFlowers1Ger5AngelleRow1Plant3: JSON.parse(text17Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber1Ger5AngelleRow1Plant3')
        .then(text18Value => {
          if (text18Value !== null) {
            this.setState({
              pruningNumber1Ger5AngelleRow1Plant3: JSON.parse(text18Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter1Ger5AngelleRow1Plant3')
        .then(text19Value => {
          if (text19Value !== null) {
            this.setState({
              fruitDiameter1Ger5AngelleRow1Plant3: JSON.parse(text19Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 2---------------------------------//

    try {
      AsyncStorage.getItem('setFruits2Ger5AngelleRow1Plant3')
        .then(text17Value => {
          if (text17Value !== null) {
            this.setState({
              setFruits2Ger5AngelleRow1Plant3: JSON.parse(text17Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers2Ger5AngelleRow1Plant3')
        .then(text18Value => {
          if (text18Value !== null) {
            this.setState({
              setFlowers2Ger5AngelleRow1Plant3: JSON.parse(text18Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber2Ger5AngelleRow1Plant3')
        .then(text19Value => {
          if (text19Value !== null) {
            this.setState({
              pruningNumber2Ger5AngelleRow1Plant3: JSON.parse(text19Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter2Ger5AngelleRow1Plant3')
        .then(text20Value => {
          if (text20Value !== null) {
            this.setState({
              fruitDiameter2Ger5AngelleRow1Plant3: JSON.parse(text20Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 3---------------------------------//

    try {
      AsyncStorage.getItem('setFruits3Ger5AngelleRow1Plant3')
        .then(text21Value => {
          if (text21Value !== null) {
            this.setState({
              setFruits3Ger5AngelleRow1Plant3: JSON.parse(text21Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers3Ger5AngelleRow1Plant3')
        .then(text22Value => {
          if (text22Value !== null) {
            this.setState({
              setFlowers3Ger5AngelleRow1Plant3: JSON.parse(text22Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber3Ger5AngelleRow1Plant3')
        .then(text23Value => {
          if (text23Value !== null) {
            this.setState({
              pruningNumber3Ger5AngelleRow1Plant3: JSON.parse(text23Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter3Ger5AngelleRow1Plant3')
        .then(text24Value => {
          if (text24Value !== null) {
            this.setState({
              fruitDiameter3Ger5AngelleRow1Plant3: JSON.parse(text24Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 4---------------------------------//

    try {
      AsyncStorage.getItem('setFruits4Ger5AngelleRow1Plant3')
        .then(text25Value => {
          if (text25Value !== null) {
            this.setState({
              setFruits4Ger5AngelleRow1Plant3: JSON.parse(text25Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers4Ger5AngelleRow1Plant3')
        .then(text26Value => {
          if (text26Value !== null) {
            this.setState({
              setFlowers4Ger5AngelleRow1Plant3: JSON.parse(text26Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber4Ger5AngelleRow1Plant3')
        .then(text27Value => {
          if (text27Value !== null) {
            this.setState({
              pruningNumber4Ger5AngelleRow1Plant3: JSON.parse(text27Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter4Ger5AngelleRow1Plant3')
        .then(text28Value => {
          if (text28Value !== null) {
            this.setState({
              fruitDiameter4Ger5AngelleRow1Plant3: JSON.parse(text28Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 5---------------------------------//

    try {
      AsyncStorage.getItem('setFruits5Ger5AngelleRow1Plant3')
        .then(text29Value => {
          if (text29Value !== null) {
            this.setState({
              setFruits5Ger5AngelleRow1Plant3: JSON.parse(text29Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers5Ger5AngelleRow1Plant3')
        .then(text30Value => {
          if (text30Value !== null) {
            this.setState({
              setFlowers5Ger5AngelleRow1Plant3: JSON.parse(text30Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber5Ger5AngelleRow1Plant3')
        .then(text31Value => {
          if (text31Value !== null) {
            this.setState({
              pruningNumber5Ger5AngelleRow1Plant3: JSON.parse(text31Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter5Ger5AngelleRow1Plant3')
        .then(text32Value => {
          if (text32Value !== null) {
            this.setState({
              fruitDiameter5Ger5AngelleRow1Plant3: JSON.parse(text32Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 6---------------------------------//

    try {
      AsyncStorage.getItem('setFruits6Ger5AngelleRow1Plant3')
        .then(text33Value => {
          if (text33Value !== null) {
            this.setState({
              setFruits6Ger5AngelleRow1Plant3: JSON.parse(text33Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers6Ger5AngelleRow1Plant3')
        .then(text34Value => {
          if (text34Value !== null) {
            this.setState({
              setFlowers6Ger5AngelleRow1Plant3: JSON.parse(text34Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber6Ger5AngelleRow1Plant3')
        .then(text35Value => {
          if (text35Value !== null) {
            this.setState({
              pruningNumber6Ger5AngelleRow1Plant3: JSON.parse(text35Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter6Ger5AngelleRow1Plant3')
        .then(text36Value => {
          if (text36Value !== null) {
            this.setState({
              fruitDiameter6Ger5AngelleRow1Plant3: JSON.parse(text36Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 7---------------------------------//

    try {
      AsyncStorage.getItem('setFruits7Ger5AngelleRow1Plant3')
        .then(text37Value => {
          if (text37Value !== null) {
            this.setState({
              setFruits7Ger5AngelleRow1Plant3: JSON.parse(text37Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers7Ger5AngelleRow1Plant3')
        .then(text38Value => {
          if (text38Value !== null) {
            this.setState({
              setFlowers7Ger5AngelleRow1Plant3: JSON.parse(text38Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber7Ger5AngelleRow1Plant3')
        .then(text39Value => {
          if (text39Value !== null) {
            this.setState({
              pruningNumber7Ger5AngelleRow1Plant3: JSON.parse(text39Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter7Ger5AngelleRow1Plant3')
        .then(text40Value => {
          if (text40Value !== null) {
            this.setState({
              fruitDiameter7Ger5AngelleRow1Plant3: JSON.parse(text40Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 8---------------------------------//

    try {
      AsyncStorage.getItem('setFruits8Ger5AngelleRow1Plant3')
        .then(text41Value => {
          if (text41Value !== null) {
            this.setState({
              setFruits8Ger5AngelleRow1Plant3: JSON.parse(text41Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers8Ger5AngelleRow1Plant3')
        .then(text42Value => {
          if (text42Value !== null) {
            this.setState({
              setFlowers8Ger5AngelleRow1Plant3: JSON.parse(text42Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber8Ger5AngelleRow1Plant3')
        .then(text43Value => {
          if (text43Value !== null) {
            this.setState({
              pruningNumber8Ger5AngelleRow1Plant3: JSON.parse(text43Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter8Ger5AngelleRow1Plant3')
        .then(text44Value => {
          if (text44Value !== null) {
            this.setState({
              fruitDiameter8Ger5AngelleRow1Plant3: JSON.parse(text44Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Truss 9---------------------------------//

    try {
      AsyncStorage.getItem('setFruits9Ger5AngelleRow1Plant3')
        .then(text45Value => {
          if (text45Value !== null) {
            this.setState({
              setFruits9Ger5AngelleRow1Plant3: JSON.parse(text45Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('setFlowers9Ger5AngelleRow1Plant3')
        .then(text46Value => {
          if (text46Value !== null) {
            this.setState({
              setFlowers9Ger5AngelleRow1Plant3: JSON.parse(text46Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('pruningNumber9Ger5AngelleRow1Plant3')
        .then(text47Value => {
          if (text47Value !== null) {
            this.setState({
              pruningNumber9Ger5AngelleRow1Plant3: JSON.parse(text47Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('fruitDiameter9Ger5AngelleRow1Plant3')
        .then(text48Value => {
          if (text48Value !== null) {
            this.setState({
              fruitDiameter9Ger5AngelleRow1Plant3: JSON.parse(text48Value),
            });
          }
        })
        .done();
    } catch (error) {}

    //-------------------------Calculations---------------------------------//

    try {
      AsyncStorage.getItem('fruitLoadGer5AngelleRow1Plant3')
        .then(text49Value => {
          if (text49Value !== null) {
            this.setState({
              fruitLoadGer5AngelleRow1Plant3: JSON.parse(text49Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('floweringTrussssGer5AngelleRow1Plant3')
        .then(text50Value => {
          if (text50Value !== null) {
            this.setState({
              floweringTrussssGer5AngelleRow1Plant3: JSON.parse(text50Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('settingTrussNumberGer5AngelleRow1Plant3')
        .then(text51Value => {
          if (text51Value !== null) {
            this.setState({
              settingTrussNumberGer5AngelleRow1Plant3: JSON.parse(text51Value),
            });
          }
        })
        .done();
    } catch (error) {}
    try {
      AsyncStorage.getItem('harvestTrussGer5AngelleRow1Plant3')
        .then(text52Value => {
          if (text52Value !== null) {
            this.setState({
              harvestTrussGer5AngelleRow1Plant3: JSON.parse(text52Value),
            });
          }
        })
        .done();
    } catch (error) {}

    /*try {
      AsyncStorage.getItem('trussNumberGer5AngelleRow1Plant3').then((text10Value) => {
        this.setState({ trussNumberGer5AngelleRow1Plant3: JSON.parse(text10Value) });
        console.log(this.state.trussNumberGer5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsGer5AngelleRow1Plant3').then((text11Value) => {
        this.setState({ setFruitsGer5AngelleRow1Plant3: JSON.parse(text11Value) });
        console.log(this.state.setFruitsGer5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersGer5AngelleRow1Plant3').then((text12Value) => {
        this.setState({ setFlowersGer5AngelleRow1Plant3: JSON.parse(text12Value) });
        console.log(this.state.setFlowersGer5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberGer5AngelleRow1Plant3').then((text13Value) => {
        this.setState({ pruningNumberGer5AngelleRow1Plant3: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberGer5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterGer5AngelleRow1Plant3').then((text14Value) => {
        this.setState({ fruitDiameterGer5AngelleRow1Plant3: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterGer5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1Ger5AngelleRow1Plant3').then((text15Value) => {
        this.setState({ setFruits1Ger5AngelleRow1Plant3: JSON.parse(text15Value) });
        console.log(this.state.setFruits1Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1Ger5AngelleRow1Plant3').then((text16Value) => {
        this.setState({ setFlowers1Ger5AngelleRow1Plant3: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1Ger5AngelleRow1Plant3').then((text17Value) => {
        this.setState({ pruningNumber1Ger5AngelleRow1Plant3: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1Ger5AngelleRow1Plant3').then((text18Value) => {
        this.setState({ fruitDiameter1Ger5AngelleRow1Plant3: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2Ger5AngelleRow1Plant3').then((text19Value) => {
        this.setState({ setFruits2Ger5AngelleRow1Plant3: JSON.parse(text19Value) });
        console.log(this.state.setFruits2Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2Ger5AngelleRow1Plant3').then((text20Value) => {
        this.setState({ setFlowers2Ger5AngelleRow1Plant3: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2Ger5AngelleRow1Plant3').then((text21Value) => {
        this.setState({ pruningNumber2Ger5AngelleRow1Plant3: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2Ger5AngelleRow1Plant3').then((text22Value) => {
        this.setState({ fruitDiameter2Ger5AngelleRow1Plant3: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3Ger5AngelleRow1Plant3').then((text23Value) => {
        this.setState({ setFruits3Ger5AngelleRow1Plant3: JSON.parse(text23Value) });
        console.log(this.state.setFruits3Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3Ger5AngelleRow1Plant3').then((text24Value) => {
        this.setState({ setFlowers3Ger5AngelleRow1Plant3: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3Ger5AngelleRow1Plant3').then((text25Value) => {
        this.setState({ pruningNumber3Ger5AngelleRow1Plant3: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3Ger5AngelleRow1Plant3').then((text26Value) => {
        this.setState({ fruitDiameter3Ger5AngelleRow1Plant3: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3Ger5AngelleRow1Plant3)



      }).done();
    } catch (error) {
    }*/
  };

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  };

  updatePlantsTextInput = (text, field) => {
    this.setItem(field, text);
    const state = this.state;
    state[field] = text;
    this.setState(state);
  };

  updateTextInput = (text, field) => {
    const cleanNumber = /[^0-9]/;

    if (!cleanNumber.test(text)) {
      this.setItem(field, text);
      const state = this.state;
      state[field] = text;
      this.setState(state);
    } else {
      Alert.alert('Enter valid number');
    }

    this.calculateFruitLoad();
    this.calculateHarvestTruss();
    this.calculateSettingTruss2();
    this.calculateFloweringTruss2();
  };

  updateTextInput22 = (text, field) => {
    this.setItem(field, text);
    const state = this.state;
    state[field] = text;
    this.setState(state);

    this.setState({
      trussNumber1Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 1,
    });
    this.setState({
      trussNumber2Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 2,
    });
    this.setState({
      trussNumber3Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 3,
    });
    this.setState({
      trussNumber4Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 4,
    });
    this.setState({
      trussNumber5Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 5,
    });
    this.setState({
      trussNumber6Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 6,
    });
    this.setState({
      trussNumber7Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 7,
    });
    this.setState({
      trussNumber8Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 8,
    });
    this.setState({
      trussNumber9Ger5AngelleRow1Plant3:
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 9,
    });

    if (this.state.trussNumberGer5AngelleRow1Plant3 !== '') {
      this.calculateSettingTruss2();
      this.calculateFloweringTruss2();
      this.calculateFruitLoad();
      this.calculateHarvestTruss();
      this.getTrussData();
    } else {
      this.setState({
        setFruitsGer5AngelleRow1Plant3: '',
        setFlowersGer5AngelleRow1Plant3: '',
        pruningNumberGer5AngelleRow1Plant3: '',

        setFruits1Ger5AngelleRow1Plant3: '',
        setFlowers1Ger5AngelleRow1Plant3: '',
        pruningNumber1Ger5AngelleRow1Plant3: '',

        setFruits2Ger5AngelleRow1Plant3: '',
        setFlowers2Ger5AngelleRow1Plant3: '',
        pruningNumber2Ger5AngelleRow1Plant3: '',

        setFruits3Ger5AngelleRow1Plant3: '',
        setFlowers3Ger5AngelleRow1Plant3: '',
        pruningNumber3Ger5AngelleRow1Plant3: '',

        setFruits4Ger5AngelleRow1Plant3: '',
        setFlowers4Ger5AngelleRow1Plant3: '',
        pruningNumber4Ger5AngelleRow1Plant3: '',

        setFruits5Ger5AngelleRow1Plant3: '',
        setFlowers5Ger5AngelleRow1Plant3: '',
        pruningNumber5Ger5AngelleRow1Plant3: '',

        setFruits6Ger5AngelleRow1Plant3: '',
        setFlowers6Ger5AngelleRow1Plant3: '',
        pruningNumber6Ger5AngelleRow1Plant3: '',

        setFruits7Ger5AngelleRow1Plant3: '',
        setFlowers7Ger5AngelleRow1Plant3: '',
        pruningNumber7Ger5AngelleRow1Plant3: '',

        setFruits8Ger5AngelleRow1Plant3: '',
        setFlowers8Ger5AngelleRow1Plant3: '',
        pruningNumber8Ger5AngelleRow1Plant3: '',

        setFruits9Ger5AngelleRow1Plant3: '',
        setFlowers9Ger5AngelleRow1Plant3: '',
        pruningNumber9Ger5AngelleRow1Plant3: '',
      });
    }
  };

  //calculation

  calculateFruitLoad = () => {
    var sum = 0;

    sum =
      (Number.parseInt(this.state.setFruitsGer5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruitsGer5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits1Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits1Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits2Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits2Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits3Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits3Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits4Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits4Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits5Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits5Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits6Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits6Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits7Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits7Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits8Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits8Ger5AngelleRow1Plant3)
        : 0) +
      (Number.parseInt(this.state.setFruits9Ger5AngelleRow1Plant3)
        ? Number.parseInt(this.state.setFruits9Ger5AngelleRow1Plant3)
        : 0);
    this.setState({
      fruitLoadGer5AngelleRow1Plant3: sum,
    });

    this.setItem(
      'fruitLoadGer5AngelleRow1Plant3',
      this.state.fruitLoadGer5AngelleRow1Plant3,
    );

    console.log('Fruit Load : ' + sum);
  };

  calculateHarvestTruss = () => {
    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersGer5AngelleRow1Plant3 === '') {
      prunNum = Number.parseInt(this.state.pruningNumberGer5AngelleRow1Plant3);

      div =
        Number.parseInt(
          this.state.setFruitsGer5AngelleRow1Plant3
            ? this.state.setFruitsGer5AngelleRow1Plant3
            : 0,
        ) /
        parseFloat(
          this.state.pruningNumberGer5AngelleRow1Plant3
            ? this.state.pruningNumberGer5AngelleRow1Plant3
            : 0,
        );
      sub = 1 - div;
      add = (
        (Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3)
          ? Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3)
          : 0) + sub
      ).toFixed(2);
      this.setState({
        harvestTrussGer5AngelleRow1Plant3: add,
        pruningHarGer5AngelleRow1Plant3: prunNum,
      });
      this.setItem('pruningHarGer5AngelleRow1Plant3', prunNum);
    } else {
      prunNum = Number.parseInt(this.state.pruningNumberGer5AngelleRow1Plant3);
      var num = this.state.trussNumberGer5AngelleRow1Plant3;

      this.setState({
        harvestTrussGer5AngelleRow1Plant3: num,
        pruningHarGer5AngelleRow1Plant3: prunNum,
      });
      this.setItem('pruningHarGer5AngelleRow1Plant3', prunNum);
    }

    console.log('Harvest Truss : ' + add);

    this.setItem(
      'harvestTrussGer5AngelleRow1Plant3',
      this.state.harvestTrussGer5AngelleRow1Plant3,
    );
  };

  calculateSettingTruss2 = () => {
    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log(
      'Setting truss called : ' + this.state.setFruits2Ger5AngelleRow1Plant3,
    );

    if (this.state.setFruits9Ger5AngelleRow1Plant3 === '') {
      if (this.state.setFruits8Ger5AngelleRow1Plant3 === '') {
        if (this.state.setFruits7Ger5AngelleRow1Plant3 === '') {
          if (this.state.setFruits6Ger5AngelleRow1Plant3 === '') {
            if (this.state.setFruits5Ger5AngelleRow1Plant3 === '') {
              if (this.state.setFruits4Ger5AngelleRow1Plant3 === '') {
                if (this.state.setFruits3Ger5AngelleRow1Plant3 === '') {
                  if (this.state.setFruits2Ger5AngelleRow1Plant3 === '') {
                    if (this.state.setFruits1Ger5AngelleRow1Plant3 === '') {
                      if (this.state.setFruitsGer5AngelleRow1Plant3 === '') {
                      } else {
                        pruningSet = Number.parseInt(
                          this.state.pruningNumberGer5AngelleRow1Plant3,
                        );
                        trussNum = Number.parseInt(
                          this.state.trussNumberGer5AngelleRow1Plant3,
                        );
                        settingFruit = Number.parseInt(
                          this.state.setFruitsGer5AngelleRow1Plant3,
                        );
                        settingTruss = (
                          trussNum +
                          settingFruit / pruningSet
                        ).toFixed(2);
                        console.log('Setting Truss Number : ' + settingTruss);
                        this.setState({
                          settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
                          settingTruss: trussNum,
                          prunSettingGer5AngelleRow1Plant3: pruningSet,
                        });

                        this.setItem(
                          'settingTrussNumberGer5AngelleRow1Plant3',
                          settingTruss,
                        );
                        this.setItem(
                          'prunSettingGer5AngelleRow1Plant3',
                          pruningSet,
                        );
                      }
                    } else {
                      var number =
                        Number.parseInt(
                          this.state.trussNumberGer5AngelleRow1Plant3,
                        ) + 1;

                      pruningSet = Number.parseInt(
                        this.state.pruningNumber1Ger5AngelleRow1Plant3,
                      );
                      trussNum = Number.parseInt(number);
                      settingFruit = Number.parseInt(
                        this.state.setFruits1Ger5AngelleRow1Plant3,
                      );
                      settingTruss = (
                        trussNum +
                        settingFruit / pruningSet
                      ).toFixed(2);
                      console.log('Setting Truss Number 1 : ' + settingTruss);
                      this.setState({
                        settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
                        settingTruss: trussNum,
                        prunSettingGer5AngelleRow1Plant3: pruningSet,
                      });

                      this.setItem(
                        'settingTrussNumberGer5AngelleRow1Plant3',
                        settingTruss,
                      );
                      this.setItem(
                        'prunSettingGer5AngelleRow1Plant3',
                        pruningSet,
                      );
                    }
                  } else {
                    var number2 =
                      Number.parseInt(
                        this.state.trussNumberGer5AngelleRow1Plant3,
                      ) + 2;

                    pruningSet = Number.parseInt(
                      this.state.pruningNumber2Ger5AngelleRow1Plant3,
                    );
                    trussNum = Number.parseInt(number2);
                    settingFruit = Number.parseInt(
                      this.state.setFruits2Ger5AngelleRow1Plant3,
                    );
                    settingTruss = (
                      trussNum +
                      settingFruit / pruningSet
                    ).toFixed(2);
                    console.log('Setting Truss Number 2 : ' + settingTruss);
                    this.setState({
                      settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
                      settingTruss: trussNum,
                      prunSettingGer5AngelleRow1Plant3: pruningSet,
                    });
                    this.setItem(
                      'settingTrussNumberGer5AngelleRow1Plant3',
                      settingTruss,
                    );
                    this.setItem(
                      'prunSettingGer5AngelleRow1Plant3',
                      pruningSet,
                    );
                  }
                } else {
                  var number3 =
                    Number.parseInt(
                      this.state.trussNumberGer5AngelleRow1Plant3,
                    ) + 3;

                  pruningSet = Number.parseInt(
                    this.state.pruningNumber3Ger5AngelleRow1Plant3,
                  );
                  trussNum = Number.parseInt(number3);
                  settingFruit = Number.parseInt(
                    this.state.setFruits3Ger5AngelleRow1Plant3,
                  );
                  settingTruss = (trussNum + settingFruit / pruningSet).toFixed(
                    2,
                  );
                  console.log('Setting Truss Number 3 : ' + settingTruss);
                  this.setState({
                    settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
                    settingTruss: trussNum,
                    prunSettingGer5AngelleRow1Plant3: pruningSet,
                  });

                  this.setItem(
                    'settingTrussNumberGer5AngelleRow1Plant3',
                    settingTruss,
                  );
                  this.setItem('prunSettingGer5AngelleRow1Plant3', pruningSet);
                }
              } else {
                var number4 =
                  Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                  4;

                pruningSet = Number.parseInt(
                  this.state.pruningNumber4Ger5AngelleRow1Plant3,
                );
                trussNum = Number.parseInt(number4);
                settingFruit = Number.parseInt(
                  this.state.setFruits4Ger5AngelleRow1Plant3,
                );
                settingTruss = (trussNum + settingFruit / pruningSet).toFixed(
                  2,
                );
                console.log('Setting Truss Number 4 : ' + settingTruss);
                this.setState({
                  settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
                  settingTruss: trussNum,
                  prunSettingGer5AngelleRow1Plant3: pruningSet,
                });

                this.setItem(
                  'settingTrussNumberGer5AngelleRow1Plant3',
                  settingTruss,
                );
                this.setItem('prunSettingGer5AngelleRow1Plant3', pruningSet);
              }
            } else {
              var number5 =
                Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) +
                5;

              pruningSet = Number.parseInt(
                this.state.pruningNumber5Ger5AngelleRow1Plant3,
              );
              trussNum = Number.parseInt(number5);
              settingFruit = Number.parseInt(
                this.state.setFruits5Ger5AngelleRow1Plant3,
              );
              settingTruss = (trussNum + settingFruit / pruningSet).toFixed(2);
              console.log('Setting Truss Number 5 : ' + settingTruss);
              this.setState({
                settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
                settingTruss: trussNum,
                prunSettingGer5AngelleRow1Plant3: pruningSet,
              });

              this.setItem(
                'settingTrussNumberGer5AngelleRow1Plant3',
                settingTruss,
              );
              this.setItem('prunSettingGer5AngelleRow1Plant3', pruningSet);
            }
          } else {
            var number6 =
              Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 6;

            pruningSet = Number.parseInt(
              this.state.pruningNumber6Ger5AngelleRow1Plant3,
            );
            trussNum = Number.parseInt(number6);
            settingFruit = Number.parseInt(
              this.state.setFruits6Ger5AngelleRow1Plant3,
            );
            settingTruss = (trussNum + settingFruit / pruningSet).toFixed(2);
            console.log('Setting Truss Number 6 : ' + settingTruss);
            this.setState({
              settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
              settingTruss: trussNum,
              prunSettingGer5AngelleRow1Plant3: pruningSet,
            });

            this.setItem(
              'settingTrussNumberGer5AngelleRow1Plant3',
              settingTruss,
            );
            this.setItem('prunSettingGer5AngelleRow1Plant3', pruningSet);
          }
        } else {
          var number7 =
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 7;

          pruningSet = Number.parseInt(
            this.state.pruningNumber7Ger5AngelleRow1Plant3,
          );
          trussNum = Number.parseInt(number7);
          settingFruit = Number.parseInt(
            this.state.setFruits7Ger5AngelleRow1Plant3,
          );
          settingTruss = (trussNum + settingFruit / pruningSet).toFixed(2);
          console.log('Setting Truss Number 7 : ' + settingTruss);
          this.setState({
            settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
            settingTruss: trussNum,
            prunSettingGer5AngelleRow1Plant3: pruningSet,
          });

          this.setItem('settingTrussNumberGer5AngelleRow1Plant3', settingTruss);
          this.setItem('prunSettingGer5AngelleRow1Plant3', pruningSet);
        }
      } else {
        var number8 =
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 8;

        pruningSet = Number.parseInt(
          this.state.pruningNumber8Ger5AngelleRow1Plant3,
        );
        trussNum = Number.parseInt(number8);
        settingFruit = Number.parseInt(
          this.state.setFruits8Ger5AngelleRow1Plant3,
        );
        settingTruss = (trussNum + settingFruit / pruningSet).toFixed(2);
        console.log('Setting Truss Number 8 : ' + settingTruss);
        this.setState({
          settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
          settingTruss: trussNum,
          prunSettingGer5AngelleRow1Plant3: pruningSet,
        });

        this.setItem('settingTrussNumberGer5AngelleRow1Plant3', settingTruss);
        this.setItem('prunSettingGer5AngelleRow1Plant3', pruningSet);
      }
    } else {
      var number9 =
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 9;

      pruningSet = Number.parseInt(
        this.state.pruningNumber9Ger5AngelleRow1Plant3,
      );
      trussNum = Number.parseInt(number9);
      settingFruit = Number.parseInt(
        this.state.setFruits9Ger5AngelleRow1Plant3,
      );
      settingTruss = (trussNum + settingFruit / pruningSet).toFixed(2);
      console.log('Setting Truss Number 9 : ' + settingTruss);
      this.setState({
        settingTrussNumberGer5AngelleRow1Plant3: settingTruss,
        settingTruss2: trussNum,
        prunSettingGer5AngelleRow1Plant3: pruningSet,
      });

      this.setItem('settingTrussNumberGer5AngelleRow1Plant3', settingTruss);
      this.setItem('prunSettingGer5AngelleRow1Plant3', pruningSet);
    }
  };

  calculateFloweringTruss2 = () => {
    var floweringTrussNum = 0;
    var flowerPruningNumner = 0;
    var flowering = 0;
    var flowerSetFruits = 0;
    var summ = 0;
    var floweringTruss = 0;
    var trussNum = 0;

    console.log(
      'Flowering truss called : ' + this.state.setFlowers2Ger5AngelleRow1Plant3,
    );

    if (this.state.setFlowers9Ger5AngelleRow1Plant3 === '') {
      if (this.state.setFlowers8Ger5AngelleRow1Plant3 === '') {
        if (this.state.setFlowers7Ger5AngelleRow1Plant3 === '') {
          if (this.state.setFlowers6Ger5AngelleRow1Plant3 === '') {
            if (this.state.setFlowers5Ger5AngelleRow1Plant3 === '') {
              if (this.state.setFlowers4Ger5AngelleRow1Plant3 === '') {
                if (this.state.setFlowers3Ger5AngelleRow1Plant3 === '') {
                  if (this.state.setFlowers2Ger5AngelleRow1Plant3 === '') {
                    if (this.state.setFlowers1Ger5AngelleRow1Plant3 === '') {
                      if (this.state.setFlowersGer5AngelleRow1Plant3 === '') {
                      } else {
                        var number01 = this.state
                          .trussNumberGer5AngelleRow1Plant3;

                        flowerPruningNumner = Number.parseInt(
                          this.state.pruningNumberGer5AngelleRow1Plant3,
                        );
                        flowering = Number.parseInt(
                          this.state.setFlowersGer5AngelleRow1Plant3,
                        );
                        flowerSetFruits = Number.parseInt(
                          this.state.setFruitsGer5AngelleRow1Plant3,
                        );
                        summ =
                          (flowering ? flowering : 0) +
                          (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = (
                          Number.parseInt(number01) +
                          summ / flowerPruningNumner
                        ).toFixed(2);
                        console.log(
                          'Flowering Truss Value : ' + floweringTruss,
                        );
                        this.setState({
                          floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
                          pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
                        });
                        this.setItem(
                          'floweringTrussssGer5AngelleRow1Plant3',
                          floweringTruss,
                        );
                        this.setItem(
                          'pruneFloweringGer5AngelleRow1Plant3',
                          flowerPruningNumner,
                        );
                      }
                    } else {
                      var number11 =
                        +this.state.trussNumberGer5AngelleRow1Plant3 + 1;

                      console.log(
                        'oooooooooooooooooooooooooooooo : ' + number11,
                      );
                      flowerPruningNumner = Number.parseInt(
                        this.state.pruningNumber1Ger5AngelleRow1Plant3,
                      );
                      flowering = Number.parseInt(
                        this.state.setFlowers1Ger5AngelleRow1Plant3,
                      );
                      flowerSetFruits = Number.parseInt(
                        this.state.setFruits1Ger5AngelleRow1Plant3,
                      );
                      trussNum = number11;
                      summ =
                        (flowering ? flowering : 0) +
                        (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = (
                        Number.parseInt(number11) +
                        summ / flowerPruningNumner
                      ).toFixed(2);
                      console.log('Flowering Truss Value : ' + floweringTruss);
                      this.setState({
                        floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
                        pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
                      });
                      this.setItem(
                        'floweringTrussssGer5AngelleRow1Plant3',
                        floweringTruss,
                      );
                      this.setItem(
                        'pruneFloweringGer5AngelleRow1Plant3',
                        flowerPruningNumner,
                      );
                    }
                  } else {
                    var number21 =
                      +this.state.trussNumberGer5AngelleRow1Plant3 + 2;

                    flowerPruningNumner = Number.parseInt(
                      this.state.pruningNumber2Ger5AngelleRow1Plant3,
                    );
                    flowering = Number.parseInt(
                      this.state.setFlowers2Ger5AngelleRow1Plant3,
                    );
                    flowerSetFruits = Number.parseInt(
                      this.state.setFruits2Ger5AngelleRow1Plant3,
                    );
                    summ =
                      (flowering ? flowering : 0) +
                      (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = (
                      Number.parseInt(number21) +
                      summ / flowerPruningNumner
                    ).toFixed(2);
                    console.log('Flowering Truss Value : ' + floweringTruss);
                    this.setState({
                      floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
                      pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
                    });
                    this.setItem(
                      'floweringTrussssGer5AngelleRow1Plant3',
                      floweringTruss,
                    );
                    this.setItem(
                      'pruneFloweringGer5AngelleRow1Plant3',
                      flowerPruningNumner,
                    );
                  }
                } else {
                  var number31 =
                    +this.state.trussNumberGer5AngelleRow1Plant3 + 3;

                  flowerPruningNumner = Number.parseInt(
                    this.state.pruningNumber3Ger5AngelleRow1Plant3,
                  );
                  flowering = Number.parseInt(
                    this.state.setFlowers3Ger5AngelleRow1Plant3,
                  );
                  flowerSetFruits = Number.parseInt(
                    this.state.setFruits3Ger5AngelleRow1Plant3,
                  );
                  summ =
                    (flowering ? flowering : 0) +
                    (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = (
                    Number.parseInt(number31) +
                    summ / flowerPruningNumner
                  ).toFixed(2);
                  console.log('Flowering Truss Value : ' + floweringTruss);
                  this.setState({
                    floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
                    pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
                  });

                  this.setItem(
                    'floweringTrussssGer5AngelleRow1Plant3',
                    floweringTruss,
                  );
                  this.setItem(
                    'pruneFloweringGer5AngelleRow1Plant3',
                    flowerPruningNumner,
                  );
                }
              } else {
                var number41 = +this.state.trussNumberGer5AngelleRow1Plant3 + 4;

                flowerPruningNumner = Number.parseInt(
                  this.state.pruningNumber4Ger5AngelleRow1Plant3,
                );
                flowering = Number.parseInt(
                  this.state.setFlowers4Ger5AngelleRow1Plant3,
                );
                flowerSetFruits = Number.parseInt(
                  this.state.setFruits4Ger5AngelleRow1Plant3,
                );
                summ =
                  (flowering ? flowering : 0) +
                  (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = (
                  Number.parseInt(number41) +
                  summ / flowerPruningNumner
                ).toFixed(2);
                console.log('Flowering Truss Value : ' + floweringTruss);
                this.setState({
                  floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
                  pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
                });

                this.setItem(
                  'floweringTrussssGer5AngelleRow1Plant3',
                  floweringTruss,
                );
                this.setItem(
                  'pruneFloweringGer5AngelleRow1Plant3',
                  flowerPruningNumner,
                );
              }
            } else {
              var number51 = +this.state.trussNumberGer5AngelleRow1Plant3 + 5;

              flowerPruningNumner = Number.parseInt(
                this.state.pruningNumber5Ger5AngelleRow1Plant3,
              );
              flowering = Number.parseInt(
                this.state.setFlowers5Ger5AngelleRow1Plant3,
              );
              flowerSetFruits = Number.parseInt(
                this.state.setFruits5Ger5AngelleRow1Plant3,
              );
              summ =
                (flowering ? flowering : 0) +
                (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = (
                Number.parseInt(number51) +
                summ / flowerPruningNumner
              ).toFixed(2);
              console.log('Flowering Truss Value : ' + floweringTruss);
              this.setState({
                floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
                pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
              });

              this.setItem(
                'floweringTrussssGer5AngelleRow1Plant3',
                floweringTruss,
              );
              this.setItem(
                'pruneFloweringGer5AngelleRow1Plant3',
                flowerPruningNumner,
              );
            }
          } else {
            var number61 = +this.state.trussNumberGer5AngelleRow1Plant3 + 6;

            flowerPruningNumner = Number.parseInt(
              this.state.pruningNumber6Ger5AngelleRow1Plant3,
            );
            flowering = Number.parseInt(
              this.state.setFlowers6Ger5AngelleRow1Plant3,
            );
            flowerSetFruits = Number.parseInt(
              this.state.setFruits6Ger5AngelleRow1Plant3,
            );
            summ =
              (flowering ? flowering : 0) +
              (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = (
              Number.parseInt(number61) +
              summ / flowerPruningNumner
            ).toFixed(2);
            console.log('Flowering Truss Value : ' + floweringTruss);
            this.setState({
              floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
              pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
            });

            this.setItem(
              'floweringTrussssGer5AngelleRow1Plant3',
              floweringTruss,
            );
            this.setItem(
              'pruneFloweringGer5AngelleRow1Plant3',
              flowerPruningNumner,
            );
          }
        } else {
          var number71 = +this.state.trussNumberGer5AngelleRow1Plant3 + 7;

          flowerPruningNumner = Number.parseInt(
            this.state.pruningNumber7Ger5AngelleRow1Plant3,
          );
          flowering = Number.parseInt(
            this.state.setFlowers7Ger5AngelleRow1Plant3,
          );
          flowerSetFruits = Number.parseInt(
            this.state.setFruits7Ger5AngelleRow1Plant3,
          );
          summ =
            (flowering ? flowering : 0) +
            (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = (
            Number.parseInt(number71) +
            summ / flowerPruningNumner
          ).toFixed(2);
          console.log('Flowering Truss Value : ' + floweringTruss);
          this.setState({
            floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
            pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
          });

          this.setItem('floweringTrussssGer5AngelleRow1Plant3', floweringTruss);
          this.setItem(
            'pruneFloweringGer5AngelleRow1Plant3',
            flowerPruningNumner,
          );
        }
      } else {
        var number81 = +this.state.trussNumberGer5AngelleRow1Plant3 + 8;

        flowerPruningNumner = Number.parseInt(
          this.state.pruningNumber8Ger5AngelleRow1Plant3,
        );
        flowering = Number.parseInt(
          this.state.setFlowers8Ger5AngelleRow1Plant3,
        );
        flowerSetFruits = Number.parseInt(
          this.state.setFruits8Ger5AngelleRow1Plant3,
        );
        summ =
          (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = (
          Number.parseInt(number81) +
          summ / flowerPruningNumner
        ).toFixed(2);
        console.log('Flowering Truss Value : ' + floweringTruss);
        this.setState({
          floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
          pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
        });

        this.setItem('floweringTrussssGer5AngelleRow1Plant3', floweringTruss);
        this.setItem(
          'pruneFloweringGer5AngelleRow1Plant3',
          flowerPruningNumner,
        );
      }
    } else {
      var number91 = +this.state.trussNumberGer5AngelleRow1Plant3 + 9;

      flowerPruningNumner = Number.parseInt(
        this.state.pruningNumber9Ger5AngelleRow1Plant3,
      );
      flowering = Number.parseInt(this.state.setFlowers9Ger5AngelleRow1Plant3);
      flowerSetFruits = Number.parseInt(
        this.state.setFruits9Ger5AngelleRow1Plant3,
      );
      summ =
        (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = (
        Number.parseInt(number91) +
        summ / flowerPruningNumner
      ).toFixed(2);
      console.log('Flowering Truss Value : ' + floweringTruss);
      this.setState({
        floweringTrussssGer5AngelleRow1Plant3: floweringTruss,
        pruneFloweringGer5AngelleRow1Plant3: flowerPruningNumner,
      });

      this.setItem('floweringTrussssGer5AngelleRow1Plant3', floweringTruss);
      this.setItem('pruneFloweringGer5AngelleRow1Plant3', flowerPruningNumner);
    }
  };
  //

  //Get data for truss

  getTrussData = () => {
    if (this.state.allTrussData.length != 0) {
      //1st Truss
      if (this.state.trussNumberGer5AngelleRow1Plant3 != null) {
        //Change week number
        const weekRowTruss1 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3);

        const filteredweekRowTruss1 = this.state.allTrussData.filter(
          weekRowTruss1,
        );

        console.log('Truss 1 : ' + JSON.stringify(filteredweekRowTruss1));

        if (filteredweekRowTruss1.length != 0) {
          if (JSON.stringify(filteredweekRowTruss1[0].setFlowers) === 'null') {
            this.setState({
              setFlowersGer5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowersGer5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss1[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss1[0].setFruits) === 'null') {
            this.setState({
              setFruitsGer5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruitsGer5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss1[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss1[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumberGer5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumberGer5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss1[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss1[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameterGer5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameterGer5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss1[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruitsGer5AngelleRow1Plant3: '',
            setFlowersGer5AngelleRow1Plant3: '',
            pruningNumberGer5AngelleRow1Plant3: '',
            fruitDiameterGer5AngelleRow1Plant3: '',
          });
        }
      } else {
      }
      //End

      //2nd Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 1 !=
        null
      ) {
        //Change week number
        const weekRowTruss2 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 1;

        const filteredweekRowTruss2 = this.state.allTrussData.filter(
          weekRowTruss2,
        );

        console.log('Truss 2 : ' + JSON.stringify(filteredweekRowTruss2));

        if (filteredweekRowTruss2.length != 0) {
          if (JSON.stringify(filteredweekRowTruss2[0].setFlowers) === 'null') {
            this.setState({
              setFlowers1Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers1Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss2[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss2[0].setFruits) === 'null') {
            this.setState({
              setFruits1Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits1Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss2[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss2[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber1Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber1Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss2[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss2[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter1Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter1Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss2[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits1Ger5AngelleRow1Plant3: '',
            setFlowers1Ger5AngelleRow1Plant3: '',
            pruningNumber1Ger5AngelleRow1Plant3: '',
            fruitDiameter1Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //3rd Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 2 !=
        null
      ) {
        //Change week number
        const weekRowTruss3 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 2;

        const filteredweekRowTruss3 = this.state.allTrussData.filter(
          weekRowTruss3,
        );

        console.log('Truss 3 : ' + JSON.stringify(filteredweekRowTruss3));

        if (filteredweekRowTruss3.length != 0) {
          if (JSON.stringify(filteredweekRowTruss3[0].setFlowers) === 'null') {
            this.setState({
              setFlowers2Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers2Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss3[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss3[0].setFruits) === 'null') {
            this.setState({
              setFruits2Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits2Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss3[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss3[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber2Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber2Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss3[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss3[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter2Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter2Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss3[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits2Ger5AngelleRow1Plant3: '',
            setFlowers2Ger5AngelleRow1Plant3: '',
            pruningNumber2Ger5AngelleRow1Plant3: '',
            fruitDiameter2Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //4th Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 3 !=
        null
      ) {
        //Change week number
        const weekRowTruss4 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 3;

        const filteredweekRowTruss4 = this.state.allTrussData.filter(
          weekRowTruss4,
        );

        console.log('Truss 4 : ' + JSON.stringify(filteredweekRowTruss4));

        if (filteredweekRowTruss4.length != 0) {
          if (JSON.stringify(filteredweekRowTruss4[0].setFlowers) === 'null') {
            this.setState({
              setFlowers3Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers3Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss4[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss4[0].setFruits) === 'null') {
            this.setState({
              setFruits3Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits3Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss4[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss4[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber3Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber3Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss4[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss4[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter3Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter3Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss4[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits3Ger5AngelleRow1Plant3: '',
            setFlowers3Ger5AngelleRow1Plant3: '',
            pruningNumber3Ger5AngelleRow1Plant3: '',
            fruitDiameter3Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //5th Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 4 !=
        null
      ) {
        //Change week number
        const weekRowTruss5 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 4;

        const filteredweekRowTruss5 = this.state.allTrussData.filter(
          weekRowTruss5,
        );

        console.log('Truss 5 : ' + JSON.stringify(filteredweekRowTruss5));

        if (filteredweekRowTruss5.length != 0) {
          if (JSON.stringify(filteredweekRowTruss5[0].setFlowers) === 'null') {
            this.setState({
              setFlowers4Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers4Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss5[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss5[0].setFruits) === 'null') {
            this.setState({
              setFruits4Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits4Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss5[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss5[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber4Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber4Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss5[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss5[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter4Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter4Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss5[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits4Ger5AngelleRow1Plant3: '',
            setFlowers4Ger5AngelleRow1Plant3: '',
            pruningNumber4Ger5AngelleRow1Plant3: '',
            fruitDiameter4Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //6th Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 5 !=
        null
      ) {
        //Change week number
        const weekRowTruss6 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 5;

        const filteredweekRowTruss6 = this.state.allTrussData.filter(
          weekRowTruss6,
        );

        console.log('Truss 6 : ' + JSON.stringify(filteredweekRowTruss6));

        if (filteredweekRowTruss6.length != 0) {
          if (JSON.stringify(filteredweekRowTruss6[0].setFlowers) === 'null') {
            this.setState({
              setFlowers5Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers5Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss6[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss6[0].setFruits) === 'null') {
            this.setState({
              setFruits5Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits5Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss6[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss6[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber5Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber5Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss6[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss6[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter5Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter5Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss6[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits5Ger5AngelleRow1Plant3: '',
            setFlowers5Ger5AngelleRow1Plant3: '',
            pruningNumber5Ger5AngelleRow1Plant3: '',
            fruitDiameter5Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //7th Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 6 !=
        null
      ) {
        //Change week number
        const weekRowTruss7 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 6;

        const filteredweekRowTruss7 = this.state.allTrussData.filter(
          weekRowTruss7,
        );

        console.log('Truss 7 : ' + JSON.stringify(filteredweekRowTruss7));

        if (filteredweekRowTruss7.length != 0) {
          if (JSON.stringify(filteredweekRowTruss7[0].setFlowers) === 'null') {
            this.setState({
              setFlowers6Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers6Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss7[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss7[0].setFruits) === 'null') {
            this.setState({
              setFruits6Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits6Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss7[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss7[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber6Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber6Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss7[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss7[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter6Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter6Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss7[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits6Ger5AngelleRow1Plant3: '',
            setFlowers6Ger5AngelleRow1Plant3: '',
            pruningNumber6Ger5AngelleRow1Plant3: '',
            fruitDiameter6Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //8th Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 7 !=
        null
      ) {
        //Change week number
        const weekRowTruss8 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 7;

        const filteredweekRowTruss8 = this.state.allTrussData.filter(
          weekRowTruss8,
        );

        console.log('Truss 8 : ' + JSON.stringify(filteredweekRowTruss8));

        if (filteredweekRowTruss8.length != 0) {
          if (JSON.stringify(filteredweekRowTruss8[0].setFlowers) === 'null') {
            this.setState({
              setFlowers7Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers7Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss8[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss8[0].setFruits) === 'null') {
            this.setState({
              setFruits7Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits7Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss8[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss8[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber7Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber7Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss8[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss8[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter7Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter7Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss8[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits7Ger5AngelleRow1Plant3: '',
            setFlowers7Ger5AngelleRow1Plant3: '',
            pruningNumber7Ger5AngelleRow1Plant3: '',
            fruitDiameter7Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //9th Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 8 !=
        null
      ) {
        //Change week number
        const weekRowTruss9 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 8;

        const filteredweekRowTruss9 = this.state.allTrussData.filter(
          weekRowTruss9,
        );

        console.log('Truss 9 : ' + JSON.stringify(filteredweekRowTruss9));

        if (filteredweekRowTruss9.length != 0) {
          if (JSON.stringify(filteredweekRowTruss9[0].setFlowers) === 'null') {
            this.setState({
              setFlowers8Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers8Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss9[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss9[0].setFruits) === 'null') {
            this.setState({
              setFruits8Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits8Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss9[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss9[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber8Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber8Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss9[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss9[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter8Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter8Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss9[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits8Ger5AngelleRow1Plant3: '',
            setFlowers8Ger5AngelleRow1Plant3: '',
            pruningNumber8Ger5AngelleRow1Plant3: '',
            fruitDiameter8Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End

      //10th Truss
      if (
        Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 9 !=
        null
      ) {
        //Change week number
        const weekRowTruss10 = d =>
          d.trussNumber ===
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 9;

        const filteredweekRowTruss10 = this.state.allTrussData.filter(
          weekRowTruss10,
        );

        console.log('Truss 9 : ' + JSON.stringify(filteredweekRowTruss10));

        if (filteredweekRowTruss10.length != 0) {
          if (JSON.stringify(filteredweekRowTruss10[0].setFlowers) === 'null') {
            this.setState({
              setFlowers9Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFlowers9Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss10[0].setFlowers,
              ),
            });
          }

          //-------------------------------------------------------

          if (JSON.stringify(filteredweekRowTruss10[0].setFruits) === 'null') {
            this.setState({
              setFruits9Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              setFruits9Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss10[0].setFruits,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss10[0].pruningNumber) === 'null'
          ) {
            this.setState({
              pruningNumber9Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              pruningNumber9Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss10[0].pruningNumber,
              ),
            });
          }

          //-------------------------------------------------------

          if (
            JSON.stringify(filteredweekRowTruss2[0].fruitDiameter) === 'null'
          ) {
            this.setState({
              fruitDiameter9Ger5AngelleRow1Plant3: '',
            });
          } else {
            this.setState({
              fruitDiameter9Ger5AngelleRow1Plant3: JSON.stringify(
                filteredweekRowTruss2[0].fruitDiameter,
              ),
            });
          }

          this.calculateSettingTruss2();
          this.calculateFloweringTruss2();
          this.calculateFruitLoad();
          this.calculateHarvestTruss();
        } else {
          this.setState({
            setFruits9Ger5AngelleRow1Plant3: '',
            setFlowers9Ger5AngelleRow1Plant3: '',
            pruningNumber9Ger5AngelleRow1Plant3: '',
            fruitDiameter9Ger5AngelleRow1Plant3: '',
          });
        }
      } else {
      }

      //End
    } else {
      console.log('No data in the database');
    }
  };
  //

  //DEFINE FOCUS

  changeCheckbox = () => {
    this.setState({
      Ger5AngelleRow1Plant3Selected: !this.state.Ger5AngelleRow1Plant3Selected,
    });

    const vart = this.state.Ger5AngelleRow1Plant3Selected;

    const vart2 = false;

    if (vart == null) {
      this.setItem('Ger5AngelleRow1Plant3Selected', vart2);

      EventRegister.emit('ger5AngelleRow1EventPlant3', vart2);
    } else {
      this.setItem('Ger5AngelleRow1Plant3Selected', vart);

      EventRegister.emit('ger5AngelleRow1EventPlant3', vart);
    }
  };

  checkStatus = () => {
    const vart = this.state.Ger5AngelleRow1Plant3Selected;

    if (vart == null || vart == false) {
      const {leavesPerPlantGer5AngelleRow1Plant3} = this.state;
      const {fullySetTrussGer5AngelleRow1Plant3} = this.state;
      const {setTrussLengthGer5AngelleRow1Plant3} = this.state;
      const {weeklyGrowthGer5AngelleRow1Plant3} = this.state;
      const {floweringTrussHeightGer5AngelleRow1Plant3} = this.state;
      const {leafLengthGer5AngelleRow1Plant3} = this.state;
      const {leafWidthGer5AngelleRow1Plant3} = this.state;
      const {stmDiameterGer5AngelleRow1Plant3} = this.state;
      const {lastWeekStmDiameterGer5AngelleRow1Plant3} = this.state;

      let data = {
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        leavesPerPlant: this.state.leavesPerPlantGer5AngelleRow1Plant3,
        fullySetTruss: this.state.fullySetTrussGer5AngelleRow1Plant3,
        setTrussLength: this.state.setTrussLengthGer5AngelleRow1Plant3,
        weeklyGrowth: this.state.weeklyGrowthGer5AngelleRow1Plant3,
        floweringTrussHeight: this.state
          .floweringTrussHeightGer5AngelleRow1Plant3,
        leafLength: this.state.leafLengthGer5AngelleRow1Plant3,
        leafWidth: this.state.leafWidthGer5AngelleRow1Plant3,
        stmDiameter: this.state.stmDiameterGer5AngelleRow1Plant3,
        lastWeekStmDiameter: this.state
          .lastWeekStmDiameterGer5AngelleRow1Plant3,
      };

      if (+!isNaN(+leavesPerPlantGer5AngelleRow1Plant3)) {
        if (+!isNaN(+fullySetTrussGer5AngelleRow1Plant3)) {
          if (+!isNaN(+setTrussLengthGer5AngelleRow1Plant3)) {
            if (+!isNaN(+weeklyGrowthGer5AngelleRow1Plant3)) {
              if (+!isNaN(+floweringTrussHeightGer5AngelleRow1Plant3)) {
                if (+!isNaN(+leafLengthGer5AngelleRow1Plant3)) {
                  if (+!isNaN(+leafWidthGer5AngelleRow1Plant3)) {
                    if (+!isNaN(+stmDiameterGer5AngelleRow1Plant3)) {
                      if (+!isNaN(+lastWeekStmDiameterGer5AngelleRow1Plant3)) {
                        this.setState({checkboxStatus: 'CHECKED'});

                        this.changeCheckbox();

                        db.addPlants(data)
                          .then(result => {
                            console.log(result);
                          })
                          .catch(err => {
                            console.log(err);
                          });

                        this.saveTrussToDb();
                      } else {
                        Alert.alert(
                          'Last week stem diameter value looks incorrect',
                        );
                      }
                    } else {
                      Alert.alert('Stem diameter value looks incorrect');
                    }
                  } else {
                    Alert.alert('Leaf width values look incorrect');
                  }
                } else {
                  Alert.alert('Leaf length values look incorrect');
                }
              } else {
                Alert.alert('Flower truss height value looks incorrect');
              }
            } else {
              Alert.alert('Weekly growth value looks incorrect');
            }
          } else {
            Alert.alert('Set truss length value looks incorrect');
          }
        } else {
          Alert.alert('Fully set truss value looks incorrect');
        }
      } else {
        Alert.alert('Leaves per plant value looks incorrect');
      }
    } else {
      this.setState({checkboxStatus: 'UNCHECKED'});
    }
  };

  saveTrussToDb = () => {
    if (
      this.state.trussNumberGer5AngelleRow1Plant3 !== null &&
      this.state.pruningNumberGer5AngelleRow1Plant3 !== null
    ) {
      let data = {
        trussNumber: this.state.trussNumberGer5AngelleRow1Plant3,
        fruitDiameter: this.state.fruitDiameterGer5AngelleRow1Plant3,
        setFruits: this.state.setFruitsGer5AngelleRow1Plant3,
        setFlowers: this.state.setFlowersGer5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumberGer5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data)
        .then(result => {
          console.log(result);

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 1 !==
              null &&
            this.state.pruningNumber1Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB1();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB1 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 1 !=
        null &&
      this.state.pruningNumber1Ger5AngelleRow1Plant3 !== null
    ) {
      let data1 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 1,
        fruitDiameter: this.state.fruitDiameter1Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits1Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers1Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber1Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data1)
        .then(result => {
          console.log(result);

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 2 !==
              null &&
            this.state.pruningNumber2Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB2();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB2 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 2 !=
        null &&
      this.state.pruningNumber2Ger5AngelleRow1Plant3 !== null
    ) {
      let data2 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 2,
        fruitDiameter: this.state.fruitDiameter2Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits2Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers2Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber2Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data2)
        .then(result => {
          console.log(result);

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 3 !==
              null &&
            this.state.pruningNumber3Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB3();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB3 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 3 !==
        null &&
      this.state.pruningNumber3Ger5AngelleRow1Plant3 !== null
    ) {
      let data3 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 3,
        fruitDiameter: this.state.fruitDiameter3Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits3Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers3Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber3Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data3)
        .then(result => {
          console.log(result);

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 4 !==
              null &&
            this.state.pruningNumber4Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB4();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB4 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 4 !=
        null &&
      this.state.pruningNumber4Ger5AngelleRow1Plant3 !== null
    ) {
      let data4 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 4,
        fruitDiameter: this.state.fruitDiameter4Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits4Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers4Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber4Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data4)
        .then(result => {
          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 5 !==
              null &&
            this.state.pruningNumber5Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB5();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB5 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 5 !=
        null &&
      this.state.pruningNumber5Ger5AngelleRow1Plant3 !== null
    ) {
      let data5 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 5,
        fruitDiameter: this.state.fruitDiameter5Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits5Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers5Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber5Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data5)
        .then(result => {
          console.log(result);
          this.setState({
            isLoading: false,
            isDataSend: true,
          });

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 6 !==
              null &&
            this.state.pruningNumber6Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB6();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB6 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 6 !=
        null &&
      this.state.pruningNumber6Ger5AngelleRow1Plant3 !== null
    ) {
      let data6 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 6,
        fruitDiameter: this.state.fruitDiameter6Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits6Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers6Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber6Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data6)
        .then(result => {
          console.log(result);

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 7 !==
              null &&
            this.state.pruningNumber7Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB7();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB7 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 7 !=
        null &&
      this.state.pruningNumber7Ger5AngelleRow1Plant3 !== null
    ) {
      let data7 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 7,
        fruitDiameter: this.state.fruitDiameter7Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits7Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers7Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber7Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data7)
        .then(result => {
          console.log(result);

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 8 !==
              null &&
            this.state.pruningNumber8Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB8();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB8 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 8 !=
        null &&
      this.state.pruningNumber8Ger5AngelleRow1Plant3 !== null
    ) {
      let data8 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 8,
        fruitDiameter: this.state.fruitDiameter8Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits8Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers8Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber8Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data8)
        .then(result => {
          console.log(result);

          if (
            Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 9 !==
              null &&
            this.state.pruningNumber9Ger5AngelleRow1Plant3 !== ''
          ) {
            this.saveTrussToDB9();
          } else {
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  saveTrussToDB9 = () => {
    if (
      Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 9 !=
        null &&
      this.state.pruningNumber9Ger5AngelleRow1Plant3 !== null
    ) {
      let data9 = {
        trussNumber:
          Number.parseInt(this.state.trussNumberGer5AngelleRow1Plant3) + 9,
        fruitDiameter: this.state.fruitDiameter9Ger5AngelleRow1Plant3,
        setFruits: this.state.setFruits9Ger5AngelleRow1Plant3,
        setFlowers: this.state.setFlowers9Ger5AngelleRow1Plant3,
        pruningNumber: this.state.pruningNumber9Ger5AngelleRow1Plant3,
        plantRow: '108',
        plantName: 'GER 5 - Angelle',
        plantWeek: this.state.weekNumber,
        plantNumber: 3,
        fruitLoad: this.state.fruitLoadGer5AngelleRow1Plant3,
        pruningFlower: this.state.pruneFloweringGer5AngelleRow1Plant3,
        floweringTruss: this.state.floweringTrussssGer5AngelleRow1Plant3,
        pruningSet: this.state.prunSettingGer5AngelleRow1Plant3,
        settingTruss: this.state.settingTrussNumberGer5AngelleRow1Plant3,
        pruningHarvest: this.state.pruningHarGer5AngelleRow1Plant3,
        harvestTruss: this.state.harvestTrussGer5AngelleRow1Plant3,
      };

      db.addTrussDetails(data9)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
    }
  };

  onAccessoryPress() {
    this.setState(({secureTextEntry}) => ({secureTextEntry: !secureTextEntry}));
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

  onSubmitleavesPerPlantGer5AngelleRow1Plant3() {
    this.leavesPerPlantGer5AngelleRow1Plant3.focus();
  }
  //

  //INITIALIZE ONFOCUS

  onFocus() {
    let {errors = {}} = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({errors});
  }
  //

  //OnSubmit

  onSubmit() {
    let errors = {};

    [
      'leavesPerPlantGer5AngelleRow1Plant3',
      'FullysetTruss',
      'TrussLength',
      'WeeklyGrowth',
      'FlowerTrussHeight',
      'LeafLength',
      'LeafWidth',
      'StmDiameter',
      'LastWeekStmDiameter',
    ].forEach(name => {
      let value = this[name].value();

      if (!value) {
        errors[name] = 'Should not be empty';
      } else {
        if (Platform.OS === 'android') {
          //Add method
          ToastAndroid.show('Completed!!', ToastAndroid.SHORT);
        } else {
          //Add Method
          AlertIOS.alert('Completed!!');
        }
      }
    });

    this.setState({errors});
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  //

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? <View style={{marginTop: 15}}></View> : null}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
          }}>
          <View style={styles.headerImage1}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.push('Ger5AngellePlantsRow1')
              }>
              <Image source={require('../assets/back.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.headerImage2}>
            <Text style={styles.text}>GER 5 - Angelle</Text>
          </View>

          <View style={{height: 20, width: 20}}>
            <Text style={{alignSelf: 'center'}}></Text>
          </View>
        </View>

        <Text style={styles.text2}>
          <Text style={styles.textPlants}>Plant 3</Text>/ Row No. 108/ Week No.{' '}
          {this.state.weekNumber}
        </Text>

        <View style={styles.marginMicroSmallDimensionTop}></View>

        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            scrollEventThrottle={16}>
            <View
              pointerEvents={
                this.state.Ger5AngelleRow1Plant3Selected ? 'none' : 'auto'
              }>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onFocus={this.onFocus}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'leavesPerPlantGer5AngelleRow1Plant3',
                          )
                        }
                        value={this.state.leavesPerPlantGer5AngelleRow1Plant3}
                        onSubmitEditing={() => {
                          this.fullySetTrussTextInput.focus();
                        }}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.leavesPerPlantPreviousData}
                    </Text>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'fullySetTrussGer5AngelleRow1Plant3',
                          )
                        }
                        value={this.state.fullySetTrussGer5AngelleRow1Plant3}
                        ref={input => {
                          this.fullySetTrussTextInput = input;
                        }}
                        onSubmitEditing={() => {
                          this.fullySetTrussLengthTextInput.focus();
                        }}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.fullySetTrussPreviousData}
                    </Text>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'setTrussLengthGer5AngelleRow1Plant3',
                          )
                        }
                        value={this.state.setTrussLengthGer5AngelleRow1Plant3}
                        ref={input => {
                          this.fullySetTrussLengthTextInput = input;
                        }}
                        onSubmitEditing={() => {
                          this.weeklyGrowthTextInput.focus();
                        }}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.fullySetTrussLengthPreviousData}
                    </Text>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'weeklyGrowthGer5AngelleRow1Plant3',
                          )
                        }
                        value={this.state.weeklyGrowthGer5AngelleRow1Plant3}
                        ref={input => {
                          this.weeklyGrowthTextInput = input;
                        }}
                        onSubmitEditing={() => {
                          this.FlowerTrussHeightTextInput.focus();
                        }}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.weeklyGrowthPreviousData}
                    </Text>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'floweringTrussHeightGer5AngelleRow1Plant3',
                          )
                        }
                        value={
                          this.state.floweringTrussHeightGer5AngelleRow1Plant3
                        }
                        ref={input => {
                          this.FlowerTrussHeightTextInput = input;
                        }}
                        onSubmitEditing={() => {
                          this.leafLengthTextInput.focus();
                        }}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.flowerTrussHeightPreviousData}
                    </Text>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'leafLengthGer5AngelleRow1Plant3',
                          )
                        }
                        value={this.state.leafLengthGer5AngelleRow1Plant3}
                        ref={input => {
                          this.leafLengthTextInput = input;
                        }}
                        onSubmitEditing={() => {
                          this.leafWidthTextInput.focus();
                        }}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.leafLengthPreviousData}
                    </Text>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'leafWidthGer5AngelleRow1Plant3',
                          )
                        }
                        value={this.state.leafWidthGer5AngelleRow1Plant3}
                        ref={input => {
                          this.leafWidthTextInput = input;
                        }}
                        onSubmitEditing={() => {
                          this.stmDiameterTextInput.focus();
                        }}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.leafWidthPreviousData}
                    </Text>
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
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'next'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'stmDiameterGer5AngelleRow1Plant3',
                          )
                        }
                        value={this.state.stmDiameterGer5AngelleRow1Plant3}
                        ref={input => {
                          this.stmDiameterTextInput = input;
                        }}
                        onSubmitEditing={() => {
                          this.lastWeekSmDiameterTextInput.focus();
                        }}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.stemDiPreviousData}
                    </Text>
                  </View>

                  <View style={styles.marginXSmallDimensionTop}></View>
                </View>

                <View style={styles.marginDimensionTop}></View>

                <View style={styles.backgroundColour}>
                  <View style={styles.row}>
                    <Text style={styles.textTitle}>
                      Last week stem diameter
                    </Text>
                    <Text style={styles.textTitle}></Text>
                    <Text style={styles.textTitle}>Last week</Text>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.borderEdit}>
                      <TextInput
                        style={styles.textInputStyle}
                        placeholderTextColor="transparent"
                        autoCapitalize="none"
                        multiline={false}
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        returnKeyType={'done'}
                        keyboardType={'numeric'}
                        blurOnSubmit={false}
                        onChangeText={text =>
                          this.updatePlantsTextInput(
                            text,
                            'lastWeekStmDiameterGer5AngelleRow1Plant3',
                          )
                        }
                        value={
                          this.state.lastWeekStmDiameterGer5AngelleRow1Plant3
                        }
                        ref={input => {
                          this.lastWeekSmDiameterTextInput = input;
                        }}
                        onSubmitEditing={Keyboard.dismiss}
                        onFocus={this.onFocus}
                      />
                    </View>
                    <Text style={styles.textLastWeek}>
                      {this.state.lastWeekStemDiaPreviousData}
                    </Text>
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

                {Platform.isPad ? (
                  <View style={styles.rowContainer222}>
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

                    <Text style={styles.text222}>Split Trs</Text>

                    <View
                      style={{
                        borderRightColor: 'black',
                        borderRightWidth: 1,
                      }}
                    />
                  </View>
                ) : (
                  <View style={styles.rowContainer21}>
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

                    <Text style={styles.text222}>Split Trs</Text>

                    <View
                      style={{
                        borderRightColor: 'black',
                        borderRightWidth: 1,
                      }}
                    />
                  </View>
                )}

                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                  }}
                />

                <View
                  style={{
                    margin: 8,
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumberGer5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumberGer5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruitsGer5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruitsGer5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowersGer5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowersGer5AngelleRow1Plant3}
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
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumberGer5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumberGer5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameterGer5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameterGer5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber1Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber1Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits1Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits1Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers1Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers1Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber1Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber1Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter1Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter1Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber2Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber2Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits2Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits2Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers2Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers2Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber2Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber2Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter2Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter2Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber3Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber3Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits3Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits3Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers3Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers3Ger5AngelleRow1Plant3}
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
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber3Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber3Ger5AngelleRow1Plant3}
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
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter3Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter3Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber4Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber4Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits4Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits4Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers4Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers4Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber4Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber4Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter4Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter4Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber5Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber5Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits5Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits5Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers5Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers5Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber5Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber5Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter5Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter5Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber6Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber6Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits6Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits6Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers6Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers6Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber6Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber6Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter6Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter6Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber7Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber7Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits7Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits7Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers7Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers7Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber7Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber7Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter7Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter7Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput22(
                        text,
                        'trussNumber8Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber8Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits8Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits8Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers8Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers8Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber8Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber8Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter8Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter8Ger5AngelleRow1Plant3}
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
                    editable={false}
                    selectTextOnFocus={false}
                    returnKeyType={'next'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'trussNumber9Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.trussNumber9Ger5AngelleRow1Plant3.toString()}
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
                    returnKeyType={'next'}
                    keyboardType={'numeric'}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFruits9Ger5AngelleRow1Plant3',
                      )
                    }
                    blurOnSubmit={false}
                    value={this.state.setFruits9Ger5AngelleRow1Plant3}
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
                    returnKeyType={'next'}
                    enablesReturnKeyAutomatically={true}
                    blurOnSubmit={false}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'setFlowers9Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.setFlowers9Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'pruningNumber9Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.pruningNumber9Ger5AngelleRow1Plant3}
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
                    returnKeyType={'done'}
                    onChangeText={text =>
                      this.updateTextInput(
                        text,
                        'fruitDiameter9Ger5AngelleRow1Plant3',
                      )
                    }
                    value={this.state.fruitDiameter9Ger5AngelleRow1Plant3}
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
                    marginBottom: 20,
                  }}
                />

                <View style={styles.marginDimensionTop}></View>

                <View style={styles.borderEditTruss}>
                  <View
                    style={[
                      this.state.fruitLoadGer5AngelleRow1Plant3 <= 22 ||
                      this.state.fruitLoadGer5AngelleRow1Plant3 >= 40
                        ? styles.borderErrorColor
                        : null,
                    ]}>
                    <View
                      style={{
                        marginTop: 1,
                      }}
                    />

                    <View style={styles.row}>
                      <Text style={styles.text4}>Fruit Load</Text>
                      <Text style={styles.text5}>
                        {this.state.fruitLoadGer5AngelleRow1Plant3}
                      </Text>
                    </View>

                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>

                  <View
                    style={[
                      this.state.floweringTrussssGer5AngelleRow1Plant3 <= 0 ||
                      this.state.floweringTrussssGer5AngelleRow1Plant3 >= 45
                        ? styles.borderErrorColor
                        : null,
                    ]}>
                    <View style={styles.row}>
                      <Text style={styles.text4}>Flowering Truss</Text>
                      <Text style={styles.text5}>
                        {this.state.floweringTrussssGer5AngelleRow1Plant3}
                      </Text>
                    </View>

                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>

                  <View
                    style={[
                      this.state.settingTrussNumberGer5AngelleRow1Plant3 <= 1 ||
                      this.state.settingTrussNumberGer5AngelleRow1Plant3 >= 45
                        ? styles.borderErrorColor
                        : null,
                    ]}>
                    <View style={styles.row}>
                      <Text style={styles.text4}>Setting Truss</Text>
                      <Text style={styles.text5}>
                        {this.state.settingTrussNumberGer5AngelleRow1Plant3}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>

                  <View
                    style={[
                      this.state.floweringTrussssGer5AngelleRow1Plant3 <= 0 ||
                      this.state.floweringTrussssGer5AngelleRow1Plant3 >= 45
                        ? styles.borderErrorColor
                        : null,
                    ]}>
                    <View style={styles.row}>
                      <Text style={styles.text4}>Harvest Truss</Text>
                      <Text style={styles.text5}>
                        {this.state.harvestTrussGer5AngelleRow1Plant3}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>
                </View>

                <View style={styles.marginDimensionTop}></View>

                <View style={styles.marginXXSmallDimensionTop}></View>

                <Text style={styles.lastWeekText22}>Last Week's Data : </Text>

                <View style={styles.marginXXSmallDimensionTop}></View>

                <View style={styles.borderEditTrussLastWeek}>
                  <View>
                    <View
                      style={{
                        marginTop: 1,
                      }}
                    />

                    <View style={styles.row}>
                      <Text style={styles.text4LastWk}>Fruit Load</Text>
                      <Text style={styles.text5LastWeek}>
                        {this.state.fruitLoadPreviousData}
                      </Text>
                    </View>

                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>

                  <View>
                    <View style={styles.row}>
                      <Text style={styles.text4LastWk}>Flowering Truss</Text>
                      <Text style={styles.text5LastWeek}>
                        {this.state.floweringTrussPreviousData}
                      </Text>
                    </View>

                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>

                  <View>
                    <View style={styles.row}>
                      <Text style={styles.text4LastWk}>Setting Truss</Text>
                      <Text style={styles.text5LastWeek}>
                        {this.state.settingTrussPreviousData}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>

                  <View>
                    <View style={styles.row}>
                      <Text style={styles.text4LastWk}>Harvest Truss</Text>
                      <Text style={styles.text5LastWeek}>
                        {this.state.harvestTrussPreviousData}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginBottom: 5,
                      }}
                    />
                  </View>
                </View>

                <View style={styles.marginXSmallDimensionTop}></View>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Ger5DataChecker', {
                      name: 'Ger5AngelleRow1Plant3',
                      row: '108',
                      plant: 3,
                      type: 'GER 5 - Angelle',
                    })
                  }>
                  <Text style={styles.textDataChecker}>Data Checker</Text>
                </TouchableOpacity>
                <View style={styles.marginXSmallDimensionTop}></View>

                <CheckBox
                  style={styles.styleCheckbox}
                  size={40}
                  uncheckedColor="red"
                  checkedColor="green"
                  title="GER 5 Angelle Plant 3 completed"
                  checked={this.state.Ger5AngelleRow1Plant3Selected}
                  textStyle={{fontSize: 16}}
                  containerStyle={{backgroundColor: 'transparent'}}
                  onPress={() => this.checkStatus()}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FF',
  },

  styleCheckBox: {
    borderRadius: 3,
  },

  borderEditTruss: {
    marginTop: 8,
    marginLeft: 6,
    marginRight: 6,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'rgba(192,192,192,0.55)',
  },

  borderEditTrussLastWeek: {
    marginTop: 8,
    marginLeft: 6,
    marginRight: 6,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#093145',
  },

  text4: {
    //color: '#110A6A',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,
  },

  text4LastWk: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,
  },

  textDataChecker: {
    //color: '#110A6A',
    color: '#2C903D',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    textAlign: 'right',
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

  text5LastWeek: {
    color: 'white',
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
    margin: 12,
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
    width: '100%',
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
    height: 45,
    paddingLeft: 8,
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

  marginXXSmallDimensionTop: {
    marginTop: 6,
  },

  textinputheight2: {
    height: 60,
    width: 40,
    borderBottomWidth: 3.5,
    borderBottomColor: '#ff0000',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000',
  },

  buttonContainer: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinputheight: {
    height: 60,
    width: 40,
    //borderBottomWidth: 1.2,
    //borderBottomColor: 'black',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000',
  },

  textinputheight2: {
    height: 60,
    width: 40,
    borderBottomWidth: 3.5,
    borderBottomColor: '#ff0000',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000',
  },

  yellowBackground: {
    backgroundColor: '#ffff00',
  },

  bottonColor: {
    borderBottomWidth: 1.2,
    borderBottomColor: 'black',
    marginBottom: 5,
    height: 60,
    width: 40,
    textAlign: 'center',
    color: '#000000',
  },

  text: {
    margin: 6,
    margin: 20,
    fontSize: 28,
    color: '#58B332',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },

  lastWeekText22: {
    fontSize: 24,
    color: '#58B332',
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,
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
    backgroundColor: '#F3F9FF',
  },
});
