import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Progress,
  Select,
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
const getdata = (param,params = {}) => {

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
          q:params.query,
         _sort:params.sort,
         _order:params.order,
          _page:params.page,
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
  const [priceorder,setprice]=useState("desc")
  const [order,setorder]=useState("")
console.log(priceorder,order)


  const fetchdata = async () => {
    setloading(true);
    try {
      let params = {
      
      
       
        sort: "price",
        order: priceorder,
        query: query,
    
        page:+page
      
      };
      console.log(params)
      let data = await getdata(param, params,params.page,params.sort,params.order);
      settotle(data.headers.get('x-total-count'))
      console.log(data)
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
    
  }, [param, page,query,priceorder]);
console.log("totle",total)
console.log(query)
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
        <Flex>
          <Select onChange={(e)=>setprice(e.target.value)}>
            <option value={""}>--sort(price)--</option>
            <option value={"acs"}>--accending order--</option>
            <option value={"desc"}>--deccending order--</option>
            
          </Select>
          <Select onChange={(e)=>setorder(e.target.value)}>
            <option value={""}>--sort(alphabatically)--</option>
            <option value={"acs"}>--accending order(A-Z)--</option>
            <option value={"desc"}>--deccending order(Z-A)--</option>
            
          </Select>
          </Flex>
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
