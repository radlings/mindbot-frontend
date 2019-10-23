import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import firebase from 'firebase'

class ProfileCompleteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileCompleteScreen</Text>
      </View>
    );
  }
}

export default ProfileCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})