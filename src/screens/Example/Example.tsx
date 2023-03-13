import React from "react";
import { useTranslation } from "react-i18next";
import { MainView } from "../../components/MainView/MainView";
import { Text } from "react-native";

const Example = () => {
  const { t } = useTranslation("example");

  return (
    <MainView>
      <Text>JUST a Foo Bar screen </Text>
    </MainView>
  );
};

export default Example;
