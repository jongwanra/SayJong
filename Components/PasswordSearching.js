import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    ImageBackground,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

export default class PasswordSearching extends Component {

    //keyboard dismissing!!
    _onPressEmptySpace = () => {
        Keyboard.dismiss();
    }

    confirmBtn = () => {
        alert("confirmBtn click");
    }

    cancleBtn = () => {
        alert("cancleBtn click");
    }
    
    render() {
        return (

            <View style={styles.Container} >
                <TouchableWithoutFeedback onPress={() => this._onPressEmptySpace()}>
                    <View>
                        <View style={styles.navigator} />

                        <View style={styles.inputView}>
                            <View style={styles.empty} />

                            <View style={styles.emailInput}>
                                <ImageBackground
                                    source={require("/Users/jongwan/Desktop/JongWan/design/pwdSearchingImage1.png")}
                                    resizeMode="contain"
                                    style={{ width: "100%", height: "100%" }}
                                >
                                    <TextInput style={styles.TextInput} placeholder="이메일 주소" keyboardType="email-address" />
                                </ImageBackground>
                            </View>
                            <View style={styles.nameInput}>
                                <ImageBackground
                                    source={require("/Users/jongwan/Desktop/JongWan/design/pwdSearchingImage1.png")}
                                    resizeMode="contain"
                                    style={{ width: "100%", height: "100%" }}
                                >
                                    <TextInput style={styles.TextInput} placeholder="이름" keyboardType="web-search" />
                                </ImageBackground>
                            </View>
                        </View>

                        <View style={styles.emptyView} />

                        <View style={styles.bottonView}>
                            <View style={{ width: "50%" }}>
                                <TouchableHighlight style={styles.buttonContainer} onPress={() =>this.cancleBtn()} underlayColor='transparent'>
                                    <ImageBackground
                                        source={require("/Users/jongwan/Desktop/JongWan/design/pwdSearchingImage2.png")}
                                        style={styles.btnImage}
                                        resizeMode="contain"
                                    >
                                        <Text style={styles.textColor}>취소</Text>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </View>

                            <View style={{ width: "50%" }}>
                                <TouchableHighlight onPress={() => this.confirmBtn()} underlayColor='transparent'>
                                    <ImageBackground
                                        source={require("/Users/jongwan/Desktop/JongWan/design/pwdSearchingImage2.png")}
                                        style={styles.btnImage}
                                        resizeMode="contain"
                                    >
                                        <Text style={styles.textColor}>확인</Text>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "white"
    },

    navigator: {
        height: "9%",
    },

    inputView: {
        height: "24%",
        marginLeft: "3%",
        marginRight: "3%",
    },

    empty: {
        height: "29%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },

    emailInput: {
        height: "35.5%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },

    nameInput: {
        height: "35.5%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },

    TextInput: {
        fontSize: 15,
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: "5.5%"
    },

    emptyView: {
        height: "57%"
    },

    bottonView: {
        flexDirection: "row",
        height: "10%"
    },

    btnImage: {
        width: "98%",
        height: "100%"
    },

    textColor: {
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: "15%",
        color: "gray"
    }
});
