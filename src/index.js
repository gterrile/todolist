import './style.css';
import './reset.css';
import Event from './event.js'
import { createNewEvent } from './create-new-event.js';

//DOM const elements
const modalBody = document.getElementById('modal-body');
const btnAddEvent = document.getElementById('btn-add-event');
const btnSubmitEvent = document.getElementById('btn-submit-event');
const deleteData = document.getElementById('delete-data');

initializeStorageFile();

// Creates localStorage main file.
// const initialize = (function(){
//   if (!localStorage.getItem('allEvents')) {
//     let allEvents = [];
//     localStorage.setItem('allEvents', JSON.stringify(allEvents));
//   }
// })();

// modalBody.setAttribute('style', 'display: none');

// Event Listeners
btnAddEvent.addEventListener('click', function() {
  // DOM
  modalBody.setAttribute('style', 'display: block');
  
})

btnSubmitEvent.addEventListener('click', function() { 
  // Logic
  const event = createNewEvent();
  console.log('New event to add:', event);
  
  let temporaryList = JSON.parse(localStorage.getItem('allEvents'))
  temporaryList.push(event);
  localStorage.setItem('allEvents', JSON.stringify(temporaryList));

  // DOM
  modalBody.setAttribute('style', 'display: none');

})


deleteData.addEventListener('click', function() {
  if (confirm('Erase All Events?')) {
    localStorage.clear();
    console.log('data erased')
    initializeStorageFile();
  }
})


function initializeStorageFile() {
  if (!localStorage.getItem('allEvents')) {
    let allEvents = [];
    localStorage.setItem('allEvents', JSON.stringify(allEvents));
  }
}

// let event = ['1', 'run', 'run a mile', 'today', 'high', 'fitness'];
// let evento = [{
//   id: '1',
//   title: 'jump',
//   desc: 'jump a mile',
//   due: 'today',
//   prio: 'high',
//   project: 'crossfit'
// }]

// let string = JSON.stringify(evento);
// localStorage.setItem('lista', string);
// console.log(localStorage.lista);

// let restring = localStorage.getItem('lista');
// let rearray = JSON.parse(restring)
// console.log(rearray[0].desc);

// Localstorage cheat sheet

// window.localStorage.setItem("newEvent", JSON.stringify(newEvent));
// let newObject = window.localStorage.getItem("newEvent");
// console.log(JSON.parse(newObject).description);

// localStorage.german = 'german'
// console.log(localStorage.german);
// localStorage.removeItem("german");
