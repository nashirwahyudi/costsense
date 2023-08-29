// ** Icon imports
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Abacus from 'mdi-material-ui/Abacus'
import TimelineShimmer from 'mdi-material-ui/ChartTimelineVariantShimmer'
import Table from 'mdi-material-ui/TableBorder'

const navigation = () => {
  return [
    {
      title: 'Storyboard',
      icon: Abacus,
      path: '/storyboard'
    },
    {
      title: 'Interactive Dashboard',
      icon: TimelineShimmer,
      path: '/'
    },
    {
      title: 'Output dan Hasil Analisis',
      icon: Table,
      path: '/result'
    }
  ]
}

export default navigation
