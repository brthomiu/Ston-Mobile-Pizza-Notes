import React from "react";
import { loginStyles } from "../components/styles";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../assets/stonBook.png";
import Background from "../assets/loginBG.png";
import SocialLogin from "../components/SocialLogin";
import LoginForm from "../components//LoginForm";
import PasswordForm from "../components/PasswordForm";
import Header from "../components/Header";

export default function LoginPage({ navigation }) {
  return (
    <View style={loginStyles.container}>
      {/* Background Image */}
      <View style={loginStyles.background}>
        <Image source={Background} style={loginStyles.backgroundImage} />
      </View>
      {/* Top Header */}

      <Header />
      {/* Logo Image */}

      <Image source={Logo} style={loginStyles.logo} />

      {/* Email and Password Input */}

      <LoginForm />
      <PasswordForm />

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
