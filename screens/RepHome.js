import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";


export default class RepHome extends Component {

  constructor(props) {
    super(props);
    this.state = {

      isItConnected: '',

    }
  }

  handleBackButton = () => {

    BackHandler.exitApp();

  }

  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('NewScreen');
  }



  componentDidMount() {



    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    NetInfo.addEventListener(this.handleConnectivityChange);

  }

  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          Alert.alert("You are online!");
        } else {
          Alert.alert("You are offline!");
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };

  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
      Alert.alert("You are offline!");
    } else {
      Alert.alert("You are online!");
    }
  };

  handleConnectivityChange = state => {
    if (state.isConnected) {

      this.setState({ isItConnected: 'Online' });

    } else {

      this.setState({ isItConnected: 'Offline' });
    }
  };

  checkInternetConnection = () => {

    if (this.state.isItConnected == 'Online') {

      this.props.navigation.navigate('ViewPlantTrussDetails')


    } else {

      this.errorMessage();

    }
  }

  errorMessage = () => {

    Alert.alert(
      'No Internet Connection',
      'Make sure your device is connected to the internet',
      [

        { text: 'OK', onPress: () => console.log('No button clicked'), style: 'cancel' },

      ],
      {
        cancelable: true
      }
    );


  }


  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerImage}>

          <Image source={require('../assets/fresh2.png')} />

        </View>

        <View style={styles.marginDimensionTop}></View>

        <View style={styles.marginSmallDimensionTop}></View>



        <ScrollView keyboardShouldPersistTaps='handled'>

          <View style={styles.containerView}>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepMerliceRow')}>
              <Text style={styles.buttonText}>Merlice</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepAngelleRow')}>
              <Text style={styles.buttonText}>Angelle</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepDuelleRow')}>
              <Text style={styles.buttonText}>Duelle</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepKmRow')}>
              <Text style={styles.buttonText}>KM5512</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepBambelloRow')}>
              <Text style={styles.buttonText}>Bambello</Text>
            </TouchableOpacity>

            <View style={styles.marginDimensionTop}></View>

          </View>

          <TouchableOpacity onPress={() => this.checkInternetConnection()} >
            <View style={styles.headerImage2}>

              <Image source={require('../assets/submit.png')} />

            </View>

          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.textBottom}>Press submit button only when there is internet connection.</Text>
          </View>


          <View style={styles.marginSmallDimensionTop}></View>



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

  headerImage2: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 18,

  },
  textContainer: {

    flexShrink: 1

  },

  textBottom: {

    fontSize: 24,
    width: 450,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'



  },


  headerImage: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    width: '100%'
  },

  marginDimensionTop: {

    marginTop: 44,

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

  text: {
    margin: 6,
    margin: 20,
    fontSize: 26,
    color: '#2C3E50',
    fontWeight: 'bold',

  },

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

});