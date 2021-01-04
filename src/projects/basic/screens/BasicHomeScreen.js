import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const BasicHomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Basic pictures" onPress={() => navigation.navigate('List')} />
      <Button title="Colors" onPress={() => navigation.navigate('Colors')} />
      <Button title="Single Color" onPress={() => navigation.navigate('Single')} />
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
      <Button title="Name" onPress={() => navigation.navigate('Name')} />
      <Button title="Box" onPress={() => navigation.navigate('Box')} />
      <Button title="Flex" onPress={() => navigation.navigate('Flex')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default BasicHomeScreen;
