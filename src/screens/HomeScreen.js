import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { ComponentScreen } from "./ComponentScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Loving React!!</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Images")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
