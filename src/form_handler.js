/*
  eslint-disable no-unused-vars, no-alert, no-mixed-operators, import/prefer-default-export
*/

const handleForm = (formId) => {
  const form = document.getElementById(formId);
  if (form.elements.namedItem('city').value) {
    return form.elements.namedItem('city').value;
  }
  return null;
};

export { handleForm };