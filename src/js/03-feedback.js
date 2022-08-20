import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

getStorageOutput();

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}
function onInput(e) {
  const formData = {
    email: '',
    message: '',
  };
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
    refs.textarea.value = parseData.textarea;
  }
}
