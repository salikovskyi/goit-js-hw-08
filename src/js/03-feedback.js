import throttle from 'lodash.throttle';



const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector(".feedback-form input")

};
const STORAGE_KEY = "feedba0ck-form-state";

let formData = {};


refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));


refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
})

populateTextarea();


function onFormSubmit(evt) {
    evt.preventDefault();
    formData.email = refs.input.value;
    formData.message = refs.textarea.value;
      console.log(formData)
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);


};


function onTextareaInput(evt) {
      formData[evt.target.name] = evt.target.value
  const saveDataEl = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveDataEl);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
   
    if (savedMessage) {
        const pasrsedSav = JSON.parse(savedMessage);
        let formData ={};
        formData = pasrsedSav;
        refs.textarea.value = pasrsedSav.message;
        refs.input.value = pasrsedSav.email;
    }
}


