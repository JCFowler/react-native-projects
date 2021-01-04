import React, { useState } from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.view}>
            <View style={styles.text1}></View>
            <View style={styles.text2}></View>
            <View style={styles.text3}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    text1: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    }, 
    text2: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        alignSelf: 'flex-end'
    }, 
    text3: {
        backgroundColor: 'purple',
        height: 100,
        width: 100,
    }

});

export default BoxScreen;