import React, { useContext } from 'react'
import { Typography } from '@mui/material'
import Card from './Card'
import itemFake from '../../assets/img/random/cabin.png'
import ThemeContext from '../../utils/useContextTheme'
export default function Section() {
  const filtersMarketplace = [
    {
      title: 'Novedades',
      itemCards: [
        {
          img: itemFake,
          titleItem: 'Titulo 1',
          author: 'Creador 1',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 2',
          author: 'Creador 2',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 3',
          author: 'Creador 3',
          price: 143000,
        },
      ],
    },
    {
      title: 'Ofertas',
      itemCards: [
        {
          img: itemFake,
          titleItem: 'Titulo 1',
          author: 'Creador 1',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 2',
          author: 'Creador 2',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 3',
          author: 'Creador 3',
          price: 143000,
        },
      ],
    },
    {
      title: 'Realands',
      itemCards: [
        {
          img: itemFake,
          titleItem: 'Titulo 1',
          author: 'Creador 1',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 2',
          author: 'Creador 2',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 3',
          author: 'Creador 3',
          price: 143000,
        },
      ],
    },
    {
      title: 'Patchas',
      itemCards: [
        {
          img: itemFake,
          titleItem: 'Titulo 1',
          author: 'Creador 1',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 2',
          author: 'Creador 2',
          price: 143000,
        },
        {
          img: itemFake,
          titleItem: 'Titulo 3',
          author: 'Creador 3',
          price: 143000,
        },
      ],
    },
  ]
  const { theme } = useContext(ThemeContext)

  return (
    <div className="mt-5">
      <Typography mt={2} />
      {filtersMarketplace.map((item) => (
        <>
          <h1 className={theme.txt}>{item.title}</h1>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row justify-content-around">
                {/* <!--  Items--> */}
                {item.itemCards.map((card) => (
                  <Card elements={card} />
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
