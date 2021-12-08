import { StyleSheet } from "react-native";
import spacing from "../../../styles/spacing";

const styles = StyleSheet.create({
  order_container: {
    margin: spacing.tiny,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  order_name: {
    fontSize: 20,
    color: "black",
  },
  order_price: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});

export default styles;
