import * as React from "react";
import { MainView } from "../../components/MainView/MainView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../@types/navigation";
import DetailItem from "../../components/Item/Item";
import { useStore } from "../../store";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = NativeStackScreenProps<AuthStackParamList, "UserProfile">

const UserProfile: React.FC<Props> = ({}) => {
  const {userEmail, onLogout} = useStore()
  return (
    <MainView>
      <DetailItem title="Email" content={userEmail} />
      <TouchableOpacity
        style={[styles.button, styles.button, styles.disabledButton]}
        onPress={onLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </MainView>
  );
};

export default UserProfile;
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
    backgroundColor: "#4267B2",
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
    color: "blue",
    textDecorationLine: "underline"
  },
  disabledButton: {
    opacity: 0.5
  }
});
