import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//---------------------screen--------------------
import Membership1 from './Screens/Membership1';
import Membership2 from './Screens/Membership2';
import Membership3 from './Screens/Membership3';
import Refer from './Screens/Refer';
import MedicineList from './Screens/MedicineList';
import Medicinedetails from './Screens/Medicinedetails';
import Mordercart from './Screens/Mordercart';
import AddAddress from './Screens/AddAddress';
import AddressAndPayment2 from './Screens/AddressAndPayment2';
import Orderpayment from './Screens/Orderpayment';
import AmbulanceOrder1 from './Screens/AmbulanceOrder1';
import AmbulanceOrder2 from './Screens/AmbulanceOrder2';
import AmbulanceOrder3 from './Screens/AmbulanceOrder3';
import AmbulanceOrder4 from './Screens/AmbulanceOrder4';
import AmbulanceOrder5 from './Screens/AmbulanceOrder5';
import Home from './Screens/Home';
import Location from './Screens/Location_permission';
import Search_location from './Screens/Search_location';
import Profile_screen from './Screens/Profile_screen';
import Profile_edit from './Screens/profile_edit';
import Mrn_number1 from './Screens/Mrn_number1';
import Notification from './Screens/Notification';
import Login from './Screens/Auth';
import Medicine_home from './Screens/Medicine_home';
import Orderhistory from './Screens/orderhistory';
import Order from './Screens/orders';
import Orderheading from './Screens/orderhistab';
import Loginwithnumber from './Screens/Loginwithnumber';
import Splash from './Screens/Splash';
import Otp_verification from './Screens/Otp_verification';
import Wrong_otp from './Screens/Wrong_otp';
import Registration from './Screens/Registration';
import prescription from './Screens/Prescription';
import Orderprice from './Screens/orderprice';
import Mapp from './Screens/map';
import Bill from './Screens/bill';
import Rate from './Screens/rate';
import Patholab_home from './Screens/Patholab_home';
import Doctor_home from './Screens/Doctor_home';
import Screen1ak from './Screens/Screen1ak';
import Medicinestoredetails from './Screens/Medicinestoredetails';
import Mcart from './Screens/MCart';
import Prescriptionupload from './Screens/Prescriptionupload';
import Screen6ak from './Screens/MRN_Order';
import Mrnmedicinelist from './Screens/Mrnmedicinelist';
import Mrnaddress from './Screens/Mrnaddress';
import Palltest from './Screens/Palltest';
import Porderdetailes from './Screens/Porderdetailes';
import Pslot from './Screens/Pslot';
import Screen14ak from './Screens/Screen14ak';
import Screen16ak from './Screens/Screen16ak';
import DoctorProfile from './Screens/DoctorProfile';
import CoupnsField from './Screens/CoupnsField';
import Patholabs from './Screens/Patholabs';
import Doctors from './Screens/Doctors';
import Appointment from './Screens/Appointment';
import Payment from './Screens/Payment';
import Apoointmentdetails from './Screens/Apoointmentdetails';
import BottomNavigator from './Components/BottomNavigator';
import Clinics from './Screens/Clinics';
import PatholabDetailes from './Screens/PatholabDetailes';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Refer" component={Refer} />
        <Stack.Screen name="Membership1" component={Membership1} />
        <Stack.Screen name="Membership2" component={Membership2} />
        <Stack.Screen name="Membership3" component={Membership3} />
        <Stack.Screen name="MedicineList" component={MedicineList} />
        <Stack.Screen name="Medicinedetails" component={Medicinedetails} />
        <Stack.Screen name="Mordercart" component={Mordercart} />
        <Stack.Screen name="Addaddress" component={AddAddress} />
        <Stack.Screen
          name="AddressAndPayment2"
          component={AddressAndPayment2}
        />
        <Stack.Screen name="Orderpayment" component={Orderpayment} />
        <Stack.Screen name="AmbulanceOrder1" component={AmbulanceOrder1} />
        <Stack.Screen name="AmbulanceOrder2" component={AmbulanceOrder2} />
        <Stack.Screen name="AmbulanceOrder3" component={AmbulanceOrder3} />
        <Stack.Screen name="AmbulanceOrder4" component={AmbulanceOrder4} />
        <Stack.Screen name="AmbulanceOrder5" component={AmbulanceOrder5} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search_location"
          component={Search_location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile_edit"
          component={Profile_screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile_screen"
          component={Profile_edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mrn_number1"
          component={Mrn_number1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Loginwithnumber" component={Loginwithnumber} />
        <Stack.Screen name="Otp_verification" component={Otp_verification} />
        <Stack.Screen name="Wrong_otp" component={Wrong_otp} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Medicine_home" component={Medicine_home} />
        <Stack.Screen name="Orderhistory" component={Orderhistory} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="prescription" component={prescription} />
        <Stack.Screen name="Orderheading" component={Orderheading} />
        <Stack.Screen name="Orderprice" component={Orderprice} />
        <Stack.Screen name="Mapp" component={Mapp} />
        <Stack.Screen name="Bill" component={Bill} />
        <Stack.Screen name="Rate" component={Rate} />
        <Stack.Screen name="Patholab_home" component={Patholab_home} />
        <Stack.Screen name="Doctor_home" component={Doctor_home} />
        <Stack.Screen name="Screen1ak" component={Screen1ak} />
        <Stack.Screen
          name="Medicinestoredetails"
          component={Medicinestoredetails}
        />
        <Stack.Screen name="Mcart" component={Mcart} />
        <Stack.Screen
          name="Prescriptionupload"
          component={Prescriptionupload}
        />
        <Stack.Screen name="MRNOrder" component={Screen6ak} />
        <Stack.Screen name="Mrnmedicinelist" component={Mrnmedicinelist} />
        <Stack.Screen name="Mrnaddress" component={Mrnaddress} />
        <Stack.Screen name="Palltest" component={Palltest} />
        <Stack.Screen name="Porderdetailes" component={Porderdetailes} />
        <Stack.Screen name="Pslot" component={Pslot} />
        <Stack.Screen name="Screen14ak" component={Screen14ak} />
        <Stack.Screen name="Screen16ak" component={Screen16ak} />
        <Stack.Screen name="BottonNavigator" component={BottomNavigator} />
        <Stack.Screen name="Patholabs" component={Patholabs} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="profile" component={DoctorProfile} />
        <Stack.Screen name="CoupnsField" component={CoupnsField} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen
          name="Apoointmentdetails"
          component={Apoointmentdetails}
        />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Clinics" component={Clinics} />
        <Stack.Screen name="PatholabDetailes" component={PatholabDetailes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
