import { View,Text,Pressable } from "react-native";
import styles from "./style";

const btn=()=>{
 
    return(
        <View style={styles.btn_container}>
        <View style={styles.button_container}>
        <Pressable
          style={styles.button_black}
          onPress={()=>{
            console.warn('hey there')
          }}>
            <Text style={styles.text}>Custom Order</Text>
          </Pressable>
        </View>
        <View style={styles.button_container}>
        <Pressable
          style={styles.button_white}
          onPress={()=>{
            console.warn('hey there')
          }}>
            <Text style={styles.text_white}>Existing Inventory</Text>
          </Pressable>
        </View>
        </View>  
    )
};
export default btn;