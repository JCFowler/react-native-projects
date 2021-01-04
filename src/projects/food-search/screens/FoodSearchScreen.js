import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const FoodSearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResults = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            <Text>Found {results.length}</Text>
            { error ? <Text>{error}</Text> : null }

            <ResultsList results={filterResults('$')} title='Cost Effective'/>
            <ResultsList results={filterResults('$$')} title='Bit Pricer'/>
            <ResultsList results={filterResults('$$$')} title='Big Spender!'/>
            <ResultsList results={filterResults('$$$$')} title='Crazy rich!'/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default FoodSearchScreen;
