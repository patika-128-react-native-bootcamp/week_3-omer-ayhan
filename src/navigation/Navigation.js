import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuStack from "./MenuStack";
import TableStack from "./TableStack";
import ProductsStack from "./ProductsStack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Products"
          component={ProductsStack}
          options={{
            tabBarLabel: "Products",
            tabBarIcon: ({ size, color }) => (
              <Icon name="food-croissant" color={color} size={size} />
            ),
            drawerActiveTintColor: "#ab47bc",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuStack}
          options={{
            tabBarIcon: "Menu",
            tabBarIcon: ({ size, color }) => (
              <Icon name="book-open-page-variant" color={color} size={size} />
            ),
            drawerActiveTintColor: "#ab47bc",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Tables"
          component={TableStack}
          options={{
            tabBarIcon: "Tables",
            tabBarIcon: ({ size, color }) => (
              <Icon name="table-furniture" color={color} size={size} />
            ),
            drawerActiveTintColor: "#ab47bc",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
