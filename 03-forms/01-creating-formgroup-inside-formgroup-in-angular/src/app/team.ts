import { Department } from "./department";
import { Employee } from "./employee";

export interface Team {
  teamName: string;
  noOfEmp: number;
  teamLead: Employee;
  department: Department;
}
