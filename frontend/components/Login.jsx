import React from "react";
import { loginStyles } from "./styles";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../assets/stonBook.png";
import Background from "../assets/loginBG.png";
import SocialLogin from "./SocialLogin";
import Header from "./Header";

export default function Login({ navigation }) {
  return (
    <View style={loginStyles.container}>
      
      {/* Background Image */}
      <View style={loginStyles.background}>
        
      <Image source={Background} style={loginStyles.backgroundImage}/>

      </View>
      {/* Top Header */}

      <Header />
      
      {/* Logo Image */}

      <Image source={Logo} style={loginStyles.logo} />
      

      {/* Email and Password Input */}

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

      {/* Login/New User/Reset Password Buttons */}

      <TouchableOpacity
        style={loginStyles.loginButton}
        onPress={() => navigation.navigate("HomePage")}
      >
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

        {/* Login with Google button component */}

        <SocialLogin />
      </View>

      <StatusBar style="hidden" />
    </View>
  );
}
