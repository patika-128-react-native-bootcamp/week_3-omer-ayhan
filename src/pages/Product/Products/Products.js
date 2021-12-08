import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView, FlatList } from "react-native";
import ProductCard from "../../../components/cards/ProductCard/ProductCard";
import mockData from "../../../MOCK_DATA.json";
import routes from "../../../navigation/routes";

export default function Products() {
  const navigation = useNavigation();

  const navigate = (selectedProduct) => () => {
    navigation.navigate(routes.productsStack.productDetail, {
      product: selectedProduct,
    });
  };

  const renderProduct = ({ item }) => (
    <ProductCard item={item} onSelect={navigate(item)} />
  );
  const extractId = ({ p_id }, index) => `${p_id}||${index}`; // extract id from product object

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={extractId}
        data={mockData.products}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}
