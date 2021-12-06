import React from "react";
import { View, Text } from "react-native";
import styles from "./ProductDetailCard.styles";

export default function ProductDetailCard({ detailData }) {
  return (
    <View style={styles.badge_container}>
      <Text style={styles.badge_label}>{detailData}</Text>
    </View>
  );
}
