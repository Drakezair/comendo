import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "./contexts";
import { Login } from "./screens";

const AuthStack = createNativeStackNavigator();

function AuthRouter() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

const InAppStack = createNativeStackNavigator();

function InAppRouter() {
  return <AuthStack.Navigator>{/* ... */}</AuthStack.Navigator>;
}

export default function AppRouter() {
  const { auth, logout } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {auth ? (
        <SafeAreaView>
          <TouchableOpacity onPress={logout}>
            <Text>LOGOUT</Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        AuthRouter()
      )}
    </NavigationContainer>
  );
}
