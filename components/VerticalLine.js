import { View } from "react-native";
import { Colors } from "../utils/Colors";
const VerticalLine = () => (
  <View
    style={{
      height: 20,
      borderRightWidth: 1,
      borderColor: Colors.Gray,
      marginHorizontal: 3,
    }}
  />
);
export default VerticalLine;
