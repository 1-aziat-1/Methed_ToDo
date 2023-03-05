import {createRow} from './createElements.js';
import randomId from './option.js';
import {getStorage, removeItemStorage, setStorage} from './serviceStorage.js';

export const addItemList = (newItem, data, name) => {
  data.push(newItem);
  setStorage(name, data);
};

export const addItemPage = (newItem, list) => {
  list.append(createRow(newItem));
};

export const formControl = (form, list, name) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = getStorage(name);
    const newItem = {
      id: randomId(),
      number: data.length + 1,
      title: form.title.value,
      completed: 'В процессе',
    };
    addItemList(newItem, data, name);
    addItemPage(newItem, list);
    form.reset();
  });
};

const removeItem = (name) => {

};

export const deleteItem = (list, name) => {
  list.addEventListener('click', (event) => {
    const target = event.target;
    const item = target.closest('.table-light');
    if (target.classList.contains('btn-danger')) {
      removeItemStorage(name, item.id);
      item.remove();
    }
    // removeItem(list, name);
    // if (target.classList.contains('btn-success')) successItem(list);
  });
};
