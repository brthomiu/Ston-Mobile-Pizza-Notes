import React from "react";
import { loginStyles } from "./styles";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import Background from "../assets/loginBG.png";

export default function NewUser({ navigation }) {
  return (
    <View style={loginStyles.container}>
      {/* Background Image */}
      <View style={loginStyles.background}>
        <Image source={Background} style={loginStyles.backgroundImage} />
      </View>
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
          <Text style={loginStyles.textButtons2}>Terms of Use</Text>
        </TouchableOpacity>

        <TouchableOpacity style={loginStyles.terms} onPress={() => navigation.navigate("PrivacyPolicy")}>
          <Text style={loginStyles.textButtons2}>Privacy Policy</Text>
        </TouchableOpacity>
        
      </View>
   
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={loginStyles.textButtons2}>Return to Login</Text>
        </TouchableOpacity>
      


      <StatusBar style="auto" />
    </View>
  );
}
