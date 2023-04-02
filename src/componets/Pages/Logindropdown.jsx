import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Avatar,
  IconButton,
  Box,
  VStack,
  Stack,
  List,
  ListItem,
  Heading,
  Spacer,
  Button,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Loginmenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen} bg="white">
      <MenuButton
        variant='outline'
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        bg="white"
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <IconButton
          color={"blackAlpha"}
          bg="whiteAlpha.100"
          icon={
            <Avatar
              src="https://cdn-icons-png.flaticon.com/128/126/126486.png"
              size="sm"
            />
          }
        />
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} top={"-5"} bg="white">
        <MenuItem bg="white">
          <Box>
            <VStack>
              <Stack>
                <Heading size={"xs"} as={"strong"}>Welcome</Heading>
                <Spacer/>
                <Heading size={"xs"} as={"sub"}> To access account and manage orders</Heading>
                <Spacer/>
                <Spacer/>
                <Link to="/login"><Button colorScheme='white' _hover={{color:"pink.600"}} variant='outline' borderColor={"none"}><Text textAlign={"center"} color="pink.400" as={"sub"} fontSize="md"> Sign/Signup</Text></Button></Link>
              </Stack>
                <Spacer/>
                <Spacer/>
                <Divider/>
              <Stack>
                <List>
                  <LinkItem  text="Orders"/>
                  <LinkItem  text="Wishlist"/>
                  <LinkItem  text="Gift Cards"/>
                  <LinkItem  text="Contact Us"/>
                  <LinkItem text="Myntra Insider" isTag={true} tagText="New"/>
                </List>
              </Stack>
              <Divider />
              <Stack>
                <List>
                  <ListItem>Myntra Credit</ListItem>
                  <ListItem>Coupons</ListItem>
                  <ListItem>Saved Cards</ListItem>
                  <ListItem>Saved VPA</ListItem>
                  <ListItem>Saved Addresses</ListItem>
                </List>
              </Stack>
            </VStack>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
const LinkItem = (LinkItemProps) => {
    const { text, isTag = false, tagText } = LinkItemProps;
    return (
      <ListItem display="flex">
        <Link
          fontWeight="600"
          href="#"
          color="rgba(113, 128, 150, 1)"
          _hover={{ color: "pink.600" }}
        >
          {text}
        </Link>
        {isTag && (
          <Text
            as="span"
            bg="#008F94"
            px="0.25rem"
            display="inline-flex"
            alignItems="center"
            color="#fff"
            height="1.25rem"
            borderRadius="0.25rem"
            ml="0.25rem"
            mt="0.25rem"
            fontSize="0.75rem"
          >
            {tagText}
          </Text>
        )}
      </ListItem>
    )}