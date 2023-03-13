import { useNavigation } from "@react-navigation/native";
import { Text, View } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { HeaderProps } from "./props";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColorStyles } from "../../theme/const";

const Header: React.FC<HeaderProps> = ({
                                         leftComponent,
                                         rightComponent,
                                         leftIcon,
                                         showConfirm,
                                         confirmTitle,
                                         ...props
                                       }) => {
  const navigation = useNavigation();
  const handleIconPress = () => {
    if (showConfirm) {
    } else {
      navigation.goBack();
    }
  };
  return (
    <>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        {...props}
      >
        {leftComponent ? (
            leftComponent
          ) :
          <TouchableOpacity style={styles.backButton} onPress={handleIconPress}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        }
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: buttonColorStyles.SECONDARY_WHITE
  },
  backButton: {
    backgroundColor: buttonColorStyles.PRIMARY,
    padding: 5,
    borderRadius: 5
  }
});
