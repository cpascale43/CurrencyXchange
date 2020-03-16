import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Picker,
  Modal
} from "react-native";
import Header from "./Header";
import CountryList from "./CountryList";

const sources = [
  {
    name: "USD",
    url:
      "https://apilayer.net/api/live?access_key=84caefbd542b8d5aa39737f8a2cb00e8&currencies=MXN,COP,CAD&source=USD&format=1"
  },
  {
    name: "MXN",
    url:
      "https://apilayer.net/api/live?access_key=84caefbd542b8d5aa39737f8a2cb00e8&currencies=USD,COP,CAD&source=MXN&format=1"
  },
  {
    name: "COP",
    url:
      "https://apilayer.net/api/live?access_key=84caefbd542b8d5aa39737f8a2cb00e8&currencies=USD,MXN,CAD&source=COP&format=1"
  },
  {
    name: "CAD",
    url:
      "https://apilayer.net/api/live?access_key=84caefbd542b8d5aa39737f8a2cb00e8&currencies=USD,MXN,COP&source=CAD&format=1"
  }
];

const Home = props => {
  const [sourceCountry, setSourceCountry] = useState("USD");
  const [isViewMode, setIsViewMode] = useState(false);
  const [rates, setRates] = useState([]);

  async function handlePress() {
    try {
      const info = sources.filter(source => source.name === sourceCountry);
      const res = await fetch(info[0].url);
      const data = await res.json();
      setRates([data.quotes]);
      setIsViewMode(true);
    } catch (error) {
      console.log(error);
    }
  }

  const cancelCheckHandler = () => {
    setIsViewMode(false);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Header title="Currency Xchange" />
        <CountryList
          visible={isViewMode}
          rates={rates}
          onCancel={cancelCheckHandler}
        />
        <View style={styles.selectContainer}>
          <Picker
            selectedValue={sourceCountry}
            style={styles.select}
            onValueChange={(itemValue, itemIndex) =>
              setSourceCountry(itemValue)
            }
          >
            <Picker.Item label="US dollar" value="USD" />
            <Picker.Item label="Canadian dollar" value="CAD" />
            <Picker.Item label="Mexican peso" value="MXN" />
            <Picker.Item label="Colombian peso" value="COP" />
          </Picker>
          <Button title="CHECK RATES" onPress={handlePress} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  selectContainer: {
    width: 300,
    maxWidth: "80%",
    alignSelf: "center"
  }
});

export default Home;
