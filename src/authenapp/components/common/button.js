import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

class Button extends Component {
    render(){
        return(
            <View style = {style.container}>
                <TouchableOpacity onPress = { this.props.onPress } style = {style.button}>
                    <Text style = {style.buttonText}>Log In</Text>
                </TouchableOpacity>    
            </View>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#0652dd',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export { Button }