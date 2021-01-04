import React from 'react'
import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'

const NameScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter password</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={val => setName(val)}
            />
            {name.length < 5 &&
                <Text>Must be 5 or more characters long.</Text>
            }
            {/* OR */}
            {name.length < 5 ? <Text>Must be 5 or more characters long.</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default NameScreen
