import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
    render() {
        console.log('hello');

        return (
            <View style={styles.container}>
                <Text style={styles.text}>STAR GATE</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#30d0fe',
        height: 116,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 22,
        paddingTop: 71,
        shadowColor: '#000',
        shadowOffset: {white: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    text: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'Roboto',
    }
});
