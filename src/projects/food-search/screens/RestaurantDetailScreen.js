import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantDetailScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');
    console.log(result)

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                keyExtractor={(result) => result}
                data={result.photos}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item}} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
})

export default RestaurantDetailScreen;