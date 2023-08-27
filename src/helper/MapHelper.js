const getColor = num_fklrt => {
  if (num_fklrt > 10000) {
    return '#25BE43'
  } else if (num_fklrt > 7500) {
    return '#57E691'
  } else if (num_fklrt > 5000) {
    return '#ECE72E'
  } else if (num_fklrt > 2500) {
    return '#EC882E'
  } else {
    return '#EC452E'
  }
}

export default {
  getColor
}
