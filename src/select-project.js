
export function selectProject(value) {
  const projects = document.getElementsByName('projects');
  projects.forEach(projectName => {
    if (projectName.value == value) {
      projectName.click();
    }
  })
}