import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Candidates from "./Candidates";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let size = 24;
        let color = "#C4C4C4";
        let iconName;

        if (route.name == "Candidates") {
          iconName = "copy-outline";
          color = focused ? "#BB6BD9" : "#C4C4C4";
        } else if (route.name == "Profile") {
          iconName = "person-outline";
          color = focused ? "#BB6BD9" : "#C4C4C4";
        }

        return <Ionicons name={iconName} color={color} size={size} />;
      },
      tabBarActiveTintColor: "#BB6BD9",
      tabBarInactiveTintColor: "#C4C4C4",
      headerTransparent: true,
      headerLeft: () => (
        <Ionicons
          name="chevron-back-outline"
          color="#C4C4C4"
          size={34}
          style={{ marginLeft: 18 }}
        />
      ),
      headerRight: () => (
        <Ionicons
          name="options-outline"
          color="#BB6BD9"
          size={25}
          style={{
            borderWidth: 1,
            borderColor: "#E8E6EA",
            borderRadius: 15,
            width: 34,
            height: 34,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
          }}
        />
      ),
      headerTitle: () => (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>Discover</Text>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>candidates</Text>
        </View>
      ),

      headerTitleAlign: "center",
    })}
  >
    <Tab.Screen name="Candidates" component={Candidates} />
    <Tab.Screen name="Profile" component={Candidates} />
  </Tab.Navigator>
);

export default TabNavigator;
