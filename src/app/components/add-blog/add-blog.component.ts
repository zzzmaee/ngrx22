import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogModel } from '../../shared/store/blog/blog.model';
import { AppModel } from '../../shared/store/global/app.model';
import { addBlog, editBlog } from '../../shared/store/blog/blog.actions';
import { Store } from '@ngrx/store';
import { getBlogById } from '../../shared/store/blog/blog.selectors';

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.scss'
})
export class AddBlogComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<AddBlogComponent>);
  private fb = inject(FormBuilder);
  private store = inject(Store<AppModel>);
  pageTitle = '';
  editBlogId = 0;
  editData!: BlogModel;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.pageTitle = this.data.title;
    if (this.data.isEdit) {
      this.editBlogId = this.data.id;
      this.store.select(getBlogById(this.editBlogId)).subscribe(_data => {
        this.editData = _data;
        this.blogForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description
        });
      });
    }
  }

  blogForm = this.fb.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  closePopUp() {
    this.dialogRef.close();
  }

  saveBlogs() {
    if (this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      };
      if (this.data.isEdit) {
        _blogInput.id = this.blogForm.value.id as number;
        this.store.dispatch(editBlog({blogInput: _blogInput}));
      } else {
        this.store.dispatch(addBlog({blogInput: _blogInput}));
      }
      this.closePopUp();
    }
  }
}
