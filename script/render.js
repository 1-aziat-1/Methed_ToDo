import * as create from './createElements.js';

export const renderList = (app, title) => {
  const header = create.createHeader(title);
  const {form} = create.createForm();
  const wrapper = create.createWrapper();
  const table = create.createTable();
  
  wrapper.append(table);
  app.append(header, form, wrapper);
  return {
    header,
    form,
    list: table.tbody,
  };
};

export const renderItem = (elem, data) => {
  const allItem = data.map(create.createRow);
  console.log(allItem);
  elem.append(...allItem);
  return allItem;
};
