import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import {LocationCardItem} from './Card'


const Stays = () => {
    const locations = [
        {
          id: 'depa1',
          title: 'Entire apartment. 2 beds',
          thumbnail: '/img/lugares/depa1.jpeg',
          stars: 4.40,
          desc: 'Stylist apartment in center of the city',
          guests: 1
        },
        {
          id: 'depa1',
          title: 'Private room',
          thumbnail: 'https://www.inmuebles24.com/noticias/wp-content/uploads/2019/07/mejores-departamentos-690x450.jpg',
          stars: 4.25,
          desc: 'Cozy,peaceful and private room with ..',
          guests: 1
        },
        {
          id: 'depa1',
          title: 'Entire House',
          thumbnail: 'https://inmobiliare.com/himalaya/wp-content/uploads/2020/11/Londres-london-departamentos-vivienda.jpg',
          stars: 4.96,
          desc: 'Modern House in a remote area',
          guests: 2
        },
        {
          id: 'depa1',
          title: 'Entire apartment. 2 beds',
          thumbnail: 'https://elcomercio.pe/resizer/02VIzTJ4A2UsfFhDU5Fp-HWFLp4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5N6HAL2ZAZBIFN5M4ZPSXC7LOQ.jpg',
          stars: 4.85,
          desc: 'Stylist room in design destrict',
          guests: 2
        },
        {
          id: 'depa1',
          title: 'Private room',
          thumbnail: 'https://inmobiliare.com/himalaya/wp-content/uploads/2020/10/Departamentos-pequenos-con-amenidades-de-alta-demanda-tendencia-de-vivienda-en-CDMX.jpg',
          stars: 4.54,
          desc: 'Modern apartment close to nature',
          guests: 3
        },
        {
          id: 'depa1',
          title: 'Entire house',
          thumbnail: 'https://www.arquimaster.com.ar/web/wp-content/uploads/2021/11/casa_gorgos_slide.jpg',
          stars: 4.64,
          desc: 'House in remote area',
          guests: 3
        },
      ]
    let guestsChange=0;
    let guests=2;

    
    // useEffect(() => {
    //     guests= guestsChange
    // }, [sessionStorage.getItem('Guests')])
    
  return (
    <SimpleGrid
        pt={3}
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        gap={6}
        spacing={12}
      >
        {locations.map((location, index) => (
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
      </SimpleGrid>
  )
}

export default Stays

/*
(location.guests == guests &&
            <LocationCardItem
              id={location.id}
              title={location.title}
              thumbnail={location.thumbnail}
              stars={location.stars}
              desc={location.desc}
              key={index}
            >
            </LocationCardItem>
          )
*/