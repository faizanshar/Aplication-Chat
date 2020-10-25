import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Styles} from './Stylehome';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Image
            source={require('../assets/chat.png')}
            style={Styles.imgheader}
          />
          <Text style={Styles.txtheader}>ProChat</Text>
          <Image
            source={require('../assets/search.png')}
            style={Styles.imgheader2}
          />
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Faizchat')}>
          <View style={Styles.viewfaiz}>
            <Image
              source={require('../assets/profile(1).png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtname}>Muhammad Faiz</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={Styles.viewbillgates}>
            <Image
              source={require('../assets/profile(1).png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtname}>Bill Gates</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={Styles.viewkhabib}>
            <Image
              source={require('../assets/profile(1).png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtname}>Khabib Nurmagedov</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={Styles.viewjakiechan}>
            <Image
              source={require('../assets/profile(1).png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtname}>Jakie Chan</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={Styles.viewakeno}>
            <Image
              source={require('../assets/profile(1).png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtname}>Akeno</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={Styles.viewmywife}>
            <Image
              source={require('../assets/profile(1).png')}
              style={Styles.imguser}
            />
            <Text style={Styles.txtname}>MyWife</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
