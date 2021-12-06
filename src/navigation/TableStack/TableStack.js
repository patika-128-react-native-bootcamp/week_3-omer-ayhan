import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Tables from "../../pages/Tables/Tables";
import TableUpdate from "../../pages/Tables/TableUpdate";
import headerStyle from "../style/header.style";
import routes from "../routes";

const { tables, tableUpdate } = routes.tablesStack;

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={tables}
        component={Tables}
        options={{
          ...headerStyle,
          headerTitle: "Menu",
        }}
      />
      <Stack.Screen
        name={tableUpdate}
        component={TableUpdate}
        options={{
          ...headerStyle,
          headerTitle: "Menu",
        }}
      />
    </Stack.Navigator>
  );
}
