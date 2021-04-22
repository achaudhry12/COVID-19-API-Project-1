// Create a dynamic dropdown menu from GET using Await/Axios and Try/Catch //

const getOptions = async () => {
  const url = 'https://covid-api.mmediagroup.fr/v1/cases';
  try {
    const response = await axios.get(url);
    let countryList = Object.keys(response.data);
    setOptions(countryList);
    return countryList;
  }
  catch (error) {
    console.error(error);
  }
}

getOptions()


// Create the form (dropdown menu) option tags //

function setOptions(list) {
  const selectTag = document.querySelector('#select-country');
  list.forEach((country) => {
    const optionTag = document.createElement('option');
    optionTag.textContent = country;
    optionTag.value = country;
    selectTag.append(optionTag);
  })
  return list
}


// Get option tag values //

let tempName = null

function getValue(e) {
  e.preventDefault();
  const optionValue = document.querySelector('#select-country').value;
  tempName = optionValue;
  getCountryName(optionValue)
}


// Eventhandler //

const form = document.querySelector('form');
form.addEventListener("submit", getValue);


// API request for data and create dynamic header//

const getCountryName = async (getName) => {
  try {
    const nameResponse = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getName}`);
    const name = nameResponse.data.All.country;
    document.getElementById('country-data-name').innerHTML = `${name}`;
    const capital = nameResponse.data.All.capital_city;
    document.getElementById('country-data-capital').innerHTML = `Capital City: ${capital}`;
    const population = nameResponse.data.All.population;
    document.getElementById('country-data-population').innerHTML = `Population: ${population}`;
    const sqkm = nameResponse.data.All.sq_km_area;
    document.getElementById('country-data-sqkm').innerHTML = `Sq-Km: ${sqkm}`;
    const confirmed = nameResponse.data.All.confirmed;
    document.getElementById('country-data-confirmed').innerHTML = `Confirmed: ${confirmed}`;
    const recovered = nameResponse.data.All.recovered;
    document.getElementById('country-data-recovered').innerHTML = `Recovered: ${recovered}`;
    const deaths = nameResponse.data.All.deaths;
    document.getElementById('country-data-deaths').innerHTML = `Capital City: ${deaths}`;
    return name;
  }
  catch (error) {
    console.error(error);
  }
}
