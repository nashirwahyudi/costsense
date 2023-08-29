// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { CardContent } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const MUITable = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} data-aos='fade-right'>
        <Typography variant='h3'>
          <Link href='#'>Output dan Hasil Analsis</Link>
        </Typography>
        <Typography variant='body1' fontWeight='normal'>
          Berdasarkan pendekatan statistik dan machine learning.
        </Typography>
      </Grid>
      <Grid item xs={12} data-aos='fade-up' data-aos-duration='1000'>
        <Card>
          <CardHeader title='OUTPUT' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />
          <CardContent sx={{ textAlign: 'center' }}>
            <img src='/images/Summary_National.png' alt='' width={700} />
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. Suspendisse ultricies tortor
              tempor diam rhoncus porta facilisis sit amet augue. Nulla blandit pulvinar sagittis. Ut luctus, felis quis
              aliquam tincidunt, nulla dui malesuada ipsum, eget hendrerit ipsum odio et enim. Nulla non dui enim.
              Vivamus interdum lectus ornare metus iaculis, id varius velit bibendum. In eleifend lacinia facilisis.
              Etiam pellentesque dui in accumsan hendrerit. Donec nec massa ut dui tincidunt egestas at id felis. In eu
              magna non arcu suscipit elementum ut at massa. Nullam fermentum, ex in commodo lacinia, neque dolor
              facilisis purus, sed tristique turpis ligula non arcu. Sed at enim ac urna cursus sagittis. Suspendisse
              laoreet egestas efficitur. Proin id purus felis. Aenean at porta lacus. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis auctor nibh lectus, non sollicitudin
              nisi tristique eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed viverra dapibus
              libero, tempus sodales risus mattis quis. Nam dictum aliquam justo, quis porta est sollicitudin quis. Ut
              ac ipsum porta, varius risus nec, lacinia lectus.
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} data-aos='fade-up' data-aos-duration='1500'>
        <Card>
          <CardHeader title='HASIL ANALISIS' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />
          <CardContent sx={{ textAlign: 'center' }}>
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. Suspendisse ultricies tortor
              tempor diam rhoncus porta facilisis sit amet augue. Nulla blandit pulvinar sagittis. Ut luctus, felis quis
              aliquam tincidunt, nulla dui malesuada ipsum, eget hendrerit ipsum odio et enim. Nulla non dui enim.
              Vivamus interdum lectus ornare metus iaculis, id varius velit bibendum. In eleifend lacinia facilisis.
              Etiam pellentesque dui in accumsan hendrerit. Donec nec massa ut dui tincidunt egestas at id felis. In eu
              magna non arcu suscipit elementum ut at massa. Nullam fermentum, ex in commodo lacinia, neque dolor
              facilisis purus, sed tristique turpis ligula non arcu. Sed at enim ac urna cursus sagittis. Suspendisse
              laoreet egestas efficitur. Proin id purus felis. Aenean at porta lacus. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis auctor nibh lectus, non sollicitudin
              nisi tristique eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed viverra dapibus
              libero, tempus sodales risus mattis quis. Nam dictum aliquam justo, quis porta est sollicitudin quis. Ut
              ac ipsum porta, varius risus nec, lacinia lectus. Vivamus dignissim dui cursus eros sagittis aliquam.
              Donec efficitur urna ex, at suscipit quam aliquam non. Quisque auctor velit in imperdiet molestie. Morbi
              dapibus suscipit facilisis. Cras eget vestibulum justo.{' '}
            </p>
            <img src='/images/individual.jpeg' alt='' width={700} />
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              Aenean lobortis eros consectetur mi maximus, nec feugiat magna vehicula. Integer mi augue, luctus vel
              pretium nec, laoreet nec tellus. Nunc non sapien consequat, dignissim eros quis, tempus augue. Nunc tortor
              libero, malesuada pretium feugiat vel, tristique sed libero. Nam eu vestibulum augue, id aliquam lorem.
              Vivamus vel blandit arcu. Aenean interdum tempor velit, et elementum lacus mollis id. Ut in tellus velit.
              Donec facilisis congue dolor. Fusce ac mollis velit, et imperdiet risus. Cras vel viverra enim. Cras
              tristique enim non arcu scelerisque ultrices. Nulla eu consequat sem. Donec elementum erat id leo molestie
              iaculis. Curabitur bibendum interdum ipsum a ultrices. Etiam in orci tellus. Curabitur vulputate sem quis
              leo eleifend vehicula. Morbi scelerisque, purus id sodales cursus, purus libero pellentesque lectus, quis
              tempus ligula justo a ipsum. Sed sit amet imperdiet lectus. Phasellus porttitor lectus sed eleifend
              molestie. Curabitur in orci malesuada, blandit odio cursus, egestas elit. In bibendum, eros rhoncus
              condimentum dictum, massa metus elementum mauris, nec aliquam ex erat ut mi. Vestibulum enim arcu,
              molestie sit amet rutrum eget, porttitor ut diam. Nunc fringilla urna sit amet ex fringilla, ac pulvinar
              diam hendrerit. Nam vel felis sit amet lectus venenatis varius. Nullam gravida eleifend dolor non viverra.
              Donec id lacus nunc. Sed ut semper mauris, a placerat mauris. Sed nec sem purus. Sed scelerisque mi id
              nunc dapibus, vel venenatis justo porttitor. Sed molestie elit non bibendum suscipit. Proin ornare finibus
              quam, vitae rhoncus nulla. Cras a pulvinar velit. Sed vitae consectetur nisl. Integer ut dolor dui.
              Vivamus et mattis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Nam eget ex eu turpis aliquet fringilla non at metus. In facilisis augue velit, id tincidunt nulla
              aliquam vitae. Morbi a sapien lobortis turpis varius ultricies eu at libero. Maecenas vulputate id enim
              sed volutpat.
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
