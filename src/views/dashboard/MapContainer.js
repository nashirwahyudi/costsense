// ** MUI Imports
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import dynamic from 'next/dist/shared/lib/dynamic'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { useMemo } from 'react'

const position = [51.505, -0.09]

const MapContainer = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import('../../layouts/components/Map'), {
        loading: () => <p>Map is loading...</p>,
        ssr: false
      }),
    []
  )

  return (
    <Card>
      <CardHeader
        title='Maps'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
        sx={{ pt: theme => `${theme.spacing(2.25)} !important`, textAlign: 'center' }}
        style={{ height: '45vh', width: '100%' }}
      >
        <Map />
      </CardContent>
    </Card>
  )
}

export default MapContainer
