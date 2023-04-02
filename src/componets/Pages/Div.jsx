import { Box, Heading, Img } from "@chakra-ui/react";
import React from "react";
import { bestdeal, roundimage } from "./images1.jsx";
import { toppics ,bestexclusive} from "./images1.jsx";

export default function Div({img}) {
    console.log(img)
  return (
    <>
      <Box mt={2}>
    
        <Img width={"100%"} src={img} alt="1" />
      </Box>
    </>
  );
}
