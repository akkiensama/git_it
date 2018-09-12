import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection } from "./src/authenapp/components/common";


// FOR ALBUM APP
/* Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Albums!'/>
        <AlbumList />
      </View>
    );
  }
} */

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBsq4EjsUUPCzZhcuJb44hDfJqA2gb8F4Q",
      authDomain: "react-authen-33d8c.firebaseapp.com",
      databaseURL: "https://react-authen-33d8c.firebaseio.com",
      projectId: "react-authen-33d8c",
      storageBucket: "react-authen-33d8c.appspot.com",
      messagingSenderId: "905831289305"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Authentication'/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
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
