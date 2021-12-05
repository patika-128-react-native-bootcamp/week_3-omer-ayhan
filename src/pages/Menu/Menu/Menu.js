import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import styles from "./Menu.styles";
import MenuCard from "../../../components/cards/MenuCard";

import mockData from "../../../MOCK_DATA.json";

export default function Menu() {
  const navigation = useNavigation();

  const handleNavigateMenuCreate = (selectedMenuName) => () =>
    navigation.navigate("CreateMenuPage", { menuName: selectedMenuName });

  const renderMenu = ({ item }) => (
    <MenuCard item={item} onSelect={handleNavigateMenuCreate(item.name)} />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList data={mockData.menu} renderItem={renderMenu} />
        </View>
      </SafeAreaView>
    </View>
  );
}
