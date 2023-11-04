import './style.css';
import './reset.css';
import { createNewEvent } from './create-new-event.js';
import displaySideBarProjects from './display-sidebar-projects.js';
import displayEventsForThisProject from './display-events.js';
import { initializeProjectsFile, initializeStorageFile } from './local-storage.js';
import currentProject from './current-project.js';
import addtoProject from './add-to-project.js';

//DOM const elements
const deleteData = document.getElementById('delete-data');
const btnNewProject = document.getElementById('btn-new-project');
const newProjectName = document.getElementById('new-project-name');
const main = document.getElementById('main');
const header = document.getElementById('header');
const add = document.getElementById('add');

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


initializeStorageFile();
initializeProjectsFile();
displaySideBarProjects();
projectSelector();
addtoProject();

