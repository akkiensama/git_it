import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
const firebase = require("firebase");
import { Header, Button, Card, CardSection, Spinner } from "./src/authenapp/components/common";
import LoginForm from './src/authenapp/components/loginForm';

// FOR ALBUM APP
/*Props = {};
import AlbumList from './src/components/albumList';
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Albums!'/>
        <AlbumList />
      </View>
    );
  }
}
*/

export default class App extends Component {
  state = {
    isLogin: null
  }

  initializeFirebase() {
  
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyBsq4EjsUUPCzZhcuJb44hDfJqA2gb8F4Q",
      authDomain: "react-authen-33d8c.firebaseapp.com",
      databaseURL: "https://react-authen-33d8c.firebaseio.com",
      projectId: "react-authen-33d8c",
      storageBucket: "react-authen-33d8c.appspot.com",
      messagingSenderId: "905831289305"
    });
    
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ isLogin: true })
      } else {
        this.setState({ isLogin: false })
      }
    })

    //inicializando o firestore
    const firestore = require("firebase/firestore");
    db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
  }

  componentWillMount() {
    this.initializeFirebase();
  }

  renderContent() {
    switch(this.state.isLogin){
      case true:
        return(
          <Button onPress = {() => {firebase.auth().signOut()}}>
            Log Out 
          </Button>
          )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
      
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
