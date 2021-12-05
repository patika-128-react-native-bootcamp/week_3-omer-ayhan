import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Tables from "../../pages/Tables/Tables";
import TableUpdate from "../../pages/Tables/TableUpdate";
import headerStyle from "../style/header.style";

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TablesPage"
        component={Tables}
        options={{
          ...headerStyle,
          headerTitle: "Menu",
        }}
      />
      <Stack.Screen
        name="TableUpdatePage"
        component={TableUpdate}
        options={{
          ...headerStyle,
          headerTitle: "Menu",
        }}
      />
    </Stack.Navigator>
  );
}
