import {deleteItem, formControl} from './controlElements.js';
import {renderItem, renderList} from './render.js';


const data = [];

{
  const init = (selectorApp, name = 'Иван') => {
    const app = document.querySelector(selectorApp);
    app.className = `app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column`;
    const {
      header,
      form,
      list,
      label,
      btnSubmit,
      btnReset,
    } = renderList(app, name);

    deleteItem(list, name);
    formControl(form, list, name);
    renderItem(list, name);
  };

  window.todoListInit = init;
}

