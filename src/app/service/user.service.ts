import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

const baseUrl = `${environment.apiUrl}/users`;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
      return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(params: any) {
      return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
      return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
      return this.http.delete(`${baseUrl}/${id}`);
  }
}