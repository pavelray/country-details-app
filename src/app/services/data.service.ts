import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string , private http : Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(response=> response.json())
    .catch(this.handelError);
  }

  getDetails(url: string){
    return this.http.get(url)
    .map(response=> response.json())
    .catch(this.handelError);
  }

  create(resource){
      return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handelError);
  }

  update(resourse){
    return this.http.put(this.url, JSON.stringify(resourse))
    .map(response => response.json())
    .catch(this.handelError);
  }

  delete(id){
    return this.http.delete(this.url+'/'+id)
    .map(response=> response.json())
    .catch(this.handelError);
  }

  private handelError(error : Response)
  {
    if(error.status === 400)
      return Observable.throw(new BadInput());

    if(error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError());
  }
}
