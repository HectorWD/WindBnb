import { Box, Button, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

const ModalSearch = ({isOpen,onOpen,onClose}) => {

    const locations=[
        {location:'Helsinky,Finland'},
        {location:'Turku,Finland'},
        {location:'Oulu,Finland'},
        {location:'Vaasa,Finland'},
    ]
     //Para el modal
     const initialRef = useRef();
     const finalRef = useRef()

    const [adults, setAdults] = useState(0)
    const [childrens, setChildrens] = useState(0)
    const [locationSearch,setLocationSearch]= useState('Helsinky,Finland')

    const Search=(adults,childrens,locationSearch)=>{
       const guests= adults +childrens
        //Otra forma de guardar los datos
        //Hacerlo por localStorage

        sessionStorage.setItem('Location',locationSearch)
        sessionStorage.setItem('Guests',guests)
        onClose();
    }
  return (
    <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>Busqueda</ModalHeader>
                <ModalCloseButton/>

                <ModalBody 
                pb={6}
                display='flex'
                flexWrap={'wrap'}
                >
                    <FormControl mr={4}>
                        <FormLabel>Location</FormLabel>
                        <Select 
                        placeholder="Select Location"
                        onChange={(e)=>setLocationSearch(e.target.value)}
                        value={locationSearch}
                        >
                        {locations.map((location,index)=>(
                            <option 
                            value={location.location}
                            key={index}
                            >{location.location}</option>
                        ))}
                    </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Guests</FormLabel>
                        <Input placeholder='Guests' disabled value={`${adults+childrens} Guests`} />
                    </FormControl>
                        <Box>
                            <Heading as={'h4'} fontSize={'14px'} pt={2}>
                                Adults
                            </Heading>
                            <Text
                            color={'gray.500'}
                            fontSize={'14px'}
                            mb={2}
                            >Ages 13 or above</Text>
                            <Button 
                            size={'sm'} 
                            mr={4}
                            onClick={()=>{adults>0&&setAdults(adults-1)}}
                            > - 
                            </Button>
                            {adults}
                            <Button 
                            size={'sm'} 
                            ml={4}
                            onClick={()=>{setAdults(adults+1)}}
                            > + </Button>
                        </Box>
                        <Box ml={12}>
                            <Heading as={'h4'} fontSize={'14px'} pt={2}>
                                Childrens
                            </Heading>
                            <Text
                            color={'gray.500'}
                            fontSize={'14px'}
                            mb={2}
                            >Age 2-12</Text>
                            <Button 
                            size={'sm'} 
                            mr={4}
                            onClick={()=>{childrens>0&&setChildrens(childrens-1)}}
                            > - 
                            </Button>
                            {childrens}
                            <Button 
                            size={'sm'} 
                            ml={4} 
                            onClick={()=>{setChildrens(childrens+1)}}
                            > + </Button>
                        </Box>
                </ModalBody>
                <ModalFooter>
                    <Button color={'red.500'} mr={3} onClick={()=>Search(adults,childrens,locationSearch)}>
                        Buscar
                    </Button>
                    <Button onClick={onClose}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
        </Modal>
  )
}

export default ModalSearch