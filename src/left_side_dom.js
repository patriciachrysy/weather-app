/*
  eslint-disable no-unused-vars, no-alert, no-mixed-operators, import/prefer-default-export
*/

import searchForm from './search_form';

const leftSide = (data) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'left-side';

  wrapper.appendChild(searchForm());

  const weatherInfos = document.createElement('div');
  weatherInfos.className = 'weather-info';

  const tempButtons = document.createElement('div');
  tempButtons.className = 'temp-button';
  const celButton = document.createElement('button');
  celButton.id = 'celcius';
  celButton.className = 'active'
  celButton.innerText = 'In Celcius'
  tempButtons.appendChild(celButton);
  const farButton = document.createElement('button');
  farButton.id = 'farenheit';
  farButton.innerText = 'In Farenheit'
  tempButtons.appendChild(farButton);
  weatherInfos.appendChild(tempButtons);

  const city = document.createElement('h2');
  city.innerText = data.cityName;
  weatherInfos.appendChild(city);
  const position = document.createElement('div');
  position.className = 'position';
  const lat = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.innerText = 'Latitude';
  lat.appendChild(h3);
  const span = document.createElement('span');
  span.innerText = data.latitude;
  lat.appendChild(span);
  position.appendChild(lat);
  const long = document.createElement('div');
  const title = document.createElement('h3');
  title.innerText = 'Longitude';
  long.appendChild(title);
  const text = document.createElement('span');
  text.innerText = data.longitude;
  long.appendChild(text);
  position.appendChild(long);
  weatherInfos.appendChild(position);

  const weather = document.createElement('div');
  weather.className = 'weather';
  const weatherTitle = document.createElement('h3');
  weatherTitle.innerText = data.weather;
  weather.appendChild(weatherTitle);
  const descrp = document.createElement('q');
  descrp.innerText = data.description;
  weather.appendChild(descrp);
  weatherInfos.appendChild(weather);

  const temps = document.createElement('div');
  temps.className = 'temperatures';
  const min = document.createElement('div');
  const minTitle = document.createElement('h3');
  minTitle.innerText = 'Minimum';
  min.appendChild(minTitle);
  const minVal = document.createElement('span');
  minVal.innerHTML = `<span id='celcius-temp'>${data.temp_min.celcius} °C</span>
  <span id='farenheit-temp' class='hide'>${data.temp_min.farenheit} °F</span>`;
  min.appendChild(minVal);
  temps.appendChild(min);
  const like = document.createElement('div');
  const likeTitle = document.createElement('h3');
  likeTitle.innerText = 'Feels like';
  like.appendChild(likeTitle);
  const likeVal = document.createElement('span');
  likeVal.innerHTML = `<span id='celcius-temp'>${data.feels_like.celcius} °C</span>
  <span id='farenheit-temp' class='hide'>${data.feels_like.farenheit} °F</span>`
  like.appendChild(likeVal);
  temps.appendChild(like);
  const max = document.createElement('div');
  const maxTitle = document.createElement('h3');
  maxTitle.innerText = 'Maximum';
  max.appendChild(maxTitle);
  const maxVal = document.createElement('span');
  maxVal.innerHTML = `<span id='celcius-temp'>${data.temp_max.celcius} °C</span>
  <span id='farenheit-temp' class='hide'>${data.temp_max.farenheit} °F</span>`
  max.appendChild(maxVal);
  temps.appendChild(max);
  weatherInfos.appendChild(temps);

  wrapper.appendChild(weatherInfos);

  return wrapper;
};

export { leftSide };