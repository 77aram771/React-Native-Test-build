import React from 'react';
import {View} from 'react-native';
import {Header} from "./src/components/uikit/Header";

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json';

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
            </View>

        );
    }
}


