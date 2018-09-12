import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

class Input extends Component {
    
    render(){
        return(
            <View style = {style.container}>
                <Text style = {style.label}>{this.props.label}</Text>
                <TextInput
                    style = {style.input}
                    placeholder = {this.props.placeholder}
                    value = {this.props.value}
                    onChangeText = {this.props.onChangeText}
                    secureTextEntry = {this.props.secureTextEntry}
                />
            </View>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'  
    },
    input: {
        flex: 3,
        paddingRight: 5,
        fontSize: 16,
        lineHeight: 23,
        paddingLeft: 5,
        color: '#000'
    },
    label: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 15,

    }
})

export { Input }