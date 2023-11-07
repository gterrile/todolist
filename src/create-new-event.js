import { createNewId } from "./create-new-id.js";
import { eventsList } from "./events-list.js";
import Event from "./event.js";

export function createNewEvent(project) {

  let eventId = JSON.parse(localStorage.getItem('allEvents')).length;
  const title = document.getElementById('input-form-title').value;
  const description = document.getElementById('input-form-description').value;
  const dueDate = document.getElementById('input-form-duedate').value;
  const radioPriority = document.getElementsByName('priority');
  let priorityRadio = '';
  for (let i = 0; i < radioPriority.length; i++) {
    if (radioPriority[i].checked) {
      priorityRadio = radioPriority[i].value;
    }
  }
  

  // Create and return event
  const newEvent = new Event (eventId, title, description, dueDate, priorityRadio, project, false);
  return newEvent
}