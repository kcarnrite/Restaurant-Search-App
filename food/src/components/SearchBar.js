import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

function SearchBar({ term, onTermChange, onEndEditing }) {
    return (
        <View style={styles.backgroundStyle}>
            <Icon name="search" style={styles.iconStyle}/>
            <TextInput 
                placeholder="Search"
                style={styles.inputStyle} 
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={onEndEditing}
                autoCapitalize="none"
                autoCorrect={false}
                />
        </View>

    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
    }
});

export default SearchBar;