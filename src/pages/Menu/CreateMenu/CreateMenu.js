import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Alert, SafeAreaView, ScrollView, Text } from "react-native";
import { Formik } from "formik";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import styles from "./CreateMenu.styles";

export default function CreateMenu() {
  const navigation = useNavigation();

  const route = useRoute();

  const initialValues = {
    name: "",
    description: "",
    ingredients: "",
    price: "",
  };

  function handleNavigateDetail({ name, description, ingredients, price }) {
    if (!name || !description || !ingredients || !price) {
      Alert.alert("Error", "Fill all the fields");
      return;
    }

    if (!Number(price)) {
      Alert.alert("Error", "Price must be a number");
      return;
    }
    const fd = {
      name: name,
      description: description,
      ingredients: ingredients,
      price: price,
    };

    navigation.navigate("MenuDetailPage", { fd });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={handleNavigateDetail}>
        {({ values, handleChange, handleSubmit }) => (
          <ScrollView>
            <Text style={styles.menu_name}>{route.params.menuName}</Text>
            <Input
              label="Name:"
              value={values.name}
              onChangeText={handleChange("name")}
            />
            <Input
              label="Description:"
              value={values.description}
              onChangeText={handleChange("description")}
              multiline
            />
            <Input
              label="Ingredients(separate each one with a comma):"
              value={values.ingredients}
              onChangeText={handleChange("ingredients")}
            />
            <Input
              label="Price:"
              value={values.price}
              onChangeText={handleChange("price")}
              keyboardType="numeric"
            />
            <Button title="Apply Food" onPress={handleSubmit} />
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
}
