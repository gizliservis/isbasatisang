import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = "http://localhost/isbasatis.WebApi/api/Data/";
  
  constructor(private httpClient: HttpClient) { }


  getStudens(): Observable<Student[]> {
    let newPath = this.apiUrl + "OgrenciListele"
    return this.httpClient.get<Student[]>(newPath);
  }


  add(student: Student) {
    return this.httpClient.post(this.apiUrl + "StudentEkle", student)
  }



  delete(student: Student) {
    return this.httpClient.post(this.apiUrl + "StudentSil", student)
  }
}