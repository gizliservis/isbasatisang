import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEkleComponent } from './student-ekle.component';

describe('StudentEkleComponent', () => {
  let component: StudentEkleComponent;
  let fixture: ComponentFixture<StudentEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEkleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
