import { Dimensions, StyleSheet } from "react-native";
import spacing from "../../../styles/spacing";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get("window").height / 4,
    backgroundColor: "#e0e0e0",
  },
  name_label: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 25,
  },
  name_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7,
  },
  description: {
    margin: spacing.tiny,
    fontSize: 15,
    color: "#000",
  },
  description_container: {
    flex: 1,
    padding: spacing.tiny,
  },
  price: {
    margin: spacing.normal,
    fontSize: 35,
    textAlign: "right",
    fontWeight: "bold",
    color: "#000",
  },
  badge_group_container: {
    padding: spacing.tiny,
    paddingHorizontal: 7,
  },
});
