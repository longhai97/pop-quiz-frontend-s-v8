import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks";
import { Brand } from "../../components";

const Startup = () => {
  const { Layout, Gutters, Fonts } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome:title')}</Text>
    </View>
  );
};

export default Startup;
