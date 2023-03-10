import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { useTheme } from "../hooks";
import { useFlipper } from "@react-navigation/devtools";
import AuthStack from "./stack/AuthStack";
import UnAuthStack from "./stack/UnAuthStack";

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const isAuthenticated = true;
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
        {isAuthenticated ? <AuthStack/> : <UnAuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
