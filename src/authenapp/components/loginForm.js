import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render(){
        return(
            <View style = {style.container}>
                <Card>
                    <CardSection></CardSection>
                    <CardSection></CardSection>
                    <CardSection>
                        <Button />                       
                    </CardSection>
                </Card>
            </View>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        
    }
})

export default LoginForm 