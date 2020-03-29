import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8000/student';

  constructor(private http: HttpClient) { }


  getStudent(id): Observable<any> {
    return this.http.get(this.baseUrl+'/'+id);
  }

  getStudentsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(this.baseUrl, student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl+'/'+id, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/'+id, { responseType: 'text' });
  }


}
