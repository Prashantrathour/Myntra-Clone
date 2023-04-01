import React from "react";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Spacer,
  Link,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const data = {
  isNew: true,

  price: 4.5,
  rating: 4.2,
  numReviews:Math.floor(getRandomArbitrary(20, 50))  ,
};

const RatingProps = {
  rating: 1,
  numReviews: 1,
};
function Rating(RatingProps) {
    const { rating, numReviews }= RatingProps
  return (
    <Flex d="flex" alignItems="center" flexDirection={"row"}>
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'green.500' : 'red.300'}
                
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1',color:"yellowgreen" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Flex>
  );
}

function ProductAddToCart(props) {
  const { image, title, price, maxprice, handle, id } = props;

  return (
    <Box objectFit={"cover"} width={"100%"} overflow={"hidden"}>
      <Flex alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          width={"230px"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            src={image}
            alt={`Picture of ${handle}`}
            roundedTop="sm"
            width={"100%"}
            maxH={"250"}
            overflow="hidden"
            objectFit="cover"
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />

          <Box p="6">
          <Heading fontWeight={600} fontSize={"sm"} as="sub">{title}</Heading>
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>

            <Flex justifyContent="space-between" alignContent="center" flexDirection={"column"}>
              <Rating rating={data.rating} numReviews={data.numReviews} />
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Flex justifyContent={"space-between"}>
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    ₹{price}
                  </Box>
                  <Spacer />
                  <Box
                    as="span"
                    color={"gray.600"}
                    fontSize="lg"
                    ml={"3"}
                    textDecoration="line-through"
                  >
                    ₹{maxprice}
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Center>
              <Flex>
                {" "}
                <Button bg="pink">
                  {" "}
                  <NavLink to={`singleproductpage/${id}`}>ADD TO CART </NavLink>
                </Button>
              </Flex>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductAddToCart;
