function orderName(a: {name: string}, b: {name: string}) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function orderStatus(a: {status: string}, b: {status: string}) {
  if (a.status < b.status) {
    return -1;
  }
  if (a.status > b.status) {
    return 1;
  }
  return 0;
}

function orderSpecies(a: {species: string}, b: {species: string}) {
  if (a.species < b.species) {
    return -1;
  }
  if (a.species > b.species) {
    return 1;
  }
  return 0;
}

function orderAirDate(a: {air_date: string}, b: {air_date: string}) {
  if (Date.parse(a.air_date) < Date.parse(b.air_date)) {
    return -1;
  }
  if (Date.parse(a.air_date) > Date.parse(b.air_date)) {
    return 1;
  }
  return 0;
}

export {orderName, orderStatus, orderSpecies, orderAirDate};
