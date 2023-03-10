import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type MainParamsList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined
  Login: undefined
  Main: NavigatorScreenParams<MainParamsList>
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type AuthStackParamList = {
  Main: undefined
}

export type UnAuthStackParamList = {
  Login: undefined
  Startup: undefined
}

export type CommonStackParamList = UnauthStackParamList & AuthStackParamList
