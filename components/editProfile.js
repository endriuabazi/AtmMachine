
import React from 'react';
import { StyleSheet, Text, View,Button,Image, TouchableOpacity,SafeAreaView} from 'react-native';


const editProfile = ({navigation}) => {
  return (
    
    
    <SafeAreaView style={styles.pinContainer}>

<SafeAreaView>
      {/* Emblema */}
        <Image
        style={{top:-180}}
        source={require('../assets/emblem.png')}
        
        />
        </SafeAreaView>
      <><Text style={{ color: 'white', fontSize: 30, top: -100 }}>Welcome <Text style={{ color: '#EAB543', fontSize: 30, top: -100 }}>User !</Text></Text>
      <Text style={{ color: 'white', fontSize: 25}}>Accouts:</Text>
     
        <SafeAreaView>
        <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("actions") }} 
            >
        <Text style={{ color: 'white', fontSize: 18}}>JKKJBGKGHLLKJLJLKKNNKLJNJK</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("actions") }} 
            >
        <Text style={{ color: 'white', fontSize: 18}}>SXJXJKGJXGKJXKKNNKLJNJK</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          nextFocusForward={ 1}
           style={styles.list}
            onPress={() => { navigation.navigate("actions") }} 
            >
        <Text style={{ color: 'white', fontSize: 18}}>JKKJBGKGHLLKJLJLKKNNKLJNJK</Text>
          </TouchableOpacity> 
     

          
        </SafeAreaView>

    
        

    <SafeAreaView style={styles.up}>
       <Button 
       touchSoundDisabled
       color="grey"
        title="Edit Profile"
            onPress={() => { navigation.navigate("withdraw") }} />
          
          <SafeAreaView style={styles.left}>
          <Button 
       touchSoundDisabled
       color="grey"
        title="Change Pin"
        onPress={() => {navigation.navigate("deposit")}} />
    
   </SafeAreaView>
     
       </SafeAreaView>
      </>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  pinContainer: {
    flex: 1,
    // backgroundColor:'#212121',
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
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: -20,
   
  

  },

  list: {
    alignItems: "center",
    backgroundColor: "#EAB543",
    padding: 10,
    borderBottomEndRadius: 15,
    marginBottom:5
  },
});

export default editProfile;