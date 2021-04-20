// Create a dynamic dropdown menu from GET

const getOptions = async () => {
  const url = 'https://covid-api.mmediagroup.fr/v1/cases?country'
  try {
    const response = await axios.get(url)
    let countryList = Object.keys(response.data.message)
    setOptions(countryList)
    return countryList
  }
  catch (error) {
    console.error(error)
  }
}