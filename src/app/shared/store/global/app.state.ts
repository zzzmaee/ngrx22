import { counterReducer } from '../counter/counter.reducer';
import { blogReducer } from '../blog/blog.reducers';

export const AppState = {
  counter: counterReducer,
  blog: blogReducer
}
