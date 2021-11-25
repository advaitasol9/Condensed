import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../configs/size";

const Button = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container,{...style}]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(56),
    width: scale(295),
    backgroundColor: "#BB6BD9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: verticalScale(15),
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    lineHeight: verticalScale(24),
    color: "#ffffff",
  },
});

export default Button;
