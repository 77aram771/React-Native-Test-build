import React from 'react';
import {View} from 'react-native';
import {Header, ImageCard} from "./src/components/uikit";

const url = 'https://raw.githubusercontent.com/77aram771/React-Native-Test-build/master/app/json.json';

export default class App extends React.Component {

    state = {
        title: 'STAR GATE',
        data: null
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
        console.log(this.state.data);
        return (
            <View>
                <Header title={this.state.title}/>
                <ImageCard/>
            </View>

        );
    }
}


