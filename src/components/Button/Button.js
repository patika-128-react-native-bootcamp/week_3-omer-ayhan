import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./Button.styles";

export default function Button({ title, variant = "default", ...rest }) {
  return (
    // change the style of the button based on the variant prop
    <TouchableOpacity style={styles[variant].container} {...rest}>
      <Text style={styles[variant].text}>{title}</Text>
    </TouchableOpacity>
  );
}
