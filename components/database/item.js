import { Text, View,ImageBackground, Pressable } from 'react-native';
import styles from './style';
const Item =(props)=>{
  const {name,subtitle,imagebg} = props.car;
    return(
    <View style={styles.carContainer}>
        <ImageBackground 
          source={imagebg}
          style={styles.image}>
        <View style={styles.titles}> 
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </ImageBackground>
    </View>
    )
}
export default Item;