import React from "react";
import { termsStyles } from "./styles";
import { Text, View, onPress, TouchableOpacity } from "react-native";
import Header from "./Header";

export default function TermsOfUse({ navigation }) {
  return (
    <View style={termsStyles.container}>
      <Header />
      <Text style={termsStyles.text}>
        By creating an account you agree to pay me $1,000,000.
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
