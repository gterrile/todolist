
export default function deleteProject (project) {
  // Delete from localStorage project list
  let projectsList = JSON.parse(localStorage.getItem('projects'));
  let index = projectsList.indexOf(project);
  projectsList.splice(index, 1);
  localStorage.setItem('projects', JSON.stringify(projectsList));

  // Change project label on allEvents to "deleted"
  let events = JSON.parse(localStorage.getItem('allEvents'));
  events.forEach(event => {
    if (event.project == project) {
      event.project = 'deleted';
    }
  })
  localStorage.setItem('allEvents', JSON.stringify(events));

  // call
}
  


