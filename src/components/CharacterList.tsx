import { FC } from "react";
import {
  Heading,
  List,
  ListItem,
  Avatar,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export interface Character {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

type Props = {
  school: string;
  characters: Character[];
};

const CharacterList: FC<Props> = ({ school, characters }) => {
  return (
    <div>
      <h2>{school}</h2>

      <List>
        {characters.map((character) => (
          <ListItem key={character.id}>
            <Flex>
              <Avatar size="md" bg="teal.500" />
              <Box textAlign="left" ml={3}>
                <Text>{character.name}</Text>
                <Text as="span">{character.grade}年生</Text>
                <Text as="span" ml="2">
                  {character.height ?? "???"}cm
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CharacterList;
