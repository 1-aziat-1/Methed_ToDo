import * as create from './createElements.js';
import {getStorage} from './serviceStorage.js';

export const renderList = (app, title) => {
  const header = create.createHeader(title);
  const {
    form,
    label,
    btnSubmit,
    btnReset,
  } = create.createForm();
  const wrapper = create.createWrapper();
  const table = create.createTable();

  wrapper.append(table);
  app.append(header, form, wrapper);
  return {
    header,
    form,
    list: table.tbody,
    label,
    btnSubmit,
    btnReset,
  };
};

export const renderItem = (elem, name) => {
  const data = getStorage(name);
  const allItem = data.map(create.createRow);
  elem.append(...allItem);
  return allItem;
};
