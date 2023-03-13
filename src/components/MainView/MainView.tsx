import { View } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode
}
export const MainView: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={[{ flex: 1, padding: 5, ...props }]}>
      {children}
    </View>
  );
};
