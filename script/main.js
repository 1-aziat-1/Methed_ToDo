import {renderItem, renderList} from './render.js';


const data = [
  {
    id: '3131',
    number: 1,
    title: 'Помыть посуду',
    completed: 'В процессе',
  },
  {
    id: '3131',
    number: 2,
    title: 'Помыть полы',
    completed: 'В процессе',
  },
  {
    id: '3131',
    number: 3,
    title: 'Съесть грушу',
    completed: 'В процессе',
  },
];

{
  const init = (selectorApp, name = 'Иван') => {
    const app = document.querySelector(selectorApp);
    app.className = `app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column`;
    const {
      header,
      list,
    } = renderList(app, name);
    console.log(list);

    renderItem(list, data);
  };

  window.todoListInit = init;
}

