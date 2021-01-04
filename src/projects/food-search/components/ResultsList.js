import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const ResultsList = ({ results, title }) => {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>{title}</Text>
            <Text>{results.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ResultsList;
