import { SearchIcon } from "@chakra-ui/icons"
import {
    Box,
    Container,
    Flex, Heading,
    IconButton,
    Input,
    Modal,
    Stack,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react"
import Logo from './logo'
import ModalSearch from "../modal"
import { useEffect, useRef, useState } from "react"
const Navbar = () => {
   
    const { isOpen, onOpen, onClose } = useDisclosure();
    //Para el cambio de Dark/Light
    const bg = useColorModeValue('gray.200', 'gray.700');

    //Para la busqueda
    //Valores para darnos cuenta cuando actualizar el navBar Info
    let locationChange='hola';
    let guestsChange=2;
    //Valores por defecto que cambian
    const [search, setSearch] = useState({
        location: 'Helisinky,Finland',
        guests: 2
    })

    //Paa el sessionStorage ahy que esperar a que la pagina ya este montada
    if(typeof window !== 'undefined'){
        locationChange= sessionStorage.getItem('Location')
        guestsChange= sessionStorage.getItem('Guests')
    }
    // const location= sessionStorage.getItem('Location') || 'Helsinky,Finland';
    // const guests= sessionStorage.getItem('Guests') || 3;
    useEffect(() => {
      setSearch({
          location:locationChange,
          guests:guestsChange
      })
    }, [locationChange,guestsChange])
    

    return (
        <>
            <Box
                position={'fixed'}
                as={'nav'}
                w={'100%'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                style={{ backdropFilter: 'blur(10px)' }}
                zIndex={1}
            >
                <Container
                    p={2}
                    display={'flex'}
                    flexWrap='wrap'
                    maxW={'container.xl'}
                >
                    <Flex
                        width={'100%'}
                        direction={{ base: 'column', sm: 'row' }}

                    >
                        <Heading
                            as={'h1'}
                            size={'md'}
                            justifyContent='flex-start'
                            alignSelf={'center'}
                        >
                            <Logo />
                        </Heading>

                        <Stack
                            direction={'row'}
                            display={{ base: 'inline-block', sm: 'flex' }}
                            justifyContent={'flex-end'}
                            alignItems='center'
                            flexGrow={1}
                            mt={{ base: 2, md: 0 }}
                            alignSelf={'center'}
                        >
                            <Input
                                placeholder="Location"
                                value={search.location}
                                width={'150px'}
                                disabled
                            />
                            <Input
                                placeholder="Guests"
                                value={search.guests}
                                width={'150px'}
                                disabled
                            />
                            <IconButton
                                colorScheme={bg}
                                color='red.300'
                                icon={<SearchIcon />}
                                onClick={onOpen}
                            />
                        </Stack>
                    </Flex>
                </Container>
            </Box>
            
                <ModalSearch isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    )
}

export default Navbar