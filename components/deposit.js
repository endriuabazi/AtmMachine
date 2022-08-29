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

const deposit = ({ navigation }) => {
  const [amount, setAmount] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  var depositParamID = route.params.id;

  const handlerequest = () => {
    return fetch(
      `https://localhost:7027/api/account/deposit?id=${route.params.id}&amount=${amount}`,
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
          alert("Deposit successful!");
          // navigation.navigate("actions", {
          //   depositParamID: depositParamID,
          // });
          navigation.push("actions", {
            depositParamID: depositParamID,
          });
          // route.params.onReturn(depositParamID);
          // navigation.goBack();
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
        You want to deposit? Here is the right place to do it!
      </Text>
      <Image
        style={{ width: 150, height: 150, top: 13 }}
        source={require("../assets/DEPOSIT-METHOD.png")}
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
          color="#0d1117"
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
    backgroundColor: "#5913f4",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  hapsira: {
    top: 20,
  },
});

export default deposit;
