import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Observable<Student[]>;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentsList();


  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);// data icinde true false var serverdan dönen
          this.reloadData();
        },
        error => console.log(error));
  }

  updateStudent(id: number) {
    this.router.navigate(['update', id]);

  }
  studentDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
