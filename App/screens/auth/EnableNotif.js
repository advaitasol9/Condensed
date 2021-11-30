import React from "react";
import { SafeAreaView, Image, Text, StyleSheet } from "react-native";
import { verticalScale, scale, moderateScale } from "../../configs/size";
import Button from "../../components/Button";

const EnableNotifications = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.skip}>Skip</Text>
      <Image
        source={require("../../../assets/chat.png")}
        height={verticalScale(240)}
        width={scale(240)}
        style={{
          height: verticalScale(240),
          width: scale(240),
          marginTop: verticalScale(88),
        }}
      />
      <Text style={styles.heading}>Enable notifications</Text>
      <Text style={styles.para}>
        Get push-notification when hiring managers and connections message you.
        Highly suggested for full experience.
      </Text>
      <Button
        label="I want to be notified"
        onPress={() => {
          navigation.navigate("Onboarding");
        }}
        style={{ marginTop: verticalScale(127) }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: scale(56),
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: moderateScale(24),
    lineHeight: verticalScale(36),
    fontWeight: "700",
    marginTop: verticalScale(64),
  },
  para: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(21),
    fontWeight: "400",
    marginTop: verticalScale(10),
    opacity: 0.7,
    textAlign: "center",
    width: scale(295),
  },
  skip: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(24),
    fontWeight: "700",
    alignSelf: "flex-end",
    marginRight: scale(41),
    color: "#BB6BD9",
  },
});

export default EnableNotifications;
