import {StyleSheet} from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#005875',
        flex:1,
        alignItems:'center'
    },
    back: {
        width:30,
        height:30,
        marginRight:310
    },
    view1: {
        flexDirection:'row',
        backgroundColor: '#00ffcc',
        width:310,
        height:50,
        marginTop:120,
        justifyContent:'space-between',
        borderRadius:30,
        alignItems:'center'
    },
    view2: {
        flexDirection:'row',
        backgroundColor: '#00ffcc',
        width:310,
        height:50,
        marginTop:20,
        justifyContent:'space-between',
        borderRadius:30,
        alignItems:'center'
    },
    view3: {
        flexDirection:'row',
        backgroundColor: '#00ffcc',
        width:310,
        height:50,
        marginTop:20,
        justifyContent:'space-between',
        borderRadius:30,
        alignItems:'center'
    },
    imguser: {
        width:30,
        height:30,
        marginRight:10
        
    },
    register: {
        fontSize:40,
        marginTop:30,
        fontWeight:'bold',
        color: '#00ffcc'
    },
    signup: {
        backgroundColor:'#00ffcc',
        width:310,
        height:50,
        marginTop:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    viewsignin: {
        flexDirection:'row',
        marginTop:20
    },
    signin: {
        fontSize:15,
        fontWeight:'bold'
    }
})