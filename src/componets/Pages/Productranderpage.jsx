import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import ProductAddToCart from "./Cardpage";
import Split from "./Split";
const getdata = (param) => {
  return axios.get(`http://localhost:8080/${param}`);
};

export default function Productranderpage({param}) {

  console.log("pram----------------------",param)
  const [product, setproduct] = useState([]);
  const fetchdata = async () => {
    try {
      let data = await getdata(param);
      let mapeddata = data.data.map((pro,i) => { 
        // console.log(pro.id,pro.image[0]);
        return {
          image: pro.images[0],
          title: pro.title,
          price: pro.price,
          maxprice: pro.price_max,
          handle: pro.handle,
          id: pro.id||i+1,
        };
      });
     mapeddata.forEach(element => {
      console.log(element.id,element.image,element.title)
     });
      setproduct(mapeddata);
    } catch (error) {}
  };
  useEffect(() => {
    fetchdata();
  }, [param]);

  return (
    <>
      <Navbar />
      <Box>
      <Split/>
        <Grid templateColumns='repeat(4, 1fr)' gap={.5} >
          {product.map((pro) => {
            return <ProductAddToCart {...pro} />;
          })}
        </Grid>
      </Box>
    </>
  );
}
