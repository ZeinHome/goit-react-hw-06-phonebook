import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contact/change_filter');
const contactAdd = createAction('contact/add');
const contactDelete = createAction('contact/delete');

export default { changeFilter, contactAdd, contactDelete };
