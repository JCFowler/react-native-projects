import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Restaurant from './Restaurant';

const ResultsList = ({ results, title, navigation }) => {

    if (results.length === 0) {
        return null;
    }

    return (
        <View style={styles.background}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('RestaurantDetail', { id: item.id })}}>
                            <Restaurant item={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 5,
    }
});

export default withNavigation(ResultsList);
