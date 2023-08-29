// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { CardContent } from '@mui/material'

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardShap = () => {
  return (
    <Card>
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important`, textAlign: 'center' }}>
        <img width={500} alt='swarmplot' src='/images/swarmplot_national.png' />
      </CardContent>
    </Card>
  )
}

export default DashboardShap
