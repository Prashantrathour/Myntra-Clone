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
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../Navbar";
import ProductAddToCart from "./Cardpage";
import Split from "./Split";
const getdata = (param,params={}) => {
   
  return axios.get(`http://localhost:8080/${param}`,{
    params:{
        
        _page:params._page,
        _limit:params._limit,
        _sort:params.sort,
        _order:params.order

    }
  });
};

export default function Productranderpage({param}) {

 
  const [product, setproduct] = useState([]);
  const [page,setpage]=useSearchParams()
  console.log(page.get("page"))

  const fetchdata = async () => {
    try {
      let params={
        _page:page.get("page"),
        _limit:15,
        sort:"discountedPrice",
        order:"asc",
       
    }
  
  let data = await getdata(param,params);
    
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
    
      setproduct(mapeddata);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchdata();
  }, [param,page]);

  return (
    <>
      <Center>
      <SimpleGrid  columns={{ base: '1',sm:2, md: '3', lg: '4',xl:"4" }} columnGap={10} rowGap={5} >
    
       
          {product.map((pro) => {
            return <Box width={"100%"}><ProductAddToCart {...pro} /></Box> ;
          })}
  
       </SimpleGrid>
       </Center>
    </>
  );
}
