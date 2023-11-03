import './style.css';
import './reset.css';
import { createNewEvent } from './create-new-event.js';
import displaySideBarProjects from './display-sidebar-projects.js';
import displayEventsForThisProject from './display-events.js';
import { initializeProjectsFile, initializeStorageFile } from './local-storage.js';

//DOM const elements
const deleteData = document.getElementById('delete-data');
const btnNewProject = document.getElementById('btn-new-project');
const newProjectName = document.getElementById('new-project-name');
const main = document.getElementById('main');
const header = document.getElementById('header');
const add = document.getElementById('add');
const content = document.getElementById('content');
let projects = document.getElementsByName('projects');  
const btnNewEvent = document.getElementById('btn-add-event');



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



// ADD NEW PROJECT
btnNewProject.addEventListener('click', function() {
  
  // Handles logic
  if (newProjectName.value != "") {
    let tempList = JSON.parse(localStorage.getItem('projects'));
    tempList.push(newProjectName.value);
    localStorage.setItem('projects', JSON.stringify(tempList));
    newProjectName.value = '';
  }

  // Handles DOM
  displaySideBarProjects();
  projectSelector()
})


// GO TO PROJECT
function projectSelector() {
  const projects = document.getElementsByName('projects');
  projects.forEach(project => {
    project.addEventListener('click', function() {
      displayEventsForThisProject(project.value);
    })
  })
}

// ADD EVENT TO PROJECT
function addtoProject() {
  

  const btnNewEvent = document.getElementById('btn-add-event');
  btnNewEvent.addEventListener('click', function() {
    
    let currentproject = ''
    const projects = document.getElementsByName('projects');
    projects.forEach(project => {
      if (project.checked) {
        currentproject = project.value
        console.log(project.value);
      }
    })
    

    // Logic
    const event = createNewEvent(currentproject);
    let temporaryList = JSON.parse(localStorage.getItem('allEvents'))
    temporaryList.push(event);
    localStorage.setItem('allEvents', JSON.stringify(temporaryList));
  })
}


initializeStorageFile();
initializeProjectsFile();
displaySideBarProjects();
projectSelector();
addtoProject();






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











