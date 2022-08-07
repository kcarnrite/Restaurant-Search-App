import React, {useState} from "react";
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar.js';

function SearchScreen() {
    const [term, setTerm] = useState('');
    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('term was submitted')}
                />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;