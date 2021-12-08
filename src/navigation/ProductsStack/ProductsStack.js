import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../../pages/Product/Products";
import ProductDetail from "../../pages/Product/ProductDetail";
import headerStyle from "../style/header.style";
import routes from "../routes";

const Stack = createNativeStackNavigator();
const { products, productDetail } = routes.productsStack; // page names

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={products}
        component={Products}
        options={{ ...headerStyle, headerTitle: "Products" }}
      />
      <Stack.Screen
        name={productDetail}
        component={ProductDetail}
        options={{
          ...headerStyle,
          headerTitle: "Product Detail",
        }}
      />
    </Stack.Navigator>
  );
}
