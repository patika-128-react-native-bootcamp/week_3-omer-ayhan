import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import Button from "../../../components/Button";
import OrderCard from "../../../components/cards/OrderCard";
import routes from "../../../navigation/routes";

import styles from "./TableUpdate.styles";

export default function TableUpdate() {
  const navigation = useNavigation(); // navigation hook for navigating between screens
  const route = useRoute(); // route hook for getting the route params
  const { table } = route.params;

  const renderOrders = ({ item }) => <OrderCard orderData={item} />;

  const extractId = (_, index) => `**${index}**`; // extract id from the data in the FlatList

  const hasOrders = table.orders.length > 0; // check if the table has any orders

  const { price: total } = table.orders.reduce(
    // get the total price of the orders
    (p, c) => ({
      price: p.price + c.price,
    }),
    { price: 0 } // initial value if the table has no orders
  );

  function handleCloseTable() {
    navigation.navigate(routes.tablesStack.tables, {
      // navigate to the tables screen
      updatedTable: { ...table, isActive: false }, // update the table to be inactive when button is pressed
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.name_label}>{table.name}</Text>
        {hasOrders ? ( // if the table has orders render the FlatList
          <FlatList
            data={table.orders}
            renderItem={renderOrders}
            keyExtractor={extractId}
          />
        ) : (
          // if the table has no orders render a message
          <Text style={styles.empty_table_text}>No orders</Text>
        )}
        <Text style={styles.total}>Total {total} TL</Text>
      </View>
      {table.isActive && ( // if isActive value in the table is true render the button
        <Button title="Close Table" onPress={handleCloseTable} />
      )}
    </SafeAreaView>
  );
}
