import Toast from "react-native-root-toast";

const ShowToast = ({
  showToast = false,
  position = -50,
  animation = false,
  hideOnPress = true,
  message = "",
}) => (
  <Toast
    visible={showToast}
    position={position}
    shadow={false}
    animation={animation}
    hideOnPress={hideOnPress}
  >
    {message}
  </Toast>
);
export default ShowToast;
