import React from "react";
import { headerStyles } from "./styles";
import { Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Main() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>
        Open up App.js to start working on your app, punk!
      </Text>
      <Pressable
        onPress={() => {
          console.log("Button pressed");
        }}
      >
        <Text style={headerStyles.text}>"Button"</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
