import { type FC, useCallback, useMemo } from "react";
import {
  type ListRenderItem,
  type FlatListProps,
  ActivityIndicator,
} from "react-native";
import { EmptyState, Text } from "~components";
import { useUser } from "../hooks";
import type { User } from "../interfaces";
import { UsersList } from "../components/UsersList";
import styled from "styled-components/native";

type FlatListType<User> = FC<FlatListProps<User>>;

const MainContainer = styled.View`
  flex: 1;
`;

const TitleContainer = styled.View`
  margin-bottom: 16px;
`;

const List = styled.FlatList`
  flex: 1;
  padding: 0 16px;
`<FlatListType<User>>;

const renderItem: ListRenderItem<User> = ({ item }) => (
  <UsersList user={item} />
);

const KeyExtractor = (item: User) => item.login.uuid;

export const PeopleScreen: FC = () => {
  const { users, loading, error } = useUser();

  const usersData = useMemo(() => users, [users]);

  //TODO: Implement onEndReached
  const onEndReached = useCallback(() => {}, []);

  return (
    <MainContainer>
      <TitleContainer>
        <Text alignment="center" weight="bold" size="extraLarge">
          🚀 Personas
        </Text>
      </TitleContainer>
      {loading && !error && (
        <EmptyState text="Cargando usuarios...">
          <ActivityIndicator size="large" />
        </EmptyState>
      )}
      {error && <EmptyState text="Error al cargar usuarios" />}
      {!loading && !error && (
        <List
          data={usersData}
          renderItem={renderItem}
          ListEmptyComponent={<EmptyState text="No hay usuarios que mostrar" />}
          keyExtractor={KeyExtractor}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      )}
    </MainContainer>
  );
};
