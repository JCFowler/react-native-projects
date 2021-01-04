import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Hello Home</Text>
            <Button title='Food Search' onPress={() => { navigation.navigate('FoodSearch')}} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default HomeScreen;
