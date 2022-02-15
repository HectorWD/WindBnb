import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar/navbar'

const Main = ({children,router}) => {
  return (
    <Box
    as='main'
    pb={8}
    >
        <Head>
            <meta name='viewport' content='width=divice-width, initial-scale=1'/>
            <title>WindBnb -HomePage</title>
        </Head>
        <Navbar/>
        <Container
        maxW={'container.xl'}
        pt={{base:24, sm:14}}
        >
          {children}
        </Container>
    </Box>
  )
}

export default Main