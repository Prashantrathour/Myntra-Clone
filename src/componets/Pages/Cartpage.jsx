import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import Megadropdown from "./Megadropdown";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
const postdatacart = (param, id) => {
  return axios.get(`https://infinity-com.onrender.com/${param}/${id}`);
};
const getdata = () => {
  return axios.get(`https://infinity-com.onrender.com/addcartdata`);
};

const CartPage = ({ checkout }) => {
  const [cartItems, setproduct] = useState([]);
  const [loading, setloading] = useState(true);

  const { id, param } = useParams();

  const postdata = async () => {
    // try {
    //   let data = await postdatacart(param, id);
    //   axios.post(`https://infinity-com.onrender.com/addcartdata`, data.data);
    //   toast.success("Product added successfully")
    // } catch (error) {
    //   console.log(error);
    //   toast.warn("Product all ready added successfully")
    // }
  };

  const fetchdata = async () => {
    try {
      setloading(true);
      let data = await getdata();
      console.log(data);

      setloading(false);

      let mapeddata = data.data.map((pro, i) => {
        // console.log(pro.id,pro.image[0]);
        return {
          image: pro.images[0],
          title: pro.title,
          price: pro.price,
          maxprice: pro.price_max,
          handle: pro.handle,
          id: pro.id || i + 1,
          qty:pro.qty||1
        };
      });

      setproduct(mapeddata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
    setTimeout(()=>{
    
      return fetchdata()
     
      },5000)
  },[]);
 
  console.log(cartItems);
const removeFromCart=async(id)=>{
  try{
let res=axios.delete(`https://infinity-com.onrender.com/addcartdata/${id}`);

setTimeout(()=>{
fetchdata();
console.log("Success")
},5000)

toast.success("Product remove successfully")
  }catch(e){
console.log(e.message)
  }
  
}
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
    <Box>
      <Megadropdown />
      <Box p={4}>
        {cartItems.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          <Flex flexWrap="wrap">
            {cartItems.map((item) => (
              <Box key={item.id} p={2} flex="1 0 300px" width={"100px"}>
                <Image width={"100px"} src={item.image} alt={item.name} />
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
               <NavLink to="/checkout">Checkout</NavLink> 
              </Button>
              <Link to="/" mt={2} display="block">
                Continue shopping
              </Link>
            </Box>
          </Flex>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default CartPage;
