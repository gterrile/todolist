import './style.css';
import './reset.css';
import { createNewEvent } from './create-new-event.js';
import displaySideBarProjects from './display-sidebar-projects.js';
import displayEventsForThisProject from './display-events.js';
import { initializeProjectsFile, initializeStorageFile } from './local-storage.js';
import currentProject from './current-project.js';
import addtoProject from './add-to-project.js';
import { selectProject } from './select-project.js';
import resetForm from './reset-form.js';
import createNewProject from './create-new-project.js';


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
  // Logic
  const newProject = createNewProject();
  // DOM
  displaySideBarProjects();
  selectProject(newProject);
  resetForm();
})



// ADD NEW EVENT
const btnNewEvent = document.getElementById('btn-add-event');
btnNewEvent.addEventListener('click', function() {
  // Logic
  addtoProject();
  displayEventsForThisProject();
  // DOM
  resetForm();
})



initializeStorageFile();
initializeProjectsFile();
displaySideBarProjects();
selectProject('todos');



