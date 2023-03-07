import {createRow} from './createElements.js';
import randomId from './option.js';
import {renderItem, renderList, renderNumber} from './render.js';
import {getStorage, removeItemStorage, setStorage, successItemStorage} from './serviceStorage.js';

export const addItemList = (newItem, data, name) => {
  data.push(newItem);
  setStorage(name, data);
};

export const addItemPage = (newItem, list) => {
  list.append(createRow(newItem));
};

// export const controlModalWarn = (warningElement) => {
  
// };

export const controlBtn = (form) => {
  const input = form.title;
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      form.querySelectorAll('.btn').forEach(item => item.disabled = false);
    }
  });
  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      form.querySelectorAll('.btn').forEach(item => item.disabled = true);
    }
  });
};

export const formControl = (form, list, name) => {
  form.addEventListener('reset', () => {
    form.querySelectorAll('.btn').forEach(item => item.disabled = true);
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.title.value.trim() === '') return;
    const data = getStorage(name);
    const newItem = {
      id: randomId(),
      title: form.title.value,
      completed: false,
      important: form.select.value,
    };
    addItemList(newItem, data, name);
    addItemPage(newItem, list);
    renderNumber(list);
    form.reset();
    form.querySelectorAll('.btn').forEach(item => item.disabled = true);
  });
};


export const controlItem = (list, name) => {
  list.addEventListener('click', (event) => {
    const target = event.target;
    const item = target.closest('tr');
    const tdInput = item.querySelector('.task');
    const btn = item.querySelectorAll('.btn');
    if (target.classList.contains('btn-danger')) {
      if (confirm('Вы точно хотите удалить элемент?')) {
        removeItemStorage(name, item.id);
        item.remove();
        renderNumber(list);
      }
    }
    if (target.classList.contains('btn-success')) {
      const data = getStorage(name);
      item.classList.toggle('table-success');
      item.classList.toggle(`${data.find(elem => elem.id === item.id).important}`);
      item.querySelector('.task').classList.toggle('text-decoration-line-through');
      const itemCompleted = item.querySelector('.complete');
      itemCompleted.textContent === 'В процессе' ?
        itemCompleted.textContent = 'Выполнена' :
        itemCompleted.textContent = 'В процессе';
      successItemStorage(name, item.id);
    }
    if (target.classList.contains('btn-warning')) {
      btn.forEach(item => item.disabled = true);
      tdInput.innerHTML = `
      <div class="input-group">
        <input type="text" class="form-control edit" value=${tdInput.textContent}>
        <button class="input-group-text btn btn-primary">Принять</button>
      </div>
      `;
    }
    if (target.classList.contains('btn-primary')) {
      const inputEdit = tdInput.querySelector('.edit').value;
      if (inputEdit.trim() === '') return;
      tdInput.innerHTML = inputEdit;
      btn.forEach(item => item.disabled = false);
    }
  });
};
// `<div d-flex>
// <input value=${tdInput.textContent}>
// <button class="btn btn-success">Принять</button>
// </div>`

export const controlLogin = (app, modalLogin) => {
  const formLogin = modalLogin.querySelector('form');
  const inputLogin = formLogin.login;
  formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = inputLogin.value.trim();
    if (name === '') return;
    const {
      form,
      list,
    } = renderList(app, name);

    controlItem(list, name);
    formControl(form, list, name);
    controlBtn(form);
    renderItem(list, name);
    renderNumber(list);
    formLogin.reset();
    modalLogin.className = `modal fade d-none`;
  });
};
