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
  Picker,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const send = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState([]);
  const [account_name, setAccount_name] = useState([]);
  const [accID, setAccID] = useState([]);
  const [accountName, setAccountName] = useState([]);
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

  //get accounts for dropdown

  useEffect(() => {
    fetch(
      `https://localhost:7027/api/client/GetAccountsFromClients?username=${route.params.username}`
    )
      .then((response) => response.json())
      .then((json) => {
        setAccID(json.account_id);
        setAccountName(json.account_name);
        setData(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.pinContainer}>
      <Image
        style={{ top: -50, width: 335, height: 82 }}
        source={require("../assets/emblem.png")}
      />

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

      <SafeAreaView>
        <Picker
          selectedValue={account_name}
          // multiple={true}
          style={{
            height: 50,
            width: 100,
            borderBottomEndRadius: 15,
            marginBottom: 5,
            backgroundColor: "#ffbf00",
            color: "white",
          }}
          onValueChange={(itemValue, itemIndex) => setAccount_name(itemValue)}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            data.flatMap((account) => (
              <Picker.Item
                label={account.account_name}
                value={account.account_name}
              />
            ))
          )}
        </Picker>
      </SafeAreaView>

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
          textAlign: "center",
          placeholderTextColor: "#0d1117",
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

export default send;
