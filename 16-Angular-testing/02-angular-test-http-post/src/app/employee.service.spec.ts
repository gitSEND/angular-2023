import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

//Testing of EmployeeService
describe('#EmployeeService.addEmploye()', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let empService: EmployeeService;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EmployeeService
      ]
    });

    //Instantiates HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    empService = TestBed.inject(EmployeeService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  //Test case 1
  it('should add an employee and return it', () => {
    const newEmp: Employee = { name: 'Mahesh', age: 25 };

    empService.addEmployee(newEmp).subscribe(
      data => expect(data).toEqual(newEmp, 'should return the employee'),
      fail
    );

    // addEmploye should have made one request to POST employee
    const req = httpTestingController.expectOne(empService.empUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newEmp);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newEmp });
    req.event(expectedResponse);
  });

  //Test case 2
  it('should turn 404 error into return of the requested employee', () => {
    const newEmp: Employee = { name: 'Mahesh', age: 25 };

    empService.addEmployee(newEmp).subscribe(
      data => expect(data).toEqual(newEmp, 'should return the employee'),
      fail
    );

    const req = httpTestingController.expectOne(empService.empUrl);

    // respond with a 404 and the error message in the body
    const msg = '404 error';
    req.flush(msg, { status: 404, statusText: 'Not Found' });
  });
});
