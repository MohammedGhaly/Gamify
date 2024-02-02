import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import React from "react";

function NavBar() {
  return (
    <HStack justifyContent="space-between" paddingRight="20px">
      <Image
        style={{ borderRadius: "15px", margin: "10px" }}
        src={logo}
        boxSize="60px"
      />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
