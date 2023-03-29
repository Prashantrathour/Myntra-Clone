import { ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img from "./images/logo.png";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Img,
  Image,
  Input,
  VStack,
  Spacer,
  Text,
  color,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
const Links = ["Dashboard", "Projects", "Team"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let style1 = {
    color: "red",
  };
  let style2 = {
    color: "black",
  };
  return (
    <>
      <Box
        height={200}
        paddingBottom={-5}
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        align="center"
        justify="center"
        boxSize="full"
        top={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ xl: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to={"/"}>
              <Box>
                <Image width={50} src={img} alt="logo"></Image>
              </Box>
            </NavLink>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", xl: "flex", md: "none" }}
              
            >
              {" "}
              <NavLink
                style={({ isActive }) => console.log(isActive)}
                to="/productpage/mens"
              >
                <Stack>
                  <Text
                    as="sub"
                    size="m"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    MEN
                  </Text>
                </Stack>
              </NavLink>
              <NavLink to="/productpage/womens">
                <Stack>
                  <Text
                    as="sub"
                    size="m"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    WOMEN
                  </Text>
                </Stack>
              </NavLink>
              <NavLink to="/productpage/kids">
                <Text as="sub" fontWeight="bold" size="m">
                  KIDES
                </Text>
              </NavLink>
              <NavLink to={"/homeliving"}>
                <Text as="sub" fontWeight="bold" size="m"></Text>
                <Stack>
                  <Text
                    as="sub"
                    size="m"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    HOME& LIVING
                  </Text>
                </Stack>
              </NavLink>
              <NavLink to="/beauty">
                <Stack>
                  <Text
                    as="sub"
                    size="m"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    BEAUTY
                  </Text>
                </Stack>
              </NavLink>
              <NavLink to="/studio">
                <Stack>
                  <Text
                    as="sub"
                    size="m"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    STUDIO
                  </Text>
                </Stack>
              </NavLink>
            </HStack>
          </HStack>
          <HStack spacing={3} alignItems={"center"}>
            <Flex spacing={0} alignItems={"center"} gap={5}>
              <Flex
                spacing={0}
                alignItems={"center"}
                display={{ base: "none", sm: "none", md: "flex" }}
              >
                <IconButton
                  color={"blackAlpha"}
                  icon={<SearchIcon />}
                  size="sm"
                />
                <Input
                  type={"search"}
                  placeholder="Search Product"
                  size="sm"
                  width={"sm"}
                />
              </Flex>
              <Flex direction={"column"}>
                <IconButton
                  color={"blackAlpha"}
                  bg="whiteAlpha.100"
                  icon={
                    <Avatar
                      src="https://cdn-icons-png.flaticon.com/128/126/126486.png"
                      size="sm"
                    />
                  }
                />
                <Text size="sm" pt={-10} fontWeight="bold" as={"sub"}>
                  Profile
                </Text>
              </Flex>

              <Spacer />
              <Flex direction={"column"}>
                <IconButton
                  color={"blackAlpha"}
                  bg="whiteAlpha.100"
                  icon={
                    <Avatar
                      size="sm"
                      src="https://cdn-icons-png.flaticon.com/128/2767/2767018.png"
                    />
                  }
                />

                <Text size="sm" pt={-10} fontWeight="bold" as={"sub"}>
                  Wishlist
                </Text>
              </Flex>
              <Spacer />
              <Flex direction={"column"}>
                <IconButton
                  color={"blackAlpha"}
                  bg="whiteAlpha.100"
                  icon={
                    <Avatar
                      size="sm"
                      src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png"
                    />
                  }
                />

                <Text size="sm" pt={-10} fontWeight="bold" as={"sub"}>
                  {"        Beg"}
                </Text>
              </Flex>
            </Flex>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}
