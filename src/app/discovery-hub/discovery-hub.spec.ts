import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryHub } from './discovery-hub';

describe('DiscoveryHub', () => {
  let component: DiscoveryHub;
  let fixture: ComponentFixture<DiscoveryHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoveryHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveryHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
