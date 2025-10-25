import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface NavigationItem {
  label: string;
  active: boolean;
}

interface HeroFeature {
  icon: string;
  text: string;
}

interface Category {
  name: string;
  icon: string;
  count: number;
  expanded: boolean;
  children: { name: string }[];
}

interface Dataset {
  name: string;
  category: string;
  lastUpdated: string;
  infoIcon: string;
  tableIcon: string;
}

@Component({
  selector: 'app-search-page',
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule],
  standalone: true,
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage {
    navigationItems = signal<NavigationItem[]>([
    { label: 'Home', active: true },
    { label: 'Datasets', active: false },
    { label: 'MyQueries', active: false },
    { label: 'AI Assistant', active: false },
    { label: 'Help', active: false },
  ]);

  heroFeatures = signal<HeroFeature[]>([
    {
      icon: '/icon-1.svg',
      text: 'Search by keyword, topic, or dataset title.',
    },
    {
      icon: '/elements.png',
      text: 'Use the category tree to explore data by theme.',
    },
    {
      icon: '/icon-5.svg',
      text: 'Click on the dataset for metadata or to start building your report.',
    },
  ]);

  categories = signal<Category[]>([
    {
      name: 'Population Statistics',
      icon: '/elements-9.png',
      count: 2,
      expanded: false,
      children: [],
    },
    {
      name: 'Labor Market',
      icon: '/briefcase-04.svg',
      count: 3,
      expanded: true,
      children: [
        { name: 'Employed Persons' },
        { name: 'Unemployed Persons' },
        { name: 'Unemployment Rate' },
      ],
    },
    {
      name: 'Economy',
      icon: '/chart-line-data-02.svg',
      count: 9,
      expanded: false,
      children: [],
    },
    {
      name: 'Education',
      icon: '/icon.svg',
      count: 2,
      expanded: false,
      children: [],
    },
    {
      name: 'Health',
      icon: '/icon-3.svg',
      count: 4,
      expanded: false,
      children: [],
    },
  ]);

  datasets = signal<Dataset[]>([
    {
      name: 'Consumer Price Index',
      category: 'Economy',
      lastUpdated: 'Aug 15, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-1.png',
    },
    {
      name: 'Education Statistics',
      category: 'Education',
      lastUpdated: 'Aug 10, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-2.png',
    },
    {
      name: 'Health Services Survey',
      category: 'Health',
      lastUpdated: 'Aug 5, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-3.png',
    },
    {
      name: 'Foreign Trade Statistics',
      category: 'Economy',
      lastUpdated: 'Aug 1, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-4.png',
    },
    {
      name: 'Consumer Price Index',
      category: 'Economy',
      lastUpdated: 'Aug 15, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-5.png',
    },
    {
      name: 'Education Statistics',
      category: 'Education',
      lastUpdated: 'Aug 10, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-6.png',
    },
    {
      name: 'Health Services Survey',
      category: 'Health',
      lastUpdated: 'Aug 5, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-7.png',
    },
    {
      name: 'Foreign Trade Statistics',
      category: 'Economy',
      lastUpdated: 'Aug 1, 2023',
      infoIcon: '/icon-6.svg',
      tableIcon: '/elements-8.png',
    },
  ]);

  searchQuery = signal('');
  categoriesSearchQuery = signal('');

  toggleCategory(categoryName: string) {
    this.categories.update(cats =>
      cats.map(cat =>
        cat.name === categoryName
          ? { ...cat, expanded: !cat.expanded }
          : cat
      )
    );
  }

  isExpanded(categoryName: string): boolean {
    return this.categories().find(cat => cat.name === categoryName)?.expanded || false;
  }
}
