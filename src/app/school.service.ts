import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(private http: HttpClient) {}

  schoolUrl = 'http://localhost:8080/api/school';

  getSchools() {
    return this.http.get(this.schoolUrl + '/');
  }

  getSchoolById(id) {
    return this.http.get(this.schoolUrl + '/' + id);
  }

  deleteSchool(id) {
    return this.http.delete(this.schoolUrl + '/' + id);
  }

  updateSchool(school) {
    return this.http.put(this.schoolUrl + '/' + school.id, school);
  }

  createSchool(school) {
    return this.http.post(this.schoolUrl, school);
  }
}
