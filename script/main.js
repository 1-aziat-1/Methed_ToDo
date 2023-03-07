import {controlBtn, controlItem, controlLogin, formControl} from './controlElements.js';
import { createModal } from './createElements.js';
import {renderItem, renderList, renderNumber} from './render.js';


const data = [];

{
  const init = (selectorApp) => {
    const app = document.querySelector(selectorApp);
    app.className = `app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column`;
    const modalLogin = createModal();
    app.append(modalLogin);
    controlLogin(app, modalLogin);
    // const {
    //   header,
    //   form,
    //   list,
    //   label,
    //   btnSubmit,
    //   btnReset,
    // } = renderList(app, name);

    // controlItem(list, name);
    // formControl(form, list, name);
    // controlBtn(form);
    // renderItem(list, name);
    // renderNumber(list);
  };

  window.todoListInit = init;
}

