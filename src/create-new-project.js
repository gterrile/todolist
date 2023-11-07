
export default function createNewProject() {
  let newProjectName = document.getElementById('new-project-name');
  // Handles logic
  if (newProjectName.value != "") {
    let tempList = JSON.parse(localStorage.getItem('projects'));
    tempList.push(newProjectName.value);
    localStorage.setItem('projects', JSON.stringify(tempList));
  }
  return newProjectName.value;
} 