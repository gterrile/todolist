import './style.css';
import './reset.css';
import Event from './event.js'
import { createNewEvent } from './create-new-event.js';

//DOM const elements
const deleteData = document.getElementById('delete-data');
const btnNewProject = document.getElementById('btn-new-project');
const newProjectName = document.getElementById('new-project-name');
const main = document.getElementById('main');
const header = document.getElementById('header');
const add = document.getElementById('add');
const content = document.getElementById('content');

let projects = document.getElementsByName('projects');  

initializeStorageFile();
initializeProjectsFile();
displaySideBarProjects();
projectSelector();
projects[0].click();


//////////////////
// ADD NEW PROJECT
btnNewProject.addEventListener('click', function() {
  // Handles logic
  if (newProjectName.value != "") {
    makeNewProject();
  }

  // Handles DOM
  displaySideBarProjects();
  projectSelector()
})


//////////////
// NEW PROJECT
function makeNewProject() {
  let tempList = JSON.parse(localStorage.getItem('projects'));
  tempList.push(newProjectName.value);
  localStorage.setItem('projects', JSON.stringify(tempList));
  newProjectName.value = '';
}


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


//////////////////
// DISPLAY SIDEBAR
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
    
    let itemRadio = document.createElement('input');
    itemRadio.setAttribute('type', 'radio');
    itemRadio.setAttribute('name', 'projects');
    itemRadio.setAttribute('value', item);
    itemRadio.classList.add('a-item');
    liItem.appendChild(itemRadio);
    let itemLabel = document.createElement('label');
    itemLabel.textContent = item;
    liItem.appendChild(itemLabel);
    if (item == 'todos') {
      itemRadio.checked = true;
    }
  })
}


//////////////////////////
// SIDEBAR EVENT LISTENERS
function projectSelector() {
  const projects = document.getElementsByName('projects');
  projects.forEach(project => {
    project.addEventListener('click', function() {
      
      createMainDom();
      createMainEvents(project.value);
      addtoProject(project.value);
    })
  
  })
}



///////////////////////
// ADD EVENT TO PROJECT
function addtoProject(project) {
  
  let btnNewEvent = document.querySelector('#btn-add-event');
  console.log('clicked');
  
  btnNewEvent.addEventListener('click', function() {
    console.log('asdfasdfasdfasdf')
    // Logic
    const event = createNewEvent(project);
    let temporaryList = JSON.parse(localStorage.getItem('allEvents'))
    temporaryList.push(event);
    localStorage.setItem('allEvents', JSON.stringify(temporaryList));
  })
}


/////////////////////////
// DISPLAY HEADER AND ADD
function createMainDom() {
  const projects = document.getElementsByName('projects');
  projects.forEach(project => {
    project.addEventListener('click', function() {
      
      while (header.firstChild) {
        header.removeChild(header.firstChild);
      }
      while (add.firstChild) {
        add.removeChild(add.firstChild);
      }

      let title = document.createElement('h1');
      title.textContent = project.value;
      header.appendChild(title)

      let inputLabel = document.createElement('label');
      inputLabel.textContent = 'Title';
      add.appendChild(inputLabel);
      let inputText = document.createElement('input');
      inputText.setAttribute('id', 'input-form-title');
      inputText.setAttribute('autocomplete', 'off');
      add.appendChild(inputText);

      let descLabel = document.createElement('label');
      descLabel.textContent = 'Description';
      add.appendChild(descLabel)
      let inputDesc = document.createElement('textarea');
      inputDesc.setAttribute('id', 'input-form-description');
      inputDesc.setAttribute('autocomplete', 'off');
      add.appendChild(inputDesc);

      let dueLabel = document.createElement('label');
      dueLabel.textContent = 'Due';
      add.appendChild(dueLabel);
      let due = document.createElement('input');
      due.setAttribute('type', 'date');
      due.setAttribute('id', 'input-form-duedate');
      add.appendChild(due);

      let prioLabel = document.createElement('label');
      prioLabel.textContent = 'Priority';
      add.appendChild(prioLabel);

      let lb1 = document.createElement('label');
      lb1.textContent = 'low';
      add.appendChild(lb1);
      let rad1 = document.createElement('input');
      rad1.setAttribute('type', 'radio');
      rad1.setAttribute('name', 'priority');
      rad1.setAttribute('value', 'low');
      add.appendChild(rad1);
      
      let lb2 = document.createElement('label');
      lb2.textContent = 'medium';
      add.appendChild(lb2);
      let rad2 = document.createElement('input');
      rad2.setAttribute('type', 'radio');
      rad2.setAttribute('name', 'priority');
      rad2.setAttribute('value', 'medium');
      add.appendChild(rad2);

      let lb3 = document.createElement('label');
      lb3.textContent = 'high';
      add.appendChild(lb3);
      let rad3 = document.createElement('input');
      rad3.setAttribute('type', 'radio');
      rad3.setAttribute('name', 'priority');
      rad3.setAttribute('value', 'high');
      add.appendChild(rad3);

      let btnAdd = document.createElement('button');
      btnAdd.classList.add('btn-add-event');
      btnAdd.setAttribute('id', 'btn-add-event');
      btnAdd.textContent = 'Add to ' + project.value;
      add.appendChild(btnAdd);
    })
  })
}



/////////////////
// DISPLAY EVENTS
function createMainEvents(projectName) {

  const projects = document.getElementsByName('projects');
  let allEvents = JSON.parse(localStorage.getItem('allEvents'));

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  allEvents.forEach(event => {
    if (event.project == projectName) {
      let eventWrapper = document.createElement('div');
      eventWrapper.classList.add('event-wrapper');
      content.appendChild(eventWrapper);

      // Create DOM elements and display event info
      let title = document.createElement('span');
      title.textContent = event.title;
      eventWrapper.appendChild(title);

      let description = document.createElement('span');
      description.textContent = event.description;
      eventWrapper.appendChild(description);
      
      let due = document.createElement('span');
      due.textContent = event.due;
      eventWrapper.appendChild(due);

      let priority = document.createElement('span');
      priority.textContent = event.priority;
      eventWrapper.appendChild(priority);

    }
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
