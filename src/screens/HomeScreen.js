import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.title}>Combination of all small React Native projects.</Text>
            <Button style={styles.button} title='Basic Projects' onPress={() => { navigation.navigate('BasicHome')}} />
            <Button style={styles.button} title='Food Search' onPress={() => { navigation.navigate('FoodSearch')}} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 18,
    },
    button: {
        fontSize: 16,
    }
});

export default HomeScreen;
