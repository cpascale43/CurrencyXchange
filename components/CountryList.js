import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Input from "./Input";
import Card from "./Card";
import Colors from '../constants/Colors'

const CountryList = props => {
  let rate = props.rates.map((quote, index) => {
    return Object.keys(quote).map(key => {
      return (
        <Card style={styles.rateContainer} key={key}>
          <Text>
            {key} : {quote[key]}
          </Text>
        </Card>
      );
    });
  });
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        {rate}
        <View style={styles.buttonContainer}>
          <Button
            title="CHECK RATES"
            onPress={() => console.log("HERE ARE YOUR PROPS", props)}
          />
          <Button title="CANCEL" color={Colors.cancel} onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 80,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 80
  },
  rateContainer: {
    marginTop: 20
  }
});

export default CountryList;
