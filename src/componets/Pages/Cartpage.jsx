import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const getdata = (param, params = {}) => {
  return axios.get(`http://localhost:8080/${"Mens"}`, {
    params: {
      _page: params._page,
      _limit: params._limit,
      _sort: params.sort,
      _order: params.order,
    },
  });
};

const CartPage = ({ removeFromCart, checkout }) => {
  const [cartItems, setproduct] = useState([]);
  const [page, setpage] = useSearchParams();
  console.log(page.get("page"));

  const fetchdata = async () => {
    try {
      let params = {
        _page: page.get("page"),
        _limit: 15,
        sort: "discountedPrice",
        order: "asc",
      };

      let data = await getdata(params);

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
      console.log(mapeddata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [page]);

  console.log(cartItems);
  // let maped=data.map((pro,i)=>{
  //     return{
  //         image: pro.images[0],
  //           name: pro.title,

  //     }
  // })
  //  console.log(maped)

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <Box p={4}>
      <Heading mb={4}>Shopping Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <Flex flexWrap="wrap">
          {[{ name: "name" }].map((item) => (
            <Box key={item.id} p={2} flex="1 0 300px">
              <Image src={item.image} alt={item.name} />
              <Text mt={2} fontWeight="bold">
                {item.name}
              </Text>
              <Text mt={1}>Price: ${item.price}</Text>
              <Text mt={1}>Quantity: {item.qty}</Text>
              <Button
                mt={2}
                size="sm"
                colorScheme="red"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Box flex="1 0 300px">
            <Heading size="md">Cart Summary</Heading>
            <Text mt={2}>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
              items): ${cartTotal.toFixed(2)}
            </Text>
            <Button
              mt={4}
              size="md"
              colorScheme="teal"
              onClick={checkout}
              disabled={cartItems.length === 0}
            >
              Checkout
            </Button>
            <Link to="/" mt={2} display="block">
              Continue shopping
            </Link>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default CartPage;
