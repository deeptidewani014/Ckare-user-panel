import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import SearchBar from '../Components/SearchBar';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

export default function Medicine2ByCategory({navigation}) {
  return (
    <View style={styles.container}>
      {/* SearchBar */}
      <SearchBar />

      <View style={styles.imgDiv}>
        <Image
          source={require('../Assets/Image/Paracetamol1.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.dotIconsDiv}>
        <View>
          <Entypo name="dot-single" size={30} color="#009987" />
        </View>
        <View>
          <Entypo name="dot-single" size={30} color="#ccc" />
        </View>
        <View>
          <Entypo name="dot-single" size={30} color="#ccc" />
        </View>
        <View>
          <Entypo name="dot-single" size={30} color="#ccc" />
        </View>
        <View>
          <Entypo name="dot-single" size={30} color="#ccc" />
        </View>
      </View>
      <View style={styles.nameAndPriceDiv}>
        <Text style={styles.paracetamolTxt}>Paracetamol 500mg</Text>
        <View style={styles.priceDiv}>
          <View>
            <Text style={styles.priceTxt}>₹ 80.00</Text>
          </View>
          <View>
            <Text style={styles.offerTxt}>10% off</Text>
          </View>
        </View>
      </View>
      <View style={styles.addressDiv}>
        <Text style={styles.deliverTxt}>
          Deliver to Sagarika Mohanty, Nandan Vihar,
        </Text>
        <Text style={styles.deliverTxt}>Patia, Bhubaneswar, 751024</Text>
      </View>
      <View style={styles.deliveryTimeDiv}>
        <View>
          <Text style={styles.deliveryTimeTxt}>
            Deliver by 26 Feb 2022 | 10.00 PM
          </Text>
        </View>
        <View style={styles.changeAddressDiv}>
          <Text style={styles.changeAddressTxt}>Change Address</Text>
        </View>
      </View>
      <View>
        <Text style={styles.usesOfParacetamolTxt}>Uses of Paracetamol</Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <View style={styles.disesesTxtOneDiv}>
          <View>
            <Entypo name="dot-single" size={13} color="#ccc" />
          </View>
          <View>
            <Text style={styles.disesesTxt}>Fever</Text>
          </View>
        </View>
        <View style={styles.disesesTxtOneDiv}>
          <View>
            <Entypo name="dot-single" size={13} color="#ccc" />
          </View>
          <View>
            <Text style={styles.disesesTxt}>Cold</Text>
          </View>
        </View>
        <View style={styles.disesesTxtOneDiv}>
          <View>
            <Entypo name="dot-single" size={13} color="#ccc" />
          </View>
          <View>
            <Text style={styles.disesesTxt}>Headache</Text>
          </View>
        </View>
        <View style={styles.disesesTxtOneDiv}>
          <View>
            <Entypo name="dot-single" size={13} color="#ccc" />
          </View>
          <View>
            <Text style={styles.disesesTxt}>Bodypain</Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient
          colors={['#00E0C5', '#009987']}
          style={styles.takeFreeTrialBtnDiv}>
          <TouchableOpacity
            style={styles.takeFreeTrialBtn}
            onPress={() => navigation.navigate('Mcart')}>
            <Text style={styles.takeFreeTrialBtnTxt}>Add To Cart</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 10,
  },
  img: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.2,
  },
  dotIconsDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 10,
  },
  nameAndPriceDiv: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 10,
    // marginBottom: 10,
  },
  paracetamolTxt: {
    color: '#222',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  priceDiv: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 20,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
  },
  priceTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginRight: 10,
  },
  offerTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#009987',
  },
  addressDiv: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  deliverTxt: {
    color: '#231F20',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 5,
  },
  deliveryTimeDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 20,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  deliveryTimeTxt: {
    color: '#231F20',
    fontSize: 12,
    fontWeight: '500',
  },
  changeAddressDiv: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00E0C5',
  },
  changeAddressTxt: {
    color: '#00E0C5',
    fontSize: 10,
    fontWeight: '500',
  },
  usesOfParacetamolTxt: {
    color: '#222',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.3,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  disesesTxt: {
    color: '#6B779A',
    fontSize: 12,
    fontWeight: '400',
    marginVertical: 5,
  },
  disesesTxtOneDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  takeFreeTrialBtnDiv: {
    marginTop: 10,
    width: 356,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  takeFreeTrialBtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeFreeTrialBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
});
