import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ButtonComponent from "../components/Button";
import Loader from "../components/Loader";
import ShowToast from "../components/Toast";
import { unlockHouse } from "../networks/APICalls";
import { Colors } from "../utils/Colors";
import { windowWidth } from "../utils/Device";
import { isNearby } from "../utils/FindDistance";
import { sendPushNotification } from "../utils/PushNotifications";
import VerticalLine from "../components/VerticalLine";
import { useLocation, useNotificationToken } from "../Context";
function HouseDetails({ route }) {
  const { location } = useLocation();
  const [isLoading, setLoading] = useState(false);
  const [houseUnlockedStatus, setHouseUnlockedStatus] = useState(null);

  const houseDetails = route?.params?.houseDetails;
  const isHouseNearUserLocation = isNearby(
    location?.lat,
    location?.long,
    houseDetails?.location[0],
    houseDetails?.location[1]
  );
  const getHouseDetails = async () => {
    setLoading(true);
    try {
      const isHouseUnlocked = await unlockHouse(houseDetails?.id);
      setLoading(false);
      setHouseUnlockedStatus(isHouseUnlocked);
      sendPushNotification(
        expoPushToken,
        "House Notification",
        `Congratulations! ${houseDetails?.address?.street} is unlocked for you!`
      );
    } catch (error) {
      setHouseUnlockedStatus(error); // "Unable to unlock house"
      setLoading(false);
    }
  };
  const { expoPushToken } = useNotificationToken();

  return (
    <View style={styles.mainContainer} key={houseDetails?.id?.toString()}>
      <View>
        <Image
          source={{
            uri: houseDetails?.imageURL,
          }}
          style={styles.imgStyle}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.addressText}>
          {houseDetails?.address?.street} {houseDetails?.address?.city}
        </Text>
        <View style={styles.houseDetailsContainer}>
          <Text style={styles.boldText}>₹{houseDetails?.price}</Text>
          <VerticalLine />
          <Text style={styles.boldText}>{houseDetails?.squareFeet} sqft</Text>
          <VerticalLine />
          <Text style={styles.boldText}>
            {" "}
            {houseDetails?.bedrooms + houseDetails?.bathrooms} BHK
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{houseDetails?.about}</Text>
        </View>

        <View style={styles.highlightContainer}>
          <Text style={styles.boldText}>Highlights: </Text>
          {houseDetails?.features?.map((feature, index) => (
            <View style={styles.featureContainer} key={feature + index}>
              <Text>{feature}</Text>
            </View>
          ))}
        </View>
        {isHouseNearUserLocation && (
          <ButtonComponent
            text={"Unlock the House?"}
            btnAction={getHouseDetails}
          />
        )}
      </View>
      {isLoading && <Loader />}
      {houseUnlockedStatus != null && (
        <ShowToast
          showToast={!isLoading}
          position={-50}
          shadow={false}
          animation={false}
          hideOnPress={true}
          message={houseUnlockedStatus}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
  imgStyle: { width: windowWidth, height: 150 },
  textContainer: { flex: 1, padding: 5 },
  addressText: { color: Colors.Black, fontWeight: "bold", fontSize: 20 },
  houseDetailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  boldText: {
    color: Colors.Black,
    fontWeight: "bold",
    fontSize: 13,
  },
  descriptionContainer: { flexDirection: "row", marginVertical: 5 },
  descriptionText: {
    color: Colors.Black,
    fontSize: 15,
    lineHeight: 20,
  },
  highlightContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginVertical: 5,
  },
  featureContainer: {
    padding: 5,
    backgroundColor: Colors.Silver,
    margin: 2,
  },
});
export default HouseDetails;
