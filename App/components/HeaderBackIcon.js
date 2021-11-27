import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "../configs/size";

const Back = ({ onPress, style }) => {
  return (
    <Pressable style={[styles.container, { ...style }]} onPress={onPress}>
      <Ionicons name="chevron-back" color="#BB6BD9" size={moderateScale(18)} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: verticalScale(44),
    left: scale(40),
    height: verticalScale(52),
    width: scale(52),
    borderRadius: verticalScale(15),
    borderColor: "#cfcbd4",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Back;
