import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { SafeAreaView, FlatList } from "react-native";

import styles from "./Tables.styles";
import TableCard from "../../../components/cards/TableCard";
import mock_data from "../../../MOCK_DATA.json";
import routes from "../../../navigation/routes";

export default function Table() {
  const route = useRoute();
  const navigation = useNavigation();
  const [tables, setTables] = useState(mock_data.tables); // save the tables data in state

  const handleNavigateTableDetail = (selectedTable) => () => {
    //  navigate to the table detail page with the selected table data as params
    navigation.navigate(routes.tablesStack.tableUpdate, {
      table: selectedTable,
    });
  };

  const renderTables = ({ item }) => (
    <TableCard item={item} onSelect={handleNavigateTableDetail(item)} />
  );

  useEffect(() => {
    // if the route params is empty cancel the effect
    if (!route.params) {
      return;
    }

    const { updatedTable } = route.params; // get the updated table data from the route params
    const updatedTableIndex = tables.findIndex((t) => t.id === updatedTable.id); // check if the updated table is in the tables array
    const newTables = [...tables]; // create a new array with the old tables data in it
    newTables[updatedTableIndex] = updatedTable; // update the table data in the new array with the updated table data from the route params
    setTables(newTables); // update the tables state
  }, [route.params]); // run the effect only when the route parameter changes

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={tables} renderItem={renderTables} numColumns={2} />
    </SafeAreaView>
  );
}
