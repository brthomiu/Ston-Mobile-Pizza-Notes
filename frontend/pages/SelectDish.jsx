import React from "react";
import { Text, View, TouchableOpacity, onPress, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import { homeStyles, loginStyles, headerStyles } from "../components/styles";
import Background from "../assets/loginBG.png";

export default function SelectDish({ navigation }) {
  return (
    <View style={homeStyles.container}>
      {/* Background Image */}
      <View style={loginStyles.background}>
        <Image source={Background} style={loginStyles.backgroundImage} />
      </View>
      <Header />
      {/* Menu Container */}
      <View>
        <TouchableOpacity
          style={headerStyles.subContainer}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={headerStyles.text}>Username</Text>
        </TouchableOpacity>
      </View>

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
