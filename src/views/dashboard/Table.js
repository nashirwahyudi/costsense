// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    age: 'A01 Typhoid and paratyphoid fevers',
    salary: 'Rawat Inap di R. Perawatan Biasa',
    name: 'KAB. LAMONGAN',
    date: 'SWASTA',
    email: 'KLINIK PRATAMA',
    designation: 'JAWA TIMUR'
  },
  {
    age: 'A01 Typhoid and paratyphoid fevers',
    salary: 'Rawat Inap di R. Perawatan Biasa',
    date: 'PEMERINTAH',
    name: 'KAB. BANGKALAN',
    email: 'PUSKESMAS',
    designation: 'JAWA TIMUR'
  },
  {
    age: 'A01 Typhoid and paratyphoid fevers',
    salary: 'Rawat Inap di R. Perawatan Biasa',
    name: 'KAB. TRENGGALEK',
    date: 'SWASTA',
    email: 'KLINIK PRATAMA',
    designation: 'JAWA TIMUR'
  },
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Wilayah</TableCell>
              <TableCell>Faskes</TableCell>
              <TableCell>Jenis Faskes</TableCell>
              <TableCell>Jenis Perawatan</TableCell>
              <TableCell>Penyakit</TableCell>
              {/* <TableCell>Age</TableCell>
              <TableCell>Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                {/* <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
