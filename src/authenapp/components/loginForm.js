import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { CardSection, Card, Button, Input, Spinner } from './common';
const firebase = require('firebase');

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        spinner: false
    }
    componentWillMount(){
        
    }

    onButtonPress(){     
        const {email, password} = this.state;

        this.setState({error: '', spinner: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() =>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            spinner: false
        })
    }

    onLoginFail(){
        this.setState({
            
            error: 'Authentication Fail',
            spinner: false
        })
    }

    renderButton(){
        if(this.state.spinner){
            return <Spinner size = 'small' />
        }
        return ( 
            <Button onPress = {this.onButtonPress.bind(this)}>
                Log In
            </Button>
        )
    }

    render(){
        return(
            
            <Card style = {style.container}>
                <CardSection>
                    <Input 
                        label = 'Email:'
                        placeholder = 'user@gmail.com'
                        value = {this.state.email}
                        onChangeText = { email => this.setState({ email })}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        label = 'Password:'
                        placeholder = 'password'
                        value = {this.state.password}
                        onChangeText = { password => this.setState({ password })}
                        secureTextEntry
                        />
                </CardSection>

                <Text style={style.errorText}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    errorText: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
})

export default LoginForm