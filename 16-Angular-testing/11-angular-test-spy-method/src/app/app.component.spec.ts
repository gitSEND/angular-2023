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

  it('should show employee name after component initialized', fakeAsync(() => {
    const empName = fixture.nativeElement.querySelector('.employee');
    fixture.detectChanges();

    expect(empName.textContent).toBe(testEmp.name);
    expect(getEmpByIdSpy.calls.any())
      .withContext('getEmpById called')
      .toBe(true);
  }));

  it('should display error when EmployeeService fails', fakeAsync(() => {
    getEmpByIdSpy.and.returnValue(throwError(() => new Error('EmployeeService test failure')));

    fixture.detectChanges(); // Initializes the component
    tick();  // flush the component's setTimeout()
    fixture.detectChanges(); // Updates the component

    const error = fixture.nativeElement.querySelector('.error');
    const empName = fixture.nativeElement.querySelector('.employee');

    expect(error.textContent)
      .withContext('should display error')
      .toContain('EmployeeService test failure');

    expect(empName.textContent)
      .withContext('should show no employee')
      .toBe('');
  }));

});
