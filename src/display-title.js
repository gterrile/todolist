

export default function displayTitle(project) {
  const header = document.getElementById('header');
  
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
  
  const title = document.createElement('h1');
  title.textContent = project;
  header.appendChild(title);
}