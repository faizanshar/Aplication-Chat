import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Styles} from './Stylehide';

export default class Hide extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.viewpeople}>
          <Image
            source={require('../assets/people.png')}
            style={Styles.imgpeople}
          />
        </View>

        <Text style={Styles.txtname}>Muhammad Anshar</Text>

       
          <TouchableOpacity style={Styles.touch1} onPress={()=>this.props.navigation.navigate('Profil')}>
            <Image
              source={require('../assets/user(1).png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtprofile}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.touch2} onPress={()=> this.props.navigation.navigate('Home')}>
            <Image
              source={require('../assets/home.png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtprofile}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.touch2}>
            <Image
              source={require('../assets/notifikasi.png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtprofile}>Notifikasi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.touch2}>
            <Image
              source={require('../assets/folder.png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtprofile}>Data dan penyimpanan</Text>
          </TouchableOpacity>


            <TouchableOpacity style={Styles.logout} onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={{color:'#fff'}}>Log Out</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
