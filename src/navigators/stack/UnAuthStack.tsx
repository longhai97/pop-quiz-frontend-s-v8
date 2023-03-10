import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnAuthStackParamList } from "../../../@types/navigation";
import { Login, Startup } from "../../screens";

const Stack = createNativeStackNavigator<UnAuthStackParamList>();
const UnAuthStack = () => {
  const { Navigator, Screen, Group } = Stack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={"Login"} component={Login} />
      <Screen name={"Startup"} component={Startup} />
    </Navigator>
  );
};

export default UnAuthStack;
