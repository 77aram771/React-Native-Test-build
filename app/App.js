import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Header, ImageCard, Layout} from "./src/components/uikit";
const url = 'https://raw.githubusercontent.com/77aram771/React-Native-Test-build/master/app/json.json';
export default class App extends React.Component {

    state = {
        title: 'STAR G',
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
        return (
            <View>
                <Header title={title}/>
                <ScrollView>
                    <View>
                        <Layout>
                            {
                                data.map(item => (
                                    <ImageCard items={item} key={item.id}/>
                                ))
                            }
                        </Layout>
                    </View>
                </ScrollView>
            </View>

        );
    }

}




