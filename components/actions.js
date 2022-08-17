
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView } from 'react-native';

const actions = ({navigation}) => {
  return (
    
    
    <SafeAreaView style={styles.pinContainer}>

      <SafeAreaView>
         {/* Emblema */}
         <Image
        style={{top:-150}}
        source={require('../assets/emblem.png')}
        
        />


</SafeAreaView>
     
      <><Text style={{ color: 'white', fontSize: 30, top: -100 }}>Welcome <Text style={{ color: '#EAB543', fontSize: 30, top: -100 }}>User !</Text></Text>
        
        {/* Balanca */}

        <SafeAreaView style={styles.balance}>
          <Text>
            <Text style={{ color: 'white', fontSize: 22, top: -15 }}>Balance :   <Text style={{ color: '#EAB543', fontSize: 30}}>$ 320468</Text></Text>
           

          </Text>
        

        </SafeAreaView>

        <Text style={{ color: 'white', fontSize: 20}}>Choose one of the options below:</Text>
    
   
        < SafeAreaView style={styles.up}>

        {/* <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("connect") }} 
            >
        <Text>Connect</Text>
              </TouchableOpacity>  */}
          

        <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("withdraw") }} 
            >
        <Text style={{ color: 'white', fontSize: 18}}>Withdraw</Text>
              </TouchableOpacity> 
              <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("deposit") }} 
            >
        <Text style={{ color: 'white', fontSize: 18}}>Deposit</Text>
              </TouchableOpacity> 
              <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("transactions") }} 
            >
        <Text style={{ color: 'white', fontSize: 18}}>Transactions History</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("pay") }} 
            >
        <Text style={{ color: 'white', fontSize: 18}}>Pay</Text>
        </TouchableOpacity> 
        
          
        <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("profile") }} 
          >
            <Text style={{ color: 'white', fontSize: 18}}>Go Back</Text>

            </TouchableOpacity>
        </SafeAreaView>
      
    
  
      </>
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
  left:{
    left: 50,
    fontSize:30,
    
  },

  up: {
    top: 20,
  
  },
  down: {
    
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 60,
   

  },
  left2:{
    left: 50,
    fontSize:30,
    
  },
  list: {
    alignItems: "center",
    backgroundColor: "#EAB543",
    padding: 10,
    borderBottomEndRadius: 15,
    marginBottom:5
 
  },

  balance: {
    left: -60,
    top: -40,
  
  }
});

export default actions;