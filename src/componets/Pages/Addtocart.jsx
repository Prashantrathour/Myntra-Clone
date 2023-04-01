import { useState } from "react";
import { Box, Image, Heading, Text, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

const AddToCartPage = ({ product, addToCart }) => {
  const [qty, setQty] = useState(1);

  const handleQtyChange = (value) => {
    setQty(parseInt(value));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
  };

  return (
    <Box p={4}>
      <Box maxW="md" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={product.image} alt={product.name} />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Heading fontSize="xl" fontWeight="semibold" mb={2}>
              {product.name}
            </Heading>
            <Text ml={2} fontSize="lg" fontWeight="bold" color="teal.500">
              ${product.price}
            </Text>
          </Box>
          <Text>{product.description}</Text>
          <Box mt={4}>
            <NumberInput defaultValue={qty} min={1} max={10} onChange={handleQtyChange}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Button mt={4} colorScheme="teal" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddToCartPage;
