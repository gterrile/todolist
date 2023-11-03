

/////////////////////////
// DISPLAY HEADER AND ADD
function createMainDom() {
  const projects = document.getElementsByName('projects');
  projects.forEach(project => {
    project.addEventListener('click', function() {
      
      while (header.firstChild) {
        header.removeChild(header.firstChild);
      }
      while (add.firstChild) {
        add.removeChild(add.firstChild);
      }

      let title = document.createElement('h1');
      title.textContent = project.value;
      header.appendChild(title)

      let inputLabel = document.createElement('label');
      inputLabel.textContent = 'Title';
      add.appendChild(inputLabel);
      let inputText = document.createElement('input');
      inputText.setAttribute('id', 'input-form-title');
      inputText.setAttribute('autocomplete', 'off');
      add.appendChild(inputText);

      let descLabel = document.createElement('label');
      descLabel.textContent = 'Description';
      add.appendChild(descLabel)
      let inputDesc = document.createElement('textarea');
      inputDesc.setAttribute('id', 'input-form-description');
      inputDesc.setAttribute('autocomplete', 'off');
      add.appendChild(inputDesc);

      let dueLabel = document.createElement('label');
      dueLabel.textContent = 'Due';
      add.appendChild(dueLabel);
      let due = document.createElement('input');
      due.setAttribute('type', 'date');
      due.setAttribute('id', 'input-form-duedate');
      add.appendChild(due);

      let prioLabel = document.createElement('label');
      prioLabel.textContent = 'Priority';
      add.appendChild(prioLabel);

      let lb1 = document.createElement('label');
      lb1.textContent = 'low';
      add.appendChild(lb1);
      let rad1 = document.createElement('input');
      rad1.setAttribute('type', 'radio');
      rad1.setAttribute('name', 'priority');
      rad1.setAttribute('value', 'low');
      add.appendChild(rad1);
      
      let lb2 = document.createElement('label');
      lb2.textContent = 'medium';
      add.appendChild(lb2);
      let rad2 = document.createElement('input');
      rad2.setAttribute('type', 'radio');
      rad2.setAttribute('name', 'priority');
      rad2.setAttribute('value', 'medium');
      add.appendChild(rad2);

      let lb3 = document.createElement('label');
      lb3.textContent = 'high';
      add.appendChild(lb3);
      let rad3 = document.createElement('input');
      rad3.setAttribute('type', 'radio');
      rad3.setAttribute('name', 'priority');
      rad3.setAttribute('value', 'high');
      add.appendChild(rad3);

      let btnAdd = document.createElement('button');
      btnAdd.classList.add('btn-add-event');
      btnAdd.setAttribute('id', 'btn-add-event');
      btnAdd.textContent = 'Add to ' + project.value;
      add.appendChild(btnAdd);
    })
  })
}