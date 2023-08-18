import { Injectable } from '@angular/core';

import { Country } from '../country';

const COUNTRIES = [
	new Country(1, 'India', 'New Delhi', 'INR'),
	new Country(2, 'China', 'Beijing', 'RMB')
];
const countriesPromise = Promise.resolve(COUNTRIES);

@Injectable()
export class CountryService {
	getCountries() {
		return countriesPromise;
	}

	async getCountry(id: number) {
		const countries = await this.getCountries();
		return countries.find(country => country.countryId === id);
	}

	async updateCountry(country: Country) {
		const countries = await this.getCountries();
		let countryObj = countries.find(ob => ob.countryId === country.countryId);
		countryObj = country;
		return countryObj;
	}

	async addCountry(country: Country) {
		const countries = await this.getCountries();
		let maxIndex = countries.length - 1;
		let countryWithMaxIndex = countries[maxIndex];
		country.countryId = countryWithMaxIndex.countryId + 1;
		countries.push(country);
		return country;
	}
}