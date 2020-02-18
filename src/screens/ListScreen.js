import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 34 },
    { name: "Friend #3", age: 21 },
    { name: "Friend #4", age: 44 },
    { name: "Friend #5", age: 14 },
    { name: "Friend #6", age: 15 },
    { name: "Friend #7", age: 16 },
    { name: "Friend #8", age: 17 }
  ];
  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 50
  }
});

export default ListScreen;
