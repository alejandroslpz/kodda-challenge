import type { FC } from "react";
import type { People } from "../interfaces";
import { Text } from "~components";
import styled from "styled-components/native";
import CountryFlag from "react-native-country-flag";

const AvatarContainer = styled.View`
  align-items: center;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin: 0 10px;
`;

const shadow = {
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
};

interface PeopleListProps {
  people: People;
}

export const PeopleList: FC<PeopleListProps> = ({ people }) => {
  const MainContainer = styled.View`
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    flex-direction: row;
    flex: 1;
    min-height: 100px;
    margin: 10px 0;
    padding: 16px;
  `;

  return (
    <MainContainer style={{ ...shadow }}>
      <ContentContainer>
        <Text
          weight="semiBold"
          size="large"
        >{`${people.name.title}. ${people.name.first} ${people.name.last}`}</Text>
        <Text size="medium" color="opacity">
          Género: {people.gender === "female" ? "♀" : "♂"}
        </Text>
        <Text size="medium" color="opacity">
          {people.email}
        </Text>
      </ContentContainer>
      <AvatarContainer>
        <Avatar
          source={{
            uri: people.picture.thumbnail,
          }}
        />
        <CountryFlag isoCode={people.nat} size={15} />
      </AvatarContainer>
    </MainContainer>
  );
};
