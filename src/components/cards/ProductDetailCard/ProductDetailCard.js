import React from "react";
import { View, Text } from "react-native";

export default function ProductDetailCard({ detailData }) {
  return (
    <View style={styles.badge_container}>
      <Text style={styles.badge_label}>{detailData}</Text>
    </View>
  );
}
