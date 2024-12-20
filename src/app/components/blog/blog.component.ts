import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/blog/blog.model';
import { getBlog } from '../../shared/store/blog/blog.selectors';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { NgForOf } from '@angular/common';
import { AppModel } from '../../shared/store/global/app.model';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import * as BlogActions from '../../shared/store/blog/blog.actions';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    NgForOf,
    MatButton,
    MatIcon
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  private store = inject(Store<AppModel>);
  private dialog = inject(MatDialog);
  blogList!: BlogModel[];

  ngOnInit(): void {
    this.store.dispatch(BlogActions.loadBlog())
    this.store.select(getBlog).subscribe(item => {
      this.blogList = item;
      console.log(this.blogList);
    });
  }

  addBlog() {
    this.openPopUp(0, 'Add Blog', false);
  }

  openPopUp(id: number, title: string, isEdit: boolean) {
    this.dialog.open(AddBlogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit
      }
    });
  }

  editBlog(id: number) {
    this.openPopUp(id, 'Edit Blog', true);
    console.log(id);
  }

  deleteBlog(id: number) {
    if (confirm('Are you sure want to remove?')) {
      this.store.dispatch(BlogActions.deleteBlog({id: id}));
    }
  }
}
