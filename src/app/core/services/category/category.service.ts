import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpService: HttpService
  ) { }

  // -------------------------------------NEW METHODS
  public getAllCategorys2(): Observable<Category[]> {
    return this.httpService.get<Category[]>('/category/all');
  }
  public getCategory2(id: string): Observable<Category>{
    return this.httpService.get<Category>(`/category/${id}`);
  }
  public postCategory2(category: Category): Observable<Category>{
    return this.httpService.post<Category>('/category/', category);
  }
  public updateCategory2(categoryId: string, category: Partial<Category>): Observable<Category>{
    return this.httpService.patch<Category>(`/category/${categoryId}`, category);
  }
  public deleteCategory2(categoryId: string): Observable<Category>{
    return this.httpService.delete<Category>(`/category/${categoryId}`);
  }
}
