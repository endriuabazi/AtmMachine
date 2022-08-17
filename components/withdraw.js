import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,SafeAreaView,Image } from 'react-native';

const withdraw = ({navigation}) => {
    return (

        
      <SafeAreaView style={styles.pinContainer}>
    
      <Image
      style={{top:-120}}
      source={require('../assets/emblem.png')}
      
      />

     
      <Text style={{ color: 'white', fontSize: 20, top: -95, padding: 22 }}>You want to withdraw? Here is the right place to do it!</Text>
      <Image
        style={{ width: 150, height: 150, top: -50}}
      source={require('../assets/istockphoto-929921700-170667a.jpg')}
      
      
      />
      <Text style={{ color: 'white', fontSize: 20, top:-15,padding:22}}>Please enter the amount !</Text>
        <TextInput
          style={{top:-10,color: 'white',fontSize: 20,borderBottomWidth : 1.75, borderColor:'white', width:-230}}
          placeholder="Amount"
          // onChangeText={newText => setText(newText)}
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
  logoja: {

    
  }

});
  
  export default withdraw;