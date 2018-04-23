import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

// Creating Class based components for storing Data

const AlbumData = ({ album }) => {
    // Its destructuring our props object
    const { title, artist, thumbnail_image, image, url } = album;
    Alert.alert(title);
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export default AlbumData;


  
