import { StyleSheet } from "react-native";
import radius from "../../../styles/radius";
import spacing from "../../../styles/spacing";

export default StyleSheet.create({
  container: {
    borderColor: "#bdbdbd",
    borderWidth: 1,
    borderRadius: radius.soft,
    margin: spacing.normal,
    padding: spacing.normal,
  },
  label: {
    color: "#000",
    fontSize: 14,
    marginVertical: spacing.small,
    flexWrap: "wrap",
  },
  ingredients: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badge_container: {
    backgroundColor: "#37474f",
    margin: spacing.micro,
    borderRadius: 15,
    padding: 7,
  },
  badge_label: {
    fontSize: 12,
    color: "#e0e0e0",
    fontWeight: "bold",
  },
});
