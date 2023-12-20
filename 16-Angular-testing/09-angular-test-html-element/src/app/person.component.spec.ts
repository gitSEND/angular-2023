import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
  });

  it('should match H1 text', fakeAsync(() => {
    const h1 = fixture.debugElement.nativeElement.querySelector('h1');
    fixture.detectChanges();
    expect(component.message).toBe(h1.textContent);
  }));

  it('should match ul children number and its text', fakeAsync(() => {
    const ul = fixture.debugElement.query(By.css('.nameList'));
    fixture.detectChanges();
    const noOfChildren = 3;
    console.log(ul.childNodes[0].nativeNode.textContent);
    expect(ul.children.length).toEqual(noOfChildren);

    const name = "Mahesh";
    expect(ul.childNodes[0].nativeNode.textContent).toBe(name);
  }));

});
