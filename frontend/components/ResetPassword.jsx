import React from "react";
import { loginStyles } from "./styles";
import { Image, Text, View, TextInput, TouchableOpacity, onPress } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import Background from "../assets/loginBG.png";

export default function ResetPassword({ navigation }) {
  return (
    <View style={loginStyles.container}>
            {/* Background Image */}
            <View style={loginStyles.background}>
        
        <Image source={Background} style={loginStyles.backgroundImage}/>
  
        </View>
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
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={loginStyles.textButtons3}>Return to Login</Text>
        </TouchableOpacity>
    </View>
  );
}
