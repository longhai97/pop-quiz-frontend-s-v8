import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  email: string;
  password: string;
  fullName: string;
  address: string;
  country: string;
};

export const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    fullName: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
  })
  .required();

const SignUp: React.FC<Props> = ({ navigation }) => {
  const [formError, setError] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");
  const { navigate } = navigation;
  const { ...methods } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const isDisabled = !methods.formState.isValid;

  const onSubmit = (data: FormValues) => {
    // Do something with the form data
  };

  const handleSignIn = () => {
    navigate("Login");
  };
  const handleResetPassword = () => {
    navigate("ResetPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <FormProvider {...methods}>
        <View style={{ width: "100%" }}>
          <TextInput
            name="email"
            label="Email"
            keyboardType="email-address"
            setFormError={setError}
          />
          <TextInput
            name="password"
            label="Password"
            secureTextEntry
            setFormError={setError}
          />
          <TextInput
            name="fullName"
            label="Full Name"
            setFormError={setError}
          />
          <TextInput
            name="address"
            label="Address"
            setFormError={setError}
          />
          <TextInput
            name="country"
            label="Country"
            setFormError={setError}
          />
        </View>
      </FormProvider>
      {errorMessage && <Text>{errorMessage}</Text>}
      <TouchableOpacity
        style={[styles.button, styles.button, isDisabled && styles.disabledButton]}
        onPress={methods.handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.resetPassword}>Already have an account? Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResetPassword}>
        <Text style={styles.resetPassword}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4267B2",
    padding: 10,
    borderRadius: 5,
    width: "100%",}})

