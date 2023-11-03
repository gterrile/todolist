export default function displayEventsForThisProject(projectName) {

  // const projects = document.getElementsByName('projects');
  let allEvents = JSON.parse(localStorage.getItem('allEvents'));
  const content = document.getElementById('content');

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