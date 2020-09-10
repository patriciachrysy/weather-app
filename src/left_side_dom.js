import searchForm from './search_form'

const leftSide = (data) => {
    let wrapper = document.createElement('div')
    wrapper.className = "left-side"

    wrapper.appendChild(searchForm())

    let weatherInfos = document.createElement('div')
    weatherInfos.className = 'weather-info'
        let city = document.createElement('h2')
        city.innerText = data.cityName
        weatherInfos.appendChild(city)
        let position = document.createElement('div')
        position.className = 'position'
            let lat = document.createElement('div')
                let h3 = document.createElement('h3')
                h3.innerText = 'Latitude'
                lat.appendChild(h3)
                let span = document.createElement('span')
                span.innerText = data.latitude
                lat.appendChild(span)
            position.appendChild(lat)
            let long = document.createElement('div')
                let title = document.createElement('h3')
                title.innerText = 'Longitude'
                long.appendChild(title)
                let text = document.createElement('span')
                text.innerText = data.longitude
                long.appendChild(text)
            position.appendChild(long)
        weatherInfos.appendChild(position)

        let weather = document.createElement('div')
        weather.className = 'weather'
        let weatherTitle = document.createElement('h3')
        weatherTitle.innerText = data.weather
        weather.appendChild(weatherTitle)
        let descrp = document.createElement('q')
        descrp.innerText = data.description
        weather.appendChild(descrp)
        weatherInfos.appendChild(weather)

        let temps = document.createElement('div')
        temps.className = 'temperatures'
        let min = document.createElement('div')
        let minTitle = document.createElement('h3')
        minTitle.innerText = 'Minimum'
        min.appendChild(minTitle)
        let minVal = document.createElement('span')
        minVal.innerHTML = data.temp_min.celcius+' °C <br> '+data.temp_min.farenheit+' °F'
        min.appendChild(minVal)
        temps.appendChild(min)
        let like = document.createElement('div')
        let likeTitle = document.createElement('h3')
        likeTitle.innerText = 'Feels like'
        like.appendChild(likeTitle)
        let likeVal = document.createElement('span')
        likeVal.innerHTML = data.feels_like.celcius+' °C <br> '+data.feels_like.farenheit+' °F'
        like.appendChild(likeVal)
        temps.appendChild(like)
        let max = document.createElement('div')
        let maxTitle = document.createElement('h3')
        maxTitle.innerText = 'Maximum'
        max.appendChild(maxTitle)
        let maxVal = document.createElement('span')
        maxVal.innerHTML = data.temp_max.celcius+' °C <br> '+data.temp_max.farenheit+' °F'
        max.appendChild(maxVal)
        temps.appendChild(max)
        weatherInfos.appendChild(temps)

    wrapper.appendChild(weatherInfos)

    return wrapper
}

export {leftSide};