import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Progress,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
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
import { PaginationRounded } from "../Pagination";
const getdata = (param,query,page,sort,order, params = {}) => {
  console.log("---------------------",query,"-----------------------------")
  // return axios.get(`https://infinity-com.onrender.com/${param}_limit=10&_page=1`, {
  //   params: {
  //     _limit: params._limit,
  //     _sort: params.sort,
  //     _order: params.order,
  //     page:params.page
  //   },
  // });
  return axios.get(`https://infinity-com.onrender.com/${param}`,{
    params: {
      //     _limit:12,
        
          _sort: sort,
          _order:order,
          _page:page,
          _limit:12,
          
        },
  })
};

export default function Productranderpage({ param,query }) {
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [total, settotle] = useState(1);


  const fetchdata = async () => {
    setloading(true);
    try {
      let params = {
      
      
       
        sort: "price",
        order: "asc",
        q:query
      
      };
      
      let data = await getdata(param, params,page,params.sort,params.order,params.query);
      settotle(data.headers.get('x-total-count'))
      
      let mapeddata = data.data.map((pro, i) => {
        // console.log(pro.id,pro.image[0]);
        return {
          image: pro.images[0],
          title: pro.title,
          price: pro.price,
          maxprice: pro.price_max,
          handle: pro.handle,
          id: pro.id || i + 1,
        };
      });

      setproduct(mapeddata);
      setloading(false);
     
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true);
    }
  };
  useEffect(() => {
    fetchdata();
    
  }, [param, page,query]);
console.log("totle",total)

  return (
    <>
      {loading ? (
        <>
        
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Progress size="xs" isIndeterminate />
          
        </>
      ) : (
        <Box>
          <Center>
            <SimpleGrid
              columns={{ base: "1", sm: 2, md: "3", lg: "4", xl: "4" }}
              columnGap={10}
              rowGap={5}
            >
              {product.map((pro) => {
                return (
                  <Box width={"100%"}>
                    <ProductAddToCart {...pro} />
                  </Box>
                );
              })}
            </SimpleGrid>
          </Center>
          <Box  textAlign={"center"} width={"100%"}><PaginationRounded total={total} page={page} setpage={setpage}/></Box>
          
        </Box>
      )}
   
    </>
  );
}
