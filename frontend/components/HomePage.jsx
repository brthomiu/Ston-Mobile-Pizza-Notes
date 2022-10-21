import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  onPress,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import { homeStyles } from "./styles";
import { loginStyles } from "./styles";

export default function HomePage({ navigation }) {
  return (
    
    <View style={homeStyles.container}>
        <Header />


      <TouchableOpacity style={homeStyles.loginButton} onPress={() => navigation.navigate("SelectDish")}>
        <Text style={homeStyles.buttonText}>Create Recipe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.loginButton} onPress={onPress}>
        <Text style={homeStyles.buttonText}>View Recipes</Text>
      </TouchableOpacity>
      <View>
      <Text
            style={homeStyles.textButtons}
            onPress={() => navigation.navigate("Login")}
          >
            Logout
          </Text>
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}
