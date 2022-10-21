import React from "react";
import { loginStyles } from "./styles";
import { Text, View, TextInput, TouchableOpacity, onPress } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";


export default function ResetPassword({ navigation }) {
  return (
    <View style={loginStyles.container}>
        <Header />
      <Text style={loginStyles.resetText}>Account Recovery</Text>

      <View style={loginStyles.resetInput}>
        <TextInput placeholder="Email" style={loginStyles.loginText} />
      </View>

      <View style={loginStyles.buttonContainer}>
        <TouchableOpacity style={loginStyles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={loginStyles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}
