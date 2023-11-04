import deleteProject from "./delete-project.js";
import displayEventsForThisProject from "./display-events.js";

export default function displaySideBarProjects() {
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
    
    if (item != 'todos') {
      let itemDelete = document.createElement('ion-icon');
      itemDelete.setAttribute('name', 'trash-outline');
      itemDelete.setAttribute('id', `${item}`)
      liItem.appendChild(itemDelete);
  
      itemDelete.addEventListener('click', function() {
        if (confirm(`Delete project: ${this.id}`)) {
          deleteProject(this.id);
          displaySideBarProjects();
        }
      })
    }

    // if (item == 'todos') {
    //   itemRadio.checked = true;
    // }
  })
}