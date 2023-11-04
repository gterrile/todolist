// CREATE LOCALSTORAGE EVENTS 
export function initializeStorageFile() {
  if (!localStorage.getItem('allEvents')) {
    let allEvents = [];
    localStorage.setItem('allEvents', JSON.stringify(allEvents));
  }
}


// CREATE LOCALSTORAGE PROJECTS 
export function initializeProjectsFile() {
  if (!localStorage.getItem('projects')) {
    let projects = ['todos'];
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}
