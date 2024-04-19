import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
