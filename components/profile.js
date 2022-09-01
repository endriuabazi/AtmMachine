import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

const profile = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const [accID, setAccID] = useState([]);

  var username = route.params.usernameValue;
  useEffect(() => {
    fetch(
      `https://localhost:7027/api/client/GetAccountsFromClients?username=${route.params.usernameValue}`
    )
      .then((response) => response.json())
      .then((json) => {
        setAccID(json.account_id);

        setData(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.pinContainer}>
      <SafeAreaView>
        {/* Emblema */}
        <Image
          style={{ top: -50, width: 335, height: 82 }}
          source={require("../assets/emblem.png")}
        />
      </SafeAreaView>

      <Text style={{ color: "white", fontSize: 30, top: -100 }}>
        Welcome{" "}
        <Text
          style={{
            color: "#ffbf00",
            fontSize: 30,
            top: -100,
            textTransform: "capitalize",
          }}
        >
          {route.params.usernameValue}
        </Text>
      </Text>

      <Text style={{ color: "white", fontSize: 18, padding: 20 }}>
        If you want to make a transaction , please tap your desired account to
        proceed!
      </Text>

      <Text style={{ color: "white", fontSize: 25 }}>Accounts:</Text>

      <SafeAreaView>
        {loading ? (
          <ActivityIndicator />
        ) : (
          data.flatMap((account) => (
            <TouchableOpacity
              key={account.account_id}
              nextFocusForward={1}
              style={styles.list}
              onPress={() => {
                navigation.navigate("actions", {
                  key: account.account_id,
                  username: us,
                  account_name: account.account_name,
                });
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
          color="#0d1117"
          title="Edit Profile"
          onPress={() => {
            navigation.navigate("editProfile", {
              id3: username,
            });
          }}
        />

        <SafeAreaView style={styles.left}>
          <Button
            touchSoundDisabled
            color="#0d1117"
            title="Change Pin"
            onPress={() => {
              navigation.navigate("changePin", {
                id2: username,
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
    // backgroundColor: "#192a56",
    backgroundColor: "#5913f4",
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
    backgroundColor: "#ffbf00",
    padding: 10,
    borderBottomEndRadius: 15,
    marginBottom: 5,
  },
});

export default profile;
