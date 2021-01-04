import React, { useState, useReducer } from 'react';
import { Text, View, Button } from 'react-native';
import ColorView from '../components/ColorView';

const randomNumber = () => {
    return Math.floor(Math.random() * 255);
}

const reducer = (state, action) => {
    let num = state[action.colorToChange] + action.amount
    if (num > 255) {
        num = 255;
    } else if (num < 0) {
        num = 0;
    }

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: num };
        case 'green':
            return { ...state, green: num };
        case 'blue':
            return { ...state, blue: num };
        default:
            return state;
    }
}

const SingleColor = () => {
    const [state, dispatch] = useReducer(reducer, { red: randomNumber(), green: randomNumber(), blue: randomNumber() });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorView 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: 15 })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -15 })}
                title="Red" 
            />
            <ColorView 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: 15 })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -15 })}
                title="Green" 
            />
            <ColorView 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: 15 })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -15 })}
                title="Blue" 
            />

            <Text>{red}, {green}, {blue}</Text>

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );
}

export default SingleColor;