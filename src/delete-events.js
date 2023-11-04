import currentProject from "./current-project.js";
import displayEventsForThisProject from "./display-events.js";

export default function deleteEvent(id) {

  console.log('delete id: ', id)
  let temporaryList = JSON.parse(localStorage.getItem('allEvents'))
  temporaryList.forEach(item => {
    if (item.id == id) {
      item.project = 'deleted';
    }
  })
  localStorage.setItem('allEvents', JSON.stringify(temporaryList));

  const currentproject = currentProject();
  displayEventsForThisProject(currentproject);

}
