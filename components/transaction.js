import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const transaction = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  // const [accID, setAccID] = useState([]);
  useEffect(() => {
    fetch(
      `https://localhost:7027/api/account/GetTransFromAcc?id=${route.params.id3}`
    )
      .then((response) => response.json())
      .then((json) => {
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

      <Text style={{ color: "white", fontSize: 25 }}>History:</Text>

      <SafeAreaView>
        {loading ? (
          <Text>Loading ...</Text>
        ) : (
          data.flatMap((account) => (
            <TouchableOpacity
              key={account.transaction_id}
              nextFocusForward={1}
              style={styles.list}
              onPress={() => {
                navigation.navigate("actions", { key: account.account_id });
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                {account.transaction_type} ,Time: {account.transaction_date} ,
                Amount: {account.amount}
              </Text>
            </TouchableOpacity>
          ))
        )}
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

export default transaction;
