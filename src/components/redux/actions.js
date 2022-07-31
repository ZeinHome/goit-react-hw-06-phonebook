import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contact/change_filter');
export const contactAdd = createAction('contact/add');
export const contactDelete = createAction('contact/delete');
