import { getGif, getWeather, getDefaultWeather } from './api_handler';
import leftSide from './left_side_dom';
import rigthSide from './rigth_side_dom';
import handleForm from './form_handler';

const container = document.querySelector('.container');


const loadDatas = async (city) => {
  try {
    const datas = await getWeather(city);
    container.innerHTML = '';
    const left = leftSide(datas);
    container.appendChild(left);

    const image = await getGif(datas.description);
    const rigth = rigthSide(image);
    container.appendChild(rigth);

    listenSearch();
    listenTempsButtons();
  } catch (error) {
    alert('Sorry, we could not find this city');
  }
};

const listenSearch = () => {
  const search = document.getElementById('search');
  search.addEventListener('click', () => {
    const city = handleForm('search-form');
    if (city) {
      loadDatas(city);
    } else {
      alert('please provide a location');
    }
  });
};

const listenTempsButtons = () => {
  const celcius = document.getElementById('celcius')
  const farenheit = document.getElementById('farenheit')
  celcius.addEventListener('click', () => {
    celcius.className = 'active'
    farenheit.className = ''

    let celSpan = document.querySelectorAll('#celcius-temp')
    celSpan.forEach(element => {
      element.className = ''
    });
    let farSpan = document.querySelectorAll('#farenheit-temp')
    farSpan.forEach(element => {
      element.className = 'hide'
    });
  })


  farenheit.addEventListener('click', () => {
    celcius.className = ''
    farenheit.className = 'active'

    let celSpan = document.querySelectorAll('#celcius-temp')
    celSpan.forEach(element => {
      element.className = 'hide'
    });
    let farSpan = document.querySelectorAll('#farenheit-temp')
    farSpan.forEach(element => {
      element.className = ''
    });
  })
}

const loadDefaultDatas = async () => {
  try {
    const datas = await getDefaultWeather();
    const left = leftSide(datas);
    container.appendChild(left);

    const rigth = rigthSide();
    container.appendChild(rigth);

    listenSearch();
    listenTempsButtons();
  } catch (error) {
    alert('We could not load the app, check your network');
  }
};

export default loadDefaultDatas;
