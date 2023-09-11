import {Component} from '@angular/core';

// AoT requires an exported function for factories

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.scss']
})
export class AppComponent {
  title = 'app-vite';
}
