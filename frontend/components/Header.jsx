import React from "react";
import { headerStyles } from "./styles";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header( navigation ) {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}></Text>
      <StatusBar style="hidden" />
    </View>
  );
}
