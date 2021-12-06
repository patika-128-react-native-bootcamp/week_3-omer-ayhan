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
