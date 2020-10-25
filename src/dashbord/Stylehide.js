import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#005875',
    height: 180,
  },
  txtname: {
    fontSize:20,
    marginLeft:10,
    fontWeight:'bold',
    color:'#fff',
    shadowColor:'black'
  },
  viewpeople: {
    backgroundColor: '#fff',
    width: 100,
    marginTop: 20,
    marginLeft: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 20,
  },
  imgpeople: {
    width: 70,
    height: 70,
  },
  imguser: {
    width: 30,
    height: 30,
    marginBottom:10
  },
  touch1: {
      flexDirection:'row',
      marginTop:50,
      alignItems:'center',
      borderBottomWidth:2
  },
  txtprofile: {
      fontSize:20,
      marginLeft:40,
      marginBottom:5
  },
  touch2: {
    flexDirection:'row',
    marginTop:30,
    alignItems:'center',
    borderBottomWidth:2,
    marginLeft:3
  },
  logout: {
      backgroundColor:'#005875',
      width:100,
      height:30,
      alignItems:'center',
      justifyContent:'center',
      marginTop:170,
      marginLeft:160,
      borderRadius: 20
  }
});
