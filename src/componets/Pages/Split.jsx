import React from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
export default function Split() {
  return (
    <Box  display={{ base: 'none', md: 'none', lg: 'flex' }}>
    <Flex width={"full"} justifyContent={"space-between"}>
    <HStack>
      <Box ml={3}>
        <Heading size={"sm"} as={"h5"}>
          FILTERS
        </Heading>
      </Box>
    </HStack>
    <HStack mr={3}>
      <HStack>
        <Flex>
          <Stack>
            <Menu size={"sm"}>
              <MenuButton
                bg={"white"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Add-Ons
              </MenuButton>
              <MenuList>
                <Center>
                  {" "}
                  <List>
                    <Checkbox>
                      <ListItem>Comes With</ListItem>
                    </Checkbox>
                  </List>
                </Center>
              </MenuList>
            </Menu>
          </Stack>
          <Stack>
            <Menu>
              <MenuButton
                bg={"white"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Bundles
              </MenuButton>
              <MenuList>
                <Center>
                  <List>
                    <Checkbox>
                      <ListItem>Bundles</ListItem>
                    </Checkbox>
                    <Checkbox>
                      <ListItem>Single Style</ListItem>
                    </Checkbox>
                  </List>
                </Center>
              </MenuList>
            </Menu>
          </Stack>
          <HStack>
            <Stack>
              <Menu>
                <MenuButton
                  bg={"white"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Character
                </MenuButton>

                <MenuList>
                  <Center>
                    {" "}
                    <List>
                      <Checkbox>
                        <ListItem>Angry Bird</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>Barbie</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>BatMan</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>Donald Duck</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>Harry Potter</ListItem>
                      </Checkbox>
                    </List>
                  </Center>
                  <Spacer />
                  <Center>
                    <List>
                      <Checkbox>
                        <ListItem>Spider-Man</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>Superman</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>Thor</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>Pokeman</ListItem>
                      </Checkbox>
                      <Checkbox>
                        <ListItem>Iron Man</ListItem>
                      </Checkbox>
                    </List>
                  </Center>
                </MenuList>
              </Menu>
            </Stack>
          </HStack>
          <Stack>
            <Menu>
              <MenuButton
                bg={"white"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Collar
              </MenuButton>
              <MenuList>
                <Center>
                  {" "}
                  <List>
                    <Checkbox>
                      <ListItem>Spread Collar</ListItem>
                    </Checkbox>
                  </List>
                </Center>
              </MenuList>
            </Menu>
          </Stack>
          <Stack>
            <Menu>
              <MenuButton
                bg={"white"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Country Of Origin
              </MenuButton>
              <MenuList>
                <Center>
                  <List>
                    <Checkbox>
                      <ListItem>India</ListItem>
                    </Checkbox>
                    <Checkbox>
                      <ListItem>All Country</ListItem>
                    </Checkbox>
                  </List>
                </Center>
              </MenuList>
            </Menu>
          </Stack>
          <Stack>
            <Menu>
              <MenuButton
                bg={"white"}
                py={0}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Fabric
              </MenuButton>
              <MenuList>
                <Center>
                  <List>
                    <Checkbox>
                      <ListItem>Cotton</ListItem>
                    </Checkbox>
                  </List>
                </Center>
              </MenuList>
            </Menu>
          </Stack>
          <Stack>
            <Menu>
              <MenuButton
                bg={"white"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Fit
              </MenuButton>
              <MenuList>
                <Center>
                  <List>
                    <Checkbox>
                      <ListItem>Ragular Fit</ListItem>
                    </Checkbox>
                  </List>
                </Center>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </HStack>
    </HStack>
  </Flex>
</Box>
  )
  }
