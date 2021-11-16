import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector(".feedback-form input")
};

const STORAGE_KEY = "feedba0ck-form-state";
populateTextarea();
let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData)
    formData = {};
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};


function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
  const saveDataEl = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveDataEl);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
   
    if (savedMessage) {
        const pasrsedSav = JSON.parse(savedMessage);
        const keys = Object.keys(pasrsedSav);

        for (const key of keys) {
            refs.form.elements[key].value = pasrsedSav[key];
        }
    }
}


