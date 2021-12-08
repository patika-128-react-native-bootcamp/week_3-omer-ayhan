import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tables from "../../pages/Tables/Tables";
import TableUpdate from "../../pages/Tables/TableUpdate";
import headerStyle from "../style/header.style";
import routes from "../routes";

const Stack = createNativeStackNavigator();

const { tables, tableUpdate } = routes.tablesStack; // page names

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={tables}
        component={Tables}
        options={{
          ...headerStyle,
          headerTitle: "Tables",
        }}
      />
      <Stack.Screen
        name={tableUpdate}
        component={TableUpdate}
        options={{
          ...headerStyle,
          headerTitle: "Table Update",
        }}
      />
    </Stack.Navigator>
  );
}
