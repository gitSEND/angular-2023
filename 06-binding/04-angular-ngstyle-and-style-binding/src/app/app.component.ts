import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  result = 50;
  colorFlag = false;
  isSmall = true;
  isBackgroundRed = false;
  small = 10;
  big = 15;
  num = 10;

  isRed(num: number) {
    if (num > 10) {
      return false;
    } else {
      return true;
    }
  }

  allRequiredStyles(styleSet: string) {
    let myStyles;
    if (styleSet == 'one') {
      myStyles = {
        'color': this.colorFlag ? 'black' : 'yellow',
        'font-size.em': this.isSmall ? this.small / 5 : this.big / 5,
        'background-image': !this.isBackgroundRed ? 'url(\'/assets/images/red.gif\')' : 'url(\'/assets/images/green.gif\')'
      };
    } else if (styleSet == 'two') {
      myStyles = {
        'color': !this.colorFlag ? 'black' : 'yellow',
        'font-size.em': !this.isSmall ? this.small / 5 : this.big / 5,
        'background-image': this.isBackgroundRed ? 'url(\'/assets/images/red.gif\')' : 'url(\'/assets/images/green.gif\')'
      };
    } else {
      myStyles = {
        'background-color': this.colorFlag ? 'cyan' : 'grey',
        'font-size.%': !this.isSmall ? this.small * 10 : this.big * 10
      };
    }
    return myStyles;
  }
}
