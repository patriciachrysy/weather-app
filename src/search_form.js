const searchForm = () => {
    let form = document.createElement('form')
    form.id = 'search-form'

    let searchInput = document.createElement('input')
    searchInput.type = 'search'
    searchInput.name = 'city'
    searchInput.id = 'city'
    searchInput.placeholder = 'Enter a city name'
    form.appendChild(searchInput)

    let searchButton = document.createElement('input')
    searchButton.type = 'button'
    searchButton.value = 'Go'
    searchButton.id = 'search'
    form.appendChild(searchButton)

    return form
}

export default searchForm;