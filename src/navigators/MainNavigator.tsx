import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type FC, useEffect } from "react";
import { theme } from "~themes";
import { GuestNavigator } from "./GuestNavigator";
import { UserNavigator } from "./UserNavigator";
import { useAuthContext } from "~hooks";

const Stack = createNativeStackNavigator();

export const MainNavigator: FC = () => {
  const { user, getUserInStore } = useAuthContext();

  useEffect(() => {
    getUserInStore();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="User" component={UserNavigator} />
        ) : (
          <Stack.Screen name="Guest" component={GuestNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
