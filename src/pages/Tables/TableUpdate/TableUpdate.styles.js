import { StyleSheet } from "react-native";
import spacing from "../../../styles/spacing";

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.normal,
  },
  name_label: {
    fontWeight: "bold",
    margin: 5,
    textAlign: "center",
    color: "black",
    fontSize: 25,
  },
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
  total: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "right",
    color: "black",
  },
  empty_table_text: {
    fontSize: 25,
    color: "#666",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: spacing.large,
  },
});
