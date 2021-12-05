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
import styles from "./ProductDetail.styles";

export default function ProductDetail() {
  const route = useRoute();
  const { product } = route.params;

  const image = {
    uri: product.imageURL,
  };

  const extractId = (item, index) => `${item}_${index}`;

  const renderIngredients = ({ item }) => (
    <View style={styles.badge_container}>
      <Text style={styles.badge_label}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={image} />
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{product.name}</Text>
          {product.isPopular && <Icon name="star" color="orange" size={25} />}
        </View>
        <View style={styles.badge_group_container}>
          <FlatList
            horizontal
            bounces={false}
            keyExtractor={extractId}
            data={product.ingredients}
            renderItem={renderIngredients}
          />
        </View>

        <View style={styles.description_container}>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Text style={styles.price}>{product.price} TL</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
