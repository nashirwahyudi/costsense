import { useEffect } from 'react'
import L from 'leaflet'
import MapHelper from 'src/helper/MapHelper'

const Legend = ({ map }) => {
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: 'bottomright' })

      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend')
        const grades = [0, 2500, 5000, 7500, 10000]
        const labels = ['<div><strong>Jumlah FKRTL</strong></div>']

        grades.forEach((label, idx) => {
          labels.push(
            '<i style="background:' +
              MapHelper.getColor(label + 1) +
              '"></i> ' +
              label +
              (grades[idx + 1] ? '&ndash;' + grades[idx + 1] : '+')
          )
        })
        div.innerHTML = labels.join('<br/>')

        return div
      }

      legend.addTo(map)
    }
  }, [map])

  return null
}

export default Legend
