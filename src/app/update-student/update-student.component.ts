import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number;
  student: Student;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: StudentService) { }

  ngOnInit() {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  updateStudent() {
    this.employeeService.updateStudent(this.id, this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }

  onSubmit() {
    this.updateStudent();    
    this.submitted =true;
  }

  gotoList() {
    this.router.navigate(['/students']);
  }


}
