import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Forest' image={require('../../../../assets/forest.jpg')} score='6'/>
            <ImageDetail title='Beach' image={require('../../../../assets/beach.jpg')} score='8'/>
            <ImageDetail title='Mountain' image={require('../../../../assets/mountain.jpg')} score='9'/>
        </View>
    );
}

export default ImageScreen
