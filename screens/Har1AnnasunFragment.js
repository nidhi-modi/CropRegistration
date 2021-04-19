import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  Dimensions, ScrollView
} from 'react-native';
import _ from 'lodash';
import Carousel from 'react-native-looped-carousel';
import Har1AnnasunPlant1 from '../screens/Har1AnnasunPlant1'
import Har1AnnasunPlant2 from '../screens/Har1AnnasunPlant2'
import Har1AnnasunPlant3 from '../screens/Har1AnnasunPlant3'
import Har1AnnasunPlant4 from '../screens/Har1AnnasunPlant4'
import Har1AnnasunPlant5 from '../screens/Har1AnnasunPlant5'
import AsyncStorage from '@react-native-community/async-storage';


const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let pageNo;
var deviceWidth = Dimensions.get('window').width;


export default class Har1AnnasunFragment extends Component {

  constructor(props) {
    super(props);
    this.state = {

      size: { width, height },
      pageNumber: '',

    }
  }


  componentDidMount() {

    /*if (this.props.route.params.page !== undefined) {
      var page = this.props.route.params.page;
      var stringPageNo = JSON.stringify(page)
      pageNo = +(stringPageNo)
      this.setState({ pageNumber: pageNo })
  
    } else {
  
    }*/


    LogBox.ignoreLogs(['componentWillReceiveProps']);
    const _console = _.clone(console);
    console.warn = message => {
      if (message.indexOf('componentWillReceiveProps') <= -1) {
        _console.warn(message);
      }
    };

  }


  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }


  render() {
    return (

      <View style={styles.container}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.firstView}>

            <Har1AnnasunPlant1
              navigation={this.props.navigation} />

          </View>

          <View style={styles.secondView}>

            <Har1AnnasunPlant2
              navigation={this.props.navigation} />

          </View>

          <View style={styles.thirdView}>

            <Har1AnnasunPlant3
              navigation={this.props.navigation} />

          </View>

          <View style={styles.forthView}>

            <Har1AnnasunPlant4
              navigation={this.props.navigation} />

          </View>

          <View style={styles.fifthView}>

            <Har1AnnasunPlant5
              navigation={this.props.navigation} />

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
    justifyContent: "center",
    alignItems: "center"
  },

  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: 'white',
    fontWeight: "bold"
  },
  firstView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  secondView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  thirdView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  forthView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  fifthView: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

});  