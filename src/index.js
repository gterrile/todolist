import './style.css';
import './reset.css';
import { createNewEvent } from './create-new-event.js';
import displaySideBarProjects from './display-sidebar-projects.js';
import displayEventsForThisProject from './display-events.js';
import { initializeProjectsFile, initializeStorageFile } from './local-storage.js';
import currentProject from './current-project.js';
import addtoProject from './add-to-project.js';
import { selectProject } from './select-project.js';

//DOM const elements


const main = document.getElementById('main');
const header = document.getElementById('header');
const add = document.getElementById('add');





// ERASE LOCALSTORAGE DATA
const deleteData = document.getElementById('delete-data');
deleteData.addEventListener('click', function() {
  if (confirm('Erase All Events?')) {
    localStorage.clear();  
    // Logic
    initializeStorageFile();
    initializeProjectsFile();
    // DOM
    displaySideBarProjects();
    selectProject('todos');
  }
})




// ADD NEW PROJECT
const btnNewProject = document.getElementById('btn-new-project');
btnNewProject.addEventListener('click', function() {
  
  let newProjectName = document.getElementById('new-project-name');
  // Handles logic
  if (newProjectName.value != "") {
    let tempList = JSON.parse(localStorage.getItem('projects'));
    tempList.push(newProjectName.value);
    localStorage.setItem('projects', JSON.stringify(tempList));
  }
  // Handles DOM
  displaySideBarProjects();
  selectProject(newProjectName.value);
  newProjectName.value = '';
  newProjectName.placeholder = 'New project';

})




// ADD NEW EVENT
const btnNewEvent = document.getElementById('btn-add-event');
btnNewEvent.addEventListener('click', function() {
  addtoProject();
  displayEventsForThisProject();
  // DOM

})


// // GO TO PROJECT
// function projectSelector() {
//   const projects = document.getElementsByName('projects');
//   projects.forEach(project => {
//     project.addEventListener('click', function() {
//       displayEventsForThisProject(project.value);
//       displayTitle();
//     })
//   })
// }

// function displayTitle() {
//   let current = currentProject();
//   console.log('title', current)
// }

initializeStorageFile();
initializeProjectsFile();
displaySideBarProjects();
selectProject('todos');



