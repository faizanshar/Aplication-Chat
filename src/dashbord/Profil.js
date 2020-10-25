import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Styles} from './Styleprofil';

export default class Profil extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
          <Image
            source={require('../assets/arrow.png')}
            style={Styles.imgarrow}
          />
        </TouchableOpacity>
        <View style={Styles.view1}>
          <Image
            source={require('../assets/people.png')}
            style={Styles.imgpeople}
          />
        </View>

        <View style={Styles.allfollow}>
          <View style={Styles.followers}>
            <Text style={Styles.txtfollowers}>Followers</Text>
            <Text style={Styles.txt900}> 900k</Text>
          </View>
          <View style={Styles.followers2}>
            <Text style={Styles.txtfollowers}>Following</Text>
            <Text style={Styles.txt900}>200</Text>
          </View>
        </View>

        <View style={Styles.view2}>
          <Image
            source={require('../assets/user(1).png')}
            style={Styles.imguser}
          />
          <Text style={Styles.txtname}>Muhammad Anshar</Text>
        </View>

        <View style={Styles.view3}>
          <Image
            source={require('../assets/telpon.png')}
            style={Styles.imguser}
          />
          <Text style={Styles.txtname}>+62-821-1281-9685</Text>
        </View>

        <View style={Styles.view3}>
          <Image
            source={require('../assets/info.png')}
            style={Styles.imguser}
          />
          <Text style={Styles.txtname}>sedang mengoding</Text>
        </View>
      </View>
    );
  }
}
