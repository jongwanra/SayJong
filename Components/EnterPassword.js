import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
} from 'react-native';

export default class EnterPassword extends Component {

    state = {
        Text: '채팅방 비밀번호를 입력해 주세요.',
        passcode1: '',
        passcode2: '',
        passcode3: '',
        passcode4: '',
    }

    finishedCode = () => {
        const {passcode1, passcode2, passcode3, passcode4} = this.state;
        if (passcode1 + passcode2+ passcode3 + passcode4 === '1234') {
            alert("비밀번호가 일치합니다");
        }
        else {
            this.refs.passcode_1.focus();

            this.setState({
                Text: '비밀번호가 일치하지 않습니다.',
                passcode1: '',
                passcode2: '',
                passcode3: '',
                passcode4: '',
            });
        }
    }


    render() {
        return (
                <View style={styles.container}>

                    <View style={styles.emptyContainer}>
                    </View>

                    <View style={styles.inputPasswordView}>
                        <View>
                            <Text style={{ color: 'white' }}>{this.state.Text}</Text>
                        </View>



                        <View style={styles.passwordCodeContainer}>
                            <View style={styles.eachPasswordInput}>
                                <TextInput
                                    value={this.state.passcode1}
                                    //autoFocus={false}
                                    ref='passcode_1'
                                    maxLength={1}
                                    onKeyPress={() => {this.refs.passcode_2.focus()}}
                                   // placeholder='*'
                                    placeholderTextColor="white"
                                    onChangeText={(passcode1) => this.setState({ passcode1 })}
                                    keyboardType='numeric'
                                    style={{ fontSize: 30, textAlign: 'center', color: 'white', paddingTop: 0, paddingBottom: 0 }}
                                    secureTextEntry={true}

                                />
                            </View>
                            <View style={styles.eachPasswordInput}>
                                <TextInput
                                    value={this.state.passcode2}
                                    ref='passcode_2'
                                    onKeyPress={() => { this.refs.passcode_3.focus() }}
                                    //placeholder='*'
                                    placeholderTextColor="white"
                                    onChangeText={(passcode2) => this.setState({ passcode2 })}
                                    keyboardType='numeric'
                                    style={{ fontSize: 30, textAlign: 'center', color: 'white', paddingTop: 0, paddingBottom: 0 }}
                                    secureTextEntry={true}
                                    maxLength={1}
                                />
                            </View>
                            <View style={styles.eachPasswordInput}>
                                <TextInput
                                    value={this.state.passcode3}
                                    ref='passcode_3'
                                    onKeyPress={() => { this.refs.passcode_4.focus() }}
                                    //placeholder='*'
                                    placeholderTextColor="white"
                                    onChangeText={(passcode3) => this.setState({ passcode3 })}
                                    keyboardType='numeric'
                                    style={{ fontSize: 30, textAlign: 'center', color: 'white', textAlignVertical: 'center' }}
                                    secureTextEntry={true}
                                    maxLength={1}
                                />
                            </View>
                            <View style={styles.eachPasswordInput}>
                                <TextInput
                                    value={this.state.passcode4}
                                    onKeyPress={() => { this.finishedCode()}}
                                    ref='passcode_4'
                                    //placeholder='*'
                                    placeholderTextColor="white"
                                    onChangeText={(passcode4) => this.setState({ passcode4 })}
                                    keyboardType='numeric'
                                    style={{ fontSize: 30, textAlign: 'center', color: 'white', paddingTop: 0, paddingBottom: 0 }}
                                    secureTextEntry={true}
                                    maxLength={1}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.emptyContainer_2}>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00BFFF',
        height: '100%',
    },

    emptyContainer: {
        backgroundColor: 'transparent',
        height: '30%',
    },

    inputPasswordView: {
        backgroundColor: 'transparent',
        marginLeft: '25%',
        marginRight: '25%',
        height: '12%',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },

    passwordCodeContainer: {
        flexDirection: 'row',
        marginTop: '14%',
        backgroundColor: 'transparent',
        marginLeft: '28%',
        marginRight: '20%',
        alignSelf: 'center',

    },

    eachPasswordInput: {
        backgroundColor: 'transparent',
        width: '30%',
        height: '50%',
        marginRight: '10%',
        alignContent: 'center',
        justifyContent: 'center',


    },

    emptyContainer_2: {
        backgroundColor: 'transparent',
        height: '74%',
    },
})