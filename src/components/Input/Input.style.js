import { StyleSheet } from "react-native";
import spacing from "../../styles/spacing";
import radius from "../../styles/radius";

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.large,
  },
  input_container: {
    paddingVertical: 0,
    backgroundColor: "#e0e0e0",
    padding: spacing.normal,
    borderRadius: radius.sharp,
    borderWidth: 1,
    borderColor: "#bdbdbd",
  },
  label: {
    color: "#000",
    fontSize: 16,
    marginBottom: spacing.small,
  },
});

export default styles;
