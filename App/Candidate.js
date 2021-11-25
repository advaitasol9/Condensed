import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

const dummySkills = [
  "React",
  "AWS",
  "Python",
  "Javascript",
  "Kubernertes",
  "Cloud",
];
const lookingFor = [
  "Software Engineer",
  "Full Stack Engineer",
  "App Developer",
];

const CardItem = ({ title }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{title}</Text>
  </View>
);

const Candidate = ({}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/user.png")}
          style={{ height: 84, width: 84, alignSelf: "center" }}
          height={84}
          width={84}
        />
        <Text style={[styles.label, { marginTo: 19 }]}>Anna Harper</Text>
        <Text style={[styles.link, { fontWeight: "700", color: "#000000" }]}>
          Software Engineer @ Uber
        </Text>
        <Text style={styles.link}>www.linkedin.com/in/aharper</Text>
        <Text style={styles.label}>Skills</Text>
        <FlatList
          data={dummySkills}
          renderItem={({ item }) => <CardItem title={item} />}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginTop: 20,
          }}
        />
        <Text style={styles.label}>Looking For</Text>
        <FlatList
          data={lookingFor}
          renderItem={({ item }) => <CardItem title={item} />}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginTop: 20,
          }}
        />
      </ScrollView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "80%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "#7165FF",
    borderWidth: 2,
    padding: 25,
    marginVertical: 25,
    marginBottom: 60,
  },
  card: {
    height: 30,
    width: 128,
    borderRadius: 7,
    backgroundColor: "#7165FF",
    paddingHorizontal: 9,
    justifyContent: "center",
  },
  cardText: {
    fontSize: 10,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  label: {
    fontSize: 20,
    color: "#7165FF",
    fontWeight: "700",
    marginTop: 28,
  },
  link: {
    fontSize: 16,
    color: "#7165FF",
    fontWeight: "400",
    marginTop: 5,
  },
});

export default Candidate;
