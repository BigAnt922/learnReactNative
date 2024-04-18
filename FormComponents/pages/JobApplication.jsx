import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TextField from "../components/jobApplication/TextField";
import { useState } from "react";

const JobApplication = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [multi, setMulti] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="teal" style="light" />
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView>
            <Text style={styles.heading}>Job Application</Text>
            <TextField
              value={firstName}
              onChangeText={setFirstName}
              type="text"
              label="First Name"
              placeholder="John"
            />
            <TextField
              value={lastName}
              onChangeText={setLastName}
              type="text"
              label="Last Name"
              placeholder="Doe"
            />
            <TextField
              value={phone}
              onChangeText={setPhone}
              type="phone"
              label="Phone Number"
              placeholder="+91-8880093594"
            />
            <TextField
              value={email}
              onChangeText={setEmail}
              type="email"
              label="Email"
              placeholder="abc.edf@asdfg.com"
            />
            <TextField
              value={password}
              onChangeText={setPassword}
              type="password"
              label="Password"
              placeholder="password"
            />
            <TextField
              value={multi}
              onChangeText={setMulti}
              type="multi"
              label="Note To Recruter"
              placeholder="Note To Recruter"
            />
            <View style={{ paddingTop: 40 }}>
              <Button
                title="Clear"
                onPress={() => {
                  setFirstName("");
                  setLastName("");
                  setPhone("");
                  setEmail("");
                  setPassword("");
                  setMulti("");
                }}
                color="midnightblue"
              />
            </View>
            <View style={{ paddingBottom: 40, paddingTop: 40 }}>
              <Button
                title="Submit"
                onPress={() => {
                  console.log({
                    firstName,
                    lastName,
                    phone,
                    email,
                    password,
                    multi,
                  });
                }}
                color="midnightblue"
                disabled={
                  !(
                    firstName &&
                    lastName &&
                    phone &&
                    email &&
                    password &&
                    multi
                  )
                }
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: "center",
  },
  heading: {
    paddingTop: Platform.OS === "android" ? 64 : 0,
    fontSize: 40,
    fontWeight: "600",
    color: "midnightblue",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default JobApplication;
