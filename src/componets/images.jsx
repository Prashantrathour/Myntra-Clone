import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Stack,
  Menu,
  MenuButton,
 
  
  useColorModeValue,
  useDisclosure,
  HStack,
  Heading,
  VStack,
  MenuItem,
  MenuList,
  Box,
 
 
} from "@chakra-ui/react";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import { BiHeading } from "react-icons/bi";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Box width={"1000px"} border="1px solid red" height={"100vh"}>
               
            </Box>
               
            </MenuList>
        </Menu>
    )
  
}
