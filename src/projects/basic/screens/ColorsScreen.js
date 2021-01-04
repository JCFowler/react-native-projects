import React, { useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';

const ColorsScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Add color" onPress={() => { setColors([...colors, randomRGB()])}} />
            <FlatList 
            keyExtractor={(item) => item}
                data={colors} 
                renderItem={ ( { item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    );
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

export default ColorsScreen;