import React, { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  placeholder?: string;
  value: string;
  type?: "text" | "email" | "password" | "confirmPassword";
  onChangeText?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<Props> = ({ placeholder, value, type = "text", onChangeText, keyboardType }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(type === "password");
  const [emailError, setEmailError] = useState("");

  const handleTextChange = (value: string) => {
    switch (type) {
      case "email":
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (emailRegex.test(value)) {
          onChangeText?.(value);
        } else {
          setEmailError("Email not valid");
        }
        break;
      case "password":
        if (value.length >= 8) {
          onChangeText?.(value);
        }
        break;
      default:
        onChangeText?.(value);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID={"input"}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType={keyboardType}
        onChangeText={handleTextChange}
      />
      {emailError ? <Text>{emailError}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});

export default Input;
