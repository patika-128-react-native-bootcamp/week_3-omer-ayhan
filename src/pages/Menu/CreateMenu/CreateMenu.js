import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { SafeAreaView, ScrollView, Text } from "react-native";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import styles from "./CreateMenu.styles";

export default function CreateMenu() {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();

  const route = useRoute();

  function handleNavigateDetail() {
    const fd = {
      name: name,
      description: description,
      ingredients: ingredients,
      price: price,
    };

    navigation.navigate("MenuDetailPage", { fd });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.menu_name}>{route.params.menuName}</Text>
        <Input label="Name" onChangeText={setName} />
        <Input label="Description" onChangeText={setDescription} />
        <Input label="Ingredients" onChangeText={setIngredients} />
        <Input label="Price" onChangeText={setPrice} keyboardType="numeric" />
        <Button title="Apply Food" onPress={handleNavigateDetail} />
      </ScrollView>
    </SafeAreaView>
  );
}
