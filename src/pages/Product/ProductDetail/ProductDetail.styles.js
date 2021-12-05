import { Dimensions, StyleSheet } from "react-native";

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
    margin: 5,
    fontSize: 15,
    color: "#000",
  },
  description_container: {
    flex: 1,
    padding: 5,
  },
  price: {
    marginHorizontal: 10,
    fontSize: 35,
    textAlign: "right",
    fontWeight: "bold",
    color: "#000",
  },
  badge_group_container: {
    padding: 5,
    paddingHorizontal: 7,
  },
  badge_container: {
    backgroundColor: "#37474f",
    marginRight: 5,
    borderRadius: 20,
    padding: 8,
  },
  badge_label: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
});
