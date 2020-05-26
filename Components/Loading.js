import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('/Users/jongwan/Desktop/JongWan/design/logoImage.png')}
                    style={styles.LogoImage}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00BFFF',
        height: '100%',
    },

    LogoImage: {
        width: '28%',
        height: 120,
        marginTop: '70%',
        marginLeft: '35%',
        marginRight: '35%',
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
});