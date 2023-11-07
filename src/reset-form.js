
export default function resetForm() {
  const title = document.getElementById('input-form-title');
  title.value = '';
  const description = document.getElementById('input-form-description');
  description.value = '';
  const date = document.getElementById('input-form-duedate');
  date.value = '';
  const priority = document.getElementsByName('priority');
  priority.forEach(item => {
    item.checked = false;
  })

  const newProjectName = document.getElementById('new-project-name');
  newProjectName.value = '';
  newProjectName.placeholder = 'New project';
}