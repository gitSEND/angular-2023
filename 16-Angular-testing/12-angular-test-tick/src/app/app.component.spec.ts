import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of, throwError } from 'rxjs';
import { EmployeeService } from './employee.service';

describe('#AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let getEmpByIdSpy: any;
  const testEmp = { id: '101', name: 'Mohan' };

  beforeEach(async () => {
    const empServiceSpy = jasmine.createSpyObj('EmployeeService', ['getEmpById']);
    getEmpByIdSpy = empServiceSpy.getEmpById.and.returnValue(of(testEmp));

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: EmployeeService, useValue: empServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('test with setTimeout', fakeAsync(() => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 100);
    expect(flag).toBe(false);
    tick(100);
    expect(flag).toBe(true);
  }));

  it('test with nested setTimeout', fakeAsync(() => {
    let flag = false;
    function funWithNestedTimeout() {
      setTimeout(() => {
        flag = true;
      });
    };
    setTimeout(funWithNestedTimeout);
    tick();
    expect(flag).toBe(true);
  }));


  it('should display error when EmployeeService fails', fakeAsync(() => {
    getEmpByIdSpy.and.returnValue(throwError(() => new Error('EmployeeService test failure')));

    fixture.detectChanges(); // Initializes the component
    tick();  // flush the component's setTimeout()
    fixture.detectChanges(); // Updates the component

    const error = fixture.nativeElement.querySelector('.error');

    expect(error.textContent)
      .withContext('should display error')
      .toContain('EmployeeService test failure');

  }));

});
