import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header, ImageCard} from "./src/components/uikit";

const url = 'https://raw.githubusercontent.com/77aram771/React-Native-Test-build/master/app/json.json';
export default class App extends React.Component {

    state = {
        title: 'STAR GATE',
        data: []
    };

    componentDidMount = async () => {
        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            this.setState({
                data: data
            })
        } catch (e) {
            throw e
        }

    };

    render() {
        const {title, data} = this.state;
        const {container} = styles;
        return (
            <View>
                <Header title={title}/>
                <ScrollView>
                    <View style={container}>
                        {
                            data.map(item => (
                                <ImageCard items={item} key={item.id}/>
                            ))
                        }

                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginBottom: 150
    }
});


