import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  LogBox,
  Dimensions
} from 'react-native';
import _ from 'lodash';
import Carousel from 'react-native-looped-carousel';
import Har1AnnasunPlant1 from '../screens/Har1AnnasunPlant1'
import Har1AnnasunPlant2 from '../screens/Har1AnnasunPlant2'
import Har1AnnasunPlant3 from '../screens/Har1AnnasunPlant3'
import Har1AnnasunPlant4 from '../screens/Har1AnnasunPlant4'
import Har1AnnasunPlant5 from '../screens/Har1AnnasunPlant5'


const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let pageNo;

export default class Har1AnnasunFragment extends Component {

  constructor(props) {
    super(props);
    this.state = {

      size: { width, height },
      pageNumber: '',

    }
  }


  componentDidMount() {

    if (this.props.route.params.page !== undefined) {
      var page = this.props.route.params.page;
      var stringPageNo = JSON.stringify(page)
      pageNo = +(stringPageNo)
      this.setState({ pageNumber: pageNo })

    } else {

    }

    console.log("Page Numner :  " + pageNo);

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

      <View style={styles.screenScrolling} onLayout={this._onLayoutDidChange}>
        <Carousel

          style={this.state.size}
          autoplay={false}
          pageInfo={true}
          arrow={true}
          currentPage={pageNo}
        >

          <View style={[this.state.size]}>

            <Har1AnnasunPlant1
              navigation={this.props.navigation} />

          </View>

          <View style={[this.state.size]}>

            <Har1AnnasunPlant2
              navigation={this.props.navigation} />

          </View>

          <View style={[this.state.size]}>

            <Har1AnnasunPlant3
              navigation={this.props.navigation} />

          </View>

          <View style={[this.state.size]}>

            <Har1AnnasunPlant4
              navigation={this.props.navigation} />

          </View>

          <View style={[this.state.size]}>

            <Har1AnnasunPlant5
              navigation={this.props.navigation} />

          </View>

        </Carousel>

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



  screenScrolling: {

    flex: 1,
    width: screenWidth,
    backgroundColor: '#F3F9FF'


  },

});  