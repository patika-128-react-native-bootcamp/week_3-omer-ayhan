import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Alert, SafeAreaView, ScrollView, Text } from "react-native";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import styles from "./CreateMenu.styles";
import routes from "../../../navigation/routes";

export default function CreateMenu() {
  const navigation = useNavigation(); // using navigation hook
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");

  const route = useRoute();

  function handleNavigateDetail() {
    // check if all fields are filled
    if (!name || !description || !ingredients || !price) {
      Alert.alert("Error", "Fill all the fields");
      return;
    }

    // check if price is a number
    if (!Number(price)) {
      Alert.alert("Error", "Price must be a number");
      return;
    }
    const foodDetail = {
      name: name,
      description: description,
      ingredients: ingredients,
      price: price,
    };

    navigation.navigate(routes.menuStack.menuDetail, { foodDetail }); // navigate to menuDetail with foodDetail as parameter
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.menu_name}>{route.params.menuName}</Text>
        <Input label="Name:" onChangeText={setName} />
        <Input label="Description:" onChangeText={setDescription} multiline />
        <Input
          label="Ingredients(separate each one with a comma):"
          onChangeText={setIngredients}
        />
        <Input label="Price:" onChangeText={setPrice} keyboardType="numeric" />
        <Button title="Apply Food" onPress={handleNavigateDetail} />
      </ScrollView>
    </SafeAreaView>
  );
}
