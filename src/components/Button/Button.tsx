import get from "lodash/get";
import { Button as NbButton } from "native-base";
import React from "react";
import { GestureResponderEvent, Keyboard } from "react-native";
import { ButtonProps } from "./props";
import { buttonColorStyles } from "../../theme/const";

const Button: React.FC<ButtonProps> = ({ title, colorStyle, onPress, ...props }) => {
  const handleOnPress = (e: GestureResponderEvent) => {
    if (onPress && typeof onPress === "function") {
      onPress(e);
    }
    Keyboard.dismiss();
  };

  const _styles = colorStyle ? get(styleProps, colorStyle) : {};
  return (
    <NbButton
      {..._styles}
      {...props}
      onPress={handleOnPress}
    >
      {title || props.children}
    </NbButton>
  );
};

const styleProps = {
  primary: {
    width: "100%",
    backgroundColor: buttonColorStyles.PRIMARY,
    borderColor: 'red'
  },
  secondary: {
    width: "100%",
    backgroundColor: buttonColorStyles.SECONDARY,
  },
  secondaryWhite: {
    width: "100%",
    backgroundColor: buttonColorStyles.SECONDARY_WHITE,
  },
  secondaryBlack: {
    width: "100%",
    backgroundColor: buttonColorStyles.PRIMARY_BLACK,
  },
  borderLess: {
    variant: "ghost",
    _text: {
      fontSize: "17px",
      fontWeight: 400
    }
  },
  primaryBlack: {
    width: "100%",
    colorScheme: "btn.black"
  }
};

export default Button;
