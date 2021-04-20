// Create a dynamic dropdown menu from GET using Await/Axios and Try/Catch //

const getOptions = async () => {
  const url = 'https://covid-api.mmediagroup.fr/v1/cases?country'
  try {
    const response = await axios.get(url)
    // let countryList = Object.keys(response.data.cases.country)
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
    const nameResponse = await axios.get(``)
    // const nameURL = nameResponse.data
    appendName(nameURL)
    return nameURL
  }
  catch (error) {
    console.error(error)
  }
}

