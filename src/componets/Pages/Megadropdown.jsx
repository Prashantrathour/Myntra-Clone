import { Box, Button, Flex, Heading, Icon, Link, Menu, MenuButton, MenuList, MenuItem, Text, useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export default function Megadropdown() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" py="1rem">
      <Box maxW="7xl" mx="auto">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
            My Store
          </Heading>
          <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
            <Icon as={FaBars} fontSize="xl" />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Flex>
              <Link to="/">Home</Link>
              <Link mx="1rem">About</Link>
              <Link mx="1rem">Contact</Link>
              <Menu>
                <MenuButton as={Button} variant="link" mx="1rem">
                  Categories
                </MenuButton>
                <MenuList>
                  <Flex>
                    <Box mr="2rem">
                      <Text fontSize="lg" fontWeight="bold">Clothing</Text>
                      <Box>
                        <MenuItem>Men's Clothing</MenuItem>
                        <MenuItem>Women's Clothing</MenuItem>
                        <MenuItem>Kids & Baby Clothing</MenuItem>
                        <MenuItem>Accessories</MenuItem>
                      </Box>
                    </Box>
                    <Box mr="2rem">
                      <Text fontSize="lg" fontWeight="bold">Electronics</Text>
                      <Box>
                        <MenuItem>TVs</MenuItem>
                        <MenuItem>Computers & Laptops</MenuItem>
                        <MenuItem>Smartphones</MenuItem>
                        <MenuItem>Cameras</MenuItem>
                      </Box>
                    </Box>
                    <Box mr="2rem">
                      <Text fontSize="lg" fontWeight="bold">Home & Garden</Text>
                      <Box>
                        <MenuItem>Furniture</MenuItem>
                        <MenuItem>Home Decor</MenuItem>
                        <MenuItem>Bedding & Bath</MenuItem>
                        <MenuItem>Kitchen & Dining</MenuItem>
                      </Box>
                    </Box>
                    <Box mr="2rem">
                      <Text fontSize="lg" fontWeight="bold">Sports & Outdoors</Text>
                      <Box>
                        <MenuItem>Camping & Hiking</MenuItem>
                        <MenuItem>Exercise & Fitness</MenuItem>
                        <MenuItem>Hunting & Fishing</MenuItem>
                        <MenuItem>Cycling</MenuItem>
                      </Box>
                    </Box>
                  </Flex>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        bg="gray.50"
        position="fixed"
        top="4.5rem"
        left="0"
        right="0"
        bottom="0"
        zIndex="99"
        display={{ base: isOpen ? "block" : "none", md: "none" }}
      >
        <Flex direction="column" p="1rem">
          <Link mx="1rem" my="0.5rem" onClick={onClose}>
            Home
          </Link>
          <Link mx="1rem" my="0.5rem" onClick={onClose}>
            About
          </Link>
          <Link mx="1rem" my="0.5rem" onClick={onClose}>
          carear
          </Link>
          </Flex>
           
</Box>
</Box>
)}