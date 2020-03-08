import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  schools;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.schoolService.getSchools().subscribe(data => this.schools = data);
  }

}
