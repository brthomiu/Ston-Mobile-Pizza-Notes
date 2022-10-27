import React from "react";
import { headerStyles } from "./styles";
import { Text, View } from "react-native";

export default function Header( ) {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}></Text>
    </View>
  );
}
