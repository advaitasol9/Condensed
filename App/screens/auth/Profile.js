import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";

import Back from "../../components/HeaderBackIcon";
import { moderateScale, scale, verticalScale } from "../../configs/size";

const CardItem = ({ title, deleteItem }) => (
  <View style={styles.card}>
    <TouchableOpacity
      style={{
        position: "absolute",
        top: verticalScale(-9),
        right: verticalScale(-9),
        zIndex: 1,
      }}
      //   hitSlop={moderateScale(35)}
      onPress={() => {
        alert("pressed");
        // deleteItem();
      }}
    >
      <Image
        source={require("../../../assets/close.png")}
        height={verticalScale(14)}
        width={scale(14)}
        style={{ height: verticalScale(14), width: scale(14) }}
      />
    </TouchableOpacity>
    <Text style={styles.cardText}>{title}</Text>
  </View>
);

const ItemList = ({ data, setData, label }) => {
  const [value, setValue] = useState();
  const [inputVisible, setInputVisible] = useState(false);

  const onDeleteItem = (index) => {
    console.log(index);
    alert(index);
    const temp = [...data];
    temp.splice(index, 1);
    console.log("tmp", temp);
    setData(temp);
  };

  const onAddItem = () => {
    setData([...data, value]);
    setValue();
    setInputVisible(false);
  };

  return (
    <View style={{ marginTop: verticalScale(32) }}>
      <View style={styles.row}>
        <Text style={[styles.label, { marginTop: verticalScale(0) }]}>
          {label}
        </Text>
        <Pressable
          onPress={() => {
            setInputVisible(true);
          }}
        >
          <Image
            source={require("../../../assets/add.png")}
            height={verticalScale(19)}
            width={scale(18)}
            style={{ height: verticalScale(19), width: scale(18) }}
          />
        </Pressable>
      </View>
      {inputVisible ? (
        <View>
          <TextInput
            placeholder="Enter here..."
            value={value}
            onChangeText={setValue}
            style={styles.input}
          />
          <Button
            label={"ADD"}
            onPress={onAddItem}
            style={{
              marginTop: verticalScale(18),
              width: scale(80),
              marginLeft: scale(107.5),
            }}
          />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <CardItem
              title={item}
              deleteItem={() => {
                onDeleteItem(index);
              }}
            />
          )}
          keyExtractor={(item, index) => `${item}${index}`}
          numColumns={2}
          columnWrapperStyle={{
            width: scale(274),
            justifyContent: "space-between",
          }}
        />
      )}
    </View>
  );
};

const ProfileDetails2 = ({ navigation }) => {
  const [role, setRole] = useState();
  const [company, setCompany] = useState();
  const [skills, setSkills] = useState([]);
  const [lookingFor, setLookingFor] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.heading}>What do you do?</Text>
        <Text style={styles.label}>Current Role </Text>
        <TextInput
          placeholder="XYZ"
          value={role}
          onChangeText={setRole}
          style={styles.input}
        />
        <Text style={styles.label}>Current Company </Text>
        <TextInput
          placeholder="ABC Inc."
          value={company}
          onChangeText={setCompany}
          style={styles.input}
        />

        <ItemList label={"Skills"} data={skills} setData={setSkills} />
        <ItemList
          label={"Looking For"}
          data={lookingFor}
          setData={setLookingFor}
        />

        <Button
          label="Continue"
          onPress={() => {}}
          style={{ marginTop: verticalScale(35) }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: verticalScale(115),
    paddingLeft: scale(41),
  },
  heading: {
    fontSize: moderateScale(34),
    fontWeight: "700",
    lineHeight: verticalScale(51),
  },
  label: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    lineHeight: verticalScale(27),
    color: "#7165FF",
    marginTop: verticalScale(18),
  },
  input: {
    width: scale(295),
    height: verticalScale(58),
    borderRadius: 15,
    borderColor: "#cfcbd4",
    borderWidth: 1,
    marginTop: verticalScale(10),
    paddingLeft: scale(17),
  },
  card: {
    height: verticalScale(30),
    width: scale(125),
    borderRadius: moderateScale(7),
    backgroundColor: "#7165FF",
    paddingHorizontal: scale(9),
    justifyContent: "center",
    marginTop: verticalScale(18),
  },
  cardText: {
    fontSize: 10,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  row: {
    width: scale(299),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProfileDetails2;
