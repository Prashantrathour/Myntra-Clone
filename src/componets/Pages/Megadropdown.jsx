import { Box, Button, Flex, Heading, Icon, Link, Menu, MenuButton, MenuList, MenuItem, Text, useDisclosure,Avatar,IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsCart ,BsBagHeartFill} from "react-icons/bs";

export default function Megadropdown() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" py="1rem">
      <Box maxW="7xl" mx="auto">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
           INFINITY
          </Heading>
          <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
            <Icon as={FaBars} fontSize="xl" />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Flex gap={4}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cartpage"><BsCart/></NavLink>
              
              <NavLink to="/checkout"><BsBagHeartFill/></NavLink>

           
              <Menu>
                <MenuButton as={Button} variant="link" mx="1rem">
                  Categories
                </MenuButton>
                <MenuList>
                  <Flex>
                    <Box mr="2rem">
                      <Text fontSize="lg" fontWeight="bold">Clothing</Text>
                      <Box>
                        <MenuItem><NavLink to="/productpage/Mens">Men's Clothing</NavLink></MenuItem>
                        <MenuItem><NavLink to="/productpage/womens">Women Men's Clothing</NavLink></MenuItem>
                        <MenuItem><NavLink to="/productpage/kids">Kids Clothing</NavLink></MenuItem>
                    
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
                      <Text fontSize="lg" fontWeight="bold">Beauty</Text>
                      <Box>
                        <MenuItem><NavLink to="/beauty/beautyproduct">Makeup</NavLink></MenuItem>
                        <MenuItem>LipStick</MenuItem>
                        <MenuItem>eye brows</MenuItem>
                        <MenuItem>Nail paint</MenuItem>
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