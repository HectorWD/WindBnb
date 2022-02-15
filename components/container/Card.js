import { StarIcon } from '@chakra-ui/icons';
import { Box, LinkBox, LinkOverlay, Text, Image, Button, Flex, Icon } from '@chakra-ui/react'
//import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

export const GridItemStyle = () => (
    <Global styles={`
        .card-item-thumbnail{
            border-radius:200px;
        }
    `} />
)
export const CardItem = ({ children, href, title, thumbnail }) => {
    return (
        <Box
            w={'100%'}
            align={'center'}
        >
            <LinkBox cursor={'pointer'}>
                <Image
                    src={thumbnail}
                    alt={title}
                    className='card-item-thumbnail'
                    loading='lazy'
                />
                <LinkOverlay
                    href={href}
                    target='_blank'
                >
                    <Text mt={2}> {title} </Text>
                </LinkOverlay>
                <Text
                    fontSize={14}
                >
                    {children}
                </Text>
            </LinkBox>
        </Box>
    )
};

export const LocationCardItem = ({title, thumbnail, stars,desc }) => {
    return (
        <Box
            w={'100%'}
        >
            <NextLink href={`/`}>
                <LinkBox
                    w={'100%'}
                >
                    <Image
                        src={thumbnail}
                        alt={title}
                        className={'card-item-thumbnail'}
                        placeholder='blur'
                        borderTopRadius={'24px'}
                        fit='cover'
                        minH={'250px'}
                    />
                    <LinkOverlay
                        href={`/`}
                    >
                        <Flex>
                            <Button
                            variant={'outline'}
                            borderColor='black'
                            borderRadius={'20px'}
                            size='sm'
                            m={1}
                            >
                                Super Host
                            </Button>
                            <Text
                            fontSize={'14px'}
                            color='gray.500'
                            alignSelf={'center'}
                            mr={10}
                            >
                                {title}
                            </Text>
                            <Text
                            alignSelf={'center'}
                            >
                              <Icon as={StarIcon} color='red.300' />  {stars}
                            </Text>
                        </Flex>
                    </LinkOverlay>
                    <Text 
                    fontSize={16}
                    fontWeight={'600'}
                    >
                        {desc}
                    </Text>
                </LinkBox>

            </NextLink>
        </Box>
    )
}

