import React from "react";
import { mainStyles } from "./styles";
import { ScrollView, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Main() {
  return (
    <View style={mainStyles.container}>
      <Text style={mainStyles.text}>
        Open up App.js to start working on your app, punk!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
