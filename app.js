fetch('https://restcountries.com/v3.1/name/deutschland')
.then(response => response.json())
.then(data => {
    const germanInfoElement= document.getElementById('germanInfo');

data.forEach(countryData => {
    const flag = countryData.flags.png;
    const name = countryData.name.common;
    const population = countryData.population;
    const region = countryData.region;
    const capital = countryData.capital; 

    const germanInfoHTML = `
    <img src="${flag}" width="300">
    <h2 style="font-weight:500" ;>${name}</h2>
    <p>Population: ${population}</p>
    <p>Region: ${region}</p>
    <p>Capital: ${capital}</p>
    `
    germanInfoElement.innerHTML += germanInfoHTML;
})

})