export default function currentProject() {
  
  let currentproject = ''
  const projects = document.getElementsByName('projects');
  projects.forEach(project => {
    if (project.checked) {
      currentproject = project.value;
    }
  })
  return currentproject;
}