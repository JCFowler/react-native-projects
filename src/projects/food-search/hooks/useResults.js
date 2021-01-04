import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setError('');
            setResults(response.data.businesses);
        } catch (err) {
            setError('Somrthing went wrong... Try again later.');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, results, error];
};