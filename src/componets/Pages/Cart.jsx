import { CardBody, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Div from './Div'

export default function Cart({data}) {
  return (
    <>
        <CardBody>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4, xl: 8 }} spacing={0}>
              {data.map((img, i) => {
                return <Div img={img} />
              })}
            </SimpleGrid>
          </CardBody>
    </>
  )
}
