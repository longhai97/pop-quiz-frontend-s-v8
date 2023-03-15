import React, { useState } from "react";
import { Text } from "native-base";
import { TextInput } from "../../components";
import * as yup from "yup";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UnAuthStackParamList } from "../../../@types/navigation";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useUserStore } from "../../store";
import { buttonColorStyles } from "../../theme/const";

type Props = NativeStackScreenProps<UnAuthStackParamList, "SignUp">
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
    country: yup.string().required()
  })
  .required();

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { navigate } = navigation;
  const [formError, setError] = useState<Boolean>(false);
  const { setUserData } = useUserStore();

  const onSubmit = (data: FormValues) => {
    console.log('DATA__',data);
    setUserData('user-information',data)
    navigate("Login");
  };
  const handleResetPassword = () => {
    navigate("ResetPassword");
  };
  const handleSignIn = () => {
    navigate("Login");
  };

  const { ...methods } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema)
  });
  const isDisabled = !methods.formState.isValid;

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
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: buttonColorStyles.PRIMARY,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  disabledButton: {
    opacity: 0.5
  },
  resetPassword: {
    marginTop: 10,
    color: "blue"
  }
});

