import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./TableCard.style";

export default function MenuCard({ item, onSelect }) {
  const { isActive, orders, name } = item;

  const tableColor = isActive ? "#a5d6a7" : "#bdbdbd";

  const hasOrders = orders.length > 0;

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.container, { borderColor: tableColor }]}>
        <View style={styles.image}>
          {hasOrders ? (
            orders.map((order, i) => (
              <Text key={i} style={styles.order}>
                ⏺ {order.name}
              </Text>
            ))
          ) : (
            <Text style={styles.empty_table_text}>No orders</Text>
          )}
        </View>
        <View style={[styles.name_container, { backgroundColor: tableColor }]}>
          <Text style={styles.name_label}>{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
