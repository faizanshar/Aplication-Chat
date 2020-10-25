import {StyleSheet} from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        backgroundColor:'#005875',
        flex:1,
    },
    header: {
        backgroundColor:"white",
        width:360,
        height:60,
        flexDirection:'row',
        alignItems:'center'
    },
    imgprofile: {
        width:45,
        height:45,
        marginLeft:15
    },
    imgarrow: {
        width:30,
        height:30,
        marginLeft:10
    },
    txtheader: {
        fontWeight:'bold',
        fontSize:20,
        marginLeft:10
    },
    bottom: {
        backgroundColor:'#fff',
        width:360,
        height:50,
        bottom:3,
        // justifyContent:'center',
        position:'absolute',
        flexDirection:"row",
        borderRadius:20
    
    },
    imgsmile: {
        width:30,
        height:30,
        marginLeft:10,
        marginTop:10
    },
    inputchat: {
        backgroundColor:'#ffff',
        width:230,
        height:40,
        marginTop:5,
        marginLeft:10
    },
    imgcamera: {
        width: 30,
        height:30,
        marginTop:10,
        marginLeft:2
    },
    imgsend: {
        width:30,
        height:30,
        marginLeft:15,
        marginTop:10
    },
    muncul: {
        backgroundColor:'#61fcff',
        width:250,
        height:50,
        // marginTop:500,
        fontSize:15,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:20,
        borderRadius:10
    },
    imgmenu: {
        width:20,
        height:20,
        marginLeft:90,
        
    }
})