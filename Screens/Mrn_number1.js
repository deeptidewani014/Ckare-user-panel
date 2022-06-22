import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign';

const Mrn_number1 = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container1}>
                <IconA name="left" size={14} color={'#000'} />
            </TouchableOpacity>
            <Text style={styles.text}>Please enter your MRN Number </Text>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container1: {
        borderRadius: 30,
        backgroundColor: '#EFF3FA',
        height: 30,
        width: 30,
        marginVertical: 30,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#222B45',
        marginHorizontal: 20,
    },
    enternumber: {
        borderColor: '#E1E1E1',
        borderRadius: 10,
    },

})
export default Mrn_number1