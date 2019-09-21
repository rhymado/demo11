import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: 'halo ini namaku'
        }
    }
    render() {
     const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
                <View style={styles.card}>
                    <Text>{this.state.name}</Text>
                    <Text>{itemId}</Text>
                    <Text>{this.props.address}</Text>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})