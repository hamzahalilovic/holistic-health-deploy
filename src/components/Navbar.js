import React from "react";
import { Link } from "react-router-dom";

import { Text, Avatar, Flex } from "@blend-ui/core";

import LogoIcon from "../assets/logo.svg";

const styles = {
  position: "sticky",
  marginTop: -10,
  mraginRight: -240,
  top: 0,
  right: 0,
  zIndex: 1,
  width: "100%",
  alignItems: "center",
};

function Navbar() {
  return (
    <Flex
      height="69px"
      bg={"#F4F4F8"}
      paddingLeft={37}
      paddingTop={21}
      paddingRight={35}
      flexDirecton={"row"}
      justifyContent={"space-between"}
      style={styles}
    >
      <Flex marginBottom={37}>
        <img src={LogoIcon} alt="React Logo" />
        <Flex paddingLeft={20}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Text color={"#5F6AC4"} fontSize={18}>
              Health app
            </Text>
          </Link>
        </Flex>
      </Flex>
      <div>
        <Flex alignItems={"center"} marginTop={-13}>
          <Text color={"#5F6AC4"} fontSize={16}>
            Hello,{" "}
          </Text>
          <Flex paddingLeft={4}>
            <Text fontSize={16}> Jane Doe</Text>
          </Flex>
          <Flex paddingLeft={10} size={44}>
            <Avatar />
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}

export default Navbar;
