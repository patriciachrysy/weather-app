import {getGif, getWeather, getDefaultWeather} from './api_handler'
import {leftSide} from './left_side_dom'
import {rigthSide} from './rigth_side_dom'
import {handleForm} from './form_handler'

const container = document.querySelector('.container')


const loadDatas = async (city) => {
    try {
        let datas = await getWeather(city);
        container.innerHTML = '';
        let left = leftSide(datas)
        container.appendChild(left)
        
        let image = await getGif(datas.description)
        let rigth = rigthSide(image)
        container.appendChild(rigth)

        listenSearch()
    }catch(error){
        alert(error)
    }
}

const listenSearch = () => {
    const search = document.getElementById('search')
    search.addEventListener('click', () => {
        let city = handleForm('search-form')
        if(city){
            loadDatas(city)
        }else{
            alert('please provide a location')
        }
    })
}

const loadDefaultDatas = async () => {
    try {
        let datas = await getDefaultWeather();
        let left = leftSide(datas)
        container.appendChild(left)
    
        let rigth =  rigthSide()
        container.appendChild(rigth)

        listenSearch()
        

    }catch(error){
        alert(error)
    }
}

export {loadDefaultDatas}





