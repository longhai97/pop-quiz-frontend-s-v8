import "react-native-gesture-handler";
import React from "react";
import ApplicationNavigator from "./navigators/Application";
import "./translations";
import { NativeBaseProvider } from "native-base";
const App = () => (
  <NativeBaseProvider>
    <ApplicationNavigator />
  </NativeBaseProvider>
);

export default App;
