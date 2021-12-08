import React from "react";
import { useRoute } from "@react-navigation/core";
import { SafeAreaView, View, Text } from "react-native";

import styles from "./MenuDetail.styles";

export default function MenuDetail() {
  const route = useRoute();
  const { foodDetail } = route.params;

  const renderIngredients = (item, index) => {
    return (
      <View style={styles.badge_container} key={`${item}|-||${index}`}>
        <Text style={styles.badge_label}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Name: {foodDetail.name}</Text>
        <Text style={styles.label}>Description: {foodDetail.description}</Text>
        <Text style={styles.label}>Price: {foodDetail.price} TL</Text>
        <Text style={styles.label}>Ingredients:</Text>
        <View style={styles.ingredients}>
          {/* 
           split the ingredients string to array by commas and map the array to render the ingredients
          */}
          {foodDetail.ingredients.split(",").map(renderIngredients)}
        </View>
      </View>
    </SafeAreaView>
  );
}
