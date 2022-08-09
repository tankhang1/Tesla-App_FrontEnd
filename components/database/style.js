import { StyleSheet,Dimensions} from "react-native";

const styles= StyleSheet.create({
    carContainer:{
        width:'100%',
        height: Dimensions.get("screen").height ,
      },
      titles:{
        marginTop:'20%',
        width:'100%',
        alignItems:'center',
      },
      title:{
        fontSize:40,
        fontWeight:'500',
      },
      subtitle:{
        fontSize:16,
        color:'#5c5e62',
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode : 'cover',
        posittion: 'absolute',
      },
      btn_container:{
        width:'100%',
        position:'absolute',
        bottom:10,
      },
      button_container:{
        
        width:'100%',
        padding:10,
        
      },
      button_black:{
        backgroundColor:'#36363c',
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
      },
      button_white:{
        backgroundColor:'#bebabc',
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
      },
      text:{
        fontSize:12,
        fontWeight:'500',
        color:'#d7d7dd',
        textTransform:'uppercase',
      },
      text_white:{
        fontSize:12,
        fontWeight:'500',
        color:'#767579',
        textTransform:'uppercase',
      }
})
export default styles;