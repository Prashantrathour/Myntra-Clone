import { useState } from "react";
import {
  Flex,
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Megadropdown from "./Megadropdown.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userdata, setuserdata] = useState([]);
  const navigate = useNavigate();
  // const [isvalidate,setvalidate]=useState();
  const isvalidate = () => {
    let isproceed = true;
    let errormassage=""
    if(email==null||email==""){
      isproceed = false;
      errormassage+="email is required  "
    }
    if(name==null||name==""){
      isproceed = false;
      errormassage+="name is required  "
    }
    if(password==null||password==""){
      isproceed = false;
      errormassage+="password is required  "
    }
    if(!isproceed){
      toast.warning(errormassage)
    }
    return isproceed;
  };
 

  const handleSubmit = (e) => {
    if (isvalidate()) {
      e.preventDefault();
      if (password == confirmPassword) {
        let user = { email, name, password };
        toast.success("Register successfully");
        console.log(userdata);

        fetch("https://infinity-com.onrender.com/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...user, id: email }),
        })
          .then((res) => {
            return res.json();
          })
          .then((respond) => {
            console.log(respond);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally((done) => {
            console.log("done");
            navigate("/login");
          });
      } else {
        toast.error(" password is mismatch");
      }
    }
    
  };

  return (
    <>
      <Megadropdown />
      <Flex
        height={"100vh"}
        width="full"
        align="center"
        justifyContent="center"
        bg={"#fcefe7"}
      >
        <ToastContainer />
        <VStack
          spacing={4}
          bg="white"
          p={5}
          boxShadow="outline"
         
          rounded="md"
        
        >
          <Heading mb="8">Create an Account</Heading>

          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              placeholder="Enter your name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" onClick={handleSubmit}>
            Register
          </Button>
          <NavLink to="/login">Login if Allready registered</NavLink>
        </VStack>
      </Flex>
    </>
  );
};

export default Register;
