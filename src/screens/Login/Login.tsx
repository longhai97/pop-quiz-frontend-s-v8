import React, { useState } from "react";
import {  UnAuthStackParamList } from "../../../@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, TextInput, View, Text } from "react-native";

type Props = NativeStackScreenProps<UnAuthStackParamList, "Login">

export const LoginScreen : React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    navigation.navigate('Startup')
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
