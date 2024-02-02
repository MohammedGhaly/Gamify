import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup marginX={10}>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search games..." borderRadius={15} variant="filled" />
    </InputGroup>
  );
}

export default SearchInput;
