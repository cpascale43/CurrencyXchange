import React from "react";
import { Animated, Easing, Button, View, TouchableWithoutFeedback } from "react-native";
import LottieView from "lottie-react-native";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.handlePress}
      >
        <LottieView
          source={require("../lottie/83-plane-to-dollar.json")}
          progress={this.state.progress}
        />
      </TouchableWithoutFeedback>
    );
  }
}
