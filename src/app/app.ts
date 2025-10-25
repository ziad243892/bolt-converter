import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPage } from './search-page/search-page';
import { DiscoveryHub } from './discovery-hub/discovery-hub';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchPage, DiscoveryHub],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bolt-converter');
}
