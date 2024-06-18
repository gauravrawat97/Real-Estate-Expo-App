import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../utils/Colors";
import VerticalLine from "./VerticalLine";

function HouseCard(props) {
  const { houseDetails } = props;
  const navigation = useNavigation();
  const showDetails = () => {
    navigation.navigate("House Details", { houseDetails: houseDetails });
  };
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={showDetails}
      key={houseDetails?.id?.toString()}
    >
      <View>
        <Image
          source={{
            uri: houseDetails?.imageURL,
          }}
          style={styles.imgStyle}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 5 }}>
        <Text style={styles.addressText}>{houseDetails?.address?.street}</Text>
        <View style={styles.roomContainer}>
          <Text style={styles.roomTextStyle}>
            {houseDetails?.bedrooms} Bedrooms for sale
          </Text>
          <Text style={styles.roomDetailsText}>
            {" "}
            in {houseDetails?.address?.city}
          </Text>
        </View>
        <View style={styles.roomInfoContainer}>
          <Text style={styles.roomInfoTextStyle}>₹{houseDetails?.price}</Text>
          <VerticalLine />
          <Text style={styles.roomTextStyle}>
            {houseDetails?.squareFeet} sqft
          </Text>
          <VerticalLine />
          <Text style={styles.roomTextStyle}>
            {" "}
            {houseDetails?.bedrooms + houseDetails?.bathrooms} BHK
          </Text>
        </View>
        <View style={styles.highLightsContainer}>
          <Text style={styles.roomInfoTextStyle}>Highlights: </Text>
          {houseDetails?.features?.slice(0, 3)?.map((feature) => (
            <View style={styles.featureContainer} key={feature}>
              <Text>{feature}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 8,
    flexDirection: "row",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: Colors.White,
  },
  imgStyle: { width: 150, height: 150, borderRadius: 8 },
  addressText: { color: Colors.Black, fontWeight: "bold", fontSize: 15 },
  roomContainer: { flexDirection: "row", marginVertical: 5 },
  roomTextStyle: {
    color: Colors.Black,
    fontWeight: "bold",
    fontSize: 13,
  },
  roomDetailsText: {
    color: Colors.Black,
    fontSize: 13,
  },
  roomInfoContainer: { flexDirection: "row", flexWrap: "wrap" },
  roomInfoTextStyle: {
    color: Colors.Black,
    fontWeight: "bold",
    fontSize: 13,
  },
  highLightsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    marginVertical: 5,
  },
  featureContainer: {
    padding: 5,
    backgroundColor: Colors.Silver,
    margin: 2,
  },
});
export default HouseCard;
