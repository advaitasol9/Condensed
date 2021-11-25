import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Candidate from "../Candidate.js";
import Email from '../screens/auth/Email'
import Signup from '../screens/auth/Signup'


const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Signup'}>
      <Stack.Screen name="Onboarding" component={Candidate} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="EnterEmail" component={Email} />
      <Stack.Screen name="EnterCode" component={Candidate} />
      <Stack.Screen name="EnterPassword" component={Candidate} />
      <Stack.Screen name="ProfileDetails1" component={Candidate} />
      <Stack.Screen name="ProfileDetails2" component={Candidate} />
      <Stack.Screen name="Connect" component={Candidate} />
      <Stack.Screen name="EnableNotifs" component={Candidate} />
    </Stack.Navigator>
  );
};

export default Auth;
