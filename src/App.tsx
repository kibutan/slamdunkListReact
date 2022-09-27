import "./App.css";
import type { FC } from "react";
import { Heading } from "@chakra-ui/react";
import CharacterList from "./components/CharacterList";
import type { Character } from "./components/CharacterList";

const App: FC = () => {
  const characters: Character[] = [
    { id: 1, name: "Hoge hoge", grade: 1, height: 11 },
    { id: 2, name: "Huga Huga", grade: 2, height: 22 },
    { id: 3, name: "Hage Hage", grade: 3, height: 33 },
  ];

  return (
    <div className="container">
      <Heading size="lg" as="h1" my={12}>
        Heading
      </Heading>
      <CharacterList school="highschool" characters={characters} />
    </div>
  );
};

export default App;
