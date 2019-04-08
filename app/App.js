import React from 'react';
import {Header} from "./src/components/uikit/Header";

export default class App extends React.Component {

    state = {
        title: 'STAR GATE'
    };

    render() {
        return (
            <Header title={this.state.title}/>
        );
    }
}


