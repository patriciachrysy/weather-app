const rigthSide = (bgImage = null) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'rigth-side';

  if (bgImage) {
    wrapper.style.backgroundImage = `url(${bgImage})`;
    wrapper.style.backgroundPosition = 'center';
    wrapper.style.backgroundSize = 'cover';
    wrapper.style.backgroundRepeat = 'no-repeat';
  } else {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = 'Welcome to Weather Now!!';
    div.appendChild(h1);
    const h3 = document.createElement('h3');
    h3.innerText = 'Search any city and get informed about the weather at the moment';
    div.appendChild(h3);

    wrapper.appendChild(div);

    const image = document.createElement('img');
    image.src = './images/logo.gif';
    image.alt = 'logo';
    wrapper.appendChild(image);
  }

  return wrapper;
};

export default rigthSide;