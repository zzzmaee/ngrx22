import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';


export const loadBlog = createAction('Load Blog');
export const loadBlogSuccess = createAction('[Blog Page] Load Blog Success', props<{ blogList: BlogModel[] }>());
export const loadBlogFail = createAction('[Blog Page] Load Blog Fail', props<{ errorText: string }>());

export const addBlog = createAction('Add Blog', props<{ blogInput: BlogModel }>());
export const editBlog = createAction('Edit Blog', props<{ blogInput: BlogModel }>());
export const deleteBlog = createAction('Delete Blog', props<{ id: number }>());
