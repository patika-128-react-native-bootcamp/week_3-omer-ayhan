import React from "react";
import { View, Text } from "react-native";
import styles from "./OrderCard.style";

export default function OrderCard({ orderData }) {
  const { name, price } = orderData; // destructuring orderData
  return (
    <View style={styles.order_container}>
      <Text style={styles.order_name}>⏺ {name}</Text>
      <Text style={styles.order_price}>{price} TL</Text>
    </View>
  );
}
