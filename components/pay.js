import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

const pay = ({ navigation }) => {
  return (
    <View style={styles.pinContainer}>
      {/* Emblema */}
      <Image style={{ top: -200 }} source={require("../assets/emblem.png")} />

      <Text style={{ color: "white", fontSize: 30, top: -100 }}>
        Welcome{" "}
        <Text style={{ color: "#EAB543", fontSize: 30, top: -100 }}>
          User !
        </Text>
      </Text>

      <TouchableOpacity
        nextFocusForward={1}
        style={styles.list}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Text>Pay Bills</Text>
      </TouchableOpacity>
      <TouchableOpacity
        nextFocusForward={1}
        style={styles.list}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Text>Pay Tax</Text>
      </TouchableOpacity>
      <TouchableOpacity
        nextFocusForward={1}
        style={styles.list}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Text>Pay electricity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        nextFocusForward={1}
        style={styles.list}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
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
  down: {
    fontSize: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 60,
  },
  left2: {
    left: 50,
    fontSize: 30,
  },
  list: {
    alignItems: "center",
    backgroundColor: "#EAB543",
    padding: 10,
    borderBottomEndRadius: 3,
    marginBottom: 5,
  },

  balance: {
    left: -60,
    top: -40,
  },
});

export default pay;
