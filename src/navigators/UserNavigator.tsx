import {
  type DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import type { FC } from "react";
import { PeopleScreen } from "~features/people/screens/PeopleScreen";
import { Button, Text } from "~components";
import { useAuthContext, useAvatar } from "~hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const MainContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  height: 100px;
  width: 100px;
`;

const TextContainer = styled.View`
  margin: 16px 0;
`;

const Header: FC = () => <SafeAreaView />;

const Drawer = createDrawerNavigator();

export const UserNavigator: FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{ header: Header }}
    >
      <Drawer.Screen name="Usuarios" component={PeopleScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent: FC<DrawerContentComponentProps> = () => {
  const defaultAvatar = useAvatar("default");
  const { user, deleteUserInStore } = useAuthContext();

  const handleSubmit = () => {
    deleteUserInStore();
  };

  return (
    <MainContainer>
      <Avatar source={defaultAvatar} />
      <TextContainer>
        <Text size="large" weight="semiBold">
          {user}
        </Text>
      </TextContainer>
      <Button
        onPress={handleSubmit}
        isFullWidth
        isPrimary
        title="Cerrar sesión"
      />
    </MainContainer>
  );
};
