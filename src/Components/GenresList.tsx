import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../Services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresList({ setSelectedGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  return (
    <>
      <Heading fontSize={24} paddingBottom={4}>
        Genres
      </Heading>
      <List>
        {isLoading
          ? skeletons.map((s) => (
              <ListItem key={s} paddingY="5px">
                <GenreSkeleton />
              </ListItem>
            ))
          : data.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    src={getCroppedUrl(genre.image_background)}
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                  />
                  <Button
                    whiteSpace="normal"
                    textAlign="left"
                    fontWeight={
                      genre.id === selectedGenre?.id ? "bold" : "normal"
                    }
                    variant="link"
                    fontSize="lg"
                    onClick={() => {
                      setSelectedGenre(genre);
                    }}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </>
  );
}

export default GenresList;
