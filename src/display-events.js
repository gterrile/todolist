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

      const left = document.createElement('div');
      left.classList.add('event-left');
      eventWrapper.appendChild(left);

      const middle = document.createElement('div');
      middle.classList.add('event-middle');
      eventWrapper.appendChild(middle);

      const right = document.createElement('div');
      right.classList.add('event-right');
      eventWrapper.appendChild(right);

      let check = document.createElement('ion-icon');
      
      if (allEvents[event.id].checked) {
        check.setAttribute('name', 'checkmark-done-outline');
        check.setAttribute('style', 'color: var(--main-color)');
      }
      else {
        check.setAttribute('name', 'checkmark-outline');
        check.setAttribute('style', 'color: var(--third-color)');
      }

      // I need to update localStorage when user checks an event.

      check.addEventListener('click', function() {
        
        if (check.name == 'checkmark-done-outline') {
          check.setAttribute('name', 'checkmark-outline');
          check.setAttribute('style', 'color: var(--third-color)');
          check.classList.remove('checked');

          allEvents[event.id].checked = false;
          localStorage.setItem('allEvents', JSON.stringify(allEvents));
        }
        
        else {
          check.setAttribute('name', 'checkmark-done-outline');
          check.setAttribute('style', 'color: var(--main-color)');
          check.classList.add('checked');

          allEvents[event.id].checked = true;
          localStorage.setItem('allEvents', JSON.stringify(allEvents));
        }
      })
      left.appendChild(check);

      // Create DOM elements and display event info
      let title = document.createElement('span');
      title.classList.add('event-title');
      title.textContent = event.title;
      middle.appendChild(title);

      let description = document.createElement('p');
      description.classList.add('event-description');
      description.textContent = event.description;
      middle.appendChild(description);
      
      let due = document.createElement('span');
      due.classList.add('event-duedate');
      due.textContent = event.due;
      middle.appendChild(due);

      let priority = document.createElement('span');
      priority.classList.add('event-priority');
      priority.textContent = event.priority;
      middle.appendChild(priority);

      let btnDelete = document.createElement('ion-icon');
      btnDelete.classList.add('btn-delete');
      btnDelete.setAttribute('id', `${event.id}`);
      btnDelete.setAttribute('name', 'close-outline');
      btnDelete.setAttribute('style', 'color: var(--third-color)');
      btnDelete.textContent = 'delete';
      right.appendChild(btnDelete);
      btnDelete.addEventListener('click', function() {
        deleteEvent(event.id);
      })
    }
  })
}