import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  Divider,
  Heading,
  List,
  ListItem,
  Stack,
  useFormControlStyles,
  VStack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export default function FIlterforbeauty({searchparam,searchq}) {
    const [cat,setcat]=useState([])
    const [check,setmen]=useState(["Men"])
    // const [womencheck,setwomen]=useState(false)
    // const [boysmencheck,setboysmen]=useState(false)
    // const [girlscheck,setgirlsmen]=useState(false)
  const Change = (e) => {setmen([e.target.name])};

//   const Changehandlewomen = (e) => {setwomen(e.target.checked)};
//   const Changehandleboys = (e) => {setboysmen(e.target.checked)};
//   const Changehandlegirls = (e) => {setgirlsmen(e.target.checked)};
  const [search,setsearch] =useSearchParams()
  console.log(search.get("q"))
 const searchquery=(e)=>{
    setsearch({q:e})
   
}
const checkbox=(e)=>{
setcat(e)

}
useEffect(()=>{
searchparam(check[0]);
searchq(search.get("q"))
},[cat,check[0]])
  console.log(check)
  return (
    <Box width={"25%"}>
      <Center>
        <VStack width={"full"}>
          <Stack boxShadow="base" p="6" rounded="md" bg="white">
            <Box>
              <Box>
                <Heading as={"sub"} size={"xs"}>
                  Categories
                </Heading>
                <Divider pb={3} pt={3} />
                <CheckboxGroup colorScheme="pink" spacing="1" defaultValue={check} onChange={(e)=>console.log(e)}>
                  <Stack direction={"column"}>
                    <Checkbox value={"Men"} name={"Men"} onChange={Change} >Men</Checkbox>
                    <Checkbox value={"Women"} name={"Women"} onChange={Change}>Women</Checkbox>
                    <Checkbox value={"Boys"} name={"Boys"} onChange={Change}>Boys</Checkbox>
                    <Checkbox value={"Girls"} name={"Girls"} onChange={Change}>Girls</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Box>
              <Box>
                <Heading as={"sub"} size={"xs"}>
                  Sub Categories
                </Heading>
                <Divider pb={3} pt={3} />
                <CheckboxGroup colorScheme="pink" spacing="1">
                  <Stack direction={"column"}>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="Lipstick" >Lipstick(9208)</Checkbox>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="Foundation">Foundation and Primer(2006)</Checkbox>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="Eyeshadow">Eyeshadow(1833)</Checkbox>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="kajal">Kajal and Eyeliner(1694)</Checkbox>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="Highlighter">Highlighter and Blush(1179)</Checkbox>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="Lip">Lip Care(974)</Checkbox>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="Concealer">Concealer(915)</Checkbox>
                    <Checkbox onChange={(e)=>searchquery(e.target.name)} name="Makeup">Makeup Brushes(809)</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Box>
              <Box>
                <Heading as={"sub"} size={"xs"}>
                  COLOR
                </Heading>{" "}
                <Divider pb={3} pt={3} />
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

              <Box>
                <Heading as={"sub"} size={"xs"}>
                  DISCOUNT
                </Heading>
                <Divider pb={3} pt={3} />
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
