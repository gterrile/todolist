import './style.css';
import './reset.css';
import Event from './event.js'
import { createNewEvent } from './create-new-event.js';

//DOM const elements
const modalBody = document.getElementById('modal-body');
const btnAddEvent = document.getElementById('btn-add-event');
const btnSubmitEvent = document.getElementById('btn-submit-event');
const deleteData = document.getElementById('delete-data');
const btnNewProject = document.getElementById('btn-new-project');
const newProjectName = document.getElementById('new-project-name');


initializeStorageFile();
initializeProjectsFile();
displaySideBarProjects();


//////////////////
// ADD NEW PROJECT
btnNewProject.addEventListener('click', function() {
  
  // Handles logic
  makeNewProject();

  // Handles DOM
  displaySideBarProjects();

})


////////////////
// ADD NEW EVENT
btnAddEvent.addEventListener('click', function() {
  // DOM
  modalBody.setAttribute('style', 'display: block');
  
})


///////////////////
// SUBMIT NEW EVENT
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


//////////////////////////
// ERASE LOCALSTORAGE DATA
deleteData.addEventListener('click', function() {
  if (confirm('Erase All Events?')) {
    localStorage.clear();  
    // Logic
    initializeStorageFile();
    initializeProjectsFile();
    // DOM
    displaySideBarProjects();
  }
})


//////////////
// NEW PROJECT
function makeNewProject() {
  let tempList = JSON.parse(localStorage.getItem('projects'));
  tempList.push(newProjectName.value);
  localStorage.setItem('projects', JSON.stringify(tempList));
  newProjectName.value = '';
}


/////////////////////////////
// CREATE LOCALSTORAGE EVENTS 
function initializeStorageFile() {
  if (!localStorage.getItem('allEvents')) {
    let allEvents = [];
    localStorage.setItem('allEvents', JSON.stringify(allEvents));
  }
}


///////////////////////////////
// CREATE LOCALSTORAGE PROJECTS 
function initializeProjectsFile() {
  if (!localStorage.getItem('projects')) {
    let projects = ['todos'];
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}


//////////
// SIDEBAR
function displaySideBarProjects() {
  const projectList = document.getElementById('projects-list');
  while (projectList.firstChild) {
    projectList.removeChild(projectList.firstChild);
  }
  let tempList = JSON.parse(localStorage.getItem('projects'));
  tempList.forEach(item => {
    // create sidebar DOM
    let liItem = document.createElement('li');
    liItem.classList.add('li-item');
    projectList.appendChild(liItem);
    let aItem = document.createElement('a');
    aItem.classList.add('a-item');
    aItem.textContent = item;
    aItem.setAttribute('href',"")
    liItem.appendChild(aItem);
  })
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
