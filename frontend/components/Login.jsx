import React from "react";
import { loginStyles } from "./styles";
import { Text, View, Image, TextInput, TouchableOpacity, onPress } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../assets/cookBookLogo.png";

export default function Login() {
  return (
    <View style={loginStyles.container}>
      <Image source={Logo} style={loginStyles.logo}/>

      <View style ={loginStyles.input}>
      <TextInput placeholder="Email" style={loginStyles.loginText}/>
      </View>
      <View style ={loginStyles.input}>
      <TextInput placeholder="Password" style={loginStyles.loginText}/>
      </View>
      <View style={loginStyles.buttonContainer}>
      <TouchableOpacity
        style={loginStyles.button}
        onPress={onPress}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={loginStyles.button}
        onPress={onPress}
      >
        <Text>New User</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
