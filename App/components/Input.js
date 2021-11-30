import React, { useEffect, useState } from "react";
import { View, TextInput, ViewStyle, Text, StyleSheet } from "react-native";
import { moderateScale, verticalScale, scale } from "../configs/size";

import { Platform } from "react-native";

function Input({
  containerStyle,
  isRequired = false,
  title = "",
  isPassword = false,
  onTextChanged,
  defaultValue = "",
  multiline = false,
  keyboardType,
  onBlur = () => {},
  valueEmpty,
  value,
}) {
  const [state, setState] = useState({
    text: "",
  });
  const [stateActive, setStateActive] = useState(false);
  useEffect(() => {
    if (valueEmpty === title) {
      setState((pre) => ({ ...pre, text: "" }));
    }
  }, [valueEmpty]);
  useEffect(() => {
    if (value) {
      setState((pre) => ({ ...pre, text: value }));
    }
  }, [value]);
  useEffect(() => {
    if (defaultValue && defaultValue != "") {
      setState((pre) => ({ ...pre, text: defaultValue }));
    }
  }, [defaultValue]);

  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View
        style={
          multiline
            ? [
                styles.InputContainer2,
                {
                  borderColor: "#cfcbd4",
                },
              ]
            : [
                styles.InputContainer,
                {
                  borderColor: "#cfcbd4",
                },
              ]
        }
      >
        {isPassword ? (
          <TextInput
            onChangeText={(text) => {
              setState((pre) => ({ ...pre, text: text }));
              onTextChanged && onTextChanged(text);
            }}
            secureTextEntry={true}
            placeholder={stateActive ? "" : title}
            onFocus={() => setStateActive(true)}
            onBlur={() => {
              setStateActive(false);
            }}
          />
        ) : (
          <TextInput
            onChangeText={(text) => {
              setState((pre) => ({ ...pre, text: text }));
              onTextChanged && onTextChanged(text);
            }}
            placeholder={stateActive ? "" : title}
            value={state.text}
            onFocus={() => setStateActive(true)}
            keyboardType={keyboardType ? keyboardType : "default"}
            onBlur={() => {
              setStateActive(false);
              onBlur();
            }}
            defaultValue={defaultValue}
            style={multiline ? styles.input2 : styles.input}
            multiline={multiline ? multiline : false}
          />
        )}
      </View>
      {stateActive || state.text.length > 0 ? (
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontSize: moderateScale(12),
              fontWeight: "400",
              color: "rgba(0,0,0,0.4)",
            }}
          >
            {title}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: scale(295),
  },
  titleContainer: {
    position: "absolute",
    left: scale(20),
    top: verticalScale(-8),
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingHorizontal: scale(6),
  },
  InputContainer: {
    width: "100%",
    height: verticalScale(58),
    borderWidth: 1,
    borderRadius: moderateScale(15),
    justifyContent: "center",
    paddingHorizontal: scale(20),
  },
  InputContainer2: {
    width: "100%",
    height: verticalScale(100),
    borderWidth: 1,
    borderRadius: moderateScale(4),
    justifyContent: "center",
    paddingHorizontal: scale(20),
  },
  input: {
    fontSize: moderateScale(14),
    color: "#000000",
    width: "100%",
  },
  input2: {
    fontSize: moderateScale(16),
    textAlignVertical: "top",
    color: "#000000",
    height: verticalScale(155),
    width: "100%",
  },
});

export default Input;
