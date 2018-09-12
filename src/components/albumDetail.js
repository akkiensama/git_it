import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, Linking} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

class AlbumDetail extends Component {
    render(){
        const { title, artist, thumbnail_image, image, url } = this.props.data;
        return(
            <View>
                <Card>
                    <CardSection>
                        <View style = {style.thumbNailContainer}>
                            <Image source = {{ uri: thumbnail_image }} style = {style.thumbNail}/>
                        </View>
                        <View style = {style.headerContent}>
                            <Text style = {style.text}>{title}</Text>
                            <Text>{artist}</Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Image source = {{ uri: image }} style = {style.albumImage}/>
                    </CardSection>

                    <CardSection>
                        <Button onPress = {() => Linking.openURL(url) }/>
                    </CardSection>
                </Card>
            </View>   
        );
    }
}

const style = StyleSheet.create({
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 18
    },
    thumbNail: {
        width: 50,
        height: 50
    },
    thumbNailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumDetail