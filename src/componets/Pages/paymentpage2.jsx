import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import {Link,NavLink} from "react-router-dom"
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import  { Navigate } from 'react-router-dom'

const CheckoutPaymentDetails = () => {
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [payment,setpayment]=useState(false);

  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleExpiryMonthChange = (event) => {
    setExpiryMonth(event.target.value);
  };

  const handleExpiryYearChange = (event) => {
    setExpiryYear(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Payment details submitted!");
    toast.success("Payment details submitted!")
     setTimeout(() => {
         setpayment(true)
 
  },5000)
  };
 

  return (
    payment?<Navigate to={"/"}/>:<Box maxWidth="md" margin="0 auto">
    <ToastContainer/>
      <Heading as="h2" size="xl" mb={8}>
        Payment Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="card-type">Card Type</FormLabel>
            <Select
              id="card-type"
              value={cardType}
              onChange={handleCardTypeChange}
            >
              <option value="">Select card type</option>
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
              <option value="amex">American Express</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="card-number">Card Number</FormLabel>
            <InputGroup>
              <InputLeftAddon>{cardType === "visa" ? "Visa" : "Mastercard"}</InputLeftAddon>
              <Input
                type="number"
                id="card-number"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="card-holder-name">Cardholder Name</FormLabel>
            <Input
              type="text"
              id="card-holder-name"
              value={cardHolderName}
              onChange={handleCardHolderNameChange}
            />
          </FormControl>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <FormControl>
              <FormLabel htmlFor="expiry-month">Expiry Month</FormLabel>
              <Select
                id="expiry-month"
                value={expiryMonth}
                onChange={handleExpiryMonthChange}
              >
                <option value="">Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="expiry-year">Expiry Year</FormLabel>
          <Select
            id="expiry-year"
            value={expiryYear}
            onChange={handleExpiryYearChange}
          >
            <option value="">Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="cvv">CVV</FormLabel>
          <Input
            type="number"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
          />
        </FormControl>
      </Stack>
      <Button type="submit" colorScheme="blue" size="lg" width="100%">
        Submit Payment Details
      </Button>
    </Stack>
  </form>
 
</Box>
  )}
  export default CheckoutPaymentDetails;
