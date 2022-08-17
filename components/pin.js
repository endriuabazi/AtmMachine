import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,SafeAreaView,Image,TouchableOpacity } from 'react-native';




// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue'
//   })
// });

const pin = ({ navigation }) => {
  
  // const [pin, setPin] = useState('');

 
  // const onChangePin = (text) => setPin(text);

  // const handleSubmit = () => {
  //     fetch('https://localhost:7027/api/client/postClients')
  //         .then((response) => response.json())
  //         .then((json) => {
  //             // You can navigate here as well
  //             navigation.navigate('profile');
  //             return json.account;
  //         })
  //         .catch((error) => {
  //             console.error(error);
  //         });
  // };



    return (

        
        <SafeAreaView style={styles.pinContainer}>
    
        <Image
        style={{top:-150}}
        source={require('../assets/emblem.png')}
        
        />
          <Text style={styles.text1}>Please enter your pin !</Text>
          <TextInput
            style={styles.pininput}
          placeholder="PIN!"
          value={pin}
          onChangeText={onChangePin}
         
            // onChangeText={newText => setText(newText)}
            defaultValue={Number}
            secureTextEntry={true}
            password={true} 
            keyboardType="numeric"
            maxLength={4}
 
          />
       
       <View style={styles.hapsira}>
       <Button 
       touchSoundDisabled
       color="grey"
        title="Continue"
        onPress={() => {navigation.navigate("profile")}} />
          
          {/* <TouchableOpacity onPress={handleSubmit}>
                <Text>Log In</Text>
            </TouchableOpacity> */}
       
    
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
      fontSize: 22,
      top: -15

    },

    pininput: {

      height: 40,
      top: -10,
      color: 'white',
      fontSize: 20,
      borderBottomWidth: 1.75,
      borderColor: 'white'

    }


  });
  
  export default pin;