import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Candidate from "../Candidate.js";
import Email from "../screens/auth/Email";
import Signup from "../screens/auth/Signup";
import Password from "../screens/auth/Password.js";
import ProfileDetails2 from "../screens/auth/Profile.js";
import EnableNotifications from "../screens/auth/EnableNotif.js";
import OTP from "../screens/auth/OTP.js";
import Profile1 from "../screens/auth/Profile1.js";
import Onboarding from "../screens/auth/Onboarding.js";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Onboarding"}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="EnterEmail" component={Email} />
      <Stack.Screen name="EnterCode" component={OTP} />
      <Stack.Screen name="EnterPassword" component={Password} />
      <Stack.Screen name="ProfileDetails1" component={Profile1} />
      <Stack.Screen name="ProfileDetails2" component={ProfileDetails2} />
      <Stack.Screen name="Connect" component={Candidate} />
      <Stack.Screen name="EnableNotifs" component={EnableNotifications} />
    </Stack.Navigator>
  );
};

export default Auth;
