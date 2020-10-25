import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import Indux from './Indux';
// import Login from './Login'
export default class Splash extends Component {
    constructor() {
      super();
      (this.componentDidMount = function () {
        console.log(' Console Log Ini Dari componentDidMount');
        setTimeout(() => {
          this.setState({
            role: false,
          });
        }, 2000);
        
      }),
        (this.componentDidUpdate = function () {
          console.log(' Console Log Ini Dari componentDidUpdate');
        });
    }
  
    state = {
      role: true,
    };
  
    splash = () => {
      // if (this.state.role) {
      return (
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2F4F4F',
          }}>
          <Image
            source={require('../assets/chat.png')}
            style={{height: 200, width: 200,marginBottom:100}}
          />
        <Text style={{fontSize:50,color:'white',fontWeight:'bold'}}>ProChat</Text>
        
        </View>
      );
      // }\
    };
  
    render() {
      if (this.state.role) {
        return <View style={{flex: 1}}>{this.splash()}</View>;
      } else {
        return <Indux />;
      }
    }
  }
