import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const send = ({ navigation }) => {
  const [amount, setAmount] = useState([]);
  const [account_name, setAccount_name] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  var depositParamID = route.params.id3;
  const handlerequest = () => {
    return fetch(
      `https://localhost:7027/api/account/send?id=${route.params.id3}&amount=${amount}&account_name=${account_name}`,
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
          alert("Send successful!");
          navigation.push("actions", {
            depositParamID: depositParamID,
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
      <Image style={{ top: -120 }} source={require("../assets/emblem.png")} />

      <Text style={{ color: "white", fontSize: 20, top: -95, padding: 22 }}>
        You want to send money? Here is the right place to do it!
      </Text>
      <Image
        style={{ width: 150, height: 150, top: 13 }}
        source={require("../assets/istockphoto-929921700-170667a.jpg")}
      />
      <Text style={{ color: "white", fontSize: 20, top: -15, padding: 22 }}>
        Enter the destination:
      </Text>
      <TextInput
        style={{
          top: -10,
          color: "white",
          fontSize: 20,
          borderBottomWidth: 1.75,
          borderColor: "white",
          width: -230,
        }}
        placeholder="Account Name"
        onChangeText={(value) => setAccount_name(value)}
        // defaultValue={Number}
        secureTextEntry={false}
        keyboardType="numeric"
        maxLength={10000}
      />
      <Text style={{ color: "white", fontSize: 20, top: -15, padding: 22 }}>
        Please enter the amount !
      </Text>
      <TextInput
        style={{
          top: -10,
          color: "white",
          fontSize: 20,
          borderBottomWidth: 1.75,
          borderColor: "white",
          width: -230,
        }}
        placeholder="Amount"
        onChangeText={(value) => setAmount(value)}
        // defaultValue={Number}
        secureTextEntry={false}
        keyboardType="numeric"
        maxLength={10000}
      />

      <View style={styles.hapsira}>
        <Button
          touchSoundDisabled
          color="#EAB543"
          title="Continue"
          onPress={handlerequest}
        />
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
});

export default send;
