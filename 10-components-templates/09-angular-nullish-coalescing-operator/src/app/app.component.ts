import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  valA = null;
  valB = undefined;
  valC = "";
  valD = "Varanasi";
  user = JSON.parse('{ "firstName": "Mohan" }');
  ngOnInit() {
    const outputA = this.valA ?? "Noida";
    const outputB = this.valB ?? "Delhi";
    const outputC = this.valC ?? "Prayagraj";
    const outputD = this.valD ?? "Aizawl";
    console.log(outputA); // Noida
    console.log(outputB); // Delhi
    console.log(outputC); // "" (empty string)
    console.log(outputD); // Varanasi

    console.log((this.valA && this.valD) ?? "Aizawl"); // Aizawl
    console.log((this.valA || this.valD) ?? "Aizawl"); // Varanasi

    console.log(this.user.firstName?.toUpperCase() ?? "NA"); // MOHAN
    console.log(this.user.lastName?.toUpperCase() ?? "NA"); // NA
  }
}
