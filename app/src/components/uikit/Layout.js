/**
 * Created by Aram on 19.05.2019.
 */

import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

const Layout = (props) => {
    return (
        <View styles={styles.container}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export {Layout}
