import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,SafeAreaView,Image,ScrollView } from 'react-native';

const deposit = ({navigation}) => {
    return (

        
        <SafeAreaView style={styles.pinContainer}>
    
        <Image
        style={{top:-120}}
        source={require('../assets/emblem.png')}
        
        />

       
        <Text style={styles.text1}>You want to deposit? Here is the right place to do it!</Text>
        <Image
          style={{ width: 150, height: 150, top: -50 }}
          source={require('../assets/DEPOSIT-METHOD.png')}
          blurRadius={2}
          
        
        
        />
        <Text style={styles.text2}>Please enter the amount !</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            defaultValue={Number}
            secureTextEntry={false}
            password={true} 
            keyboardType="numeric"
            maxLength={10000}
 
          />
       
       <View style={styles.hapsira}>
       <Button 
       touchSoundDisabled
       color="#EAB543"
        title="Continue"
        onPress={() => {navigation.navigate("profile")}} />
    
       </View>
          
     
    
    
          <StatusBar style="auto" />
        </SafeAreaView>
    
  
    );
  }
  const styles = StyleSheet.create({
    pinContainer: {
      flex: 1,
      backgroundColor: '#192a56',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
     
    },
    hapsira:{
  top: 20,
  
    },
    text1: { 
      color: 'white',
      fontSize: 20,
      top: -95,
      padding: 22
      
    },

    text2: {
      color: 'white',
      fontSize: 20,
      top: -15,
      padding: 22
      
    },
    input: {

      top: -10,
      color: 'white',
      fontSize: 20,
      borderBottomWidth: 1.75,
      borderColor: 'white',
      width: -230

    }
  
  });
  
  export default deposit;