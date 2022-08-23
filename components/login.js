import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";

const login = ({ navigation }) => {
  const [pinValue, setPin] = useState(null);
  const [usernameValue, setUsername] = useState(null);

  const handlerequest = () => {
    return fetch(
      `https://localhost:7027/api/client/login?pin=${pinValue}&username=${usernameValue}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          console.log(response.json());

          navigation.navigate("profile", {
            usernameValue: usernameValue,
          });
        } else {
          console.log(response);
          alert("Something went wrog!");
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.pinContainer}>
      <Image style={{ top: -150 }} source={require("../assets/emblem.png")} />

      <Text style={styles.text1}>Please enter your username & pin !</Text>
      <TextInput
        style={styles.input}
        placeholder="USERNAME!"
        onChangeText={(value) => setUsername(value)}
        // value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="PIN!"
        onChangeText={(value) => setPin(value)}
        // value={pin}
        defaultValue={Number}
        secureTextEntry={true}
        password={true}
        keyboardType="numeric"
        maxLength={4}
      />
      <View style={styles.hapsira}>
        <Button title="Login" onPress={handlerequest} />
      </View>
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
  },

  input: {
    height: 40,
    top: -10,
    color: "white",
    fontSize: 20,
    borderBottomWidth: 1.75,
    borderColor: "white",
    margin: 15,
  },
});

export default login;