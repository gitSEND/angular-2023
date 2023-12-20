import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonComponent2 } from './person.component-2';
import { ReactiveFormsModule } from '@angular/forms';

describe('PersonComponent2', () => {
  let component: PersonComponent2;
  let fixture: ComponentFixture<PersonComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PersonComponent2]
    });
    fixture = TestBed.createComponent(PersonComponent2);
    component = fixture.componentInstance;
  });

  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
    const ageInput: HTMLInputElement = hostElement.querySelector('#ageId');

    fixture.detectChanges();

    nameInput.value = 'Amit Shah';
    ageInput.value = '20';

    nameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));

    expect(component.personName.value).toBe('Amit Shah');
    expect(component.personAge.value.toString()).toBe('20');
  });

  it('should perform display binding in HTML template', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
    const ageInput: HTMLInputElement = hostElement.querySelector('#ageId');

    const displayName: HTMLInputElement = hostElement.querySelector('#disName');
    const displayAge: HTMLInputElement = hostElement.querySelector('#disAge');

    fixture.detectChanges();

    fixture.whenStable().then(val => {
      nameInput.value = 'Amit Shah';
      ageInput.value = '20';

      nameInput.dispatchEvent(new Event('input'));
      ageInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      expect(displayName.textContent).toBe('Amit Shah');
      expect(displayAge.textContent).toBe('20');
    });
  });
});
