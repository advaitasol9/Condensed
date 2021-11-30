import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Back from "../../components/HeaderBackIcon";
import { moderateScale, scale, verticalScale } from "../../configs/size";

const OTPInputLength = 4;

const OTP = ({ navigation }) => {
  const [min, setMin] = useState(2);
  const [sec, setSec] = useState(59);
  const [otp, setOtp] = useState([]);

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sec == 0) {
        if (min != 0) {
          setMin(min - 1);
          setSec(59);
        }
      } else {
        setSec(sec - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [sec, min]);

  const focusNext = useCallback(
    (value, index) => {
      if (value) {
        const temp = [...otp];
        temp[index] = value;
        setOtp(temp);
        if (index < OTPInputLength - 1) {
          inputRef.current[index + 1].focus();
        } else if (index == OTPInputLength - 1) {
          for (let i = 0; i <= otp.length - 2; i++) {
            console.log(i, otp[i]);
            if (!otp[i]) return;
          }
          inputRef.current[index].blur();
          navigation.navigate("EnterPassword");
        }
      }
    },
    [otp]
  );

  const focusPrevious = useCallback(
    (keyType, index) => {
      if (keyType == "Backspace" && index != 0) {
        inputRef.current[index - 1].focus();
      }
      const temp = [...otp];
      temp[index] = "";
      setOtp(temp);
    },
    [otp]
  );

  const renderInput = useCallback(() => {
    const input = Array(OTPInputLength).fill(0);
    return input.map((v, i) => {
      const isNotEmpty = otp[i];
      return (
        <TextInput
          placeholder="0"
          value={otp[i]}
          style={[
            styles.input,
            {
              backgroundColor: isNotEmpty ? "#BB6BD9" : "#FFFFFF",
              color: !isNotEmpty ? "#BB6BD9" : "#FFFFFF",
              textAlign: "center",
            },
          ]}
          onChangeText={(v) => {
            focusNext(v, i);
          }}
          onKeyPress={(e) => {
            focusPrevious(e.nativeEvent.key, i);
          }}
          ref={(r) => (inputRef.current[i] = r)}
          keyboardType={"numeric"}
          maxLength={1}
        />
      );
    });
  }, [otp]);

  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.heading}>{`${min.toString().padStart(2, 0)}:${sec
        .toString()
        .padStart(2, 0)}`}</Text>
      <Text style={styles.para}>Type the verification code we’ve sent you</Text>
      <View style={styles.inputRow}>{renderInput()}</View>
      <Pressable style={{ marginTop: 53 }} hitSlop={10}>
        <Text style={styles.sendAgain}>Send Again</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(128),
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    height: verticalScale(70),
    width: scale(67),
    borderRadius: moderateScale(15),
    borderColor: "#BB6BD9",
    borderWidth: 1,
    fontSize: moderateScale(34),
    fontWeight: "700",
  },
  inputRow: {
    flexDirection: "row",
    width: scale(295),
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(48),
  },
  heading: {
    fontSize: moderateScale(34),
    lineHeight: verticalScale(51),
    fontWeight: "700",
  },
  para: {
    fontSize: moderateScale(18),
    lineHeight: verticalScale(27),
    fontWeight: "400",
    marginTop: verticalScale(8),
    opacity: 0.7,
    textAlign: "center",
    width: scale(215),
  },
  sendAgain: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(24),
    fontWeight: "700",
    color: "#BB6BD9",
  },
});

export default OTP;
