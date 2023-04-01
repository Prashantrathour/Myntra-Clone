import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Img,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import CaptionCarousel from "./Crousel";
import Div from "./Div";
import { bestbuy, bestdeal, giftcard, groming, influe, kids, Luxe, NEWNESS, roundimage, saleced, season, topbrand } from "./images1.jsx";
import { toppics, bestexclusive } from "./images1.jsx";
import Cart from "./Cart";
import Footer from "../Footer";
console.log(bestdeal);

export default function Home() {
  return (
    <>
      <Navbar />
      <CaptionCarousel   />
      <Box zIndex={-1} position={"relative"}>
      <Box mt={"-16"}>
        <Heading ml={2}>DEAL OF THE DAY</Heading>
        <Card>
          <Cart data={bestdeal} />
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>BEST OF INFINITY EXCLUSIVE BRANDS</Heading>
        <Card>
          <Cart data={bestexclusive} />
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>TOP PICS</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl: 7 }} spacing={0}>
              {toppics.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>TOP PICS</Heading>
        <Card>
          <Cart data={roundimage} />
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>DEALS ON TOP BRANDS</Heading>
        <Card>
          <Cart data={topbrand} />
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>SALECED PRICE</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl: 7 }} spacing={0}>
              {saleced.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>BEST BUY</Heading>
        <Card>
          <Cart data={bestbuy} />
        </Card>
      </Box>
      <Box mt={5}>
        <Heading ml={2}>BEST BUY</Heading>
        <Card>
          <Cart data={Luxe} />
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>GIFT CARD</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl: 4 }} spacing={0}>
              {giftcard.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>LATEST IN BEAUTY & GROOMING</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl: 4 }} spacing={0}>
              {groming.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>KIDS WEAR</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl:7 }} spacing={0}>
              {kids.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>NEWNESS FOR EVERY OCCASION</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl:4 }} spacing={0}>
              {NEWNESS.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>NEWNESS FOR EVERY OCCASION</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl:4 }} spacing={0}>
              {season.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Heading ml={2}>INFLUENCER STYLE</Heading>
        <Card>
          <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl:6 }} spacing={0}>
            
              {influe.map((img, i) => {
                return <Div img={img} />;
              })}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
      </Box>
      <Footer/>
    </>
  );
}
