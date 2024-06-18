import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Houses from "../assets/mockData/houses.json";
import HouseCard from "../components/HouseCard";
function HouseList() {
  const [houseList, setHouseList] = useState([]);
  useEffect(() => {
    setHouseList(Houses?.houses);
  }, []);
  const renderItem = ({ item, index }) => (
    <HouseCard key={`${item.id}_${index}`} houseDetails={item} />
  );

  return (
    <FlatList
      data={houseList}
      keyExtractor={(item, index) => `${item.id}_${index}`}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
}
export default HouseList;
