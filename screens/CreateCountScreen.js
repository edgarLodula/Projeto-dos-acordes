import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default class CreateCount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Criação de conta</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
