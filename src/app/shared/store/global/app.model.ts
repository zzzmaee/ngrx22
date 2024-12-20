import { CounterModel } from '../counter/counter.model';
import { Blogs } from '../blog/blog.model';

export interface AppModel {
  counter: CounterModel,
  blog: Blogs
}
