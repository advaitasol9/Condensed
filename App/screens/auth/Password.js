import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

import Button from "../../components/Button";
import { moderateScale, scale, verticalScale } from "../../configs/size";
import Back from "../../components/HeaderBackIcon";

const Password = ({ navigation }) => {
  const [pwd, setPwd] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.heading}>Create Password</Text>
      <TextInput
        placeholder="Enter here..."
        value={pwd}
        onChangeText={setPwd}
        style={styles.input}
        secureTextEntry={true}
      />
      <Button
        label="Continue"
        onPress={() => {
          navigation.navigate("ProfileDetails1");
        }}
        style={{ marginTop: verticalScale(64) }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: verticalScale(128),
    paddingLeft: scale(40),
  },
  heading: {
    fontSize: moderateScale(34),
    fontWeight: "700",
    lineHeight: verticalScale(51),
  },
  input: {
    width: scale(295),
    height: verticalScale(58),
    borderRadius: 15,
    borderColor: "#cfcbd4",
    borderWidth: 1,
    marginTop: verticalScale(74),
    paddingLeft: scale(17),
  },
});

export default Password;
