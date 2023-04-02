// import { useState } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Image,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Radio,
//   RadioGroup,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
import Forpayment from "./Forpayment.jsx";
import Megadropdown from "./Megadropdown.jsx";

// function CheckoutPage() {
//   const [paymentMethod, setPaymentMethod] = useState("credit-card");

//   function handlePaymentMethodChange(event) {
//     setPaymentMethod(event.target.value);
//   }

//   return (
//     <>
//     <Megadropdown/>
//     <Flex>
//       <Flex justifyContent="center" alignItems="center" height="100vh">
//       <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
//         <Image src="https://th.bing.com/th?id=ORMS.c80c2c8e3b6cbd0fe69c08e463980a49&pid=Wdp&w=100&h=100&qlt=90&c=1&rs=1" alt="productname"></Image>
//         <Box borderWidth={1} borderRadius={8} p={4} mb={4}>
//           <Text fontSize="md" fontWeight="bold" mb={2}>Product Details</Text>
//           <Text fontSize="md" mb={2}>Product Name: Example Product</Text>
//           <Text fontSize="md" mb={2}>Price: $19.99</Text>
//         </Box>

//       </Box>
//     </Flex>
//     <Box p={4}>
//       <Box mb={8}>
//         <Text fontSize="2xl" fontWeight="bold">
//           Checkout
//         </Text>
//       </Box>
//       <Box mb={8}>
//         <FormControl>
//           <FormLabel>Shipping Address</FormLabel>
//           <Input placeholder="Address" mb={4} />
//           <InputGroup>
//             <InputLeftElement
//               pointerEvents="none"
//               color="gray.300"
//               fontSize="1.2em"
//               children="$"
//             />
//             <Input placeholder="Price" />
//           </InputGroup>
//         </FormControl>
//       </Box>
//       <Box mb={8}>
//         <FormControl>
//           <FormLabel>Payment Method</FormLabel>
//           <RadioGroup onChange={handlePaymentMethodChange} value={paymentMethod}>
//             <Stack spacing={4}>
//               <Radio value="credit-card">Credit Card</Radio>
//               <Radio value="paypal">PayPal</Radio>
//               <Radio value="apple-pay">Apple Pay</Radio>
//             </Stack>
//           </RadioGroup>
//         </FormControl>
//       </Box>
//       {paymentMethod === "credit-card" && (
//         <Box mb={8}>
//           <FormControl>
//             <FormLabel>Credit Card Information</FormLabel>
//             <Input placeholder="Name on card" mb={4} />
//             <Input placeholder="Card number" mb={4} />
//             <InputGroup>
//               <InputLeftElement
//                 pointerEvents="none"
//                 color="gray.300"
//                 fontSize="1.2em"
//                 children="$"
//               />
//               <Input placeholder="Amount" />
//             </InputGroup>
//           </FormControl>
//         </Box>
//       )}
//       <Box display="flex" justifyContent="flex-end">
//         <Button colorScheme="green" size="lg">
//           Place Order
//         </Button>
//       </Box>
//     </Box>
//     </Flex>
//     </>
//   );
// }

// export default CheckoutPage;
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import CheckoutPaymentDetails from "./paymentpage2.jsx";
import { NavLink } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <Box p={8}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Payment Details
      </Text>
      <Stack direction={["column", "column", "row"]} spacing={8}>
        <Box width={["100%", "100%", "50%"]}>
          <Box borderWidth={1} borderRadius={8} p={4} mb={8}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Billing Information
            </Text>
            <FormControl mb={4}>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="John Doe" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Address Line 1</FormLabel>
              <Input placeholder="123 Main St" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Address Line 2</FormLabel>
              <Input placeholder="Apt 123" />
            </FormControl>
            <Stack direction={["column", "row"]} spacing={4}>
              <FormControl mb={4} width={["100%", "50%"]}>
                <FormLabel>City</FormLabel>
                <Input placeholder="New York" />
              </FormControl>
              <FormControl mb={4} width={["100%", "50%"]}>
                <FormLabel>State</FormLabel>
                <Input placeholder="NY" />
              </FormControl>
            </Stack>
            <FormControl mb={4}>
              <FormLabel>ZIP Code</FormLabel>
              <Input placeholder="10001" />
            </FormControl>
          </Box>
          
        </Box>
        <Box width={["100%", "100%", "50%"]}>
          <Forpayment />
          <Box borderWidth={1} borderRadius={8} p={4} mb={8}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Order Summary
            </Text>
            <Box mb={4}>
              <Text fontSize="lg" fontWeight="bold">
                Product Name
              </Text>
              <Text fontSize="lg">$19.99</Text>
            </Box>
            <Box mb={4}>
              <Text fontSize="lg" fontWeight="bold">
                Subtotal
              </Text>
              <Text fontSize="lg">$19.99</Text>
            </Box>
            <Box mb={4}>
              <Text fontSize="lg" fontWeight="bold">
                total
              </Text>
            </Box>
          </Box>
          <Button colorScheme="blue" size="lg" width="100%">
           <NavLink to="/payment"> Place Order</NavLink>
          </Button>
        </Box>
      </Stack>
    
    </Box>
  );
};
export default CheckoutPage;
