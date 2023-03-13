import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { useFlipper } from "@react-navigation/devtools";
import AuthStack from "./stack/AuthStack";
import UnAuthStack from "./stack/UnAuthStack";
import { useStore } from "../store";

const ApplicationNavigator = () => {
  // @ts-ignore
  const {isAuthenticated} = useStore()
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        {isAuthenticated ? <AuthStack /> : <UnAuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
