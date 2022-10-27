import React from "react";
import { Text, View, TouchableOpacity, onPress, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import { homeStyles } from "./styles";
import { loginStyles } from "./styles";
import Background from "../assets/loginBG.png";

export default function Menu({ navigation }) {
  return (
    <View style={homeStyles.container}>
      {/* Background Image */}
      <View style={loginStyles.background}>
        <Image source={Background} style={loginStyles.backgroundImage} />
      </View>
      <Header />
      <SubHeader />

      <TouchableOpacity
        style={homeStyles.button}
        onPress={() => navigation.navigate("SelectDish")}
      >
        <Text style={homeStyles.buttonText}>Create Recipe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.button} onPress={onPress}>
        <Text style={homeStyles.buttonText}>View Recipes</Text>
      </TouchableOpacity>

      <StatusBar style="hidden" />
    </View>
  );
}
