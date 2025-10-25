import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPage } from './search-page/search-page';
import { DiscoveryHub } from './discovery-hub/discovery-hub';
import { DataSets } from './data-sets/data-sets';
import { Chats } from './chats/chats';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchPage, DiscoveryHub, DataSets, Chats],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {}