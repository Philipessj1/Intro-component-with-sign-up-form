const array = ['fname', 'lname', 'email', 'password'];

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  array.forEach(function (param) {
    const element = document.getElementById(param);
    const elementContainer = document.getElementById(`${param}-container`);

    if (param !== 'email') {
      if (element.value.trim() !== '') {
        styleChange(true, element, elementContainer);
      } else {
        styleChange(false, element, elementContainer);
      }
    } else {
      styleChange(testEmail(element.value), element, elementContainer);
    }
  });
});

function testEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function styleChange(check, element, elementContainer) {
  const fieldName = element.placeholder;

  if (check === true) {
    elementContainer.lastElementChild.innerHTML = '<img src="assets/ok-icon.svg" alt="ok-icon">';

  } else if (fieldName === 'Email address') {
    elementContainer.lastElementChild.innerHTML = 'Looks like this is not an email <img src="assets/error-icon.svg" alt="icon-error">';
    elementContainer.lastElementChild.style = 'color: hsl(0, 96%, 36%);'

  } else {
    elementContainer.lastElementChild.innerHTML = `${fieldName} cannot be empty <img src="assets/error-icon.svg" alt="icon-error">`;
    elementContainer.lastElementChild.style = 'color: hsl(0, 96%, 36%);'

  }
}
