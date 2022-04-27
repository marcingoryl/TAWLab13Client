import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id:string){
    return this.http.get(this.url+'/api/posts/'+id);
  }

  createPost(credentials: any){
    console.log(credentials)
    return this.http.post(this.url + '/createPost', credentials);
  }
}
