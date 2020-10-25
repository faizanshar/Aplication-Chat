import React, {Component} from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {Styles} from './Styleregister';

export default class Register extends Component {
  state = {
    password: true,
  };
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
          <Image source={require('../assets/arrow.png')} style={Styles.back} />
        </TouchableOpacity>
        <Text style={Styles.register}>Register</Text>

        <View style={Styles.view1}>
          <TextInput placeholder={'   username'} />
          <Image
            source={require('../assets/user(1).png')}
            style={Styles.imguser}
          />
        </View>

        <View style={Styles.view2}>
          <TextInput placeholder={'   email'} />
          <Image
            source={require('../assets/user(1).png')}
            style={Styles.imguser}
          />
        </View>

        <View style={Styles.view2}>
          <TextInput
            placeholder={'   password'}
            secureTextEntry={this.state.password}
          />
          <TouchableOpacity
            onPress={() => this.setState({password: !this.state.password})}>
            <Image
              source={
                this.state.password
                  ? require('../assets/eye.png')
                  : require('../assets/eyeclose.png')
              }
              style={Styles.imguser}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.view3}>
          <TextInput
            placeholder={'   password'}
            secureTextEntry={this.state.password}
          />
          <TouchableOpacity
            onPress={() => this.setState({password: !this.state.password})}>
            <Image
              source={
                this.state.password
                  ? require('../assets/eye.png')
                  : require('../assets/eyeclose.png')
              }
              style={Styles.imguser}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.signup} onPress={()=>this.props.navigation.navigate('Login')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <View style={Styles.viewsignin}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={Styles.signin}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
