import React from "react";
import { SafeAreaView, Image, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { verticalScale, scale, moderateScale } from "../../configs/size";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/signupLogo.png")}
        height={verticalScale(100)}
        width={scale(108)}
      />
      <Text style={styles.msg}>Sign up to continue</Text>
      <Button
        label="Continue with email"
        onPress={() => {
          navigation.navigate("EnterEmail");
        }}
        style={{ marginTop: 32 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    paddingTop: verticalScale(128),
    backgroundColor: "#ffffff",
  },
  msg: {
    fontSize: moderateScale(18),
    lineHeight: verticalScale(27),
    fontWeight: "700",
    marginTop: verticalScale(78.24),
  },
});

export default Signup;
