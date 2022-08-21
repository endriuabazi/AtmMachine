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
  FlatList,
} from "react-native";

import { id } from "./login";

const profile = ({ navigation }) => {
  // var dicka = id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const name = useNavigationParam(id);
  // const url = `https://localhost:7027/api/client/GetAccountsFromClients?id=${dicka}`;
  // `https://localhost:7027/api/client/GetAccountsFromClients?id=2`
  const route = useRoute();

  useEffect(() => {
    fetch(
      `https://localhost:7027/api/client/GetAccountsFromClients?username=${route.params.usernameValue}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <SafeAreaView style={styles.pinContainer}>
      <SafeAreaView>
        {/* Emblema */}
        <Image style={{ top: -180 }} source={require("../assets/emblem.png")} />
      </SafeAreaView>
      <>
        <Text style={{ color: "white", fontSize: 30, top: -100 }}>
          Welcome{" "}
          <Text style={{ color: "#EAB543", fontSize: 30, top: -100 }}>
            @ {route.params.usernameValue}
          </Text>
        </Text>
        <Text style={{ color: "white", fontSize: 25 }}>Accouts:</Text>

        <SafeAreaView>
          {loading ? (
            <Text>Loading ...</Text>
          ) : (
            data.flatMap((account) => (
              <SafeAreaView>
                <TouchableOpacity
                  nextFocusForward={1}
                  style={styles.list}
                  onPress={() => {
                    navigation.navigate("actions");
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>
                    {account.account_name}
                  </Text>
                </TouchableOpacity>
              </SafeAreaView>
            ))
          )}
        </SafeAreaView>

        <SafeAreaView style={styles.up}>
          <Button
            touchSoundDisabled
            color="grey"
            title="Edit Profile"
            onPress={() => {
              navigation.navigate("editProfile");
            }}
          />

          <SafeAreaView style={styles.left}>
            <Button
              touchSoundDisabled
              color="grey"
              title="Change Pin"
              onPress={() => {
                navigation.navigate("changePin");
              }}
            />
          </SafeAreaView>
        </SafeAreaView>
      </>
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
