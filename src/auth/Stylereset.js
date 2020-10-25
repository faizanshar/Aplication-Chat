import {StyleSheet} from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        backgroundColor:'#005875',
        flex:1,
    },
    imgback: {
        width:30,
        height:30,
        marginLeft:10
    },
    txtreset: {
        fontSize:30,
        marginLeft:10,
        fontWeight:'bold',
        color:'#00ffcc',
        marginTop:20
    },
    inputemail: {
        backgroundColor: '#00ffcc',
        width:320,
        height:50,
        marginTop:60,
        marginLeft:20,
        borderRadius:30
    },
    touchemail: {
        backgroundColor: 'black',
        marginTop:30,
        width:320,
        height:50,
        marginLeft: 20,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    view1: {
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30
    },
    txtsignin: {
        fontSize:15,
        fontWeight:'bold'
    }
})