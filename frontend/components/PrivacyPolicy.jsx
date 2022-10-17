import React from "react";
import { termsStyles } from "./styles";
import { Text, View, onPress, TouchableOpacity } from "react-native";

export default function PrivacyPolicy({ navigation }) {
  return (
    <View style={termsStyles.container}>
      <Text style={termsStyles.text}>
        You surrender any rights to privacy that are applicable in your locale
        and agree to give me all of your data.
      </Text>
      <TouchableOpacity
        style={termsStyles.button}
        onPress={() => navigation.navigate("NewUser")}
      >
        <Text style={termsStyles.buttonText}>Return to Account Creation</Text>
      </TouchableOpacity>
    </View>
  );
}
