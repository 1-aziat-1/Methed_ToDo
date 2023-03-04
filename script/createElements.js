export const createHeader = (name) => {
  const title = document.createElement('h2');
  title.textContent = `Список дел - ${name}`;
  return title;
};

const createBtn = (listClasses, title, typeName = '') => {
  const btn = document.createElement('button');
  btn.className = listClasses;
  btn.textContent = title;
  btn.type = typeName;
  return btn;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.className = `d-flex align-items-center mb-3`;

  const label = document.createElement('label');
  label.className = `form-group me-3 mb-0`;

  const input = document.createElement('input');
  input.className = `form-control`;
  input.placeholder = 'ввести задачу';
  input.type = 'text';

  label.append(input);

  const btnReset = createBtn(`btn btn-warning`, 'Очистить', 'reset');
  const btnSubmit = createBtn(`btn btn-primary me-3`, 'Сохранить', 'submit');

  form.append(label, btnSubmit, btnReset);

  return {
    form,
    label,
    btnSubmit,
    btnReset,
  };
};

export const createWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.className = `table-wrapper`;
  return wrapper;
};

export const createTable = () => {
  const table = document.createElement('table');
  table.className = `table table-hover table-bordered`;

  const thead = document.createElement('thead');
  table.thead = thead;
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `);

  const tbody = document.createElement('tbody');
  table.tbody = tbody;


  table.append(thead, tbody);
  return table;
};

export const createRow = ({number, title, completed = 'В процессе'}) => {
  const tr = document.createElement('tr');
  tr.className = `table-light`;

  const tdNumber = document.createElement('td');
  tdNumber.textContent = number;

  const tdTitle = document.createElement('td');
  tdTitle.className = 'task';
  tdTitle.textContent = title;

  const tdCompleted = document.createElement('td');
  tdCompleted.textContent = completed;

  const tdBtnWrapper = document.createElement('td');

  const btnRemove = createBtn('btn btn-danger me-2', 'Удалить');
  const btnCompleted = createBtn('btn btn-success', 'Завершить');
  tdBtnWrapper.append(btnRemove, btnCompleted);

  tr.append(tdNumber, tdTitle, tdCompleted, tdBtnWrapper);
  return tr;
};
