import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import styles from "./Menu.styles";
import MenuCard from "../../../components/cards/MenuCard";

import mockData from "../../../MOCK_DATA.json";
import routes from "../../../navigation/routes";

export default function Menu() {
  const navigation = useNavigation();

  // navigate to the route with menuName parameter when the card is pressed
  // pass the menu name to the create menu screen
  const handleNavigateMenuCreate = (selectedMenuName) => () =>
    navigation.navigate(routes.menuStack.createMenu, {
      menuName: selectedMenuName,
    });

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
