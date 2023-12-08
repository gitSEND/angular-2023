import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

//Testing of EmployeeService
describe('EmployeeService', () => {
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

  describe('#getAllEmployees', () => {
    let expectedEmps: Employee[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedEmps = [
        { id: 101, name: 'Krishna' },
        { id: 102, name: 'Arjun' },
      ] as Employee[];
    });

    //Test case 1
    it('should return expected employees by calling once', () => {
      empService.getAllEmployees().subscribe(
        emps => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
        fail
      );

      const req = httpTestingController.expectOne(empService.empUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedEmps); //Return expectedEmps
    });

    //Test case 2
    it('should be OK returning no employee', () => {
      empService.getAllEmployees().subscribe(
        emps => expect(emps.length).toEqual(0, 'should have empty employee array'),
        fail
      );

      const req = httpTestingController.expectOne(empService.empUrl);
      req.flush([]); //Return empty data
    });

    //Test case 3
    it('should turn 404 error into an empty employee result', () => {
      empService.getAllEmployees().subscribe(
        emps => expect(emps.length).toEqual(0, 'should return empty employee array'),
        fail
      );

      const req = httpTestingController.expectOne(empService.empUrl);

      const msg = '404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' }); //Return error
    });

    //Test case 4
    it('should return expected employees when called multiple times', () => {
      empService.getAllEmployees().subscribe();
      empService.getAllEmployees().subscribe(
        emps => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
        fail
      );

      const requests = httpTestingController.match(empService.empUrl);
      expect(requests.length).toEqual(2, 'calls to getAllEmployees()');

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(expectedEmps); //Return expectedEmps in second call
    });
  });
});
