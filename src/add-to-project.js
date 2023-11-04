import currentProject from "./current-project.js";
import displayEventsForThisProject from "./display-events.js";
import { createNewEvent } from "./create-new-event.js";

// ADD EVENT TO PROJECT
export default function addtoProject() {
  

  const btnNewEvent = document.getElementById('btn-add-event');
  btnNewEvent.addEventListener('click', function() {
    
    const currentproject = currentProject();
    const event = createNewEvent(currentproject);
    let temporaryList = JSON.parse(localStorage.getItem('allEvents'))
    temporaryList.push(event);
    localStorage.setItem('allEvents', JSON.stringify(temporaryList));
    displayEventsForThisProject(currentproject);
  })
}