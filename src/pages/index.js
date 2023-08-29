// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Shapley from 'src/views/dashboard/Shapley'
import Transaksi from 'src/views/dashboard/Transaksi'
import MapContainer from 'src/views/dashboard/MapContainer'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import BarChart from 'src/views/dashboard/BarChart'
import Control from 'src/views/dashboard/Control'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Dashboard = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} data-aos='fade-up' data-aos-duration='700'>
          <Control />
        </Grid>
        <Grid item xs={12} md={4} data-aos='fade-up' data-aos-duration='900'>
          <Transaksi />
        </Grid>
        <Grid item xs={12} md={8} data-aos='fade-up' data-aos-duration='900'>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={8} lg={8} data-aos='fade-up' data-aos-duration='900'>
          <MapContainer />
        </Grid>
        <Grid item xs={12} md={4} lg={4} data-aos='fade-up' data-aos-duration='900'>
          <BarChart />
        </Grid>
        {/* <Grid item xs={12} data-aos='fade-up' data-aos-duration='900'>
          <Shapley />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
