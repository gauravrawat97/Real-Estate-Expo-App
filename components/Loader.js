/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../utils/Colors";
import { windowHeight, windowWidth } from "../utils/Device";

function Loader() {
  return (
    <View style={styles.modalBackground} testID="modal-background">
      <ActivityIndicator
        size="large"
        color={Colors.Black}
        testID="activity-indicator"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    position: "absolute",
    backgroundColor: "transparent",
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 99999,
  },
});

export default Loader;
