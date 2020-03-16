import React, { useState } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import Home from "./components/Home";
import Loading from "./components/Loading"
import Colors from "./constants/Colors";

export default function App() {
  const [isVisible, setIsVisible] = useState(true)

  handlePress = () => {
    setIsVisible(false)
  };

  return (
  <View style={styles.container}>
    <Loading  />
    <Home visible={isVisible} onPress={handlePress} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
