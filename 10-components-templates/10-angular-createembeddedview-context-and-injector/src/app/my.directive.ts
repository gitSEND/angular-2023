import { Directive, ViewContainerRef, TemplateRef, Injector } from "@angular/core";

@Directive({
  selector: '[myDir]'
})
export class MyDirective {

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  allStudents = [
    { name: 'Jai', age: 30 },
    { name: 'Arjun', age: 35 }
  ];

  ngOnInit() {
    this.vcRef.createEmbeddedView(this.templateRef, {}, {
      injector: Injector.create({
        providers: [{ provide: 'students', useValue: this.allStudents }]
      })
    })
  }
}
