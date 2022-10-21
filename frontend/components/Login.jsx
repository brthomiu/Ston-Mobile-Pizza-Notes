import React from "react";
import { loginStyles } from "./styles";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  onPress,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../assets/cookBookLogo.png";
import SocialLogin from "./SocialLogin";
import Header from "./Header";

export default function Login({ navigation }) {
  return (
    <View style={loginStyles.container}>
      <Header />
      <Image source={Logo} style={loginStyles.logo} />

      <View style={loginStyles.input}>
        <TextInput placeholder="Email" style={loginStyles.loginText} />
      </View>
      <View style={loginStyles.input}>
        <TextInput
          placeholder="Password"
          style={loginStyles.loginText}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={loginStyles.loginButton} onPress={() => navigation.navigate("HomePage")}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View>
        <View style={loginStyles.textButtons}>
          <Text
            style={loginStyles.textButtons}
            onPress={() => navigation.navigate("NewUser")}
          >
            New User
          </Text>
          <Text
            style={loginStyles.textButtons}
            onPress={() => navigation.navigate("ResetPassword")}
          >
            Reset Password
          </Text>
        </View>
        <SocialLogin />

      </View>
      <StatusBar style="hidden" />
    </View>
  );
}
