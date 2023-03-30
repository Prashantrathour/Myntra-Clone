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
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = {
  isNew: true,

  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const RatingProps = {
  rating: 1,
  numReviews: 1,
};
// function Rating(RatingProps) {
//     const { rating, numReviews }= RatingProps
//   return (
//     <Box d="flex" alignItems="center">
//       {Array(5)
//         .fill('')
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2;
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: '1' }}
//                 color={i < rating ? 'teal.500' : 'gray.300'}
//               />
//             );
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
//           }
//           return <BsStar key={i} style={{ marginLeft: '1' }} />;
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && 's'}
//       </Box>
//     </Box>
//   );
// }

function ProductAddToCart(props) {
  const { image, title, price, maxprice, handle, id } = props;
  return (
    <Box objectFit={"cover"} width={"100%"}>
      <Flex alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          width={"200px"}
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
            alt={`Picture of ${title}`}
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
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xs"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {title}
              </Box>
              {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip> */}
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
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
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductAddToCart;
