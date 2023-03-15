import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UnAuthStackParamList } from "../../../@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useStore, useUserStore } from "../../store";
import * as yup from "yup";
import { FieldValue, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../../components";
import { buttonColorStyles } from "../../theme/const";
import { userInfo } from "os";
type Props = NativeStackScreenProps<UnAuthStackParamList, "Login">
type FormValues = {
  email: string;
  password: string;
};
export const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  .required();

const Login: React.FC<Props> = ({ navigation }) => {
  const { onLogin, userEmail, userPassword } = useStore();
  const { getUserData } = useUserStore();
  const [formError, setError] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");
  const { navigate } = navigation;
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    const userInfo = getUserData('user-information')
    if (typeof userInfo === "string") {
      console.log("USER_DATA_STORE", JSON.parse(userInfo));
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValue<any>> = data => {
    if ((userEmail === data.email && userPassword === data.password)
      // || (userData.email === data.email && userData.password === data.password)
      ){
      onLogin();
    } else {
      setErrorMessage("Email or password is wrong!");
    }
  };

  const handleSignIn = () => {
    navigate("SignUp");
  };
  const handleResetPassword = () => {
    navigate("ResetPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WellCome</Text>
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
        </View>
      </FormProvider>
      {errorMessage && (
        <Text>
          {errorMessage}
        </Text>
      )}
      <TouchableOpacity
        style={[styles.button, styles.disabledButton]}
        onPress={methods.handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.resetPassword}>Sign Up</Text>
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
  resetPassword: {
    marginTop: 10,
    color: "blue"
  },
  disabledButton: {
    opacity: 0.5
  }
});

export default Login;
