import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";

class Inputs extends Component {
  state = {
    email: "",
    password: "",
    passwordConform: "",
    name: "",
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  handlePasswordConform = (text) => {
    this.setState({ passwordConform: text });
  };
  handleName = (text) => {
    this.setState({ name: text });
  };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
    };
  }
  checkBoxTest() {
    this.setState({
      check: !this.state.check,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageEmptyView} />
        <View style={styles.imageView}>
          <ImageBackground
            source={require("./design/logoImage.png")}
            style={styles.realImage}
            resizeMode="contain"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
          />
        </View>
        <View style={styles.inputView}>
          <View style={styles.input}>
            <View style={styles.iconView}>
              <ImageBackground
                source={require("./design/addressImage.png")}
                style={styles.emailIcon}
                resizeMode="contain"
                marginTop="25%"
              />
            </View>
            <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
              <View style={styles.text}>
                <TextInput
                  style={{ paddingLeft: "5%" }}
                  placeholderTextColor="white"
                  placeholder="이메일 주소"
                  onChangeText={this.handleEmail}
                />
              </View>
            </KeyboardAccessoryView>
          </View>
          <View style={styles.input}>
            <View style={styles.iconView}>
              <ImageBackground
                source={require("./design/passwordImage.png")}
                style={styles.pwdIcon}
                resizeMode="contain"
                marginTop="17%"
              />
            </View>
            <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
              <View style={styles.text}>
                <TextInput
                  style={{ paddingLeft: "5%" }}
                  placeholderTextColor="white"
                  placeholder="비밀번호"
                  onChangeText={this.handlePassword}
                />
              </View>
            </KeyboardAccessoryView>
          </View>
          <View style={styles.input}>
            <View style={styles.iconView}>
              <ImageBackground
                source={require("./design/passwordConformImage.png")}
                style={styles.pwdIcon}
                resizeMode="contain"
                marginTop="17%"
              />
            </View>
            <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
              <View style={styles.text}>
                <TextInput
                  style={{ paddingLeft: "5%" }}
                  placeholderTextColor="white"
                  placeholder="비밀번호 확인"
                  onChangeText={this.handlePasswordConform}
                />
              </View>
            </KeyboardAccessoryView>
          </View>

          <View style={styles.input}>
            <View style={styles.iconView}>
              <ImageBackground
                source={require("./design/nameImage.png")}
                style={styles.pwdIcon}
                resizeMode="contain"
                marginTop="20%"
              />
            </View>
            <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
              <View style={styles.text}>
                <TextInput
                  style={{ paddingLeft: "5%" }}
                  placeholderTextColor="white"
                  placeholder="이름"
                  onChangeText={this.handleName}
                />
              </View>
            </KeyboardAccessoryView>
          </View>

          <View style={styles.input}>
            <View style={styles.iconView}>
              <ImageBackground
                source={require("./design/addmissionYearImage.png")}
                style={styles.emailIcon}
                resizeMode="contain"
                marginTop="25%"
              />
            </View>
            <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
              <View style={styles.text}>
                <TextInput
                  style={{ paddingLeft: "5%" }}
                  placeholderTextColor="white"
                  placeholder="입학년도"
                />
              </View>
            </KeyboardAccessoryView>
          </View>
        </View>

        <View style={styles.checkView}>
          <CheckBox
            value={this.state.check}
            onChange={() => this.checkBoxTest()}
          />
          <Text style={{ color: "white", fontSize: 12.5 }}>
            세이종의 이용약관 및 개인정보 보호정책에 동의합니다.(필수)
          </Text>
        </View>
        <View style={styles.confirmView}>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 18, marginTop: "12%" }}>
              인증하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  imageEmptyView: {
    flex: 0.08,
    backgroundColor: "transparent",
  },
  imageView: {
    flex: 0.25,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  realImage: {
    backgroundColor: "transparent",
    width: "100%",
    height: "80%",
  },
  inputView: {
    flex: 0.42,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    flex: 0.2,
    width: "80%",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: "white",
  },
  iconView: {
    flex: 0.25,
    width: "10%",
    backgroundColor: "transparent",
  },
  emailIcon: {
    width: "100%",
    height: "60%",
  },
  pwdIcon: {
    width: "100%",
    height: "75%",
  },
  text: {
    flex: 1,
    width: "70%",
    backgroundColor: "transparent",
  },
  checkView: {
    flexDirection: "row",
    flex: 0.07,
    backgroundColor: "transparent",
    marginTop: "12%",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmView: {
    flex: 0.12,
    backgroundColor: "transparent",
    margin: "8%",
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
