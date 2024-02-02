import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const label = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`.trim();
  return (
    <Heading fontSize={50} marginLeft={1} marginY={4} as="h1">
      {label}
    </Heading>
  );
}

export default GameHeading;
