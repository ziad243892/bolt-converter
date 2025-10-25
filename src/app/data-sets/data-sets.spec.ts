import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSets } from './data-sets';

describe('DataSets', () => {
  let component: DataSets;
  let fixture: ComponentFixture<DataSets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
