import './style.css';
import './reset.css';
import Event from './event.js'
import { createNewEvent } from './create-new-event.js';

//DOM const elements
const modalBody = document.getElementById('modal-body');
const btnAddEvent = document.getElementById('btn-add-event');
// const btnSubmitEvent = document.getElementById('btn-submit-event');
const deleteData = document.getElementById('delete-data');
const btnNewProject = document.getElementById('btn-new-project');
const newProjectName = document.getElementById('new-project-name');
const main = document.getElementById('main');
let projects = document.getElementsByName('projects');  



initializeStorageFile();
initializeProjectsFile();
displaySideBarProjects();
projectSelector()
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


////////////////
// ADD NEW EVENT
btnAddEvent.addEventListener('click', function() {
  // DOM
  modalBody.setAttribute('style', 'display: block');
  
})


// ///////////////////
// // SUBMIT NEW EVENT
// btnSubmitEvent.addEventListener('click', function() { 
//   // Logic
//   const event = createNewEvent();
//   let temporaryList = JSON.parse(localStorage.getItem('allEvents'))
//   temporaryList.push(event);
//   localStorage.setItem('allEvents', JSON.stringify(temporaryList));
//   // DOM
//   modalBody.setAttribute('style', 'display: none');

// })


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
  
  projects.forEach(item => {

    item.addEventListener('click', function() {
      
      // DOM
        while (main.firstChild) {
          main.removeChild(main.firstChild);
        }
        let title = document.createElement('h1');
        title.textContent = item.value;
        main.appendChild(title)

        let inputLabel = document.createElement('label');
        inputLabel.textContent = 'Title';
        main.appendChild(inputLabel);
        let inputText = document.createElement('input');
        inputText.setAttribute('id', 'input-form-title');
        main.appendChild(inputText);
        let descLabel = document.createElement('label');
        descLabel.textContent = 'Description';
        main.appendChild(descLabel)
        let inputDesc = document.createElement('textarea');
        inputDesc.setAttribute('id', 'input-form-description');
        main.appendChild(inputDesc);
        let dueLabel = document.createElement('label');
        dueLabel.textContent = 'Due';
        main.appendChild(dueLabel);
        let due = document.createElement('input');
        due.setAttribute('type', 'date');
        due.setAttribute('id', 'input-form-duedate');
        main.appendChild(due);
        let prioLabel = document.createElement('label');
        prioLabel.textContent = 'Priority';
        main.appendChild(prioLabel);

        let lb1 = document.createElement('label');
        lb1.textContent = 'low';
        main.appendChild(lb1);
        let rad1 = document.createElement('input');
        rad1.setAttribute('type', 'radio');
        rad1.setAttribute('name', 'priority');
        rad1.setAttribute('value', 'low');
        main.appendChild(rad1);
        
        let lb2 = document.createElement('label');
        lb2.textContent = 'medium';
        main.appendChild(lb2);
        let rad2 = document.createElement('input');
        rad2.setAttribute('type', 'radio');
        rad2.setAttribute('name', 'priority');
        rad2.setAttribute('value', 'medium');
        main.appendChild(rad2);

        let lb3 = document.createElement('label');
        lb3.textContent = 'high';
        main.appendChild(lb3);
        let rad3 = document.createElement('input');
        rad3.setAttribute('type', 'radio');
        rad3.setAttribute('name', 'priority');
        rad3.setAttribute('value', 'high');
        main.appendChild(rad3);

        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn-add-project');
        btnAdd.textContent = 'Add to ' + item.value;
        main.appendChild(btnAdd);

        // // Event Listener for btnAdd
        addtoProject(item.value);

        // List todos for that project
        
    })
  
  })
}

function addtoProject(project) {
  const btnAdd = document.querySelector('.btn-add-project');
  btnAdd.addEventListener('click', function() {
    
    // Logic
    const event = createNewEvent(project);
    let temporaryList = JSON.parse(localStorage.getItem('allEvents'))
    temporaryList.push(event);
    localStorage.setItem('allEvents', JSON.stringify(temporaryList));
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
