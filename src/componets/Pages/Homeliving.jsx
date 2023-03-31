import { Box, Image, Text, Heading, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import MegaMenu from "./Megadropdown";

function ProductDetails() {
  return (
    <Box m="auto" w="80%">
    <MegaMenu/>
    
      <Box display={{ md: "flex" }}>
        <Box w={{ md: "50%" }} mb={{ base: "2rem", md: "0" }}>
          <Image src="https://via.placeholder.com/300x300.png" alt="product image" />
        </Box>
        <Box w={{ md: "50%" }}>
          <Heading as="h1" mb="1rem">Product Title</Heading>
          <Text fontSize="2xl" fontWeight="semibold" mb="1rem">$99.99</Text>
          <Text mb="1rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum mi eu ultricies sagittis. Praesent nec rhoncus tortor. Nullam sit amet aliquet nisi, a consectetur est. Integer quis sapien ac lacus sodales eleifend at in enim.</Text>
          <Box mb="1rem">
            <Text fontSize="lg" mb="0.5rem">Quantity</Text>
            <NumberInput defaultValue={1} min={1} max={10} w={{ base: "100%", md: "40%" }}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Button colorScheme="blue" size="lg" mb={{ base: "2rem", md: "0" }}>Add to Cart</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetails;
