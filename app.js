// Create a dynamic dropdown menu from GET using Await/Axios and Try/Catch //

const getOptions = async () => {
  const url = 'https://covid-api.mmediagroup.fr/v1/cases'
  try {
    const response = await axios.get(url)
    let countryList = Object.keys(response.data)
    // console.log(countryList)
    setOptions(countryList)
    return countryList
  }
  catch (error) {
    console.error(error)
  }
}

getOptions()


// Create the form (dropdown menu) option tags //

function setOptions(list) {
  const selectTag = document.querySelector('#select-country')
  list.forEach((country) => {
    const optionTag = document.createElement('option')
    optionTag.textContent = country
    optionTag.value = country
    selectTag.append(optionTag)
  })
  return list
}


// Get option tag values //

function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector('#select-country').value
  getCountryName(optionValue)
  return optionValue
}


// Eventhandler //

const form = document.querySelector('form')
form.addEventListener("submit", getValue)


// API request for country name //

async function getCountryName(countryValue) {
  try {
    const nameResponse = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getValue}`)
    const name = nameResponse.data
    appendName(name)
    return name
  }
  catch (error) {
    console.error(error)
  }
}


// API request for population data //

async function getPopulationData(confirmedValue) {
  try {
    const populationResponse = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getValue}`)
    const population = populationResponse.data.all.population
    append(population)
    return population
  }
  catch (error) {
    console.error(error)
  }
}


// API request for confirmed cases //

async function getConfirmedCases(confirmedValue) {
  try {
    const confirmedResponse = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getValue}`)
    const confirmed = confirmedResponse.data.all.confirmed
    append(confirmed)
    return confirmed
  }
  catch (error) {
    console.error(error)
  }
}


// Create dynamic header tag //

function appendText(textSrc) {
  const textDiv = document.querySelector('#country-data')
  const name = documentCreateElement('h3')
  const pop = documentCreateElement('h3')
  const confirm = documentCreateElement('h3')
  h3 = textSrc
  textDiv.append(name)
  textDiv.append(pop)
  textDiv.append(confirm)
}
