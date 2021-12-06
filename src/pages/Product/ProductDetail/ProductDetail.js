import React from "react";
import { useRoute } from "@react-navigation/core";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProductDetailCard from "../../../components/cards/ProductDetailCard";
import styles from "./ProductDetail.styles";

export default function ProductDetail() {
  const route = useRoute();
  const { product } = route.params;

  const image = {
    uri: product.imageURL,
  };

  const extractId = (item, index) => `${item}_${index}`;

  const renderIngredients = ({ item }) => (
    <ProductDetailCard detailData={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={image} />
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{product.name}</Text>
          {product.isPopular && <Icon name="star" color="orange" size={25} />}
        </View>
        <FlatList
          style={styles.badge_group_container}
          horizontal
          bounces={false}
          keyExtractor={extractId}
          data={product.ingredients}
          renderItem={renderIngredients}
        />

        <View style={styles.description_container}>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Text style={styles.price}>{product.price} TL</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
