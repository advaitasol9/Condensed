import React, { useRef, useEffect } from "react";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "../../components/Button";
import Back from "../../components/HeaderBackIcon";
import Input from "../../components/Input";
import { moderateScale, scale, verticalScale } from "../../configs/size";

const Profile1 = ({ navigation }) => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [url, setURL] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.heading}>Tell us about you</Text>
      <View style={styles.imgContainer}>
        <Image
          source={
            image ? { uri: image } : require("../../../assets/avatar.png")
          }
          height={verticalScale(149)}
          width={scale(149)}
          style={{
            height: verticalScale(149),
            width: scale(145),
            borderRadius: 25,
          }}
        />
        <Pressable style={styles.cameraIcon} hitSlop={10} onPress={pickImage}>
          <Image
            source={require("../../../assets/camera.png")}
            height={verticalScale(49)}
            width={scale(49)}
            style={{
              height: verticalScale(49),
              width: scale(49),
            }}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <Input
        title="First name"
        onTextChanged={setFName}
        value={fName}
        containerStyle={{ marginTop: verticalScale(52) }}
      />
      <Input
        title="Last name"
        onTextChanged={setLName}
        value={lName}
        containerStyle={{ marginTop: verticalScale(14) }}
      />
      <Input
        title="LinkedIn URL"
        onTextChanged={setURL}
        value={url}
        containerStyle={{ marginTop: verticalScale(21) }}
      />
      <Button
        label="Continue"
        onPress={() => {
          navigation.navigate("ProfileDetails2");
        }}
        style={{ marginTop: verticalScale(80) }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: verticalScale(115),
    backgroundColor: "#ffffff",
  },
  heading: {
    fontWeight: "700",
    fontSize: moderateScale(34),
    lineHeight: moderateScale(51),
    alignSelf: "flex-start",
    marginLeft: scale(40),
  },
  imgContainer: {
    height: verticalScale(149),
    width: scale(145),
    borderRadius: 25,
    borderWidth: 0.5,
    marginTop: verticalScale(32),
  },
  cameraIcon: {
    position: "absolute",
    height: verticalScale(51),
    width: scale(51),
    bottom: verticalScale(-10),
    right: scale(-13),
    borderRadius: moderateScale(25.5),
  },
});

export default Profile1;
