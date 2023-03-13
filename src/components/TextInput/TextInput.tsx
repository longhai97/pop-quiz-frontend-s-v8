import React from "react";

import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  StyleSheet
} from "react-native";

import {
  useController,
  useFormContext,
  UseControllerProps
} from "react-hook-form";
import { ColorsTitle } from "../../theme/const";

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string;
  name: string;
  // eslint-disable-next-line react/require-default-props
  defaultValue?: string;
  setFormError: Function;
}

const ControlledInput = (props: TextInputProps) => {

  const formContext = useFormContext();
  const { formState } = formContext;

  const { name, label, rules, defaultValue, ...inputProps } = props;

  const { field } = useController({ name, rules, defaultValue });

  const hasError = Boolean(formState?.errors[name]);

  return (
    <View style={styles.container}>
      <RNTextInput
        autoCapitalize="none"
        textAlign="left"
        style={[styles.textInput]}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        placeholder={label}
        {...inputProps}
      />

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{formState.errors[name].message}</Text>
        </View>
      )}
    </View>
  );
};

const TextInput = (props: TextInputProps) => {
  const { name, setFormError } = props;

  const formContext = useFormContext();

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    setFormError(true);
    return null;
  }

  return <ControlledInput {...props} />;
};

export default TextInput;
const styles = StyleSheet.create({
  container: {
    flex: -1,
    justifyContent: "center",
    paddingVertical: 8
  },
  errorContainer: {
    flex: -1,
    height: 20,
    paddingTop: 3
  },
  error: {
    color: "red"
  },
  textInput: {
    backgroundColor: ColorsTitle.inputBackground,
    color: ColorsTitle.text,
    height: 45,
    borderRadius: 10,
    paddingStart: 20
  }
});
