import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const profile = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const [accID, setAccID] = useState([]);
  const [clientID, setClientID] = useState([]);
  var us = route.params.usernameValue;
  useEffect(() => {
    fetch(
      `https://localhost:7027/api/client/GetAccountsFromClients?username=${route.params.usernameValue}`
    )
      .then((response) => response.json())
      .then((json) => {
        setAccID(json.account_id);
        setClientID(json.client_id);
        setData(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <SafeAreaView style={styles.pinContainer}>
      <SafeAreaView>
        {/* Emblema */}
        <Image style={{ top: -180 }} source={require("../assets/emblem.png")} />
      </SafeAreaView>

      <Text style={{ color: "white", fontSize: 30, top: -100 }}>
        Welcome{" "}
        <Text style={{ color: "#EAB543", fontSize: 30, top: -100 }}>
          {route.params.usernameValue}!
        </Text>
      </Text>
      <Text style={{ color: "white", fontSize: 25 }}>Accouts:</Text>

      <SafeAreaView>
        {loading ? (
          <Text>Loading ...</Text>
        ) : (
          data.flatMap((account) => (
            <TouchableOpacity
              key={account.account_id}
              nextFocusForward={1}
              style={styles.list}
              onPress={() => {
                navigation.navigate("actions", { key: account.account_id });
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                {account.account_name}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </SafeAreaView>

      <SafeAreaView style={styles.up}>
        <Button
          touchSoundDisabled
          color="grey"
          title="Edit Profile"
          onPress={() => {
            navigation.navigate("editProfile", {
              id3: us,
            });
          }}
        />

        <SafeAreaView style={styles.left}>
          <Button
            touchSoundDisabled
            color="grey"
            title="Change Pin"
            onPress={() => {
              navigation.navigate("changePin", {
                id2: us,
              });
            }}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

//style
const styles = StyleSheet.create({
  pinContainer: {
    flex: 1,
    // backgroundColor:'#212121',
    backgroundColor: "#192a56",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  left: {
    left: 50,
    fontSize: 30,
  },

  up: {
    top: 20,
    fontSize: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    left: -20,
  },

  list: {
    alignItems: "center",
    backgroundColor: "#EAB543",
    padding: 10,
    borderBottomEndRadius: 15,
    marginBottom: 5,
  },
});

export default profile;
