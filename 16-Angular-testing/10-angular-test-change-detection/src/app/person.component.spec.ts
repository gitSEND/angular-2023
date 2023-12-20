import { ComponentFixture, TestBed, fakeAsync, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
  });

  it('should match H1 text', fakeAsync(() => {
    const h1 = fixture.debugElement.nativeElement.querySelector('h1');
    // fixture.detectChanges() is not needed.
    expect(component.title).toBe(h1.textContent);
  }));

  it('should match H1 old text', fakeAsync(() => {
    const h1 = fixture.debugElement.nativeElement.querySelector('h1');
    component.title = "Welcome";
    // Component property value is changed but h1 text is not changed.
    expect(component.title === h1.textContent).toBe(false);
  }));

  it('should match H1 text with detectChanges', fakeAsync(() => {
    const h1 = fixture.debugElement.nativeElement.querySelector('h1');
    fixture.detectChanges(); // detect changes explicitly.
    expect(component.title).toBe(h1.textContent);
  }));

});