import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Tasks from "./Tasks";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#DCDCDC" },
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="TabStack"
          component={Tasks}
          options={{
            title: "Tasklist",
            headerLeft: () => (
              <Icon name={"arrow-back"} size={30} style={{ marginLeft: 20 }} />
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 12, color: "white" }}>
                  {" "}
                  Current Score : 15 Pt{" "}
                </Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#DCDCDC",
              elevation: 4,
              shadowOpacity: 0.2,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 15,
    height: 25,
    marginRight: 20,
  },
});
