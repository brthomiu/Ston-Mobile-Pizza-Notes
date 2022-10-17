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

export default function Login({ navigation }) {
  return (
    <View style={loginStyles.container}>
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

      <TouchableOpacity style={loginStyles.loginButton} onPress={onPress}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={loginStyles.textButtons}>
          <Text
            style={loginStyles.textButtons}
            onPress={() => navigation.navigate("NewUser")}
          >
            New User
          </Text>
          <Text
            style={loginStyles.textButtons}
            onPress={() => navigation.navigate("NewUser")}
          >
            Reset Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={loginStyles.loginButton}
          disabled={!request}
          title="Login"
          onPress={() => {
            promptAsync();
          }}
        >
          <Text style={loginStyles.buttonText}>Login With Google</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
