import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../@types/navigation";
import { Example, Home, UserProfile } from "../../screens";
import MainNavigator from "../Main";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={"Main"}>
      <Screen name={"Home"} component={Home} />
      <Screen name={"Example"} component={Example} />
      <Screen name={"UserProfile"} component={UserProfile} />
      <Screen name={"Main"} component={MainNavigator} />
    </Navigator>
  );
};

export default AuthStack;
