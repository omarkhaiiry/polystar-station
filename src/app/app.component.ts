import { Component } from '@angular/core';
import { TramComponent } from './tram/tram.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'station';

  reload() {}
}
