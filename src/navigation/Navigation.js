import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MenuStack from "./MenuStack";
import TableStack from "./TableStack";
import ProductsStack from "./ProductsStack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const { productsTab, menuTab, tablesTab } = routes.mainStack; // page names

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={productsTab}
          component={ProductsStack}
          options={{
            tabBarLabel: "Products",
            tabBarIcon: ({ size, color }) => (
              <Icon name="food-croissant" color={color} size={size} /> // icon for products tab with size and color props defined in the options object
            ),
            drawerActiveTintColor: "#ab47bc",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={menuTab}
          component={MenuStack}
          options={{
            tabBarIcon: "Menu",
            tabBarIcon: ({ size, color }) => (
              <Icon name="book-open-page-variant" color={color} size={size} /> // icon for menu tab with size and color props defined in the options object
            ),
            drawerActiveTintColor: "#ab47bc",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={tablesTab}
          component={TableStack}
          options={{
            tabBarIcon: "Tables",
            tabBarIcon: ({ size, color }) => (
              <Icon name="table-furniture" color={color} size={size} /> // icon for tables tab with size and color props defined in the options object
            ),
            drawerActiveTintColor: "#ab47bc",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
