import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonwloadsComponent } from './donwloads.component';

describe('DonwloadsComponent', () => {
  let component: DonwloadsComponent;
  let fixture: ComponentFixture<DonwloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonwloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonwloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
