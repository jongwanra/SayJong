import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Alert,
    TextInput,
    Keyboard,
}
    from 'react-native';

import SwitchExample from './Components/switch_example'
import Counter from './Components/Counter';


import Collapsible from 'react-native-collapsible';



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size1: 50,
            switch1Value: false,
            switch2Value: false,
            collapsed: true,
            reverse: false,
        };
    }


    viewHandler1 = () => {
        if (this.state.size1 === 50) {
            this.setState({
                size1: 100,
                collapsed: !this.state.collapsed,
                reverse: !this.state.reverse,
            });

        } else {
            this.setState({
                size1: 50,
                collapsed: !this.state.collapsed,
                reverse: !this.state.reverse,
            });

        }
    }

    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        this.viewHandler1();
    }
    toggleSwitch2 = (value) => {
        this.setState({ switch2Value: value });
    }

    toggleSwitch3 = (value) => {
        this.setState({ switch3Value: value })
    }

    _onPressSetImage = () => {
        Alert.alert('Pick a photo');
    }

    _onPressCreateButton() {
        Alert.alert('Create Chat room');
    }

    _keyboardDismiss = () => {
        Keyboard.dismiss();
    }

    

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._keyboardDismiss}>
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <View style={styles.titleViewInner}>
                            <View style={styles.titleInnerView_a}>
                            </View>
                            <View style={styles.titleInnerView_b}></View>
                            <TouchableWithoutFeedback onPress={this._onPressSetImage}>
                                <View style={styles.titleInnerView_c}>

                                    <Text style={{ color: 'white' }}>대표이미지 변경 ></Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <View style={styles.titleInnerView_d}></View>
                        </View>
                    </View>

                    <View style={styles.bodyView}>
                        <View style={styles.bodyInnerView}>
                            <View style={styles.bodyInnerView_a}>
                                <View style={styles.bodyInnerView_a_1}>
                                    <TextInput placeholder={'세이방 이름'} />
                                </View>
                                <View style={styles.bodyInnerView_a_1}>
                                    <TextInput placeholder={'세이방 소개'} />
                                </View>
                                <View style={styles.bodyInnerView_a_1}>
                                    <TextInput placeholder={'세이방 해시태그 (3개 이하로 설정해주세요.)'} />
                                </View>
                            </View>
                            <View style={styles.bodyInnerView_b}>
                                <Text style={{ marginLeft: '4%', paddingBottom: '2%' }}>설정</Text>
                            </View>


                            <View style={styles.bodyInnerView_c}>


                                <View style={styles.bodyInnerView_c_1}>
                                    <View style={styles.leftView_c}>
                                        <Text>시간설정</Text>
                                    </View>

                                    <View style={styles.rightView_c}>
                                        <SwitchExample
                                            toggleSwitch={this.toggleSwitch1}
                                            switchValue={this.state.switch1Value} />
                                    </View>
                                </View>
                                {/* collapsible */}
                                <Collapsible collapsed={this.state.collapsed}>
                                    <View style={styles.bodyInnerView_c_1}>
                                        <View style={styles.leftView_c}>
                                            <Text>1시간</Text>
                                        </View>
                                        <View style={styles.rightView_c}>
                                            <Counter />
                                        </View>
                                    </View>

                                    <View style={styles.bodyInnerView_c_1}>
                                        <View style={styles.leftView_c}>
                                            <Text>6시간</Text>
                                        </View>
                                        <View style={styles.rightView_c}>
                                            <Counter />
                                        </View>
                                    </View>
                                </Collapsible>


                                <View style={styles.bodyInnerView_c_1} >
                                    <View style={styles.leftView_c}>
                                        <Text>비공개</Text>
                                    </View>
                                    <View style={styles.rightView_c}>
                                        <SwitchExample
                                            toggleSwitch={this.toggleSwitch2}
                                            switchValue={this.state.switch2Value} />
                                    </View>
                                </View>

                                

                                <Collapsible collapsed={this.state.reverse}>
                                    <View style={styles.bodyInnerView_c_1}>
                                        <View style={styles.leftView_c}>
                                            <Text>익명</Text>
                                        </View>
                                        <View style={styles.rightView_c}>
                                            <SwitchExample
                                                toggleSwitch={this.toggleSwitch3}
                                                switchValue={this.state.switch3Value} />
                                        </View>
                                    </View>

                                    <View style={styles.bodyInnerView_c_1}>
                                        <View style={styles.leftView_c}>
                                            <Text>최대인원</Text>
                                        </View>
                                        <View style={styles.rightView_c}>
                                            <Counter />
                                        </View>
                                    </View>
                                </Collapsible>

                            </View>
                        </View>
                    </View>

                    <TouchableWithoutFeedback onPress={this._onPressCreateButton}>
                        <View style={styles.footerView}>
                            <Text style={{ fontSize: 18, color: 'gray' }}>만들기</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View >
            </TouchableWithoutFeedback>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    // 전체 3개의 큰 틀
    titleView: {
        flex: 37.9,
        backgroundColor: '#2196F3',
    },

    bodyView: {
        flex: 52.1,
    },

    footerView: {
        flex: 10,
        backgroundColor: '#F7F8F8',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //

    titleViewInner: {
        marginLeft: '4%',
        marginRight: '3%',
        flex: 1,
    },

    titleInnerView_a: {
        flex: 17,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    titleInnerView_b: {
        flex: 50,
    },
    titleInnerView_c: {
        flex: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F7F8F8',
        justifyContent: 'center',
    },

    titleInnerView_d: {
        flex: 18,
    },

    bodyInnerView: {
        marginLeft: '4%',
        marginRight: '3%',
        flex: 1,

    },
    bodyInnerView_a: {
        flex: 36,
        backgroundColor: 'transparent',

    },
    bodyInnerView_b: {
        marginLeft: '-4%',
        marginRight: '-3%',
        flex: 13.2,
        backgroundColor: '#F7F8F8',
        justifyContent: 'flex-end',
    },
    bodyInnerView_c: {
        flex: 50.8,
        backgroundColor: 'transparent',
    },

    bodyInnerView_a_1: {
        flex: 1,
        justifyContent: 'center',
    },

    bodyInnerView_c_1: {
        flex: 1,
        borderBottomColor: '#F7F8F8',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    leftView_c: {

        justifyContent: 'center',

    },

    rightView_c: {
        justifyContent: 'center',
    },
});

