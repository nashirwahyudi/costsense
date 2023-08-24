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
          <Link href='#'>STORYBOARD</Link>
        </Typography>
        <Typography variant='body1' fontWeight='normal'>
          We Provide Machine Learning Based Approach For BPJS Issue in Indonesia.
        </Typography>
      </Grid>
      <Grid item xs={12} data-aos='fade-up' data-aos-duration='1000'>
        <Card>
          <CardHeader title='BACKGROUND' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />
          <CardContent>
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              <strong>Jaminan Kesehatan</strong> memastikan masyarakat Indonesia memperoleh manfaat pemeliharaan
              kesehatan dan perlindungan dalam memenuhi kebutuhan dasar kesehatan.{' '}
              <strong>Badan Penyelenggara Jaminan Sosial (BPJS Kesehatan)</strong> selaku badan hukum penyelenggara
              program JKN melakukan pembayaran kepada Fasilitas Kesehatan, baik Fasilitas Kesehatan Tingkat Pertama
              (FKTP) maupun Fasilitas Kesehatan Rujukan Tingkat Lanjut (FKRTL).
            </p>
            <p style={{ textAlign: 'justify' }}>
              <strong>Alur klaim FKRTL kepada BPJS Kesehatan secara singkat: </strong>
              <ul>
                <li>FKRTL mengajukan klaim kolektif kepada BPJS Kesehatan secara periodik dan lengkap. </li>
                <li>BPJS Kesehatan harus mengeluarkan berita acara kelengkapan berkas klaim. </li>
                <li>
                  BPJS Kesehatan wajib melakukan pembayaran kepada FKRTL berdasarkan klaim yang diajukan dan telah
                  diverifikasi.
                </li>
              </ul>
            </p>
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              Mekanisme diatas tidak llepas dari <strong>Tindakan Kecurangan JKN</strong> yang dilakukan pemberi
              pelayanan kesehatan di FKRTL Salah satu upaya deteksi dini kecurangan JKN di FKRTL adalah: Analisis data
              Klaim dalam upaya deteksi dini Kecurangan JKN, yang biasanya dilakukan secara manual dan/atau dengan
              memanfaatkan aplikasi verifikasi klinis yang terintegrasi dengan aplikasi <strong>INA-CBGs.</strong>
            </p>
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              <strong>Aplikasi INA-CBGs</strong> merupakan salah satu perangkat entri data pasien yang digunakan untuk
              melakukan grouping tarif berdasarkan data yang berasal dari resume medis.{' '}
              <strong>Tarif Indonesian - Case Based Groups</strong> yang selanjutnya disebut Tarif INA-CBG’s adalah
              besaran pembayaran klaim oleh BPJS Kesehatan kepada Fasilitas Kesehatan Tingkat Lanjutan atas paket
              layanan yang didasarkan kepada pengelompokan diagnosis penyakit. Sayangnya, sering kali tarif klaim yang
              diajukan oleh FKRTL tidak sesuai dengan tarif verifikasi yang dibayarkan oleh BPJS Kesehatan. Dalam jangka
              panjang, hal ini berpengaruh pada kondisi keuangan FKRTL
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} data-aos='fade-up' data-aos-duration='1000'>
        <Card>
          <CardHeader title='TUJUAN' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />
          <CardContent>
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              Analisis data untuk menemukan <strong>anomali pada pengkodean INA-CBGs</strong> dan
              <strong>membangun model klasifikasi terhadap perbedaan tarif tagih dan taif verifikasi oleh FKRTL</strong>
              , serta membangun <strong>dashboard</strong> agar user dapat melakukan analisis lebih lanjut. Hal ini
              bertujuan untuk:
            </p>
            <p style={{ textAlign: 'justify' }}>
              <strong>Alur klaim FKRTL kepada BPJS Kesehatan secara singkat: </strong>
              <ol>
                <li>Meminimalisir kesalahan pengkodean INA-CBGs pada FKRTL saat input data pada aplikasi.</li>
                <li>
                  Menghindari perbedaan tarif tagih yang diajukan Fasilitas Kesehatan dengan biaya verifikasi oleh BPJS
                  yang akan diterima rumah sakit.
                </li>
              </ol>
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} data-aos='fade-up' data-aos-duration='1000'>
        <Card>
          <CardHeader title='METODOLOGI' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />
          <CardContent>
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              Secara umum, metodologi terdiri atas Exploratory Data Analysis dan Modelling.
            </p>
            <p style={{ textAlign: 'justify' }}>
              <ol>
                <li>
                  Algoritma Machine Learning (Entity Text Matching) untuk memastikan bahwa kode INA-CBGs telah sesuai
                  dengan diagnosis primer dan prosedur pelayanan pasien rujukan.
                </li>
                <li>
                  Algoritma Machine Learning Classification untuk klasifikasi suatu pelayanan dengan perbedaan tarif
                </li>
              </ol>
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} data-aos='fade-up' data-aos-duration='1000'>
        <Card>
          <CardHeader title='USER DASHBOARD DAN IMPACT' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />
          <CardContent>
            <p style={{ textAlign: 'justify', textIndent: '50px' }}>
              <strong>Admin FKRTL dan petugas FKRTL:</strong>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <ol>
                <li>
                  Mendeteksi adanya kesalahan pengkodean INA-CBGs pada FKRTL saat input data sehingga mampu{' '}
                  <strong>mencegah adanya Kecurangan JKN.</strong>
                </li>
                <li>
                  <strong>Menjaga kondisi keuangan FKRTL</strong> akibat perbedaan tarif tagih yang diajukan Fasilitas
                  Kesehatan dengan biaya verifikasi oleh BPJS yang akan diterima rumah sakit.
                </li>
              </ol>
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
