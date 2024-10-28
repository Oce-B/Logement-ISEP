import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenListingsComponent } from './hidden-listings.component';

describe('HiddenListingsComponent', () => {
  let component: HiddenListingsComponent;
  let fixture: ComponentFixture<HiddenListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenListingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiddenListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
