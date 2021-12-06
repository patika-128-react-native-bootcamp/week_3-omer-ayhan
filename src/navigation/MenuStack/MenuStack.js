import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "../../pages/Menu/Menu";
import MenuDetail from "../../pages/Menu/MenuDetail";
import CreateMenu from "../../pages/Menu/CreateMenu";
import headerStyle from "../style/header.style";
import routes from "../routes";

const Stack = createNativeStackNavigator();
const { menu, createMenu, menuDetail } = routes.menuStack;

export default function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={menu}
        component={Menu}
        options={{
          ...headerStyle,
          headerTitle: "Menu",
        }}
      />
      <Stack.Screen
        name={createMenu}
        component={CreateMenu}
        options={{
          ...headerStyle,
          headerTitle: "Create Menu",
        }}
      />
      <Stack.Screen
        name={menuDetail}
        component={MenuDetail}
        options={{
          ...headerStyle,
          headerTitle: "Menu Detail",
        }}
      />
    </Stack.Navigator>
  );
}
