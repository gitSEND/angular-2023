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

  //Test case for GET
  it('should return expected employees by calling once', () => {
    const expectedEmps = [
      { name: 'Krishna', age: 101 },
      { name: 'Arjun', age: 102 }
    ] as Employee[];

    empService.getAllEmployees().subscribe({
      next: emps => expect(emps).toEqual(expectedEmps),
      error: fail
    });

    const req = httpTestingController.expectOne(empService.empUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedEmps); //Return expectedEmps
  });

  //Test case for POST
  it('should add an employee and return it', () => {
    const newEmp: Employee = { name: 'Mahesh', age: 25 };

    empService.addEmployee(newEmp).subscribe({
      next: data => expect(data).toEqual(newEmp),
      error: fail
    });

    // addEmploye should have made one request to POST employee
    const req = httpTestingController.expectOne(empService.empUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newEmp);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newEmp });
    req.event(expectedResponse);
  });

});
