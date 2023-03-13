import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { View } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UnAuthStackParamList } from "../../../@types/navigation";
import { MainView } from "../../components/MainView/MainView";
import { Header } from "../../components";

type Props = NativeStackScreenProps<UnAuthStackParamList, "ResetPassword">

const ResetPassword: React.FC<Props> = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // onSubmit(email);
  };

  return (
    <MainView>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Enter your email address to reset your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </MainView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#4267B2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ResetPassword;
