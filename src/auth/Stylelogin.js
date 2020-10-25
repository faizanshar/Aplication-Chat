import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#005875',
    flex: 1,
    alignItems: 'center',
  },
  viewuser: {
    flexDirection: 'row',
    backgroundColor: '#00ffcc',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 30,
    marginTop: 70,
    paddingHorizontal:10,

    width: 330,
  },
  viewpassword: {
    flexDirection: 'row',
    backgroundColor: '#00ffcc',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    paddingHorizontal:10,

    width: 330,
  },

  imguser: {
    width: 150,
    height: 150,
    marginTop: 60,
    marginLeft: 20,
  },
  inputuser: {
    height: 50,
  },
  inputpassword: {
    height: 50,
  },
  imguser1: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  touchsignin: {
    backgroundColor: '#00ffcc',
    height:50,
    marginTop:20,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center'
  },
  touchforgot: {
     alignItems:'center',
     marginTop:30
  },
  donthave: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30
  },
  txtsignup: {
    fontSize:15,
    fontWeight:'bold'
  }
});
