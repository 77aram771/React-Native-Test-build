import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {h, w} from "../../../constants";

const ImageCard = (props) => {

    const {h1, cover, container, sub} = styles;
    const {name, image, id} = props.items;
    return (
        <View style={container}>
            <View style={sub}>
                <Image
                    style={cover}
                    source={{uri: image}}
                />
            </View>
            <Text style={h1}>{name.toUpperCase()}</Text>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        width: w / 2.4,
        paddingVertical: 10,
    },
    sub: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4
    },
    h1: {
        paddingTop: 10,
        fontFamily: 'Roboto',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4,
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,

    }
});


export {ImageCard}