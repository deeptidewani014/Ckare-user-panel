import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Searchicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Search_location = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00E0C5', '#009987']} style={{height: 300}} />

      <View style={styles.view1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EFF3FA',
            marginHorizontal: 20,
            marginTop: 40,
            borderRadius: 10,
          }}>
          <TextInput
            style={styles.search}
            placeholder="Search Location"></TextInput>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Searchicon size={20} name="ios-search-sharp" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  search: {
    width: Dimensions.get('window').width - 100,
  },
});
export default Search_location;
