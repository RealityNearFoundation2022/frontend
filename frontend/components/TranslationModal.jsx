import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import LanguageIcon from '@mui/icons-material/Language'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Modal from './Modal'

import { languages } from '../translation/languages'
export default function TranslationModal() {
  const { t, i18n } = useTranslation()
  const currentLng = languages.find(({ key }) => key === i18n.language)
  const [language, setLanguage] = React.useState(currentLng)
  const handleChangeLanguage = (event) => {
    const lng = event.target.value
    const newLanguage = languages.find(({ key }) => key === lng)
    setLanguage(newLanguage)
    i18n.changeLanguage(lng, (err) => err)
  }
  return (
    <Modal
      button={
        <IconButton className="d-flex flex-column">
          <LanguageIcon style={{ color: '#33cc99', 'font-size': '30px' }} />

          <Typography style={{ color: '#33cc99', 'font-size': '15px' }}>
            {language.name}
          </Typography>
        </IconButton>
      }
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LanguageIcon style={{ color: 'green', 'font-size': '50px' }} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {t('Buscar idioma')}...
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language.key}
            label="Language"
            onChange={handleChangeLanguage}
          >
            {languages.map(({ name, key }) => (
              <MenuItem value={key}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Modal>
  )
}
