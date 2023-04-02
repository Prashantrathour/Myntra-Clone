import React from "react";
import style from "./filter.module.css"
import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  Divider,
  Heading,
  Input,
  List,
  ListItem,
  Stack,
  VStack,
} from "@chakra-ui/react";

export default function Fitermenu() {
  return (
    <Box width={"-moz-fit-content"} >
    <Input placeholder="Search category"/>
    <Center>
      <VStack width={"full"} >
        <Stack boxShadow="base" p="6" rounded="md" bg="white">
          <Box>
            <Box  >
              <Heading as={"sub"} size={"xs"} >
                Categories
              </Heading>
            <Divider pb={3} pt={3}/>
              <CheckboxGroup colorScheme="pink" spacing="1">
                <Stack direction={"column"}>
                  <Checkbox>Churidar</Checkbox>
                  <Checkbox>Harem Pants</Checkbox>
                  <Checkbox>Palazzos</Checkbox>
                  <Checkbox>Patiala and Dupatta</Checkbox>
                  <Checkbox>Skirts</Checkbox>
                  <Checkbox>Trousers</Checkbox>
                  <Checkbox>Tights</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
           
         
            <Box >
              <Heading as={"sub"} size={"xs"}>
                COLOR
              </Heading> <Divider pb={3} pt={3}/>
              <CheckboxGroup colorScheme="pink" spacing="1">
                <Stack direction={"column"}>
                  <Checkbox>Black</Checkbox>
                  <Checkbox>White</Checkbox>
                  <Checkbox>Red</Checkbox>
                  <Checkbox>Navy Blue</Checkbox>
                  <Checkbox>Beige</Checkbox>
                  <Checkbox>Trousers</Checkbox>
                  <Checkbox>Tights</Checkbox>
                  <Checkbox>Brown</Checkbox>
                  <Checkbox>Purple</Checkbox>
                  <Checkbox>Mustard</Checkbox>
                  <Checkbox>Cream</Checkbox>
                  <Checkbox>Turquoise</Checkbox>
                  <Checkbox>Coral</Checkbox>
                  <Checkbox>Magenta</Checkbox>
                  <Checkbox>Gold</Checkbox>
                  <Checkbox>Sea</Checkbox>
                  <Checkbox>Olive</Checkbox>
                  <Checkbox>Multi</Checkbox>
                  <Checkbox>Teal</Checkbox>
                  <Checkbox>Coff</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            
          
            <Box >
              <Heading as={"sub"} size={"xs"}>
                DISCOUNT
              </Heading><Divider pb={3} pt={3}/>
              <CheckboxGroup
                variant={"circle"}
                colorScheme="pink"
                spacing="1"
                mt={2}
              >
                <Stack>
                  <Checkbox>10% and above</Checkbox>
                  <Checkbox>20% and above</Checkbox>
                  <Checkbox>30% and above</Checkbox>
                  <Checkbox>40% and above</Checkbox>
                  <Checkbox>50% and above</Checkbox>
                  <Checkbox>60% and above</Checkbox>
                  <Checkbox>70% and above</Checkbox>
                  <Checkbox>80% and above</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            <Divider />
          </Box>
        </Stack>
      </VStack>
      </Center>
    </Box>
  );
}
