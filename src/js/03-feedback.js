import LodashThrottle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', LodashThrottle(onInput, 500));

getStorageOutput();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}
function onInput(e) {
  if (e.target.name === 'email') {
    formData.email = e.target.value;
  } else {
    formData.message = e.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function getStorageOutput() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(savedData);
  if (parseData) {
    refs.email.value = parseData.email;
    refs.textarea.value = parseData.message;
  } else {
    refs.email.value = '';
    refs.textarea.value = '';
  }
}
