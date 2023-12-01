import { Component, ViewChild, Injector, ViewContainerRef, TemplateRef } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  @ViewChild('templateRef', { read: TemplateRef, static: true })
  templateRef!: TemplateRef<any>;

  allStudents = [
    { name: 'Mohit', age: 25 },
    { name: 'Krishn', age: 30 }
  ];

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef,
      { bookName: 'Ramayan', writer: 'Valmiki', $implicit: 'Prayag' },
      {
        index: 0,
        injector: Injector.create({
          providers: [{ provide: 'students', useValue: this.allStudents }]
        })
      });
  }
}
