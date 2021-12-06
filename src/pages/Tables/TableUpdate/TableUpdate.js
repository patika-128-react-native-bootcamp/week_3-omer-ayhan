import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import Button from "../../../components/Button";
import OrderCard from "../../../components/cards/OrderCard";
import routes from "../../../navigation/routes";

import styles from "./TableUpdate.styles";

export default function TableUpdate() {
  const navigation = useNavigation();
  const route = useRoute();
  const { table } = route.params;

  const renderOrders = ({ item }) => <OrderCard orderData={item} />;

  const extractId = (_, index) => `**${index}**`;

  const hasOrders = table.orders.length > 0;

  const { price: total } = table.orders.reduce(
    (p, c) => ({
      price: p.price + c.price,
    }),
    { price: 0 }
  );

  function handleCloseTable() {
    navigation.navigate(routes.tablesStack.tables, {
      updatedTable: { ...table, isActive: false },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.name_label}>{table.name}</Text>
        {hasOrders ? (
          <FlatList
            data={table.orders}
            renderItem={renderOrders}
            keyExtractor={extractId}
          />
        ) : (
          <Text style={styles.empty_table_text}>No orders</Text>
        )}
        <Text style={styles.total}>Total {total} TL</Text>
      </View>
      {table.isActive && (
        <Button title="Close Table" onPress={handleCloseTable} />
      )}
    </SafeAreaView>
  );
}
