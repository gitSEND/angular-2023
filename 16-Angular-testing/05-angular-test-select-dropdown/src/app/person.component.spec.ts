import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PersonComponent]
    });
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
  });

  it('should bind the configured value', async(() => {
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-profile')).nativeElement;
    let p = fixture.debugElement.nativeElement.querySelector('p');
    fixture.detectChanges();
    component.selectedProfile = new FormControl(component.profiles[1]);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Manager');
      expect(p.textContent).toBe('Manager');
    });
  }));

  it('should change the value on selection change', async(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-city')).nativeElement;
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Tawang');
    });
  }));

  it('should execute the component method on change', fakeAsync(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-city')).nativeElement;
    spyOn(component, 'onCityChange');
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    tick();
    expect(component.onCityChange).toHaveBeenCalled();
  }));  
});