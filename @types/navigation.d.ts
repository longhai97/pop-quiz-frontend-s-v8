import { NavigatorScreenParams } from "@react-navigation/native";

export type MainParamsList = {
  Home: undefined;
  UserProfile: undefined;
};

export type AuthStackParamList = {
  Example: undefined
  Home: undefined
  UserProfile: undefined
  Main: NavigatorScreenParams<MainParamsList>;
}

export type UnAuthStackParamList = {
  Login: undefined
  SignUp: undefined
  ResetPassword: undefined
  Main: undefined

}

export type CommonStackParamList = UnauthStackParamList & AuthStackParamList
