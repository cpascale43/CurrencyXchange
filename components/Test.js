import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import Colors from '../constants/Colors'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handlePress = () => {
    setTimeout(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 1000);
  };

  render() {
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <AnimatedLoader
          visible={visible}
          overlayColor={Colors.accent3}
          animationStyle={styles.lottie}
          source={require("lottie/83-plane-to-dollar.json")}
          speed={1}
        />
        <Button title="press" onPress={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  lottie: {
    width: 100,
    height: 100
  }
});
