import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "native-base";

interface DetailItemProps {
  title: string;
  content: string;
}

const DetailItem: React.JSXElementConstructor<DetailItemProps> = ({ title, content }: DetailItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} :
      </Text>
      <Text style={styles.content}>{content || "Example"}</Text>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    margin: 10
  },
  title: {
    fontWeight: "bold",
    marginRight: 5
  },
  content: {
    flex: 1,
    marginLeft: 5
  }
});
