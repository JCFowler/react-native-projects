import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.icon} name='search' />
            <TextInput
                style={styles.input}
                placeholder='Search' 
                value={term}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background : {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 7,
        margin: 15,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;
