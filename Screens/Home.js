import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Docters from '../Components/Doctor';
import Searchicon from 'react-native-vector-icons/Ionicons';
import Clinics from '../Components/Clinics';
import MedicineShop from '../Components/MedicineShop';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuicon}>
        <Image source={require('../Assets/Image/menu_icon.png')} />
        <View style={styles.icon}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => navigation.navigate('AmbulanceOrder3')}>
            <Image source={require('../Assets/Image/Ambulance_icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Assets/Image/Notification_icon.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Image source={require('../Assets/Image/location_icon.png')} />
        <Text style={styles.text1}>Patia,Bhubaneswar</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EFF3FA',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 10,
          width: '90%',
        }}>
        <TextInput
          style={{width: Dimensions.get('window').width - 100}}
          placeholder="Search Location"></TextInput>
        <TouchableOpacity>
          <Searchicon size={20} name="ios-search-sharp" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.banner}>
          <Image
            style={styles.banner_img}
            source={require('../Assets/Image/banner.png')}
          />
        </View>
        <View style={styles.Serviceview}>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('Medicine_home');
            }}>
            <Image source={require('../Assets/Image/Medicine.png')}></Image>
            <Text style={styles.Servicetxt}>Medicine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('Patholab_home');
            }}>
            <Image source={require('../Assets/Image/patholab.png')}></Image>
            <Text style={styles.Servicetxt}>Patholab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('Doctor_home');
            }}>
            <Image source={require('../Assets/Image/Doctor.png')}></Image>
            <Text style={styles.Servicetxt}>Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Service}
            onPress={() => {
              navigation.navigate('Clinics');
            }}>
            <Image source={require('../Assets/Image/Clinic.png')}></Image>
            <Text style={styles.Servicetxt}>Clinic</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text2}>Doctor Near By You</Text>

        <ScrollView horizontal={true} style={{marginBottom: 20}}>
          <Docters
            name={'Dr.Kate Rose'}
            post={'Pediatrician'}
            img={require('../Assets/Image/doc1.png')}
          />
          <Docters
            name={'Dr. Kayle Bush'}
            post={'Cadiologist'}
            img={require('../Assets/Image/doc2.png')}
          />
          <Docters
            name={'Dr.Kate Rose'}
            post={'Pediatrician'}
            img={require('../Assets/Image/doc1.png')}
          />
          <Docters
            name={'Dr. Kayle Bush'}
            post={'Cadiologist'}
            img={require('../Assets/Image/doc2.png')}
          />
        </ScrollView>

        <Text style={styles.text2}>Clinics Near By You</Text>
        <ScrollView horizontal={true} style={{marginBottom: 20}}>
          <Clinics
            clinicname={'Homeopathetic Clinic'}
            clinicplace={'Nandan Vihar,patia'}
            img={require('../Assets/Image/clinic1.png')}></Clinics>
          <Clinics
            clinicname={'Sai Clinic'}
            clinicplace={'Nandan Vihar,patia'}
            img={require('../Assets/Image/clinic2.png')}></Clinics>
          <Clinics
            clinicname={'Homeopathetic Clinic'}
            clinicplace={'Nandan Vihar,patia'}
            img={require('../Assets/Image/clinic1.png')}></Clinics>
        </ScrollView>

        <Text style={styles.text2}>Patholab Near By You </Text>
        <ScrollView style={styles.labview} horizontal={true}>
          <TouchableOpacity
            style={styles.labimgview}
            onPress={() => {
              navigation.navigate('Screen');
            }}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab1.png')}></Image>
          </TouchableOpacity>
          <View style={styles.labimgview}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab2.png')}></Image>
          </View>
          <View style={styles.labimgview}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab1.png')}></Image>
          </View>
          <View style={styles.labimgview}>
            <Image
              style={styles.labimg}
              source={require('../Assets/Image/Patholab2.png')}></Image>
          </View>
        </ScrollView>

        <Text style={styles.text2}>Medicine Shop Near By You</Text>
        <ScrollView horizontal={true}>
          <MedicineShop
            shopname={'Apollo Medicine Store'}
            img={require('../Assets/Image/Mdcshop.png')}></MedicineShop>
          <MedicineShop
            shopname={'Apollo Medicine Store'}
            img={require('../Assets/Image/Mdcshop.png')}></MedicineShop>
          <MedicineShop
            shopname={'Apollo Medicine Store'}
            img={require('../Assets/Image/Mdcshop.png')}></MedicineShop>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  icon: {
    flexDirection: 'row',
  },

  text1: {
    color: '#009987',
    marginLeft: 15,
    fontWeight: 'bold',
  },
  search: {
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#EFF3FA',
  },
  banner: {
    width: '90%',
    marginHorizontal: 20,
  },
  banner_img: {
    width: '100%',
  },
  Service: {
    alignItems: 'center',
  },
  Serviceview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  Servicetxt: {
    color: '#009987',
    fontWeight: 'bold',
  },
  text2: {
    fontWeight: '600',
    color: '#232323',
    fontSize: 15,
    margin: 20,
  },
  labview: {
    marginBottom: 20,
    marginLeft: 15,
  },
  labimgview: {
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 10,
    justifyContent: 'center',
  },
  labimg: {
    width: 135,
    height: 90,
  },
});

export default Home;
