import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../configs/size";
import Button from "../../components/Button"

const Email = () => {
  const [value, setValue] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>My email</Text>
      <Text style={styles.details}>
        Please enter your valid email. We will send you a 4-digit code to verify
        your account.{" "}
      </Text>
      <TextInput
        placeholder="abc@xyz.com"
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <Button label='Continue' onPress={() => {}} style={{marginTop: verticalScale(64)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: verticalScale(128),
    backgroundColor: "#E5E5E5",
    paddingHorizontal: scale(40)
  },
  label: {
    fontSize: moderateScale(34),
    fontWeight: "700",
    lineHeight: verticalScale(51),
    alignSelf: 'flex-start'
  },
  details: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    lineHeight: verticalScale(21),
    color: 'rgba(0, 0, 0, 0.7)',
  },
  input: {
    width: scale(295),
    height: verticalScale(58),
    borderRadius: 15,
    borderColor: "#cfcbd4",
    borderWidth: 1,
    marginTop: verticalScale(32),
    paddingLeft: scale(17)
  },
});

export default Email;
