import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      senha: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
        
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          placeholder="Email"
          placeholderTextColor={"#000080"}
        ></TextInput>
        <TextInput
        secureTextEntry
        onChangeText={(text) => {
            this.setState({ senha: text });
          }}

          placeholder="Senha"
          placeholderTextColor={"#000080"}
        ></TextInput>
            <TouchableOpacity onPress={()=>{this.loginUser}}>Login</TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("CreateCount")}}>Criar conta</TouchableOpacity>
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
