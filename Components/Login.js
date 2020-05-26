import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Login extends Component {

    state = {
        emailAddress: '',
        password: '',
    }

    //keyboard dismissing!!
    _onPressEmptySpace = () => {
        Keyboard.dismiss();
    }

    btnLogin = () => {
        alert('login');
    }

    btnSignUp = () => {
        alert('SignUp');
    }

    btnPasswordSearching = () => {
        alert('passwordSearching!');
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.Container} behavior='position' keyboardVerticalOffset={-100}>
                <TouchableWithoutFeedback onPress={this._onPressEmptySpace}>
                    <View>
                        <View style={styles.view_a}>
                            {/* logo image */}
                            <Image source={require('/Users/jongwan/Desktop/JongWan/design/logoImage.png')}
                                style={styles.logoImage}
                            />

                        </View>

                        {/* Id,Password Input View */}
                        <View style={styles.view_b}>
                            <ImageBackground source={require('/Users/jongwan/Desktop/JongWan/design/LoginIdPwd.png')}
                                style={styles.IdPwdImage}
                                resizeMode='contain'
                            >
                                <TextInput style={styles.LoginInput}
                                    placeholder='이메일 주소를 입력해 주세요.'
                                    keyboardType='email-address'
                                    placeholderTextColor='white'
                                    value={this.state.emailAddress}
                                    onChangeText={(emailAddress) => this.setState({ emailAddress })}
                                />
                                <TextInput style={[styles.LoginInput, { marginTop: '3.1%' }]}
                                    placeholder='비밀번호를 입력해 주세요.'
                                    placeholderTextColor='white'
                                    secureTextEntry={true}
                                    keyboardType='email-address'
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({ password })}

                                />
                            </ImageBackground>
                        </View>

                        <View style={styles.view_c}>
                            <TouchableHighlight
                                onPress={() => this.btnLogin()}
                                style={[styles.buttonContainer, { marginBottom: 24, marginTop: 20 }]}
                                underlayColor='transparent'
                            >
                                <Text style={styles.textColor}>로그인</Text>
                            </TouchableHighlight>

                            <View style={styles.underlineContainer}>
                                <TextInput />
                            </View>
                        </View>
                        <View style={styles.view_d}>
                            <TouchableHighlight
                                style={[styles.buttonContainer, { marginTop: 25 }]}
                                onPress={() => this.btnSignUp()}
                                underlayColor='transparent'
                            >
                                <Text style={styles.textColor}>회원가입</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.btnPasswordSearching()}
                                style={styles.pwdSearching}
                                underlayColor='transparent'
                            >
                                <Text style={styles.textColor}>비밀번호 찾기</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.EmptyView}></View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#00BFFF',
        flex: 1,
    },

    view_a: {
        backgroundColor: "transparent",
        //height: '20%',
        //marginTop: 80,
        flex: 20,
    },

    logoImage: {
        width: "100%",
        height: "65%",
        alignItems: "center",
        justifyContent: "center",
        resizeMode: 'contain',
    },

    view_b: {
        backgroundColor: 'transparent',
        //height: '15%',
        //marginTop: '3%',
        marginTop: 10,
        flex: 15,
    },

    IdPwdImage: {

        width: "100%",
        height: '100%',
    },

    view_c: {
        backgroundColor: 'green',
        //height: '15%',
        marginLeft: '8%',
        flex: 15,
    },

    buttonContainer: {
        height: 50,
        width: 310,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 1,
    },

    underlineContainer: {
        borderBottomColor: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        width: 310,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    view_d: {
        backgroundColor: 'transparent',
        //height: '40%',
        marginLeft: '8%',
        flex: 40,
    },

    pwdSearching: {
        height: 50,
        width: 310,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
        borderColor: 'transparent',
        borderWidth: 1,
    },

    LoginInput: {
        backgroundColor: 'transparent',
        marginLeft: '29%',
        marginRight: '26%',
        height: '46%',
        width: 310,
        fontWeight: 'bold',
        color: 'white',
    },

    textColor: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

    EmptyView: {
        flex: 1,
    }

});