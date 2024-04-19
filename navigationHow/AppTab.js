import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import About from "./screens/About";
import { Pressable, Text } from "react-native";

const Bottom = createBottomTabNavigator();

export default function AppTab() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "800",
          },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu Button is pressed")}>
              <Text style={{ color: "white" }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "lightpink",
          },
        }}
      >
        <Bottom.Screen
          name="home"
          component={Home}
          options={{
            title: "Welcome Home",
          }}
        />
        <Bottom.Screen
          name="about"
          component={About}
          // options={({ route }) => ({
          //   title: route.params.name,
          //   headerStyle: {
          //     backgroundColor: "purple",
          //   },
          //   headerTitleStyle: {
          //     color: "white",
          //   },
          //   headerTintColor: "White",
          // })}
          // initialParams={{
          //   name: "Guest",
          // }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
