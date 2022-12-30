import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import PropTypes from 'prop-types'
import ThemeContext from '../../utils/useContextTheme'

export default function CardNotices({ element, medias }) {
  const { theme } = useContext(ThemeContext)
  console.log(medias)
  return (
    <Card className={`${theme.bgCard} card rounded`}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={medias[0]} />
        <CardContent>
          <Typography
            gutterBottom
            className={`${theme.txt}`}
            variant="h5"
            component="div"
          >
            {element.title}
          </Typography>
          {/* <p className={`${theme.txt} my-0 py-0 fw-bolder`}>{element.date}</p> */}
          <Typography variant="body2" className={`${theme.txt} short-text`}>
            {element.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
CardNotices.propTypes = {
  element: PropTypes.object.isRequired,
  medias: PropTypes.array.isRequired,
}
