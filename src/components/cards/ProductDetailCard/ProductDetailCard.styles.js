import { StyleSheet } from "react-native";
import spacing from "../../../styles/spacing";

const styles = StyleSheet.create({
  badge_container: {
    backgroundColor: "#37474f",
    marginRight: spacing.tiny,
    borderRadius: 20,
    padding: 8,
  },
  badge_label: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
