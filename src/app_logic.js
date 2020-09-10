/*
  eslint-disable no-unused-vars, no-alert, no-mixed-operators, import/prefer-default-export,
  no-use-before-define
*/

import { getGif, getWeather, getDefaultWeather } from './api_handler';
import { leftSide } from './left_side_dom';
import { rigthSide } from './rigth_side_dom';
import { handleForm } from './form_handler';

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
  } catch (error) {
    alert(error);
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

const loadDefaultDatas = async () => {
  try {
    const datas = await getDefaultWeather();
    const left = leftSide(datas);
    container.appendChild(left);

    const rigth = rigthSide();
    container.appendChild(rigth);

    listenSearch();
  } catch (error) {
    alert(error);
  }
};

export { loadDefaultDatas };
