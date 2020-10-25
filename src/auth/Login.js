import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Styles} from './Stylelogin';

export default class Login extends Component {
  state = {
    password: true,
    user: 'Faiz',
    username: 'gajah',
    passworduser: 'faiz123',
    passwordusername: 'gajah123',
  };

  masuk = () => {
    if (
      this.state.user === this.state.username &&
      this.state.passworduser === this.state.passwordusername
    ) {
      this.props.navigation.navigate('Home');
      alert('Berhasil Masuk!');
    } else {
      alert('Username atau password salah!!!');
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <Image source={require('../assets/user.png')} style={Styles.imguser} />

        <View>
          <View style={Styles.viewuser}>
            <TextInput
              style={Styles.inputuser}
              placeholder={'   user'}
              onChangeText={(user) => this.setState({username: user})}
              // value={this.state.username}
            />
            <Image
              source={require('../assets/user(1).png')}
              style={Styles.imguser1}
            />
          </View>

          <View style={Styles.viewpassword}>
            <TextInput
              style={Styles.inputpassword}
              placeholder={'   password'}
              secureTextEntry={this.state.password}
              onChangeText={(password) =>
                this.setState({passwordusername: password})
              }
              // value={this.state.passwordusername}
            />
            <TouchableOpacity
              onPress={() => this.setState({password: !this.state.password})}>
              <Image
                source={
                  this.state.password
                    ? require('../assets/eye.png')
                    : require('../assets/eyeclose.png')
                }
                style={Styles.imguser1}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={Styles.touchforgot}
            onPress={() => this.props.navigation.navigate('Reset')}>
            <Text>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.touchsignin}
            onPress={() => this.masuk()}>
            <Text>Sign In</Text>
          </TouchableOpacity>

          <View style={Styles.donthave}>
            <Text>Don't have an account ? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={Styles.txtsignup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
