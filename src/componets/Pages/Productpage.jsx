import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  MenuItemOption,
  MenuOptionGroup,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar2 from "../images";
import Navbar from "../Navbar";
import { PaginationRounded } from "../Pagination";
import Fitermenu from "./Fitermenu";
import Productranderpage from "./Productranderpage";

import Split from "./Split";
import { useState } from "react";

export default function Productpage() {
  const [query,setquery]=useState('')
  const { param } = useParams();
  let k = 1;
  const queryhandler=(query)=>{
    setquery(query)
  }
  return (
    <>
      <Navbar queryhandler={queryhandler} />
      <Center>
        <VStack mt={10} >
          <Box>
            <Split />
            <Flex justifyContent={"space-between"} gap={25}>
              <Fitermenu />
              
              <Productranderpage param={param} query={query} />
            </Flex>
          </Box>
       
        </VStack>
      </Center>
      <Footer/>
    </>
  );
}
