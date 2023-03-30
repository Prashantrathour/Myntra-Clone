import { Box, Button, Center, Container, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar2 from "../images";
import Navbar from "../Navbar";
import {PaginationRounded }from "../Pagination";
import FIlterforbeauty from "./Filterforbeauty";

import Pruductrenderforbeauty from "./Pruductrenderforbeauty";

import Split from "./Split";

export default function Beauty() {
  const [category,setcat]=useState([])
  const [q,setq]=useState("")
  const { beauty } = useParams();
  const searchparam=(params)=>{
    setcat(params)
  }
  const searchq=(q)=>{
    console.log(q)
    setq(q)
  }

let k=1
  return (
    <>
  
      <Navbar />
      <Center>
        <VStack>
          <Box>
            <Split />
            <Flex justifyContent={"space-between"} gap={25}>
              <FIlterforbeauty searchparam={searchparam} searchq={searchq} />
              <Pruductrenderforbeauty category={category} param={beauty} q={q} />
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
