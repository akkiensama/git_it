import React, {Component} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';

class Spinner extends Component {
    render(){
        return(
            <View style = {style.container}>
                <ActivityIndicator size = { this.props.size || 'large' }/>
            </View>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinner: {
        
    }
})

export { Spinner }