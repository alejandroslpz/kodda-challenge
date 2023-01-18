import type { FC } from "react";
import "react-native-gesture-handler";
import { AuthContextData } from "~context";
import { MainNavigator } from "./src/navigators/MainNavigator";

const App: FC = () => {
  return (
    <AuthContextData>
      <MainNavigator />
    </AuthContextData>
  );
};

export default App;
