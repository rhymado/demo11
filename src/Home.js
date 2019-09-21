import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: 'halo ini Home Screen'
        }
    }
    button = () => {
        this.props.navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
    }
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
                <TouchableOpacity onPress={this.button}>
                <View style={styles.card}>
                    <Text>{this.state.name}</Text>
                </View>
                </TouchableOpacity>
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