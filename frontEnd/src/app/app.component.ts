import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons } from '@cds/core/icon';
import {
  userIcon,
  boltIcon,
  sadFaceIcon,
  bugIcon,
  shieldIcon,
  homeIcon,
  certificateIcon
} from '@cds/core/icon';

ClarityIcons.addIcons(
  userIcon,
  boltIcon,
  sadFaceIcon,
  bugIcon,
  shieldIcon,
  homeIcon,
  certificateIcon
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  clrVerticalNavCollapsed: boolean = true;
  test = false;
}
