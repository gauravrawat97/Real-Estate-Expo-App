import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import HouseDetails from "./screens/HouseDetails";
import HouseList from "./screens/HouseList";
import Login from "./screens/Login";
import { LocationProvider, NotificationProvider } from "./Context";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <RootSiblingParent>
      <NotificationProvider>
        <LocationProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />

              <Stack.Screen name="House List" component={HouseList} />
              <Stack.Screen name="House Details" component={HouseDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </LocationProvider>
      </NotificationProvider>
    </RootSiblingParent>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
