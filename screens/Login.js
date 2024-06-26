import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonComponent from "../components/Button";
import { Colors } from "../utils/Colors";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
  const validateEmail = (email) => {
    // Simple regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Invalid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password too short");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      navigation.navigate("House List");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        <ButtonComponent
          btnAction={handleLogin}
          text={"Login"}
          btnContainerStyle={styles.btnStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 16,
  },
  form: {
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: Colors.Gray,
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  error: {
    color: Colors.Red,
    marginBottom: 12,
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: Colors.Black,
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default Login;
