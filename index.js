function findMatching(drivers, name) {
  newArray = drivers.filter(driver => driver === name || driver === name.toLowerCase())

  return newArray;
}

function fuzzyMatch(drivers, name) {
  newArray = drivers.filter(driver => driver.slice(0, name.length) === name);

  return newArray;
}
function matchName(drivers, name) {
  newArray = drivers.filter(driver => driver["name"] === name);

  return newArray;
}
