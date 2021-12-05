import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "../../pages/Menu/Menu";
import MenuDetail from "../../pages/Menu/MenuDetail";
import CreateMenu from "../../pages/Menu/CreateMenu";
import headerStyle from "../style/header.style";

const Stack = createNativeStackNavigator();

export default function MenuStck() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuPage"
        component={Menu}
        options={{
          ...headerStyle,
          headerTitle: "Menu",
        }}
      />
      <Stack.Screen
        name="CreateMenuPage"
        component={CreateMenu}
        options={{
          ...headerStyle,
          headerTitle: "Create Menu",
        }}
      />
      <Stack.Screen
        name="MenuDetailPage"
        component={MenuDetail}
        options={{
          ...headerStyle,
          headerTitle: "Menu Detail",
        }}
      />
    </Stack.Navigator>
  );
}
