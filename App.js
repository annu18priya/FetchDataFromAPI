/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import AlbumData from './src/components/AlbumData';

export default class App extends Component {

  // Declaring a State to hold data from server.
  state = { albums: [] };

  componentWillMount(){
    axios
    .get(`https://rallycoding.herokuapp.com/api/music_albums`)
    .then(res => this.setState({ albums: res.data }))
    .catch(err => console.log(err))
  }

  // Parsing Data and Displaying Data
  renderAlbumData() {
  //  return console.log("Server Data" + this.state.albums.map(album => {album.title}));
    return this.state.albums.map(album => <Text>{album.title}</Text>);
    // return this.state.albums.map(album => 
    //     <AlbumData key={album.title} album={album} />
    // );
  }

  render() {
    return (
      <View>
         <Text>AlbumList!!!!</Text>
         {this.renderAlbumData()}
      </View>
    );
  }
}


