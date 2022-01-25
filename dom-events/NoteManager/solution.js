const addBtn = document.querySelector('#add-btn');
console.log(addBtn);

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const input = document.querySelector('#add-input');
  const inputContent = input.value;
  const newLi = document.createElement('li');
  const newNote = `
            <p>${inputContent}</p>
            <p>
              <i class="fa fa-pencil"></i>
              <i class="fa fa-times"></i>
            </p>`;

  newLi.innerHTML = newNote;

  const ul = document.querySelector('#list');
  ul.appendChild(newLi);
  input.value = '';
});
