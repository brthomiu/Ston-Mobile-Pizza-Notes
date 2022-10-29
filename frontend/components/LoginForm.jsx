import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { loginStyles } from "./styles";

const LoginForm = () => {
  const [text, setText] = useState("");
  return (
    
    <View style={loginStyles.input}>
      <TextInput
        style={loginStyles.loginText}
        placeholder="Email"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>

  );
};

export default LoginForm;
