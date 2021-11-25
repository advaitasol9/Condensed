import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Candidate from "./Candidate";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const SwipeOrCancel = ({ iconName, onPress }) => (
  <TouchableOpacity
    style={{
      height: 44,
      width: 44,
      borderRadius: 22,
      elevation: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <Ionicons name={iconName} size={20} color={"#BB6BD9"} />
  </TouchableOpacity>
);

const Candidates = () => {
  const swiper = useRef();
  return (
    <View style={styles.container}>
      <Swiper
        ref={swiper}
        cards={[1, 2, 3, 4, 5, 6, 7]}
        renderCard={() => <Candidate />}
        cardIndex={0}
        backgroundColor={"white"}
        stackSize={2}
        verticalSwipe={false}
      />
      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <SwipeOrCancel
          iconName={"close-outline"}
          onPress={() => {
            swiper.current.swipeLeft();
          }}
        />
        <SwipeOrCancel
          iconName={"star"}
          onPress={() => {
            swiper.current.swipeRight();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "30%",
    paddingBottom: 20,
    backgroundColor: "white",
  },
});

export default Candidates;
