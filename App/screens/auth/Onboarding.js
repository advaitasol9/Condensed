import React, { useRef } from "react";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Button from "../../components/Button";
import { moderateScale, scale, verticalScale } from "../../configs/size";

const professionalData = [
  {
    img: require("../../../assets/onboarding1.png"),
    title: "Meet hiring managers",
    desc: "Connect directly with leading professionals hiring for leading opportunities. Executives want to chat with you, so no more waiting to hear back.",
  },
  {
    img: require("../../../assets/onboarding2.png"),
    title: "Custom recommendations",
    desc: "Explore an exclusive network of professionals and job opportunities custom filtered for your profile and preferences, not another laundry list.",
  },
  {
    img: require("../../../assets/onboarding3.png"),
    title: "Grow and earn",
    desc: "Refer your friends to managers to hiring managers / opportunities and grow your network through LightSwitch. Successful referrals earn you rewards.",
  },
];

const managerData = [
  {
    img: require("../../../assets/onboarding1.png"),
    title: "Discover diversity",
    desc: "Discover a diverse, passionate community of professionals interested in discussing your opportunities.",
  },
  {
    img: require("../../../assets/onboarding2.png"),
    title: "Fill positions fast",
    desc: "No more recruiting ping pong. Connect directly with rising talent who have already expressed interest in your positions.",
  },
  {
    img: require("../../../assets/onboarding3.png"),
    title: "Take action",
    desc: "Hire 5x faster with an exclusive platform designed to connect you to high-quality candidates in minutes. No more waiting.",
  },
];

const Onboarding = ({ navigation }) => {
  const carRef = useRef();

  const [activeIndex, setActiveIndex] = useState(0);
  const [userType, setUserType] = useState("professional"); // professioanl || manager

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={item.img}
        height={verticalScale(360)}
        width={scale(235)}
        style={styles.itemImage}
      />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDesc}>{item.desc}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        ref={carRef}
        renderItem={renderItem}
        data={userType == "professional" ? professionalData : managerData}
        windowSize={scale(375)}
        sliderWidth={scale(375)}
        itemWidth={scale(275)}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
        loop={true}
      />
      <Pagination
        carouselRef={carRef}
        activeDotIndex={activeIndex}
        dotsLength={managerData.length}
        containerStyle={{
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      />
      <Button
        label="Create an account"
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={{ marginTop: verticalScale(15) }}
      />
      <View style={styles.row}>
        <Text style={styles.para}>Already have an account? </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Signup");
          }}
          hitSlop={10}
        >
          <Text style={styles.para2}>Sign In</Text>
        </Pressable>
      </View>
      <Text
        style={styles.userType}
        onPress={() => {
          if (userType == "professional") {
            setUserType("manager");
          } else {
            setUserType("professional");
          }
        }}
      >
        {userType == "professional"
          ? "I'm a PROFESSIONAL"
          : "I’m a HIRING MANAGER"}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: verticalScale(76),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  para: {
    fontSize: moderateScale(16),
    fontWeight: "400",
    lineHeight: verticalScale(24),
    color: "#000000",
    opacity: 0.7,
  },
  para2: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    lineHeight: verticalScale(24),
    color: "#BB6BD9",
  },
  userType: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    lineHeight: verticalScale(21),
    color: "#BB6BD9",
    marginTop: verticalScale(25),
  },
  itemContainer: {
    height: verticalScale(513),
    width: "100%",
    alignItems: "center",
  },
  itemImage: {
    width: scale(235),
    height: verticalScale(360),
    borderRadius: moderateScale(15),
  },
  itemTitle: {
    fontSize: moderateScale(24),
    fontWeight: "700",
    lineHeight: verticalScale(36),
    color: "#BB6BD9",
    marginTop: verticalScale(44),
  },
  itemDesc: {
    fontSize: moderateScale(14),
    width: scale(275),
    fontWeight: "400",
    lineHeight: verticalScale(21),
    color: "#323755",
    marginTop: verticalScale(10),
    textAlign: "center",
  },
});

export default Onboarding;
