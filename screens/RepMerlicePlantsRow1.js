import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
  Dimensions,
  Platform
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';
import { EventRegister } from 'react-native-event-listeners'

var screenWidth = (Dimensions.get('window').width)/1.6;


var plant1Selected;
var plant2Selected;
var plant3Selected;
var plant4Selected;
var plant5Selected;
var plant6Selected;
var plant7Selected;
var plant8Selected;
var plant9Selected;
var plant10Selected;




export default class RepMerliceRow1PlantsRow1 extends Component {

  constructor(props) {
    super(props);
    this.state = {

      weekNumber: '',

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



    /*this.loadData();

    this.focusListener = this.props.navigation.addListener('didFocus', () => {

      this.loadData();

    });*/


  }

  componentWillUnmount() {

    //this.focusListener();

    EventRegister.removeEventListener(this.merliceRow1EventPlant1)
    EventRegister.removeEventListener(this.merliceRow1EventPlant2)
    EventRegister.removeEventListener(this.merliceRow1EventPlant3)
    EventRegister.removeEventListener(this.merliceRow1EventPlant4)
    EventRegister.removeEventListener(this.merliceRow1EventPlant5)
    EventRegister.removeEventListener(this.merliceRow1EventPlant6)
    EventRegister.removeEventListener(this.merliceRow1EventPlant7)
    EventRegister.removeEventListener(this.merliceRow1EventPlant8)
    EventRegister.removeEventListener(this.merliceRow1EventPlant9)
    EventRegister.removeEventListener(this.merliceRow1EventPlant10)




  }


  componentDidUpdate() {

     /*this.loadData();

    this.focusListener = this.props.navigation.addListener('didFocus', () => {

      this.loadData();

    });*/

  }





  UNSAFE_componentWillMount() {

    //PLANT 1
    this.merliceRow1EventPlant1 = EventRegister.addEventListener('merliceRow1EventPlant1', (data1) => {
      plant1Selected = data1;

      if (data1 == null || data1 == true || data1 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

    //PLANT 2
    this.merliceRow1EventPlant2 = EventRegister.addEventListener('merliceRow1EventPlant2', (data2) => {
      plant2Selected = data2;

      if (data2 == null || data2 == true || data2 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

    //PLANT 3
    this.merliceRow1EventPlant3 = EventRegister.addEventListener('merliceRow1EventPlant3', (data3) => {
      plant3Selected = data3;

      if (data3 == null || data3 == true || data3 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

    //PLANT 4
    this.merliceRow1EventPlant4 = EventRegister.addEventListener('merliceRow1EventPlant4', (data4) => {
      plant4Selected = data4;

      if (data4 == null || data4 == true || data4 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

    //PLANT 5
    this.merliceRow1EventPlant5 = EventRegister.addEventListener('merliceRow1EventPlant5', (data5) => {
      plant5Selected = data5;

      if (data5 == null || data5 == true || data5 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

    //PLANT 6
    this.merliceRow1EventPlant6 = EventRegister.addEventListener('merliceRow1EventPlant6', (data6) => {
      plant6Selected = data6;

      if (data6 == null || data6 == true || data6 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

    //PLANT 7
    this.merliceRow1EventPlant7 = EventRegister.addEventListener('merliceRow1EventPlant7', (data7) => {
      plant7Selected = data7;

      if (data7 == null || data7 == true || data7 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

     //PLANT 8
     this.merliceRow1EventPlant8 = EventRegister.addEventListener('merliceRow1EventPlant8', (data8) => {
      plant8Selected = data8;

      if (data8 == null || data8 == true || data8 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })


    //PLANT 9
    this.merliceRow1EventPlant9 = EventRegister.addEventListener('merliceRow1EventPlant9', (data9) => {
      plant9Selected = data9;

      if (data9 == null || data9 == true || data9 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })

    //PLANT 10
    this.merliceRow1EventPlant10 = EventRegister.addEventListener('merliceRow1EventPlant10', (data10) => {
      plant10Selected = data10;

      if (data10 == null || data10 == true || data10 != false) {

        console.log("Plant not done")

      } else {

        console.log("Plant completed")


      }

    })




  }



  renderElement1() {


    if (plant1Selected == null || plant1Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant1')}>
        <Text style={styles.buttonText}>Plant 1 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant1')}>
        <Text style={styles.buttonText}>Plant 1 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }




  renderElement2() {


    if (plant2Selected == null || plant2Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant2')}>
        <Text style={styles.buttonText}>Plant 2 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant2')}>
        <Text style={styles.buttonText}>Plant 2 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }

  renderElement3() {


    if (plant3Selected == null || plant3Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant3')}>
        <Text style={styles.buttonText}>Plant 3 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant3')}>
        <Text style={styles.buttonText}>Plant 3 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }

  renderElement4() {


    if (plant4Selected == null || plant4Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant4')}>
        <Text style={styles.buttonText}>Plant 4 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant4')}>
        <Text style={styles.buttonText}>Plant 4 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }


  renderElement5() {


    if (plant5Selected == null || plant5Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant5')}>
        <Text style={styles.buttonText}>Plant 5 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant5')}>
        <Text style={styles.buttonText}>Plant 5 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }

  renderElement6() {


    if (plant6Selected == null || plant6Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant6')}>
        <Text style={styles.buttonText}>Plant 6 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant6')}>
        <Text style={styles.buttonText}>Plant 6 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }

  renderElement7() {


    if (plant7Selected == null || plant7Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant7')}>
        <Text style={styles.buttonText}>Plant 7 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant7')}>
        <Text style={styles.buttonText}>Plant 7 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }

  renderElement8() {


    if (plant8Selected == null || plant8Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant8')}>
        <Text style={styles.buttonText}>Plant 8 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant8')}>
        <Text style={styles.buttonText}>Plant 8 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }

  renderElement9() {


    if (plant9Selected == null || plant9Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant9')}>
        <Text style={styles.buttonText}>Plant 9 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant9')}>
        <Text style={styles.buttonText}>Plant 9 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }

  }

  renderElement10() {


    if (plant10Selected == null || plant10Selected == true) {

      return <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant10')}>
        <Text style={styles.buttonText}>Plant 10 - Week {this.state.weekNumber}</Text>
      </TouchableOpacity>

    } else {


      return <TouchableOpacity
        style={styles.buttonContainerImage}
        onPress={() => this.props.navigation.navigate('RepMerliceRow1Plant10')}>
        <Text style={styles.buttonText}>Plant 10 - Week {this.state.weekNumber}</Text>
        <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
      </TouchableOpacity>

    }
  }

  render() {
    return (
      <View style={styles.container}>
{Platform.OS === 'ios'? 
        
        <View style={{ marginTop: 40 }}></View>

        : null }

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('RepMerliceRow')} >
              <Image source={require('../assets/back.png')} />
            </TouchableOpacity>

          </View>


          <View style={styles.headerImage2}>

            <Image source={require('../assets/fresh3.png')} />

          </View>

          <View style={{ height: 20, width: 20 }}>
            <Text style={{ alignSelf: 'center' }}></Text>
          </View>

        </View>

        <Text style={styles.text}>REP - Merlice / Row 123</Text>


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

  buttonContainerImage: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screenWidth,

    

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

  FloatingButtonStyle2: {

    resizeMode: 'contain',
    marginLeft: 15
  },

  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },
});