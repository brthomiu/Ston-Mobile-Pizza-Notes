import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { loginStyles } from "./styles";

const PasswordForm = () => {
  const [text, setText] = useState("");
  return (
    
    <View style={loginStyles.input}>
      <TextInput
        style={loginStyles.loginText}
        placeholder="Password"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        secureTextEntry={true}
      />
    </View>
    
  );
};

export default PasswordForm;
