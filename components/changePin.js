import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const changePin = ({ navigation }) => {
  const [pinValue, setPin] = useState(null);
  const [pinValue2, resetPin] = useState(null);
  const route = useRoute();

  const handlerequest = () => {
    return fetch(
      `https://localhost:7027/api/client/changePin?username=${route.params.id2}&pin1=${pinValue}&pin2=${pinValue2}`,
      {
        method: "PUT",
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
          alert("Pin Changed Successfully");
          navigation.navigate("login");
        } else {
          console.log(response);

          alert("Passwords doesn't match!");
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.pinContainer}>
      <Image
        style={{ top: -50, width: 335, height: 82 }}
        source={require("../assets/emblem.png")}
      />
      <SafeAreaView>
        <Text style={styles.text1}>Please enter your new pin !</Text>
        <TextInput
          style={styles.pininput}
          placeholder="new pin"
          placeholderTextColor="#0d1117"
          onChangeText={(value) => setPin(value)}
          // defaultValue={Number}
          secureTextEntry={true}
          password={true}
          keyboardType="numeric"
          maxLength={4}
        />

        <Text style={styles.text1}>Please re-enter your new pin !</Text>
        <TextInput
          style={styles.pininput}
          placeholder="re-enter pin"
          placeholderTextColor="#0d1117"
          onChangeText={(value) => resetPin(value)}
          // defaultValue={Number}
          secureTextEntry={true}
          password={true}
          keyboardType="numeric"
          maxLength={4}
        />
      </SafeAreaView>
      <Button color="#0d1117" title="Change pin" onPress={handlerequest} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pinContainer: {
    flex: 1,
    backgroundColor: "#5913f4",
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
    textAlign: "center",
  },
});

export default changePin;
