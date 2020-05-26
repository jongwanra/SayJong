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

export default class LoginSample extends Component {

    state = {
        password: '',
        emailAddress: ''
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

            <TouchableWithoutFeedback onPress={this._onPressEmptySpace}>
                <KeyboardAvoidingView style={styles.container}>

                    <View style={styles.EmptyView}>
                    </View>

                    <View style={styles.View_a}>
                        {/* logo image */}
                        <Image source={require('/Users/jongwan/Desktop/JongWan/design/logoImage.png')}
                            style={styles.LogoImage}
                        />
                    </View>

                    <View style={styles.View_b}>
                        <ImageBackground source={require('/Users/jongwan/Desktop/JongWan/design/LoginIdPwd.png')}
                            style={styles.IdPwdImage}
                            resizeMode='stretch'
                        >
                            <TextInput style={styles.LoginInput}
                                placeholder='이메일을 입력해 주세요.'
                                keyboardType='email-address'
                                placeholderTextColor='white'
                                value={this.state.emailAddress}
                                onChangeText={(emailAddress) => this.setState({ emailAddress })}
                            />
                            <TextInput style={styles.LoginInput}
                                marginTop='4%'
                                placeholder='비밀번호를 입력해 주세요.'
                                placeholderTextColor='white'
                                secureTextEntry={true}
                                keyboardType='email-address'
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}

                            />
                        </ImageBackground>
                    </View>

                    <View style={styles.BetweenView}>
                    </View>

                    <View style={styles.View_c}>
                        <TouchableHighlight
                            onPress={() => this.btnLogin()}
                            style={[styles.buttonContainer, { height: '58%' }]}
                            underlayColor='transparent'
                        >
                            <Text style={styles.textColor}>로그인</Text>
                        </TouchableHighlight>

                        <View style={styles.underlineContainer}>
                            <TextInput />
                        </View>
                    </View>

                    <View style={styles.BetweenView}>
                    </View>


                    <View style={styles.View_d}>
                        <TouchableHighlight
                            style={[styles.buttonContainer, { height: '27.1%' }]}
                            onPress={() => this.btnSignUp()}
                            underlayColor='transparent'
                        >
                            <Text style={styles.textColor}>회원가입</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.pwdSearching}
                            onPress={() => this.btnPasswordSearching()}
                            underlayColor='transparent'
                        >
                            <Text style={styles.textColor}>비밀번호 찾기</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BFFF',
    },

    EmptyView: {
        backgroundColor: 'transparent',
        flex: 12,
    },

    View_a: {
        flex: 21.5,
        backgroundColor: 'transparent',

    },

    LogoImage: {
        width: '100%',
        height: '65%',
        resizeMode: 'contain',
    },

    View_b: {
        flex: 17,
        backgroundColor: 'transparent',
        marginLeft: '7%',
        marginRight: '7%',
    },

    IdPwdImage: {
        width: "100%",
        height: '100%',
    },

    LoginInput: {
        backgroundColor: 'transparent',
        marginLeft: '29%',
        marginRight: '26%',
        height: '45.5%',
        width: '70%',
        fontWeight: 'bold',
        color: 'white',
    },

    View_c: {
        flex: 14,
        backgroundColor: 'transparent',
        marginLeft: '7%',
        marginRight: '7%',
        paddingTop: '1.3%',
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 1,

    },

    underlineContainer: {
        marginTop: '6.5%',
        borderBottomColor: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
    },

    BetweenView: {
        flex: 3.5,
        backgroundColor: 'transparent',
    },


    View_d: {
        flex: 28.5,
        backgroundColor: 'transparent',
        marginLeft: '7%',
        marginRight: '7%',
    },

    pwdSearching: {
        height: '26%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
        borderColor: 'transparent',
        borderWidth: 1,
    },

    textColor: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

});