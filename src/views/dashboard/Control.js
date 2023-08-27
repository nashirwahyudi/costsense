// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import chartdata from './../../../public/assets/count_fkrtl_prov.json'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

const Control = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  const [wilayah, setWilayah] = useState('')

  const handleChange = SelectChangeEvent => {
    setAge(event.target.value)
  }

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Transaksi BPJS</Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id='wilayah-label'>Wilayah</InputLabel>
          <Select
            labelId='wilayah-label'
            id='wilayah-helper'
            value={wilayah}
            label='Wilayah'
            onChange={selected => {
              setWilayah(selected.target.value)
            }}
          >
            <MenuItem value=''>
              <strong>Nasional</strong>
            </MenuItem>
            {chartdata.map((elem, idx) => (
              <MenuItem key={idx} value={elem.prov}>
                {elem.prov}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  )
}

export default Control
