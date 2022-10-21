import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  onPress,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../Header"
import { homeStyles } from "../styles";
import DishSwiper from "./DishSwiper";


export default function SelectDish({ navigation }) {
  return (
    
    <View style={homeStyles.container}>
        <Header />

    <View>
    <DishSwiper />
    </View>

      <TouchableOpacity style={homeStyles.loginButton} onPress={onPress}>
        <Text style={homeStyles.buttonText}>Create Recipe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.loginButton} onPress={onPress}>
        <Text style={homeStyles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View>
      <Text
            style={homeStyles.textButtons}
            onPress={() => navigation.navigate("HomePage")}
          >
            Back
          </Text>
      </View>
      <StatusBar style="hidden" />
    </View>
  );
}
