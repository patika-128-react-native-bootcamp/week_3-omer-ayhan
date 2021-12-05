import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../../pages/Product/Products";
import ProductDetail from "../../pages/Product/ProductDetail";
import headerStyle from "../style/header.style";

const Stack = createNativeStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsPage"
        component={Products}
        options={{ ...headerStyle, headerTitle: "Products" }}
      />
      <Stack.Screen
        name="ProductDetailPage"
        component={ProductDetail}
        options={{
          ...headerStyle,
          headerTitle: "Product Detail",
        }}
      />
    </Stack.Navigator>
  );
}
