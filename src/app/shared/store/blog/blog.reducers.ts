import { createReducer, on } from '@ngrx/store';
import { BlogState } from './blog.state';
import * as BlogActions from './blog.actions';
import { BlogModel } from './blog.model';


export const _blogReducer = createReducer(
  BlogState,
  on(BlogActions.loadBlog, (state) => {
    return {
      ...state
    };
  }),

  on(BlogActions.loadBlogSuccess, (state, action) => {
    return {
      ...state,
      blogList: [...action.blogList],
      errorMessage: ''
    };
  }),

  on(BlogActions.loadBlogFail, (state, action) => {
    return {
      ...state,
      blogList: [],
      errorMessage: action.errorText
    };
  }),

  on(BlogActions.addBlog, (state, action) => {
    const _blog = {...action.blogInput};
    _blog.id = state.blogList.length + 1;
    return {
      ...state,
      blogList: [...state.blogList, _blog]
    };
  }),

  on(BlogActions.editBlog, (state, action) => {
    const _blog = {...action.blogInput};
    const editedBlog = state.blogList.map(blog => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      blogList: editedBlog
    };
  }),

  on(BlogActions.deleteBlog, (state, action) => {
    const deletedBlog = state.blogList.filter((data: BlogModel) => {
      return data.id !== action.id;
    });
    return {
      ...state,
      blogList: deletedBlog
    };
  }),
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
