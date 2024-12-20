import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from './store/blog/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private http = inject(HttpClient);

  constructor() {
  }

  getAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>('http://localhost:3000/Blogs');
  }

}
