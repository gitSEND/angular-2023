import { ComponentFixture, TestBed, fakeAsync, waitForAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should tell ROUTER to navigate when button clicked', fakeAsync(() => {
    let router = fixture.debugElement.injector.get(Router);
    let buttonElements = fixture.debugElement.query(By.css('.detail-button'));
    buttonElements.triggerEventHandler('click', null);
    tick();
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    const id = 101;
    expect(navArgs).withContext('should nav to ViewDetailComponent for book detail')
      .toBe('/view-detail/' + id);
  }));

});
