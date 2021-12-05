import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 3,
  },
  image: {
    backgroundColor: "#bdbdbd",
    height: deviceSize.height / 6,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name_label: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
    margin: 5,
  },
  add_button_container: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#039be5",
  },
});
