import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  closeResult: string;
  students: Student[] = [];
  studentAddForm: FormGroup;
  dataLoaded = false;
  filterText = "";
  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.getOgrenciList();
      this.createStudentAddForm();
    })
  }
  getOgrenciList() {
    this.studentService.getStudens().subscribe(response => {
      this.students = response,
        this.dataLoaded = true;
    })

  }
  createStudentAddForm() {
    this.studentAddForm = this.formBuilder.group({
      AdiSoyadi: ["", Validators.required],
      Bolumu: ["", Validators.required],
      Hobileri: ["", Validators.required],
      SinifOgretmeni: ["", Validators.required],
      RehberOgretmeni: ["", Validators.required]

    })
  }
  add() {
    if (this.studentAddForm.valid) {
      let studentModel = Object.assign({}, this.studentAddForm.value)

      this.studentService.add(studentModel).subscribe(data => {
        console.log(data)
        this.toastrService.success("Öğrenci Eklendi")

      }, responseError => {
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
      this.createStudentAddForm()
      this.getOgrenciList()
    }
    else {
      this.toastrService.error("Öğrenci Eklenemedi")
    }


  }
  deleteStudent(student: Student) {
    this.studentService.delete(student).subscribe(data => {
      console.log(data)
      this.toastrService.success("Öğrenci Silindi")

    })
    this.createStudentAddForm()
    this.getOgrenciList()
  }
}

