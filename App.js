import { StyleSheet, View,FlatList,Dimensions,Pressable,Text, SafeAreaView} from 'react-native';
import Item from './components/database/item';
import cardata from './components/database/datacar';
import Btn from './components/database/btn';
import Header from './components/database/header';
export default function App() {
  return (
    
    <View style={styles.container}> 
      <FlatList
        data={cardata}
        renderItem={({item})=><Item car={item}/>}
         snapToAlignment={'start'}
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('screen').height}    
      >
      </FlatList>   
      <Header/>
      <Btn/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  //  flex:1,
  flex:1,

  },
});
