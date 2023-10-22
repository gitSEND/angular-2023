import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NumberComponent } from './number.component';
import { StopwatchComponent } from './stopwatch.component';
import { CpColorDirective } from './cpcolor.directive';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.component.html'
})
export class UIElementComponent implements AfterViewInit {
  @ViewChild(NumberComponent)
  private numberComponent = {} as NumberComponent;
  @ViewChild(StopwatchComponent)
  private stopwatchComponent = {} as StopwatchComponent;
  @ViewChild(CpColorDirective)
  private cpColorDirective = {} as CpColorDirective;
  @ViewChild('title')
  private elTitle = {} as ElementRef;

  ngAfterViewInit() {
    this.elTitle.nativeElement.style.backgroundColor = 'cyan';
    this.elTitle.nativeElement.style.color = 'red';
  }
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }
  startStopwatch() {
    this.stopwatchComponent.start();
  }
  stopStopwatch() {
    this.stopwatchComponent.stop();
  }
  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }
}
