const handleForm = (formId) => {
    let form = document.getElementById(formId);
    if (form.elements.namedItem('city').value) {
        return form.elements.namedItem('city').value
    }else{
        return null
    }
}

export {handleForm}