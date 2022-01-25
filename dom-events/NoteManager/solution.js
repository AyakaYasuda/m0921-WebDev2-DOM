const addBtn = document.querySelector('#add-btn');
console.log(addBtn);

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const addedContent = document.querySelector('#add-input').value;
  const newLi = document.createElement('li');
  const newNote = `
            <p>${addedContent}</p>
            <p>
              <i class="fa fa-pencil"></i>
              <i class="fa fa-times"></i>
            </p>`;

  newLi.innerHTML = newNote;

  const ul = document.querySelector('#list');
  ul.appendChild(newLi);
});
