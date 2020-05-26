import React, { Component } from "react";
import {
  Animated,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Picker,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Button,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
const { width: WindowWidth } = Dimensions.get("window");

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    //checkBox logo
    logo: false,
    url: require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/CheckBoxOff.png"),
    //picker
    addmissionYear: "",
    modalIsVisible: false,
    modalAnimatedValue: new Animated.Value(0)
  };

  //keyboard dismissing!!
  _onPressEmptySpace = () => {
    Keyboard.dismiss();
  };

  passwordVaildate = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (this.state.password == this.state.passwordConfirm) {
      alert("비밀번호가 일치합니다.");
    }
  };

  //picker
  componentDidMount() {
    if (Platform.OS === "android") {
      alert(
        "Umm yeah this is meant for iOS, Picker modal looks different on Android. But go for it and try if you want, maybe make your own Snack that gives Android specific styling, that would be neat."
      );
    }
  }

  _handlePressDone = () => {
    Animated.timing(this.state.modalAnimatedValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true
    }).start(() => {
      this.setState({ modalIsVisible: false });
    });
  };

  _handlePressOpen = () => {
    Keyboard.dismiss();
    if (this.state.modalIsVisible) {
      return;
    }

    this.setState({ modalIsVisible: true }, () => {
      Animated.timing(this.state.modalAnimatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }).start();
    });
  };

  ChangeLogo = () => {
    if (this.state.logo === false) {
      this.setState({
        logo: true,
        url: require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/CheckBoxOn.png")
      });
    } else if (this.state.logo === true) {
      this.setState({
        logo: false,
        url: require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/CheckBoxOff.png")
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.Container}
        behavior="position"
        keyboardVerticalOffset={-60}
      >
        <TouchableWithoutFeedback onPress={() => this._onPressEmptySpace()}>
          <View style={styles.secondContainer}>
            <View style={styles.view_a}>
              <Image
                source={require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/logoImage.png")}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.view_b}>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputIcon}
                  source={require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/addressImage.png")}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="이메일 주소"
                  placeholderTextColor="white"
                  color="white"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  onChangeText={email => this.setState({ email })}
                />
              </View>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputIcon}
                  source={require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/passwordImage.png")}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="비밀번호"
                  placeholderTextColor="white"
                  color="white"
                  secureTextEntry={true}
                  keyboardType="web-search"
                  underlineColorAndroid="transparent"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
              </View>

              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputIcon}
                  source={require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/passwordConformImage.png")}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="비밀번호 확인"
                  placeholderTextColor="white"
                  color="white"
                  secureTextEntry={true}
                  keyboardType="web-search"
                  underlineColorAndroid="transparent"
                  onChangeText={passwordConfirm =>
                    this.setState({ passwordConfirm })
                  }
                  value={this.state.passwordConfirm}
                />
              </View>

              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputIcon}
                  source={require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/nameImage.png")}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="이름"
                  keyboardType="web-search"
                  color="white"
                  placeholderTextColor="white"
                  underlineColorAndroid="transparent"
                  onChangeText={name => this.setState({ name })}
                  value={this.state.name}
                />
              </View>

              <View style={styles.inputContainer}>
                <Image
                  style={styles.inputIcon}
                  source={require("/Users/jongwan/Desktop/종완이꺼/JongWan/design/addmissionYearImage.png")}
                />
                <TouchableOpacity onPress={this._handlePressOpen}>
                  <TextInput
                    style={styles.inputs}
                    value={this.state.addmissionYear}
                    placeholder="입학년도"
                    placeholderTextColor="white"
                    color="white"
                    pointerEvents="none"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.BetweenView} />

            <View style={styles.view_c}>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  marginLeft: 10
                }}
              >
                <TouchableHighlight
                  onPress={() => this.ChangeLogo()}
                  underlayColor="transparent"
                >
                  <Image
                    source={this.state.url}
                    style={{
                      width: 15,
                      height: 15,
                      resizeMode: "contain"
                    }}
                  />
                </TouchableHighlight>
                <Text style={styles.acception}>
                  {" "}
                  세이종 이용약관 및 개인정보 보호정책에 동의합니다.(필수)
                </Text>
              </View>
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.buttonContainer}
                onPress={() => this.passwordVaildate()}
              >
                <Text style={styles.signUpText}>인증하기</Text>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {this._maybeRenderModal()}
      </KeyboardAvoidingView>
    );
  }

  _maybeRenderModal = () => {
    if (!this.state.modalIsVisible) {
      return null;
    }

    const { modalAnimatedValue } = this.state;
    const opacity = modalAnimatedValue;
    const translateY = modalAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0]
    });

    return (
      <View
        style={StyleSheet.absoluteFill}
        pointerEvents={this.state.modalIsVisible ? "auto" : "none"}
      >
        <TouchableWithoutFeedback onPress={this._handlePressDone}>
          <Animated.View style={[styles.overlay, { opacity }]} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            transform: [{ translateY }]
          }}
        >
          <View style={styles.toolbar}>
            <View style={styles.toolbarRight}>
              <Button title="선택" onPress={this._handlePressDone} />
            </View>
          </View>
          <Picker
            style={{ width: WindowWidth, backgroundColor: "#e1e1e1" }}
            selectedValue={this.state.addmissionYear}
            onValueChange={itemValue =>
              this.setState({ addmissionYear: itemValue })
            }
          >
            <Picker.Item label="09학번" value="09학번" />
            <Picker.Item label="10학번" value="10학번" />
            <Picker.Item label="11학번" value="11학번" />
            <Picker.Item label="12학번" value="12학번" />
            <Picker.Item label="13학번" value="13학번" />
            <Picker.Item label="14학번" value="14학번" />
            <Picker.Item label="15학번" value="15학번" />
            <Picker.Item label="16학번" value="16학번" />
            <Picker.Item label="17학번" value="17학번" />
            <Picker.Item label="18학번" value="18학번" />
          </Picker>
        </Animated.View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#00BFFF"
  },
  secondContainer: {
    marginTop: 90
  },
  view_a: {
    height: "30%",
    backgroundColor: "transparent"
  },
  logoImage: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  view_b: {
    height: "40%",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  inputContainer: {
    borderBottomColor: "white",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    width: 280,
    height: "20%",
    flexDirection: "row",
    alignItems: "center"
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    justifyContent: "center",
    resizeMode: "contain",
    backgroundColor: "transparent"
  },

  inputs: {
    height: 50,
    width: 200,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "transparent"
  },

  BetweenView: {
    height: "5%"
  },

  view_c: {
    height: "25%",
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center"
  },
  buttonContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    width: 280,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
    borderColor: "white",
    borderWidth: 1
  },
  signUpText: {
    color: "white"
  },

  acception: {
    color: "white",
    fontSize: 12,
    width: "80%",
    backgroundColor: "transparent"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.65)"
  },
  toolbar: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  toolbarRight: {
    alignSelf: "flex-end"
  }
});
