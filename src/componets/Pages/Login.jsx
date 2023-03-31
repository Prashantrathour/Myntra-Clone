import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { Auth } from "../Contextprovider/Context/AuthContext";
export default function Login() {
  const [logindata, setlogin] = useState('');
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { isAuth, setAuth, token, settoken } = useContext(Auth);
  const val = useContext(Auth);

  const eemail = (e) => {
    setemail(e.target.value);
  };
  const pass = (e) => {
    setpassword(e.target.value);
  };
  const login = async (e) => {
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let token = await res.json();
      settoken(token);
      console.log(res.ok);
   setAuth(!res.ok)
   
    } catch (error) {
      setAuth(true);
      settoken("");
    }
  };

  const submithandle = (e) => {
    e.preventDefault();
    login(); 

    setemail("");
    setpassword("");
  };
  useEffect(() => {
   
  }, []);

  return (
  <>

 { isAuth ? 
    <Box bg={"#fcefe7"} height={"100vh"} width={"full"}>

      <Flex
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        direction={"column"}
      >
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          width={""}
          height={"180px"}
          src={
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"
          }
        />
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={"#ffff"}
          p="20"
          pb={"6"}
          pt={"5"}
        >
          <Heading fontSize={"2xl"}>Login/Signup</Heading>
          <FormControl>
            <Flex direction={"column"} gap={6}>
              <Box>
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={eemail}
                  data-testid="email-input"
                  value={email}
                  type="email"
                  placeholder="email"
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={pass}
                  data-testid="password-input"
                  placeholder="password"
                  value={password}
                />
              </Box>
              <Box>
                <Button
                  bg={"#FF3F6C"}
                  _hover="FF3F6C"
                  color={"#FFFFFF"}
                  width={"100%"}
                
                  onClick={submithandle}
                >
                  Countinue
                </Button>
              </Box>
            </Flex>
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Box>
   : 
    <Navigate to={"/"} />}
  ;
  </>)
}
