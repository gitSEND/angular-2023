import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {
	saveComp(data: any) {
		const comp = JSON.stringify(data);
		console.log(comp);
	}
}