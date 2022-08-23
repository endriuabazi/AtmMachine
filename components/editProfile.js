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
const editProfile = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [phone, setPhone] = useState(null);
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const [address, setAdd] = useState(null);
  const [usernameValue, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const handlerequest = () => {
    return fetch(
      `https://localhost:7027/api/client/editProfile?id=${route.params.id}&username=${usernameValue}&address=${address}&phone=${phone}&email=${email}`,
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
          alert("Edit is Done!");
          navigation.navigate("login");
        } else {
          console.log(response);

          alert("Something went wrog!");
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };
  // useEffect(() => {
  //   fetch(
  //     `https://localhost:7027/api/client/GetAccountsFromClients?username=${route.params.usernameValue}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <SafeAreaView style={styles.pinContainer}>
      <Image style={{ top: -150 }} source={require("../assets/emblem.png")} />

      <SafeAreaView>
        <Text style={styles.text1}>Please enter your new username !</Text>
        <TextInput
          style={styles.pininput}
          placeholder="username!"
          onChangeText={(value) => setUsername(value)}
        />
        <Text style={styles.text1}>Please enter your new address!</Text>
        <TextInput
          style={styles.pininput}
          placeholder="address!"
          onChangeText={(value) => setAdd(value)}
        />
        <Text style={styles.text1}>Please enter your new phone!</Text>
        <TextInput
          style={styles.pininput}
          placeholder="phone!"
          onChangeText={(value) => setPhone(value)}
        />

        <Text style={styles.text1}>Please enter your new email !</Text>
        <TextInput
          style={styles.pininput}
          placeholder="email!"
          onChangeText={(value) => setEmail(value)}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.hapsira}>
        <Button
          touchSoundDisabled
          color="grey"
          title="Update Profile"
          onPress={handlerequest}
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
