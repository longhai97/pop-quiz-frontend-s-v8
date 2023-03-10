import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../@types/navigation";
import Main from "../Main";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  const { Navigator, Screen, Group } = Stack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={"Main"} component={Main} />
    </Navigator>
  );
};

export default AuthStack;
