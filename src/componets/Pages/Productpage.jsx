import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar2 from "../images";
import Navbar from "../Navbar";
import { PaginationRounded } from "../Pagination";
import Fitermenu from "./Fitermenu";
import Productranderpage from "./Productranderpage";

import Split from "./Split";

export default function Productpage() {
  const { param } = useParams();
  let k = 1;
  return (
    <>
      <Navbar />
      <Center>
        <VStack>
          <Box>
            <Split />
            <Flex justifyContent={"space-between"} gap={25}>
              <Fitermenu />
              <Productranderpage param={param} />
            </Flex>
          </Box>
          <Box>
            {" "}
            <PaginationRounded />
          </Box>
        </VStack>
      </Center>
    </>
  );
}
