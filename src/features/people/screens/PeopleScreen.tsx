import { type FC, useCallback, useMemo } from "react";
import {
  type ListRenderItem,
  type FlatListProps,
  ActivityIndicator,
} from "react-native";
import { EmptyState, Text } from "~components";
import { usePeople } from "../hooks";
import type { People } from "../interfaces";
import { PeopleList } from "../components/PeopleList";
import styled from "styled-components/native";

type FlatListType<People> = FC<FlatListProps<People>>;

const MainContainer = styled.View`
  flex: 1;
`;

const TitleContainer = styled.View`
  margin-bottom: 16px;
`;

const List = styled.FlatList`
  flex: 1;
  padding: 0 16px;
`<FlatListType<People>>;

const renderItem: ListRenderItem<People> = ({ item }) => (
  <PeopleList people={item} />
);

const KeyExtractor = (item: People) => item.login.uuid;

export const PeopleScreen: FC = () => {
  const { people, loading, error, getMorePeople, getNewPeople, pagination } =
    usePeople();

  const peopleData = useMemo(() => people, [people]);

  const onRefresh = useCallback(() => {
    getNewPeople();
  }, [getNewPeople]);

  const onEndReached = useCallback(() => {
    getMorePeople(20, pagination);
  }, [getMorePeople]);

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
          data={peopleData}
          renderItem={renderItem}
          ListEmptyComponent={<EmptyState text="No hay usuarios que mostrar" />}
          keyExtractor={KeyExtractor}
          onRefresh={onRefresh}
          refreshing={loading}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      )}
    </MainContainer>
  );
};
