import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  viewTwoStyle: {
    alignSelf: "flex-end",
    height: 50,
    width: 50,
    backgroundColor: "green"
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple"
  }
});

export default BoxScreen;
