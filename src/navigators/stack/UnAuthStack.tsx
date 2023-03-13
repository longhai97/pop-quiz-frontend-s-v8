import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnAuthStackParamList } from "../../../@types/navigation";
import { Login, ResetPassword, SignUp } from "../../screens";

const Stack = createNativeStackNavigator<UnAuthStackParamList>();
const UnAuthStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={"Login"}>
      <Screen name={"Login"} component={Login} />
      <Screen name={"SignUp"} component={SignUp} />
      <Screen name={"ResetPassword"} component={ResetPassword}/>
    </Navigator>
  );
};

export default UnAuthStack;
