import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import {Styles} from './Stylefaiz';
import io from 'socket.io-client';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

export default class Faizchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
      Modal: true,
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.43.64:3000');
    this.socket.on('chat message', (msg) => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage, index) => (
      // <View style={Styles.viewchat}>
        <Text style={Styles.muncul} key={index}>
          {chatMessage}
        </Text>
      // </View>
    ));
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              source={require('../assets/arrow.png')}
              style={Styles.imgarrow}
            />
          </TouchableOpacity>
          <Image
            source={require('../assets/profile(1).png')}
            style={Styles.imgprofile}
          />
          <Text style={Styles.txtheader}>Muhammad Faiz</Text>
          {/* <Modal transparent={this.state.Modal}> */}
          <Image
            source={require('../assets/menu.png')}
            style={Styles.imgmenu}
          />
          {/* </Modal> */}
        </View>
        <ScrollView>{chatMessages}</ScrollView>
        <View style={Styles.bottom}>
          <TouchableOpacity>
            <Image
              source={require('../assets/smile.png')}
              style={Styles.imgsmile}
            />
          </TouchableOpacity>
          <TextInput
            style={Styles.inputchat}
            placeholder={''}
            autoCorrect={false}
            value={this.state.chatMessage}
            onChangeText={(chatMessage) => {
              this.setState({chatMessage});
            }}
          />

          <TouchableOpacity>
            <Image
              source={require('../assets/camera.png')}
              style={Styles.imgcamera}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.submitChatMessage()}>
            <Image
              source={require('../assets/send.png')}
              style={Styles.imgsend}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
