import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../utils/Colors";

const ButtonComponent = ({
  text,
  btnAction,
  btnContainerStyle = styles.btnContainer,
  textStyle = styles.textStyle,
}) => (
  <TouchableOpacity
    onPress={btnAction}
    style={btnContainerStyle}
    testID="btnContainer"
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

export default ButtonComponent;
const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 1,
    borderColor: Colors.Black,
    alignSelf: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 8,
    marginVertical: 20,
  },
  textStyle: { fontWeight: "bold", color: Colors.Black },
});
