import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import {Styles} from './Stylereset';

export default class Resetpassword extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
          <Image
            source={require('../assets/arrow.png')}
            style={Styles.imgback}
          />
        </TouchableOpacity>

        <Text style={Styles.txtreset}>Reset Password</Text>

        <TextInput style={Styles.inputemail} placeholder={'   email'}/>

        <TouchableOpacity style={Styles.touchemail} onPress={()=>alert('Email sudah terkirim')}>
            <Text style={{color:'#fff'}}>Resend Email</Text>
        </TouchableOpacity>

        <View style={Styles.view1}>
            <Text>Remember Password ?</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={Styles.txtsignin}> Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
