import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';


class AlbumList extends Component {
    state = {
        albums: []
    }
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({albums: res.data}));
        
    }

    renderAlbums() {
        return this.state.albums.map( (album, index) => {
            return <AlbumDetail key = {'albumitem-'+index} data = {album} />
        })
    }

    render(){
        return(
            <ScrollView style = {style.container}>
                {this.renderAlbums()}
            </ScrollView>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    },
    headerView: {
        backgroundColor: '#576574'
    },
    textStyle: {
        fontSize: 30,
        color: '#fff'
    }
})

export default AlbumList