// ** MUI Imports
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import dynamic from 'next/dist/shared/lib/dynamic'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { useMemo } from 'react'

const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Zipcar',
    color: 'primary',
    amount: '$24,895.65',
    subtitle: 'Vuejs, React & HTML',
    imgSrc: '/images/cards/logo-zipcar.png'
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Bitbank',
    amount: '$8,650.20',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: '/images/cards/logo-bitbank.png'
  },
  {
    progress: 20,
    imgHeight: 20,
    title: 'Aviato',
    color: 'secondary',
    amount: '$1,245.80',
    subtitle: 'HTML & Angular',
    imgSrc: '/images/cards/logo-aviato.png'
  }
]

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
        style={{ height: '40vh', width: '100%' }}
      >
        <Map />
        {/* <img src='/images/misc/dummy-shapley.png' alt='Shapley dummy' height='300px' /> */}
      </CardContent>
    </Card>
  )
}

export default MapContainer
