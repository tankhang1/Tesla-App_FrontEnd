import { registerRootComponent } from 'expo';
import * as React from 'react';
import {Alert,Modal,Pressable, Image,StyleSheet,Touchable,View,Text} from "react-native";
import { TouchableOpacity } from "react-native";
const Header =()=>{
    const [modalVisible,setModalVisible]= React.useState(false);

    return(
        <View style={styles.container}>
        <Image
            source={require('../../assets/logo.png')}
            style={styles.Logo}
        />
        <View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
        <TouchableOpacity onPress={()=>setModalVisible(true)}>
        <Image 
            source={require('../../assets/menu.png')}
            style={styles.Menu}
        />
        </TouchableOpacity>
        </View> 
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        position:'absolute',
        top:14,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    image:{
        width:'100%',
    },
    Logo:{
        width:100,
        height:20,
        resizeMode:'contain',
    },
    Menu:{
        width: 40,
        height:20,
        resizeMode:'contain',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})