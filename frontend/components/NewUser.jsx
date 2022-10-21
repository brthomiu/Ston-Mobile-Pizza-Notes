import React from "react";
import { loginStyles } from "./styles";
import { Text, View, TextInput, TouchableOpacity, onPress } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";

export default function NewUser({ navigation }) {
  return (
    <View style={loginStyles.container}>
      <Header />
      <Text style={loginStyles.newUserText}>New Account</Text>
      <View style={loginStyles.input}>
        <TextInput placeholder="Email" style={loginStyles.loginText} />
      </View>
      <View style={loginStyles.input}>
        <TextInput placeholder="Confirm Email" style={loginStyles.loginText} />
      </View>
      <View style={loginStyles.input}>
        <TextInput
          placeholder="Password"
          style={loginStyles.loginText}
          secureTextEntry={true}
        />
      </View>
      <View style={loginStyles.input}>
        <TextInput
          placeholder="Confirm Password"
          style={loginStyles.loginText}
          secureTextEntry={true}
        />
      </View>
      <View style={loginStyles.buttonContainer}>
        <TouchableOpacity style={loginStyles.createButton} onPress={() => navigation.navigate("HomePage")}>
          <Text style={loginStyles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyles.terms}>
        <TouchableOpacity style={loginStyles.terms} onPress={() => navigation.navigate("TermsOfUse")}>
          <Text>Terms of Use</Text>
        </TouchableOpacity>

        <TouchableOpacity style={loginStyles.terms} onPress={() => navigation.navigate("PrivacyPolicy")}>
          <Text>Privacy Policy</Text>
        </TouchableOpacity>
        
      </View>
   
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={loginStyles.textButtons2}>Return to Login</Text>
        </TouchableOpacity>
      


      <StatusBar style="auto" />
    </View>
  );
}
