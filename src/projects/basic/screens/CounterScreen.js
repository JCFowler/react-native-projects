import React from 'react'
import { useReducer } from 'react'
import { Text, View, Button } from 'react-native'

const reducer = (state, action) => {
    return { count: state.count + action.payload }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0});
    const { count } = state;

    return (
        <View>
            <Text>Counter: {count}</Text>
            <Button title="Up" onPress={() => dispatch({ type: 'count', payload: 1})}/>
            <Button title="Down" onPress={() => dispatch({ type: 'count', payload: -1})}/>
        </View>
    );
}

export default CounterScreen
