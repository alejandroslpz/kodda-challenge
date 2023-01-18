import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";
import { LoginScreen } from "~features/auth/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export const GuestNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
