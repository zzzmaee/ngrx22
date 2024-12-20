import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import * as BlogActions from './blog.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class BlogEffects {
  private action$ = inject(Actions);
  private service = inject(MasterService);

  _blog = createEffect(() =>
    this.action$.pipe(
      ofType(BlogActions.loadBlog),
      exhaustMap((action) => {
        return this.service.getAllBlogs().pipe(
          map((data) => {
            return BlogActions.loadBlogSuccess({blogList: data});
          }),
          catchError((error)=> of(BlogActions.loadBlogFail({error: error.message})))
        );
      })
    )
  );
}
