import { Box, Button, Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export function PaginationRounded({ totalcount = 10, currentpage = 1 }) {
  let butoon = new Array(totalcount).fill(1);
  const [page,setpage]=useSearchParams()

  return (
    <>
      <Box>
        {butoon.map((im,i) => {
          return (
              <Button onClick={()=>setpage({page:i+1})}>{i+1}</Button>
          );
        })}
      </Box>
    </>
  );
}
