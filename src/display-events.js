import deleteEvent from "./delete-events.js";
import currentProject from "./current-project.js";

export default function displayEventsForThisProject() {

  // const projects = document.getElementsByName('projects');
  let allEvents = JSON.parse(localStorage.getItem('allEvents'));
  const content = document.getElementById('content');
  let projectName = currentProject();

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

      let check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      eventWrapper.appendChild(check);

      let btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-delete');
      btnDelete.setAttribute('id', `${event.id}`);
      btnDelete.textContent = 'delete';
      eventWrapper.appendChild(btnDelete);

      btnDelete.addEventListener('click', function() {
        deleteEvent(event.id);
      })
    }
  })
}