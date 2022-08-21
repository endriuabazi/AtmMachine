import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";

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

const editProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.pinContainer}>
      <Image style={{ top: -150 }} source={require("../assets/emblem.png")} />

      <SafeAreaView>
        <Text style={styles.text1}>Please enter your new username !</Text>
        <TextInput
          style={styles.pininput}
          placeholder="username!"
          // onChangeText={newText => setText(newText)}
        />
        <Text style={styles.text1}>Please enter your new address!</Text>
        <TextInput
          style={styles.pininput}
          placeholder="address!"
          // onChangeText={newText => setText(newText)}
        />
        <Text style={styles.text1}>Please enter your new phone!</Text>
        <TextInput
          style={styles.pininput}
          placeholder="phone!"
          // onChangeText={newText => setText(newText)}
        />

        <Text style={styles.text1}>Please enter your new email !</Text>
        <TextInput
          style={styles.pininput}
          placeholder="email!"
          // onChangeText={newText => setText(newText)}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.hapsira}>
        <Button
          touchSoundDisabled
          color="grey"
          title="Change Pin"
          onPress={() => {
            navigation.navigate("");
          }}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pinContainer: {
    flex: 1,
    backgroundColor: "#192a56",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  hapsira: {
    top: 20,
  },

  text1: {
    color: "white",
    fontSize: 22,
    top: -15,
    marginTop: 20,
  },

  pininput: {
    height: 40,
    top: -10,
    color: "white",
    fontSize: 20,
    borderBottomWidth: 1.75,
    borderColor: "white",
    margin: 14,
  },
});

export default editProfile;
