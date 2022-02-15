import { Container, Heading } from "@chakra-ui/react";
import Stays from "../components/container/Stays";

export default function Home() {
  return (
    <Container
      maxWidth={'1280px'}
    >
      <Heading
        as={'h3'}
        fontSize={'20px'}
        mt={8}
      >
        Stays in Finlandia
      </Heading>
      <Stays/>
    </Container>
  )
}

/*
 {locations.map((location,index)=>(
          <LocationCardItem
          id={location.id} 
          title={location.title}
          thumbnail={location.thumbnail}
          stars={location.stars}
          desc={location.desc}
          key={index}
            >
          </LocationCardItem>
        ))}
*/
