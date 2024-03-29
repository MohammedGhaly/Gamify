import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              setSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} paddingX={8}>
          <GameHeading gameQuery={gameQuery} />

          <HStack spacing={3} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              setSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
