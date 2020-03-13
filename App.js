import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation'
import UsersMap from './components/UsersMap'

class App extends React.Component {


  getUserLocationHandler = () => {
    console.log('PRESSED')
    navigator.geolocation.getCurrentPosition(location => {
      console.log(location)
    }, err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
