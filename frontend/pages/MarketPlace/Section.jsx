import React from 'react'
import { Typography } from '@mui/material'
import Card from './Card'
export default function Section() {
  return (
    <div>
      <Typography mt={2} />
      {[0, 1, 2, 3].map((i) => (
        <Card></Card>
      ))}
    </div>
  )
}
