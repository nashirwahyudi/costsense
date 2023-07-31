// ** Icon imports
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Abacus from 'mdi-material-ui/Abacus'
import TimelineShimmer from 'mdi-material-ui/ChartTimelineVariantShimmer'

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
    }
  ]
}

export default navigation
