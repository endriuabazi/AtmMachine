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
  Modal,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const send = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState([]);
  const [account_name, setAccount_name] = useState([]);
  const [amountErrorText, setAmountErrorText] = useState(false);
  const [accID, setAccID] = useState([]);
  const [accountName, setAccountName] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  var depositParamID = route.params.id3;
  //👇️ when only pin is incorrect
  const showErrorText = () => {
    setAmountErrorText((current) => !current);
  };

  //👇️ modal state

  const [modalVisible, setModalVisible] = useState(false);

  //👇️ modal function hide and show

  const showModal = () => {
    setModalVisible((current) => !current);
    navigation.push("actions", {
      depositParamID: depositParamID,
    });
  };
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
          showModal();
        } else {
          console.log(response);
          showErrorText();
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
      <SafeAreaView>
        {modalVisible ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Transfer successful!</Text>
                <Button
                  touchSoundDisabled
                  color="#0d1117"
                  title="Close"
                  onPress={showModal}
                />
              </View>
            </View>
          </Modal>
        ) : null}
      </SafeAreaView>
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

      {/* <SafeAreaView>
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
          onValueChange={(itemValue, itemIndex) =>
            setAccount_name(itemValue, itemIndex)
          }
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            data.map((account) => (
              <Picker.Item
                label={account.account_name}
                value={account.account_name}
                key={account.account_id}
              />
            ))
          )}
        </Picker>
      </SafeAreaView> */}

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
        placeholder="Account Name"
        onChangeText={(value) => setAccount_name(value)}
        // defaultValue={Number}
        secureTextEntry={false}
        keyboardType="numeric"
        maxLength={10000}
      />

      <Text style={{ color: "white", fontSize: 20, top: -15, padding: 22 }}>
        Enter the amount:
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
      {amountErrorText ? (
        <Text style={styles.errorMsg}>You don't have that amount</Text>
      ) : null}
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
  modalView: {
    margin: 20,
    backgroundColor: "#c9d1d9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  errorMsg: {
    color: "#B00020",
  },
});

export default send;
