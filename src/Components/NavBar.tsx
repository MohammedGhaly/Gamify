import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import React from "react";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack paddingRight="20px">
      <Image
        style={{ borderRadius: "15px", margin: "10px" }}
        src={logo}
        boxSize="60px"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
