import React from 'react'
import { Text, View, Button } from 'react-native'

const ColorView = ({ title, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{title}</Text>
            <Button title={`More ${title}`} onPress={() => onIncrease()} />
            <Button title={`Less ${title}`} onPress={() => onDecrease()} />
        </View>
    )
}

const setColor = (num, type) => {
    let final = 0;
    if (type === '+') {
        final = num + 15;
        if (final > 255) {
            final = 255;
        }
    } else {
        final = num - 15;
        if (final < 0) {
            final = 0;
        } 
    }

    return final;
}

export default ColorView;
