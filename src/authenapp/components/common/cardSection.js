import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class CardSection extends Component {
    render(){
        return(
            <View style = {style.container}>
                {this.props.children}
            </View>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        //bottomWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
})

export { CardSection }